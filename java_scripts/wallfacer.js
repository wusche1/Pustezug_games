// Wallfacer game JavaScript

// Initialize variables
var player_number = 5;

// Wallfacer categories and words database
const wallfacerDatabase = {
    "nations": {
        "easy": ["Germany", "France", "Japan", "Brazil", "Australia", "India", "Russia", "Mexico", "Netherlands","South Korea", "China", "Canada", "Sweden"],
        "hard": ["Austria", "Ireland", "Indonesia", "Madagascar", "South Africa", "New Zealand", "Philippines", "Thailand", "Turkey", "Vietnam", "Argentina"]
    },
    "colors": {
        "easy": ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White"],
        "hard": ["Turquoise", "Crimson", "dark blue", "Gold", "Silver", "Maroon"]
    },
    "dishes": {
        "easy": ["Pizza", "Pasta", "Sushi", "Burger", "Salad", "Soup", "Curry", "Sandwich", "Pudding", "Cake"],
        "hard": ["Risotto", "Ramen", "Dumplings", "Goulash", "Chilli", "Pancakes"]
    },
    "german_cities": {
        "easy": ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Dresden", "Leipzig", "Nuremberg"],
        "hard": ["Essen", "Heidelberg", "Freiburg", "Rostock", "Kiel", "Bielefeld", "Duisburg", "Erfurt", "Mainz", "Saarbruecken"]
    },
    "rivers": {
        "easy": ["Amazon", "Nile", "Thames", "Rhine", "Danube", "Mississippi", "Ganges", "Seine"],
        "hard": [ "Euphrates", "Colorado", "Elbe", "Oder", "Volga"]
    },
    "professions": {
        "easy": ["Doctor", "Teacher", "Engineer", "Lawyer", "Chef", "Artist", "Pilot", "Nurse", "Architect", "Journalist"],
        "hard": ["Sommelier", "Cartographer", "Radiologist", "Geologist"]
    },
    "subjects": {
        "easy": ["Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography", "Literature", "Philosophy", "Psychology", "Economics", "Law", "Medicine"],
        "hard": ["Cryptography"]
    },
    "pets": {
        "easy": ["Dog", "Cat", "Rabbit", "Hamster", "Guinea Pig", "Turtle", "Parrot", "Goldfish", "Mouse"],
        "hard": ["Ferret", "Snake", "Canary", "Hedgehog"]
    },
    "spices": {
        "easy": ["Salt", "Pepper", "Cinnamon", "Ginger", "Paprika", "Oregano", "Basil", "Mint"],
        "hard": ["Cardamom", "Nutmeg", "Cloves", "Turmeric", "Cumin", "Sage", "Lavender", "Saffron", "Thyme", "Rosemary"]
    },
    "hobbies": {
        "easy": ["Reading", "Cooking", "Gardening", "Painting", "Photography", "Hiking", "Swimming", "Dancing", "Singing", "Writing"],
        "hard": ["Origami", "Calligraphy", "Geocaching", "Quilting", "Beekeeping", "Astronomy"]
    },
    "sports": {
        "easy": ["Football", "Basketball", "Tennis", "Swimming", "Running", "Cycling", "Golf", "Volleyball", "Hockey"],
        "hard": [ "Squash", "Badminton", "Fencing", "Archery", "Bobsledding"]
    },
    "instruments": {
        "easy": ["Piano", "Guitar", "Violin", "Drums", "Flute", "Trumpet", "Harp"],
        "hard": ["Accordion", "Trombone", "Oboe", "Xylophone", "Bassoon", "Saxophone", "Cello", "Clarinet"]
    },
    "sea_creatures": {
        "easy": ["Fish", "Shark", "Whale", "Dolphin", "Octopus", "Jellyfish", "Starfish", "Seahorse", "Crab", "Lobster"],
        "hard": [ "Sea Cucumber", "Anglerfish", "Eel", "Stonefish", "Pufferfish"]
    },
    "kitchen_items": {
        "easy": ["Knife", "Pan", "Pot", "Spoon", "Fork", "Plate", "Bowl", "Cup", "Cutting Board"],
        "hard": [ "Zester", "Dough Scraper", "Kitchen Scale", "Thermometer", "Whisk"]
    },
    "furniture": {
        "easy": ["Chair", "Table", "Sofa", "Bed", "Desk", "Bookshelf", "Wardrobe", "Lamp", "Mirror", "Cabinet"],
        "hard": [ "Chaise Lounge", "Secretary"]
    },
    "clothing": {
        "easy": ["Shirt", "Pants", "Dress", "Jacket", "Shoes", "Hat", "Socks", "Sweater", "Skirt", "Coat"],
        "hard": ["Cravat", "Cardigan", "Blazer"]
    },
    "historical_figures": {
        "easy": ["Napoleon", "Einstein", "Shakespeare", "Leonardo", "Cleopatra", "Caesar", "Gandhi", "Churchill", "Mozart", "Beethoven"],
        "hard": ["Charlemagne", "Genghis Khan", "Hannibal", "Spartacus", "Confucius"]
    },
    "languages": {
        "easy": ["English", "German", "French", "Spanish", "Italian", "Chinese", "Japanese", "Russian", "Arabic", "Portuguese"],
        "hard": ["Swahili", "Korean", "Turkish", "Polish", "Dutch", "Elvish", "Klingon"]
    },
    "body_parts": {
        "easy": ["Head", "Hand", "Foot", "Eye", "Nose", "Mouth", "Ear", "Arm", "Leg", "Heart"],
        "hard": ["Fingers", "Toes", "Knees", "Elbow", "Shoulder", "Hip", "Ankle", "Wrist", "Thumb"]
    },
    "city_places": {
        "easy": ["Zoo", "Bakery", "Hospital", "School", "Library", "Museum", "Park", "Restaurant", "Bank", "Post Office"],
        "hard": [ "Observatory", "Planetarium", "Apothecary", "Foundry", "Basilica"]
    },
    "fruits_vegetables": {
        "easy": ["Apple", "Banana", "Orange", "Carrot", "Tomato", "Potato", "Onion", "Lettuce", "Cucumber", "Pepper"],
        "hard": [ "Kohlrabi", "Chard", "Fennel", "Turnip", "Artichoke"]
    }
};

function main() {
    console.log("Wallfacer game initialized");
    initializePlayerSelection();
}

// Function to initialize player number selection
function initializePlayerSelection() {
    var startOptionsContainer = document.getElementById('start_options');
    startOptionsContainer.innerHTML = '';
    
    // Create player number input
    const playerLabel = document.createElement('label');
    playerLabel.textContent = 'Number of players: ';
    
    const playerInput = document.createElement('input');
    playerInput.type = 'number';
    playerInput.id = 'player_number_input';
    playerInput.min = '3';
    playerInput.max = '15';
    playerInput.value = '5';
    playerInput.className = 'player_number';
    
    // Create start button
    const startButton = document.createElement('button');
    startButton.textContent = 'Generate Cards';
    startButton.onclick = function() {
        const inputValue = parseInt(document.getElementById('player_number_input').value);
        player_number = Math.max(3, Math.min(inputValue, 15));
        startGame(player_number);
    };
    
    startOptionsContainer.appendChild(playerLabel);
    startOptionsContainer.appendChild(playerInput);
    startOptionsContainer.appendChild(startButton);
}

function startGame(player_number) {
    console.log("Starting Wallfacer with", player_number, "players");
    
    // Clear previous cards
    var cardsContainer = document.getElementById('player_cards');
    cardsContainer.innerHTML = '';
    
    // Choose random category and words
    const categories = Object.keys(wallfacerDatabase);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryData = wallfacerDatabase[randomCategory];
    
    // Select one easy and one hard word for the wallfacer
    const easyWord = categoryData.easy[Math.floor(Math.random() * categoryData.easy.length)];
    const hardWord = categoryData.hard[Math.floor(Math.random() * categoryData.hard.length)];
    
    console.log("Selected category:", randomCategory);
    console.log("Easy word:", easyWord);
    console.log("Hard word:", hardWord);
    
    // Create role assignments
    let roles = Array(player_number).fill("civilian");
    
    // Randomly assign alien and wallfacer roles
    const alienIndex = Math.floor(Math.random() * player_number);
    let wallfacerIndex;
    do {
        wallfacerIndex = Math.floor(Math.random() * player_number);
    } while (wallfacerIndex === alienIndex);
    
    roles[alienIndex] = "alien";
    roles[wallfacerIndex] = "wallfacer";
    
    // Create cards for each player
    for (let i = 0; i < player_number; i++) {
        // Create card elements
        const card = document.createElement('div');
        card.className = 'cards';
        
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        
        // Set card content based on role
        let cardContent = "";
        if (roles[i] === "civilian") {
            cardContent = "Role: Civilian";
        } else if (roles[i] === "alien") {
            cardContent = `Role: Alien\nCategory: ${randomCategory}`;
        } else if (roles[i] === "wallfacer") {
            cardContent = `Role: Wallfacer\nCategory: ${randomCategory}\nEasy: ${easyWord}\nHard: ${hardWord}`;
        }
        
        cardBack.innerHTML = cardContent.replace(/\n/g, '<br>');
        
        // Add event listener to toggle card visibility
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
        });
        
        // Assemble the card
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        
        // Add the card to the container
        cardsContainer.appendChild(card);
    }
}

// Make sure main function is available globally
window.main = main;
