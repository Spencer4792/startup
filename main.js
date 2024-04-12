function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("loginMessage");

    const userExists = mockUsers.some(user => user.username === username && user.password === password);

    if (userExists) {
        messageElement.innerText = "Login Successful!";
        sessionStorage.setItem("loggedIn", true);
        window.location.href = "user.html"; // Make sure the path here is correct
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

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById('name').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        window.location.href = 'user.html';
      } else {
        return response.text().then(text => { throw new Error(text) });
      }
    })
    .catch(error => alert('Error during sign up: ' + error.message));
  });
}
  

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
    const userMessage = messageInput.value.trim();

    if (userMessage) {
        addMessageToChat("user", userMessage);
        messageInput.value = "";
        setTimeout(() => {
            const replyMessage = "Thanks for your message! This is an automated reply.";
            addMessageToChat("auto-reply", replyMessage);
        }, 1000);
    }
}

function addMessageToChat(sender, message) {
    const messageBox = document.getElementById("messages");
    const messageElement = document.createElement("p");
    if (sender === "auto-reply") {
        messageElement.style.color = "#007bff";
    }
    messageElement.textContent = message;
    messageBox.appendChild(messageElement);
    messageBox.scrollTop = messageBox.scrollHeight;
}

const mockUsers = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];

document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem("loggedIn")) {
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateLogin();
        });
    }
});

function simulateChatResponse() {
    const messageBox = document.getElementById("messages");
    const messageInput = document.getElementById("chat-message");
    const userMessage = messageInput.value.trim().toLowerCase();

    const userMessageElement = document.createElement("p");
    userMessageElement.textContent = "You: " + messageInput.value;
    messageBox.appendChild(userMessageElement);

    let replyMessage = "I'm sorry, I didn't understand that. Could you try one of the options listed above?";
    if (userMessage.includes("concerns about my project")) {
        replyMessage = "I understand you have concerns about your project. Could you provide more detail so we can address it effectively?";
    } else if (userMessage.includes("schedule")) {
        replyMessage = "To schedule an appointment, please visit our Appointment Scheduling Page or call us directly.";
    } else if (userMessage.includes("other")) {
        replyMessage = "Please type in your concern, and I'll do my best to assist you.";
    }

    setTimeout(() => {
        const replyElement = document.createElement("p");
        replyElement.textContent = "Virtual Assistant: " + replyMessage;
        messageBox.appendChild(replyElement);
        messageBox.scrollTop = messageBox.scrollHeight;
    }, 1000);

    messageInput.value = "";
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('user.html') && !sessionStorage.getItem("loggedIn")) {
        window.location.href = "login.html";
    }
});

const socket = new WebSocket('ws://localhost:3000');

socket.onopen = function(e) {
  console.log("Connection established!");
};

socket.onmessage = function(event) {
  console.log(`Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
  } else {
    console.log('Connection died');
  }
};

socket.onerror = function(error) {
  console.log(`[error] ${error.message}`);
};
