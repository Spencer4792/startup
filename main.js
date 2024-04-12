const socket = new WebSocket('ws://localhost:3000');

socket.onopen = function(event) {
    console.log("Connected to WebSocket server.");
};

socket.onmessage = function(event) {
    console.log("Message from server:", event.data);
    addMessageToChat("Server", event.data);
};

socket.onerror = function(error) {
    console.log("WebSocket error:", error);
};

socket.onclose = function(event) {
    console.log("WebSocket connection closed:", event);
};

function addMessageToChat(sender, message) {
    const messageBox = document.getElementById("messages");
    const messageElement = document.createElement("p");
    messageElement.className = sender === "You" ? "chat-message user" : "chat-message";
    messageElement.textContent = `${sender}: ${message}`;
    messageBox.appendChild(messageElement);
    messageBox.scrollTop = messageBox.scrollHeight;
}

function sendMessage() {
    const messageInput = document.getElementById("chat-message");
    const message = messageInput.value.trim();
    if (message) {
        socket.send(message);
        addMessageToChat("You", message);
        messageInput.value = "";
    }
}

document.getElementById('chat-send-btn').addEventListener('click', sendMessage);

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("loginMessage");

    fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: username, password: password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 200) {
            sessionStorage.setItem("loggedIn", true);
            window.location.href = "user.html";
        } else {
            messageElement.textContent = "Invalid username or password.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        messageElement.textContent = "Login failed due to server error.";
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validateLogin();
    });
}

// Handle sign-up form submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('/api/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, phoneNumber, email, password})
        })
        .then(response => response.json())
        .then(data => {
            alert('User registered successfully');
            window.location.href = 'login.html';
        })
        .catch(error => {
            console.error('Signup error:', error);
            alert('Error during sign up: ' + error.message);
        });
    });
}

// Display projects
const mockProjects = [
    { id: 1, name: "Luxury Residential Complex", completionDate: "2024-03-15", location: "Texas, of Course", description: "A state-of-the-art residential complex featuring modern amenities, sustainable construction practices, and breathtaking city views.", imageUrl: "assets/luxurytier.jpeg" },
    { id: 2, name: "Nice Residential Complex", completionDate: "2024-03-15", location: "Somewhere in Utah", description: "A beautiful residential complex that has bright lights and scenic vistas.", imageUrl: "assets/reallyNice.jpeg" },
    { id: 3, name: "Somewhat Luxury Residential Complex", completionDate: "2024-03-15", location: "New York", description: "Very reasonable luxury residential complex, adequate swimming pool size.", imageUrl: "assets/somewhatLuxury.jpeg" },
    { id: 4, name: "Middle-Tier Residential Complex", completionDate: "2024-03-15", location: "Orange County California", description: "I mean, are you sure that you want this one?", imageUrl: "assets/decentApartment.jpeg" },
    { id: 5, name: "Crappy Residential Complex", completionDate: "2023-12-14", location: "Detroit", description: "This ain't our finest work.", imageUrl: "assets/crappyApartment.jpeg" }
];

function displayProjects(searchQuery = '') {
    const projectsContainer = document.getElementById("project-list");
    projectsContainer.innerHTML = '<h1>Featured Projects</h1>';

    const filteredProjects = mockProjects.filter(project => project.name.toLowerCase().includes(searchQuery.toLowerCase()));

    filteredProjects.forEach(project => {
        const projectHTML = `
            <div class="project">
                ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.name}" class="project-image">` : ''}
                <h2>${project.name}</h2>
                <p><strong>Completion Date:</strong> ${project.completionDate}</p>
                <p><strong>Location:</strong> ${project.location}</p>
                <p>${project.description}</p>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });
}

document.getElementById('search-input').addEventListener('input', (event) => {
    displayProjects(event.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
});
