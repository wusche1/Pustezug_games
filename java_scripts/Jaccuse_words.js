import { loadJaccuseWords, addJaccuseWord } from './databank.js';

let wordsData = [];
let filteredWordsData = [];
let tags = [];

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Content Loaded");
    
    // Browse functionality
    const wordsList = document.getElementById('words-list');
    const sortViewsButton = document.getElementById('sort-views');
    const sortUpvotesButton = document.getElementById('sort-upvotes');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const sortNewestButton = document.getElementById('sort-newest');

    if (wordsList) {
        console.log("Attempting to load Jaccuse words");
        loadJaccuseWords().then(words => {
            console.log("Words loaded:", words);
            wordsData = Object.entries(words).map(([key, word]) => ({key, ...word}));
            filteredWordsData = [...wordsData];
            renderTable(filteredWordsData);
            
            if (sortViewsButton) {
                sortViewsButton.addEventListener('click', () => {
                    filteredWordsData.sort((a, b) => b.n_plays - a.n_plays);
                    renderTable(filteredWordsData);
                });
            }
            
            if (sortUpvotesButton) {
                sortUpvotesButton.addEventListener('click', () => {
                    filteredWordsData.sort((a, b) => b.n_upvote - a.n_upvote);
                    renderTable(filteredWordsData);
                });
            }

            if (searchButton) {
                searchButton.addEventListener('click', performSearch);
            }
            
            if (searchInput) {
                searchInput.addEventListener('keyup', function(event) {
                    if (event.key === 'Enter') {
                        performSearch();
                    }
                });
            }
            
            if (sortNewestButton) {
                sortNewestButton.addEventListener('click', () => {
                    filteredWordsData.sort((a, b) => b.creationTime - a.creationTime);
                    renderTable(filteredWordsData);
                });
            }
        }).catch(error => {
            console.error("Error loading Jaccuse words:", error);
            wordsList.innerHTML = '<p style="text-align: center; color: var(--color-text-muted);">Error loading words. Please try again later.</p>';
        });
    }

    // Suggest functionality
    setupSuggestForm();
});

function performSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    filteredWordsData = wordsData.filter(word => 
        word.author.toLowerCase().includes(searchTerm) || 
        word.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    renderTable(filteredWordsData);
}

function renderTable(data) {
    const wordsList = document.getElementById('words-list');
    if (!wordsList) return;
    
    let html = '<table class="words-table">';
    html += `
        <thead>
            <tr>
                <th>Author</th>
                <th>Views</th>
                <th>Upvotes</th>
                <th>Tags</th>
                <th>Created</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    `;
    for (const word of data) {
        const creationTime = word.creationTime ? new Date(word.creationTime).toLocaleDateString() : 'Unknown';
        html += `
            <tr>
                <td>${word.author}</td>
                <td>${word.n_plays}</td>
                <td>${word.n_upvote}</td>
                <td>${word.tags.join(', ')}</td>
                <td>${creationTime}</td>
                <td><button class="play-button" data-key="${word.key}">Play</button></td>
            </tr>
        `;
    }
    html += '</tbody></table>';
    wordsList.innerHTML = html;

    // Add event listener for play buttons
    wordsList.addEventListener('click', function(event) {
        if (event.target.classList.contains('play-button')) {
            const key = event.target.getAttribute('data-key');
            redirectToPlay(key);
        }
    });
}

function redirectToPlay(key) {
    localStorage.setItem('playKey', key);
    window.location.href = 'Jaccuse_play.html';
}

// Suggest form functionality
function setupSuggestForm() {
    const suggestButton = document.getElementById('suggest-button');
    const tagInput = document.getElementById('tag-input');
    
    if (suggestButton) {
        suggestButton.addEventListener('click', handleSuggestion);
    }
    
    if (tagInput) {
        tagInput.addEventListener('keypress', handleTagInput);
    }
}

function handleTagInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const tagInput = event.target;
        const tag = tagInput.value.trim();
        if (tag && !tags.includes(tag)) {
            tags.push(tag);
            updateTagList();
            tagInput.value = '';
        }
    }
}

function handleSuggestion(event) {
    event.preventDefault();
    const word1 = document.getElementById('word1').value.trim();
    const word2 = document.getElementById('word2').value.trim();
    const nameInput = document.getElementById('name');
    const statusElement = document.getElementById('suggestion-status');
    
    let author;
    if (localStorage.getItem('isLoggedIn') === 'true') {
        author = localStorage.getItem('userName');
    } else {
        author = nameInput ? nameInput.value.trim() : '';
    }

    if (!word1 || !word2) {
        statusElement.textContent = 'Please enter both words.';
        statusElement.style.color = '#ff6b6b';
        return;
    }
    
    if (!author) {
        statusElement.textContent = 'Please enter your name.';
        statusElement.style.color = '#ff6b6b';
        return;
    }

    try {
        const tagType = localStorage.getItem('isLoggedIn') === 'true' ? 'user_suggested' : 'guest_suggested';
        addJaccuseWord(word1, word2, author, [tagType, ...tags]);
        statusElement.textContent = 'Words suggested successfully!';
        statusElement.style.color = '#6b9ab3';
        document.getElementById('word1').value = '';
        document.getElementById('word2').value = '';
        if (nameInput) nameInput.value = '';
        tags = [];
        updateTagList();
    } catch (error) {
        statusElement.textContent = 'Error suggesting words. Please try again.';
        statusElement.style.color = '#ff6b6b';
        console.error('Error suggesting words:', error);
    }
}

function updateTagList() {
    const tagList = document.getElementById('tag-list');
    if (!tagList) return;
    
    tagList.innerHTML = '';
    tags.forEach((tag, index) => {
        const li = document.createElement('li');
        li.textContent = tag;
        const removeButton = document.createElement('button');
        removeButton.textContent = '×';
        removeButton.onclick = () => removeTag(index);
        li.appendChild(removeButton);
        tagList.appendChild(li);
    });
}

function removeTag(index) {
    tags.splice(index, 1);
    updateTagList();
}
