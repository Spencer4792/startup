# Real Time Community Event Planner

## Introduction
This application allows users to discover and participate in local community events in real-time. It targets individuals looking to engage more with their local community, participate in events, or organize their own. Is a neighbor having a barbecue? Is the whole town getting together for a volleyball game? This is the place to find out.

## View the Project Plan

Here is a rough outline of what the app format would look like: ![Project Plan](WebProgrammingStartup.jpg)

## Key Features
- **Event Creation and Browsing:** Users can create events, browse upcoming events, and join them. Events range from local workshops and sports activities to neighborhood meetings and impromptu gatherings.
- **Real-Time Chat and Updates:** Utilizing WebSockets, the app offers real-time communication channels for each event, enabling instant attendee and organizer communication.
- **Interactive Maps:** Integrating Google and Apple maps to display events on interactive maps.
- **User Profiles and Authentication:** Features secure user authentication and profile customization.
- **Feedback and Ratings:** Enables attendees to provide event feedback and ratings, ensuring community safety and engagement.
- **Notifications and Alerts:** Customizable real-time notifications about event changes and updates.

## Technology Implementation
- **HTML:** Use of HTML for structuring the application’s web pages.
- **CSS:** Responsive and user-friendly interface design with CSS.
- **JavaScript:** Dynamic features like event registration and live chat implemented in JavaScript.
- **Web Services:** Integration of third-party APIs for enhanced functionality.
- **Authentication:** Secure user registration and login processes.
- **Database:** Robust data management for user and event information.
- **WebSocket:** Real-time data communication through WebSockets.

## Index Tab (Home Page)
- This tab is the home page for the Community Together website. It contains events, their locations, reviews, and a link to the github repository, as well as the tabs to get to all of the other pages. There is a join button for people who are interested in signing up, and I am planning on adding an event calendar page as well in the future.

## Events Tab
- The events tab allows the user to locate events in their area, and it is the cornerstone of the website idea that I am trying to develop. It contains an event, location, date and time, the ability to join the event, alongside a description of the event and what is required to attend. Currently it is very bare-bones, but I expect it to be one of the most time intenseive parts of the website to implement.

## Profile Tab
- The profile tab contains information pertaining to the person who has signed up for the website. Right now it is pretty bare bones, containing only a username, bio, and interests, but I'm hoping to make it more of an interactive experience which will allow people in the local area to really get to know their neighbors!

## Login Tab
- The login tab is used to login to the user account. Currently it only contains email and password. Will consider changing it to username instead of email in the future. This tab has no functionality at the moment.

## Signup Tab
- The signup tab has different options for creating an account. There is a place to add a username, email for registration, and a password as well. Currently there is no functionality and the data will not be stored anywhere, but in the future there is plans to flesh it out.

## Dashboard Tab
- The dashboard tab allows the user to connect with members of their community through a feed system. It will show pictures, and allow users to host events as well. Currently there are no photos or videos, but it allows forthe user to input an event.

## Server.js
- This is designed to create functionality for a chat feature that will allow neighbors to actively communicate with each other.
