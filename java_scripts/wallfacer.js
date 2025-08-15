// Wallfacer game JavaScript

// Initialize variables
var player_number = 5;

// Wallfacer categories and words database
const wallfacerDatabase = {
    "bible_character": {
        "easy": ["Moses", "Noah", "David", "Mary", "Jesus", "Adam", "Abraham", "Joseph", "Daniel", "Peter"],
        "hard": ["Solomon", "Samson", "Ezekiel", "Isaiah", "Jeremiah", "Goliath", "Lazarus", "Barnabas"]
    },
    "american_politician": {
        "easy": ["Biden", "Trump", "Obama", "Bush", "Clinton", "Reagan", "Kennedy", "Lincoln", "Washington", "Roosevelt"],
        "hard": ["Nixon", "Carter", "Ford", "Johnson", "Eisenhower", "Truman", "Hoover", "Wilson"]
    },
    "historical_epoch": {
        "easy": ["Stone Age", "Bronze Age", "Middle Ages", "Renaissance", "Industrial Revolution", "World War", "Cold War", "Ancient Rome"],
        "hard": ["Iron Age", "Dark Ages", "Baroque", "Enlightenment", "Victorian Era", "Roaring Twenties", "Great Depression"]
    },
    "famous_woman": {
        "easy": ["Cleopatra", "Joan of Arc", "Marie Curie", "Mother Teresa", "Oprah", "Madonna", "Princess Diana", "Frida Kahlo"],
        "hard": ["Rosa Parks", "Anne Frank", "Eleanor Roosevelt", "Margaret Thatcher", "Hillary Clinton", "Maya Angelou", "Virginia Woolf"]
    },
    "gods": {
        "easy": ["Zeus", "Thor", "God", "Jesus", "Buddha", "Apollo", "Odin", "Poseidon", "Hades", "Athena"],
        "hard": ["Quetzalcoatl", "Anubis", "Vishnu", "Shiva", "Amaterasu", "Loki", "Freya", "Balder"]
    },
    "european_capital": {
        "easy": ["Paris", "London", "Berlin", "Rome", "Madrid", "Amsterdam", "Vienna", "Prague", "Stockholm", "Athens"],
        "hard": ["Tallinn", "Riga", "Vilnius", "Ljubljana", "Bratislava", "Valletta", "Nicosia"]
    },
    "island": {
        "easy": ["Hawaii", "Sicily", "Ireland", "Cuba", "Japan", "Madagascar", "Iceland", "Cyprus", "Malta", "Sardinia"],
        "hard": ["Socotra", "Faroe Islands", "Azores", "Seychelles", "Maldives", "Vanuatu", "Palau"]
    },
    "us_state": {
        "easy": ["California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "Michigan", "Virginia"],
        "hard": ["Delaware", "Vermont", "Wyoming", "Montana", "North Dakota", "South Dakota", "Rhode Island"]
    },
    "shakespeare_character": {
        "easy": ["Hamlet", "Romeo", "Juliet", "Macbeth", "Othello", "Ophelia", "Iago", "Lady Macbeth", "King Lear", "Portia"],
        "hard": ["Shylock", "Puck", "Falstaff", "Desdemona", "Cassio", "Rosalind", "Benedick", "Beatrice"]
    },
    "musician": {
        "easy": ["Mozart", "Beethoven", "Bach", "Elvis", "Beatles", "Michael Jackson", "Madonna", "Bob Dylan", "Chopin", "Vivaldi"],
        "hard": ["Handel", "Brahms", "Tchaikovsky", "Debussy", "Rachmaninoff", "Prince", "David Bowie", "Johnny Cash"]
    },
    "movies": {
        "easy": ["Titanic", "Star Wars", "Avatar", "Jaws", "Rocky", "Casablanca", "Godfather", "Shrek", "Frozen", "Lion King"],
        "hard": ["Pulp Fiction", "Goodfellas", "Apocalypse Now", "Citizen Kane", "Vertigo", "Psycho", "Taxi Driver"]
    },
    "games": {
        "easy": ["Chess", "Monopoly", "Scrabble", "Poker", "Minecraft", "Tetris", "Mario", "Pac-Man", "Checkers", "Risk"],
        "hard": ["Go", "Backgammon", "Catan", "Twilight Struggle", "Through the Ages", "Terra Mystica"]
    },
    "drinks": {
        "easy": ["Water", "Coffee", "Tea", "Beer", "Wine", "Coca Cola", "Orange Juice", "Milk", "Martini", "Whiskey"],
        "hard": ["Mojito", "Margarita", "Bloody Mary", "Manhattan", "Old Fashioned", "Cosmopolitan", "Pina Colada", "Daiquiri"]
    },
    "asian_country": {
        "easy": ["China", "Japan", "India", "Thailand", "Vietnam", "South Korea", "Indonesia", "Philippines", "Malaysia", "Singapore"],
        "hard": ["Bhutan", "Brunei", "Maldives", "Timor-Leste", "Kyrgyzstan", "Tajikistan", "Uzbekistan"]
    },
    "university_subject": {
        "easy": ["Mathematics", "Physics", "Chemistry", "Biology", "History", "Psychology", "Economics", "Literature", "Philosophy", "Medicine"],
        "hard": ["Epistemology", "Phenomenology", "Paleontology", "Cryptography", "Semiotics", "Hermeneutics"]
    },
    "mammal": {
        "easy": ["Dog", "Cat", "Horse", "Cow", "Pig", "Lion", "Tiger", "Elephant", "Monkey", "Bear"],
        "hard": ["Kangaroo", "Koala", "Platypus", "Armadillo", "Sloth", "Anteater", "Wombat", "Tapir"]
    },
    "insect": {
        "easy": ["Bee", "Ant", "Butterfly", "Mosquito", "Fly", "Spider", "Ladybug", "Grasshopper", "Cricket", "Dragonfly"],
        "hard": ["Praying Mantis", "Beetle", "Wasp", "Termite", "Cockroach", "Locust", "Firefly", "Caterpillar"]
    },
    "sport": {
        "easy": ["Football", "Basketball", "Tennis", "Swimming", "Running", "Cycling", "Golf", "Volleyball", "Hockey", "Baseball"],
        "hard": ["Squash", "Badminton", "Fencing", "Archery", "Bobsledding", "Curling", "Biathlon"]
    },
    "sea_creature": {
        "easy": ["Fish", "Shark", "Whale", "Dolphin", "Octopus", "Jellyfish", "Starfish", "Seahorse", "Crab", "Lobster"],
        "hard": ["Sea Cucumber", "Anglerfish", "Eel", "Stonefish", "Pufferfish", "Nautilus", "Cuttlefish"]
    },
    "kitchen_item": {
        "easy": ["Knife", "Pan", "Pot", "Spoon", "Fork", "Plate", "Bowl", "Cup", "Cutting Board", "Oven"],
        "hard": ["Zester", "Dough Scraper", "Kitchen Scale", "Thermometer", "Whisk", "Mandoline", "Mortar"]
    },
    "clothing": {
        "easy": ["Shirt", "Pants", "Dress", "Jacket", "Shoes", "Hat", "Socks", "Sweater", "Skirt", "Coat"],
        "hard": ["Cravat", "Cardigan", "Blazer", "Waistcoat", "Breeches", "Bodice", "Corset"]
    },
    "body_parts": {
        "easy": ["Head", "Hand", "Foot", "Eye", "Nose", "Mouth", "Ear", "Arm", "Leg", "Heart"],
        "hard": ["Elbow", "Knee", "Shoulder", "Ankle", "Wrist", "Spine", "Ribs", "Skull"]
    },
    "fruits_vegetables": {
        "easy": ["Apple", "Banana", "Orange", "Carrot", "Tomato", "Potato", "Onion", "Lettuce", "Cucumber", "Pepper"],
        "hard": ["Kohlrabi", "Chard", "Fennel", "Turnip", "Artichoke", "Rutabaga", "Parsnip", "Leek"]
    },
    "car_brand": {
        "easy": ["Toyota", "Ford", "BMW", "Mercedes", "Honda", "Volkswagen", "Audi", "Nissan", "Chevrolet", "Hyundai"],
        "hard": ["Lamborghini", "Maserati", "Bugatti", "McLaren", "Bentley", "Rolls-Royce", "Ferrari", "Porsche"]
    },
    "dog_breed": {
        "easy": ["Golden Retriever", "German Shepherd", "Labrador", "Bulldog", "Poodle", "Beagle", "Chihuahua", "Boxer"],
        "hard": ["Weimaraner", "Rhodesian Ridgeback", "Vizsla", "Basenji", "Borzoi", "Bloodhound", "Afghan Hound"]
    },
    "superhero": {
        "easy": ["Superman", "Batman", "Spider-Man", "Wonder Woman", "Iron Man", "Captain America", "Hulk", "Thor"],
        "hard": ["Green Lantern", "The Flash", "Aquaman", "Doctor Strange", "Black Panther", "Daredevil", "Hawkeye"]
    },
    "planet_moon": {
        "easy": ["Earth", "Mars", "Jupiter", "Saturn", "Venus", "Mercury", "Moon", "Sun", "Neptune", "Uranus"],
        "hard": ["Europa", "Titan", "Ganymede", "Phobos", "Deimos", "Io", "Enceladus", "Callisto"]
    },
    "pizza_topping": {
        "easy": ["Pepperoni", "Cheese", "Mushroom", "Sausage", "Peppers", "Onions", "Olives", "Ham", "Bacon"],
        "hard": ["Prosciutto", "Arugula", "Anchovies", "Artichoke", "Capers", "Truffle", "Goat Cheese", "Pesto"]
    },
    "weather_phenomenon": {
        "easy": ["Rain", "Snow", "Thunder", "Lightning", "Wind", "Fog", "Hail", "Sunshine", "Clouds"],
        "hard": ["Tornado", "Hurricane", "Blizzard", "Drought", "Aurora", "Monsoon", "Cyclone", "Typhoon"]
    },
    "school_subject": {
        "easy": ["Math", "English", "Science", "History", "Art", "PE", "Music", "Geography", "Reading"],
        "hard": ["Trigonometry", "Chemistry", "Physics", "Calculus", "Biology", "Algebra", "Geometry", "Statistics"]
    },
    "tree_plant": {
        "easy": ["Oak", "Pine", "Rose", "Daisy", "Sunflower", "Maple", "Willow", "Apple Tree", "Cherry Tree"],
        "hard": ["Baobab", "Sequoia", "Eucalyptus", "Magnolia", "Rhododendron", "Jasmine", "Bonsai", "Bamboo"]
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
    
    // Create rules button
    const rulesButton = document.createElement('button');
    rulesButton.textContent = 'Rules';
    rulesButton.onclick = function() {
        window.open('wallfacer_rules.html', '_blank');
    };
    
    startOptionsContainer.appendChild(playerLabel);
    startOptionsContainer.appendChild(playerInput);
    startOptionsContainer.appendChild(startButton);
    startOptionsContainer.appendChild(rulesButton);
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
