/**
 * API-driven solution for adding words to the Jaccuse database
 * This can be used by LLMs or other automated systems to add word pairs
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js';

// Hash function for generating composite keys
function hash(string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(string);
    return crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    });
}

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCktvSZnWLnUwNhUw06sn7FWlZmyxYJE6k",
    authDomain: "jaccuse--database.firebaseapp.com",
    projectId: "jaccuse--database",
    storageBucket: "jaccuse--database.appspot.com",
    messagingSenderId: "13135183427",
    appId: "1:13135183427:web:e26bcb6272cf2e88dddef6",
    measurementId: "G-WGTKD1F0MT",
    databaseURL: "https://jaccuse--database-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const jaccuseWordsRef = ref(db, 'jaccuse_words');

/**
 * Add a new word pair to the Jaccuse database
 * @param {string} word1 - First word of the pair
 * @param {string} word2 - Second word of the pair  
 * @param {string} author - Author/creator of the word pair
 * @param {string[]} tags - Array of tags for categorization
 * @returns {Promise<{success: boolean, message: string, key?: string}>}
 */
async function addJaccuseWordPair(word1, word2, author, tags = []) {
    try {
        // Validate inputs
        if (!word1 || !word2 || !author) {
            return {
                success: false,
                message: "Missing required parameters: word1, word2, and author are required"
            };
        }

        // Clean and validate inputs
        word1 = word1.trim();
        word2 = word2.trim();
        author = author.trim();
        
        if (word1.length === 0 || word2.length === 0 || author.length === 0) {
            return {
                success: false,
                message: "word1, word2, and author cannot be empty strings"
            };
        }

        // Ensure tags is an array
        if (!Array.isArray(tags)) {
            tags = [];
        }

        // Sort words alphabetically for consistent key generation
        const words = [word1, word2].sort();
        const concatenatedWords = words.join('');
        const compositeKey = await hash(concatenatedWords);
        const creationTime = Math.floor(Date.now() / 3600000) * 3600000; // Round to nearest hour

        // Check if word pair already exists
        const existingWordRef = ref(db, `jaccuse_words/${compositeKey}`);
        const snapshot = await get(existingWordRef);
        
        if (snapshot.exists()) {
            return {
                success: false,
                message: "Word pair already exists in database",
                key: compositeKey
            };
        }

        // Create new word pair object
        const newJaccuseWord = {
            word1: words[0], // Use sorted order
            word2: words[1], // Use sorted order
            author: author,
            tags: tags,
            played_users: [],
            n_plays: 0,
            n_upvote: 0,
            creationTime: creationTime
        };

        // Add to database
        await set(existingWordRef, newJaccuseWord);
        
        return {
            success: true,
            message: "Word pair added successfully",
            key: compositeKey
        };

    } catch (error) {
        console.error('Error adding word pair:', error);
        return {
            success: false,
            message: `Error adding word pair: ${error.message}`
        };
    }
}

/**
 * Add multiple word pairs in batch
 * @param {Array<{word1: string, word2: string, author: string, tags?: string[]}>} wordPairs
 * @returns {Promise<{success: boolean, results: Array, summary: object}>}
 */
async function addMultipleWordPairs(wordPairs) {
    const results = [];
    let successCount = 0;
    let failureCount = 0;
    let duplicateCount = 0;

    for (const pair of wordPairs) {
        const result = await addJaccuseWordPair(
            pair.word1, 
            pair.word2, 
            pair.author, 
            pair.tags || []
        );
        
        results.push({
            word1: pair.word1,
            word2: pair.word2,
            ...result
        });

        if (result.success) {
            successCount++;
        } else if (result.message.includes("already exists")) {
            duplicateCount++;
        } else {
            failureCount++;
        }
    }

    return {
        success: successCount > 0,
        results: results,
        summary: {
            total: wordPairs.length,
            successful: successCount,
            failed: failureCount,
            duplicates: duplicateCount
        }
    };
}

/**
 * Validate a word pair before adding
 * @param {string} word1 
 * @param {string} word2 
 * @param {string} author 
 * @param {string[]} tags 
 * @returns {boolean}
 */
function validateWordPair(word1, word2, author, tags = []) {
    if (!word1 || !word2 || !author) return false;
    if (typeof word1 !== 'string' || typeof word2 !== 'string' || typeof author !== 'string') return false;
    if (word1.trim().length === 0 || word2.trim().length === 0 || author.trim().length === 0) return false;
    if (!Array.isArray(tags)) return false;
    return true;
}

// Export functions for use
export { 
    addJaccuseWordPair,
    addMultipleWordPairs, 
    validateWordPair 
};

// For Node.js environments or direct script usage
if (typeof window === 'undefined') {
    global.addJaccuseWordPair = addJaccuseWordPair;
    global.addMultipleWordPairs = addMultipleWordPairs;
    global.validateWordPair = validateWordPair;
}
