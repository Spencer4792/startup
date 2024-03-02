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

// Function to display projects from projects.html
function displayProjects() {
    const projectsContainer = document.getElementById("project-list");
    if (!projectsContainer) return; // Exit if the projects container doesn't exist on the page
    projectsContainer.innerHTML = ''; // Initially clear the container

    mockProjects.forEach(project => {
        const projectHTML = `
            <div class="project">
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
            // Implement actual form submission here
        });
    }

    // Call displayProjects if on the projects page
    displayProjects();
});
