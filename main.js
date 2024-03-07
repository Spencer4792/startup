// Function to validate login from login.html
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("loginMessage");

    const userExists = mockUsers.some(user => user.username === username && user.password === password);

    if (userExists) {
        messageElement.innerText = "Login Successful!";
        // Redirect to another page or update UI accordingly
    } else {
        messageElement.innerText = "Invalid username or password.";
    }
}

function displayProjects(searchQuery = '') {
    const projectsContainer = document.getElementById("project-list");
    projectsContainer.innerHTML = '<h1>Featured Projects</h1>'; // Initially clear the container, but keep the title

    const filteredProjects = mockProjects.filter(project =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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


// Function to toggle service descriptions from services.html
function toggleDescription(descId) {
    var description = document.getElementById(descId);
    var indicator = description.previousElementSibling.querySelector('.toggle-indicator');
    
    if (description.style.display === "none" || !description.style.display) {
        description.style.display = "block";
        indicator.textContent = '-'; // Change to '-' when visible
    } else {
        description.style.display = "none";
        indicator.textContent = '+'; // Change back to '+' when hidden
    }
}

// Prevent form submission and validate form from contact.html
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting
            
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;
            
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return false;
            }
            
            if (!/\S+@\S+\.\S+/.test(email)) {
                alert("Email address is invalid.");
                return false;
            }
            
            alert("Form is valid. Submitting...");
        });
    }

    displayProjects();
});

const mockProjects = [
    {
        id: 1,
        name: "Luxury Residential Complex",
        completionDate: "2024-03-15",
        location: "Texas, of Course",
        description: "A state-of-the-art residential complex featuring modern amenities, sustainable construction practices, and breathtaking city views.",
        imageUrl: "assets/luxurytier.jpeg"
    },
    {
        id: 2,
        name: "Nice Residential Complex",
        completionDate: "2024-03-15",
        location: "Somewhere in Utah",
        description: "A beautiful residential complex that has bright lights and scenic vistas.",
        imageUrl: "assets/reallyNice.jpeg"
    },
    {
        id: 3,
        name: "Somewhat Luxury Residential Complex",
        completionDate: "2024-03-15",
        location: "New York",
        description: "Very reasonable luxury residential complex, adequate swimming pool size.",
        imageUrl: "assets/somewhatLuxury.jpeg"
    },
    {
        id: 4,
        name: "Middle-Tier Residential Complex",
        completionDate: "2024-03-15",
        location: "Orange County California",
        description: "I mean, are you sure that you want this one?",
        imageUrl: "assets/decentApartment.jpeg"
    },
    {
        id: 5,
        name: "Crappy Residential Complex",
        completionDate: "2023-12-14",
        location: "Detroit",
        description: "This ain't our finest work.",
        imageUrl: "assets/crappyApartment.jpeg"
    },
];

document.getElementById('search-input').addEventListener('input', (event) => {
    const searchQuery = event.target.value;
    displayProjects(searchQuery);
});

document.addEventListener('DOMContentLoaded', () => displayProjects());

function sendMessage() {
    const messageBox = document.getElementById("messages");
    const messageInput = document.getElementById("chat-message");
    const message = messageInput.value.trim();

    if (message) {
        const newMessageElement = document.createElement("p");
        newMessageElement.textContent = message;
        messageBox.appendChild(newMessageElement);

        messageInput.value = "";
        messageBox.scrollTop = messageBox.scrollHeight;
    }
}


const mockUsers = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("loginMessage");

    const userExists = mockUsers.some(user => user.username === username && user.password === password);

    if (userExists) {
        messageElement.innerText = "Login Successful!";
    } else {
        messageElement.innerText = "Invalid username or password.";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateLogin();
        });
    }
});
