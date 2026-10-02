import { loadJaccuseWords, addJaccuseWord, incrementPlays, incrementUpvote, incrementDownvote, addPlayedUser } from './databank.js';

// Initialize variables
var player_number = 0;
var player_minority = 0;
var canvas;
var ctx;
var topic_list = [];
var phase = "start";


var min_word = "";
var maj_word = "";

let var_minority_id = [];
let var_condemmed_id = [];
var set_key = null;
var current_word_key = null;


function getUniqueTags(jaccuseWords) {
    const tags = Object.values(jaccuseWords).reduce((acc, word) => {
      return [...acc, ...word.tags];
    }, []);
    const uniqueTags = [...new Set(tags)];
    return uniqueTags;
  }

  export async function main() {
    const jaccuseWords = await loadJaccuseWords();
    const urlParams = new URLSearchParams(window.location.search);
    set_key = localStorage.getItem('playKey');
    localStorage.removeItem('playKey');
    if (set_key === '') {
      set_key = null;  // or however you want to handle no key being present
  }
    console.log("set_key:", set_key);

    topic_list = getUniqueTags(jaccuseWords);
    console.log(topic_list);
    initializeButtons(jaccuseWords); // Create buttons on page load
  }

// Function to initialize buttons without color
function initializeButtons(jaccuseWords) {
    var buttonContainer = document.getElementById('buttonContainer');
    var topicSelection = document.getElementById('topic-selection');

    if (set_key != null) {
      topicSelection.style.display = 'none';
    }

    buttonContainer.innerHTML = ''; // Clear previous buttons

    
    for (let i = 0; i < topic_list.length; i++) {
        let topic = topic_list[i];
        let button = document.createElement('button');
        button.textContent = topic;
        button.id = 'topic-button-' + i; // Assign a unique ID

        button.addEventListener('click', function() {
            toggleFileSelection(topic);
        });
        buttonContainer.appendChild(button);
    }

    var start_options = document.getElementById('start_options');
    
    // Create player count container
    let playerCountContainer = document.createElement('div');
    playerCountContainer.className = 'player-count-container';
    
    let playerLabel = document.createElement('span');
    playerLabel.className = 'player-count-label';
    playerLabel.textContent = 'Players';
    
    let player_number_input = document.createElement('input');
    player_number_input.type = 'number';
    player_number_input.id = 'player_number_input';
    player_number_input.value = 5;
    player_number_input.min = 5;
    player_number_input.max = 15;
    player_number_input.step = 1;
    
    playerCountContainer.appendChild(playerLabel);
    playerCountContainer.appendChild(player_number_input);
    start_options.appendChild(playerCountContainer);

    let start_button = document.createElement('button');
    start_button.textContent = 'Start Game';
    start_button.id = 'start_button';
    start_button.addEventListener('click', function() {
        startGame(player_number_input.value, jaccuseWords);
    });
    start_options.appendChild(start_button);
}

// Function to update button colors

let MustHaveTopics = [];
let ForbiddenTopics = [];
let buttonStates = {};
function toggleFileSelection(topic) {
    var indexInTopicList = topic_list.indexOf(topic); // Get the index of the topic in the original list
    var button = document.getElementById('topic-button-' + indexInTopicList); // Access the button by its original list index
  
    if (!buttonStates[topic]) {
      buttonStates[topic] = 0; // Initialize button state to 0 (grey)
    }
  
    buttonStates[topic] = (buttonStates[topic] + 1) % 3; // Cycle through states (0, 1, 2)
  
    switch (buttonStates[topic]) {
      case 0:
        button.style.backgroundColor = '';
        if (ForbiddenTopics.includes(topic)) {
          ForbiddenTopics.splice(ForbiddenTopics.indexOf(topic), 1);
        }
        break;
      case 1:
        button.style.backgroundColor = '#3f8f5f';
        MustHaveTopics.push(topic);
        break;
      case 2:
        button.style.backgroundColor = '#b4532a';
        ForbiddenTopics.push(topic);
        MustHaveTopics.splice(MustHaveTopics.indexOf(topic), 1);
        break;
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  

  function select_valid_place(jaccuseWords) {
    var valid_words = {};
    const currentUser = localStorage.getItem('userName');
    
    for (const word in jaccuseWords) {
        const tags = jaccuseWords[word].tags;
        const playedUsers = jaccuseWords[word].played_users || [];
        
        // Check if word matches topic filters
        const matchesTopics = MustHaveTopics.every(tag => tags.includes(tag)) && 
                              !ForbiddenTopics.some(tag => tags.includes(tag));
        
        // Check if current user has already played this word (only if logged in)
        const alreadyPlayed = currentUser && playedUsers.includes(currentUser);
        
        if (matchesTopics && !alreadyPlayed) {
          valid_words[word] = jaccuseWords[word];
        }
      }
    
    console.log("Valid words for user:", Object.keys(valid_words).length);
    return valid_words;
  }

function startGame(player_number,jaccuseWords) {
    console.log("Starting game with set_key:", set_key);

    var pl1, pl2; // Define pl1 and pl2 here

    // Get the number of players from the input
    player_number = Math.max(5, Math.min(player_number, 15));
    player_minority = Math.floor(player_number / 2-.1);
    console.log(player_number);
    console.log(player_minority);

    // Initialize the array with 0s and then fill in 1s for the minority.
    var_minority_id = Array(player_number).fill(0).fill(1, 0, player_minority);
    shuffleArray(var_minority_id);
    var_condemmed_id = Array(player_number).fill(0);

    // Remove start options
    var cardsContainer = document.getElementById('player_cards');
    cardsContainer.innerHTML = '';

    // select random line of place_list
    let randomKey;
    if (set_key == null) {
      var valid_words = select_valid_place(jaccuseWords);
      if (valid_words.length === 0) {
        console.log("No valid places found");
        return;
      }

    

      // select random element of the jacccuseWords dictionary
      const keys = Object.keys(valid_words);
      randomKey = keys[Math.floor(Math.random() * keys.length)];

    } else {
      randomKey = set_key;
      console.log("setting key:", randomKey);
      console.log("setting words 1:", jaccuseWords[randomKey]["word1"]);
      console.log("setting words 2:", jaccuseWords[randomKey]["word2"]);
    }

    pl1 = jaccuseWords[randomKey]["word1"];
    pl2 = jaccuseWords[randomKey]["word2"];
    current_word_key = randomKey;

  

    // randomly choose minority word and majority word form pl1 and pl2
    var minority_word = Math.floor(Math.random() * 2);
    if (minority_word == 0) {
        min_word = pl1;
        maj_word = pl2;
    } else {
        min_word = pl2;
        maj_word = pl1;
    }

    //make buttons for each player, represenging cards.
    //if the button is clicked, it will show the player their word.
    //if the button is clicked again, it will hide the word.
    for (let i = 0; i < player_number; i++) {
        // Determine the role for this card
        let role = var_minority_id[i] ? min_word : maj_word;
        
        // Create card wrapper to hold card and button together
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'card-wrapper';
        cardWrapper.id = 'card-wrapper-' + i;
        
        // Create card elements
        const card = document.createElement('div');
        card.className = 'cards';
    
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
    
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.textContent = role; // Set the text for the back of the card
    
        // Add event listener to toggle card visibility
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
            if (phase =="choose" && ! card.classList.contains('flipped')) {
                card.className += ' deactivated_card';;
            }

            //see if al cards are deactivated, and game phase is choose. If so, move to next phase.
            if (document.querySelectorAll('.deactivated_card').length == player_number && phase == "choose") {
                phase = "vote";
                for (let i = 0; i < player_number; i++) {
                    document.querySelectorAll('.cards')[i].classList.remove('deactivated_card');
                }
                add_condemn_button(player_number);
            }
            
          });
    
        // Assemble the card
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        
        // Add card to wrapper, then wrapper to container
        cardWrapper.appendChild(card);
        cardsContainer.appendChild(cardWrapper);
    }
    phase = "choose";
}

function add_condemn_button(player_number) {
    // Add condemn button to each card wrapper
    for (let i = 0; i < player_number; i++) {
        let cardWrapper = document.getElementById('card-wrapper-' + i);
        
        // Check if button already exists
        if (cardWrapper.querySelector('.condemn-btn')) continue;
        
        let button = document.createElement('button');
        button.textContent = "Condemn";
        button.className = 'condemn-btn';
        button.id = 'condemn_button-' + i;

        button.addEventListener('click', (function(i) {
            return function() {
                let card = document.querySelectorAll('.cards')[i];
                var_condemmed_id[i] = 1;
                card.classList.add('deactivated_card');
                button.disabled = true;
                button.textContent = "Condemned";
                check_win_condition();
            };
        })(i));
        
        cardWrapper.appendChild(button);
    }
}

function check_win_condition() {
    var not_condemmed_minority = 0;
    var condemmed_majority = 0;
    player_number = var_minority_id.length;
    console.log(var_minority_id);
    console.log(var_condemmed_id);
    for (let i = 0; i < player_number; i++) {
        console.log("new loop iteration")
        console.log(var_minority_id[i]);
        console.log(var_condemmed_id[i]);
        if (var_minority_id[i] == 1 && var_condemmed_id[i] == 0) {
            not_condemmed_minority++;
        }
        if (var_minority_id[i] == 0 && var_condemmed_id[i] == 1) {
            condemmed_majority++;
        }
    }

    if (not_condemmed_minority == 0) {
        showGameEndModal("Majority Wins!", "The majority successfully identified all minority members.");
    }
    if (condemmed_majority >= 2) {
        showGameEndModal("Minority Wins!", "The minority outsmarted the majority!");
    }
    return;
}

function showGameEndModal(title, message) {
    // Increment play count when game finishes
    if (current_word_key) {
        incrementPlays(current_word_key);
        
        // Add logged-in user to played_users so they won't get this word again
        const currentUser = localStorage.getItem('userName');
        if (currentUser) {
            addPlayedUser(current_word_key, currentUser);
        }
    }
    
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'game-end-overlay';
    overlay.id = 'game-end-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'game-end-modal';
    
    modal.innerHTML = `
        <h2 class="game-end-title">${title}</h2>
        <p class="game-end-message">${message}</p>
        <div class="game-end-words">
            <div class="word-reveal">
                <span class="word-label">Majority Word</span>
                <span class="word-text">${maj_word}</span>
            </div>
            <div class="word-reveal">
                <span class="word-label">Minority Word</span>
                <span class="word-text">${min_word}</span>
            </div>
        </div>
        <div class="game-end-rating">
            <p>How was this word pair?</p>
            <div class="rating-buttons">
                <button class="rate-btn rate-up" id="rate-up">
                    <span class="rate-icon">+</span>
                    <span>Good pair</span>
                </button>
                <button class="rate-btn rate-down" id="rate-down">
                    <span class="rate-icon">-</span>
                    <span>Bad pair</span>
                </button>
            </div>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Trigger animation
    requestAnimationFrame(() => {
        overlay.classList.add('visible');
    });
    
    // Add event listeners for rating buttons
    document.getElementById('rate-up').addEventListener('click', () => {
        handleRating('up');
    });
    
    document.getElementById('rate-down').addEventListener('click', () => {
        handleRating('down');
    });
}

function handleRating(type) {
    const overlay = document.getElementById('game-end-overlay');
    const upBtn = document.getElementById('rate-up');
    const downBtn = document.getElementById('rate-down');
    
    // Show selection briefly
    if (type === 'up') {
        upBtn.classList.add('selected');
        // Save upvote to database
        if (current_word_key) {
            incrementUpvote(current_word_key);
        }
    } else {
        downBtn.classList.add('selected');
        // Save downvote to database
        if (current_word_key) {
            incrementDownvote(current_word_key);
        }
    }
    
    // Close modal after short delay
    setTimeout(() => {
        overlay.classList.remove('visible');
        setTimeout(() => {
            overlay.remove();
            // Deactivate all cards
            document.querySelectorAll('.cards').forEach(card => {
                card.classList.add('deactivated_card');
            });
            // Hide condemn buttons
            document.querySelectorAll('.condemn-btn').forEach(btn => {
                btn.style.display = 'none';
            });
            // Reset phase so start button works again
            phase = "start";
        }, 300);
    }, 500);
}
