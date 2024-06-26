# Pillar Constructs Co. Website

## Introduction
This application is centered solely around a construction business that I will be starting with my friend. The idea is to give customers some tangible way to reach out to us and see what we're all about.

## View the Project Plan

Here is a rough outline of what the app format would look like: ![Project Plan](WebProgrammingStartup.jpg)

## STARTUP CSS IMPLEMENTATIONS
- I completely redid the project for part. I found that I wasn't too engaged in the idea of CommunityTogether (My last Project) so I decided to revamp it and create something that I will actually use.

## Key Features
- Service and Project Showcases: Detailed and visually appealing presentations of our services and past projects.
- Real-Time Contact Form: A straightforward and user-friendly form on the "Contact Us" page, ensuring you can reach out to us anytime.
- Responsive Design: A website design that looks great on any device, enhancing your browsing experience whether on desktop, tablet, or mobile.
- Accessibility and Usability: Prioritized navigation and information architecture for an intuitive user experience.

## Technology Implementation
- HTML & CSS: For structuring and styling our website, ensuring it's visually appealing and accessible.
- JavaScript: Enhances interactivity and user engagement on the site.
- Responsive Design: Implemented through CSS media queries, ensuring the site is fully functional and beautiful on any screen size.

## Index Tab (Home Page)
- This tab is the home page for the Pillar Constructs Co. website. It contains information regarding what we do and user reviews, and links to all of the different pages.

## About Tab
- This tab just gives some basic information on Me and Aaron (My business partner). We want customers to put a name to the company, and we want to appear human, as they say.

## Contact Tab
- This tab gives you the ability to contact us. There is currently some placeholder information and some text boxes that will allow connectivity in the future.

## Services Tab
- This tab just gives basic information on the services we provide. The hope is that in the future we will have actual images of us doing work on homes, but for now there are just stock images.

## Projects Tab
- This will be a list of our proudest accomplishments. The idea being that customers will be able to see our work and visualize what we can do for them.

## Assets Folder
- This contains a list of all of the photographs that I use in the website. Per standard use, similar to other websites

## Styles.css file
- This is where all of my fonts, styles, and ways of making the website look good are stored.

## STARTUP JAVASCRIPT IMPLEMENTATION

## Database.js file
- This is where I will host the data for the website in the future. It will keep track of user data, as well as when and where appointments are. It currently retains the information from the last project CommunityTogether. By the end of the project I should have the url changed.

## Login.html file
- This is our users are able to login to their accounts that they have with us. Currently there is no actual functionality, but the framework is in place. There is now a place to enter a username and a password, in addition to feedback loops that let the user know whether or not that is a valid username or password (currently all usernames and passwords will not work because there is no database).

## Chat.html file
- This is the tab where our customers will be able to talk to us directly concerning any complaints. I might take it out of the final product because I don't think that it is exceptionally useful right now, especially because we don't have many customers or a customer support team. But in the future I believe that it could be useful if our business takes off, so I will keep it in the background.

## main.java
- This is the file that contains all of the javascript for the project. It is centered largely around ease of access. It has several different functionalities such as a search bar to look through projects, toggleability on certain objects so the website doesn't take up massive amounts of screen space, in addition to a scroll wheel that will come into effect when there is more information regarding the business. The javascript also is a large function of the chat implementation and it functions as the catalyst for the storage of user information that we collect throuh logins.

## STARTUP SERVER IMPLEMENTATION

## package.json
- This File contains default values for future mongoDB interactions

## server.js
- This file contains all of my server information at the current moment. It currently holds the framework for the storage of information from the login, signup, chat, and contact us pages.
  
## user.html
- This is the file that will have user information presented. I will still need to attach it to a websocket, but in the meantime it works alongside the login.html page to provide basic user functionality.

## public folder
- This folder currently contains all of the information that is necessary for the front end of things. In order to keep the backend more organized, I intentionally created a separate folder with items only accessible by viewers.

## .gitignore and .env
- These contain my MongoDB login information and passwords. The .env file will not be found on the github repository, as it contains sensitive information.

## User.js
- Currently contains the framework for the signup database functionality.

## signup.html
- This file is a basic html file that allows the customer to sign up for our website. It is only tied to the login page currently.

## STARTUP LOGIN IMPLEMENTATION

## server.js
- Added the MongoDB storage, added a database known as LoginInfo, and created a storage system for all of the information.

## user.html
- Added the basic css and login information for user functionality

## user.js
- Added tons of functionality, including the ability to pull data from a node server and then move it to the mongo database.

## STARTUP WEBSOCKET IMPLEMENTATION

## main.js
- Nearly all of the changes were to the main.js file. The changes included the integration of a feedback page, the finalization of the chat functionality, and the ability for user's who are logged in to view their own personal projects.

## server.js
- Changes to server.js contained mostly websocket integration, and an attempt to link my database to the website.

## STARTUP REACT IMPLEMENTATION

## Login.jsx
- Handles the user login functionality. This component presents a form where users can enter their credentials. It interacts with the backend to authenticate users and manage sessions via JWT tokens, ensuring secure access to the application.

## Projects.jsx
- Displays a list of projects. Users can view all projects and search through them using a dynamic search feature. It fetches project data from the backend and renders it in an organized manner, allowing for easy access to project details.

## Services.jsx
- This component lists the services provided by the startup. It uses an accordion-style layout to display detailed information about each service, allowing users to expand each section to read more about the offerings.

## Signup.jsx
- Manages the user registration process. It provides a form where new users can sign up by entering their personal information, which is then sent to the backend to create a new user account in the database.

## User.jsx
- A simple user profile component that greets logged-in users. It displays basic user information, enhancing the personalized experience of the application.

## About.jsx
- Provides information about the startup. This component displays the mission, vision, history, and other relevant details that help users understand more about my company’s background.

## App.jsx
- The main component that wraps all other components. It sets up the routing for the entire application using React Router, defining how users navigate through different parts of the SPA.

## Chat.jsx
- Facilitates real-time communication within the application. It includes a chat interface where users can send messages and receive automated responses, simulating a live chat environment.

## Contact.jsx
- Contains a contact form where users can submit inquiries or messages. This component handles data collection from user inputs and communicates with the backend to store or process these inquiries.

## ContactMessage.js
- Defines the schema for contact messages.

## Home.jsx
- The homepage component of the application. It welcomes users and provides links or navigation to various other parts of the application like Projects, Services, and About.

## index.js
- The entry point of the React application. It initializes the root component (App.jsx) and renders it to the DOM. This file includes setup configurations like the top-level Router and possibly other providers like Redux or Context API.

## AuthContext.js
- Manages the authentication state across the application using React Context. It provides a way to share state about the logged-in user among all components without passing props manually at every level.
