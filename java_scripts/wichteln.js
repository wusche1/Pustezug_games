// Global variables to store people and households
let people = [];
let households = [];

// DOM elements
const addPersonForm = document.getElementById('add-person-form');
const peopleList = document.getElementById('people-list');
const addHouseholdButton = document.getElementById('add-household');
const householdsList = document.getElementById('households-list');
const sendButton = document.getElementById('send-button');

// Add person
addPersonForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    addPerson(name, email);
    addPersonForm.reset();
});

function addPerson(name, email) {
    const person = { name, email };
    people.push(person);
    updatePeopleList();
    updateHouseholdDropdowns();
}

function updatePeopleList() {
    peopleList.innerHTML = '';
    people.forEach((person, index) => {
        const li = document.createElement('li');
        li.textContent = `${person.name} (${person.email})`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removePerson(index);
        li.appendChild(removeButton);
        peopleList.appendChild(li);
    });
}

function removePerson(index) {
    const personName = people[index].name;
    people.splice(index, 1);
    
    // Remove the person from all households
    households.forEach(household => {
        household.members = household.members.filter(member => member !== personName);
    });
    
    updatePeopleList();
    updateHouseholdsList();
    updateHouseholdDropdowns();
}


// Add household
addHouseholdButton.addEventListener('click', addHousehold);

function addHousehold() {
    const household = { name: `Household ${households.length + 1}`, members: [] };
    households.push(household);
    updateHouseholdsList();
}

function updateHouseholdsList() {
    householdsList.innerHTML = '';
    households.forEach((household, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${household.name}</h3>
            <ul class="household-members"></ul>
            <select class="add-member-select">
                <option value="">Add member</option>
                ${people.map(person => `<option value="${person.name}">${person.name}</option>`).join('')}
            </select>
            <button class="remove-household">Remove Household</button>
        `;
        
        const membersList = li.querySelector('.household-members');
        household.members.forEach(member => {
            const memberLi = document.createElement('li');
            memberLi.textContent = member;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => removeMemberFromHousehold(index, member);
            memberLi.appendChild(removeButton);
            membersList.appendChild(memberLi);
        });

        const addMemberSelect = li.querySelector('.add-member-select');
        addMemberSelect.onchange = (e) => {
            if (e.target.value) {
                addMemberToHousehold(index, e.target.value);
                e.target.value = '';
            }
        };

        li.querySelector('.remove-household').onclick = () => removeHousehold(index);

        householdsList.appendChild(li);
    });
}

function addMemberToHousehold(householdIndex, memberName) {
    if (!households[householdIndex].members.includes(memberName)) {
        households[householdIndex].members.push(memberName);
        updateHouseholdsList();
    }
}

function removeMemberFromHousehold(householdIndex, memberName) {
    households[householdIndex].members = households[householdIndex].members.filter(m => m !== memberName);
    updateHouseholdsList();
}

function removeHousehold(index) {
    households.splice(index, 1);
    updateHouseholdsList();
}

function updateHouseholdDropdowns() {
    const dropdowns = document.querySelectorAll('.add-member-select');
    dropdowns.forEach(dropdown => {
        dropdown.innerHTML = '<option value="">Add member</option>' + 
            people.map(person => `<option value="${person.name}">${person.name}</option>`).join('');
    });
}

function performSecretSantaDraw() {
    if (people.length < 2) {
        alert("You need at least 2 people to perform a Secret Santa draw.");
        return;
    }

    let assignments;
    let attempts = 0;
    const maxAttempts = 1000;

    while (attempts < maxAttempts) {
        assignments = attemptDraw();
        if (assignments) break;
        attempts++;
    }

    if (assignments) {
        alert("Secret Santa assignments have been made successfully!");
        console.log(assignments); // For demonstration. In a real app, you'd send emails here.
        sendEmails(assignments);
    } else {
        alert("Unable to make valid Secret Santa assignments after 1000 attempts. Please check your household configurations.");
    }
}

function attemptDraw() {
    let shuffled = [...people].sort(() => Math.random() - 0.5);
    let assignments = new Map();

    for (let i = 0; i < shuffled.length; i++) {
        let giver = shuffled[i];
        let receiver = shuffled[(i + 1) % shuffled.length];

        if (giver === receiver) return null; // Can't give to self
        if (isInSameHousehold(giver, receiver)) return null; // Can't give to household member

        assignments.set(giver, receiver);
    }
    return assignments;
}

function isInSameHousehold(person1, person2) {
    return households.some(household => 
        household.members.includes(person1.name) && household.members.includes(person2.name)
    );
}


function sendEmails(assignments) {
    const messageTemplate = document.getElementById('message-template').value;

    assignments.forEach((receiver, giver) => {
        const personalizedMessage = messageTemplate
            .replace('[Recipient]', giver.name)
            .replace('[Lot]', receiver.name);


        sendEmail(receiver.email, personalizedMessage);
    });
}

// Initial render
updatePeopleList();
updateHouseholdsList();
sendButton.addEventListener('click', performSecretSantaDraw);



// Function to send the email
async function sendEmail(recipientEmail, messageText) {
    const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.domain.com/v3/mail/send');
    
    const data = {
        personalizations: [{
            to: [{ email: recipientEmail }]
        }],
        from: {
            email: "pustezug@gmail.com" // The email you verified in SendGrid
        },
        subject: "Your Secret Santa Lot",
        content: [{
            type: "text/plain",
            value: messageText
        }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': atob('QmVhcmVyIFNHLkdFdS1TU1F4VFEyV1NLdkYzeFhtQmcubUx0anM3VXRmS1FNdC11TXplMVNveFdMTkxXZUxXdk1pOTVWVXNqVG4yNA==')
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email');
        }
    } catch (error) {
        alert('Error sending email: ' + error.message);
    }
}




sendEmail("wuschelschulz8@gmail.com", "This is a test NEW message")


