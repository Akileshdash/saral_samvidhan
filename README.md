<p> The project, Saral Samvidhan, aims to create a digital solution that transforms complex legal language into engaging content, making constitutional rights accessible to citizens. By presenting information on the three branches of government—Legislature, Executive, and Judiciary—through relatable stories and interactive features, users can understand the practical implications of laws like the newly implemented Bharatiya Nyaya Sanhita(BNS). The platform will include a resource center with a legal glossary, FAQs and news ensuring a user-friendly experience across multiple languages and devices. This initiative not only educates but also empowers citizens to actively engage with their rights and responsibilities.
</p>

## Features of the Project

1. **Translation to All Languages**:
   - The project supports multilingual capabilities, allowing users to access content in their preferred language. This feature enhances user experience and accessibility, ensuring that language barriers do not hinder participation. 

2. **News Blog**:
   - A dedicated news blog serves as a platform for sharing updates, articles, and insights related to the developemnts in the legal field of the country. Users can read and engage with content that is relevant to current events and developments.

3. **Login and Sign-Up**:
   - Secure login and sign-up functionality allows users to create accounts and access personalized features. User authentication mechanisms ensure that sensitive data is protected. 

4. **Chatbot**:
   - An interactive chatbot provides assistance to users, answering questions and explaining them various laws in simple english. The ChatBot can aswer questions related to the Constitution of India, the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA).



By implementing these features, the project aims to create an inclusive and engaging platform that meets the diverse needs of its users.

  
<h2><strong>Technologies Used</strong></h2>

### Frontend Development
- **React.js**: To create reusable components and use the virtual DOM for efficient rendering. Additional libraries like React Router (for routing between pages) and Redux (for state management) will further enhance development.
- **Tailwind CSS**: A CSS framework to speed up the development of responsive layouts.
- **i18next (for Internationalization)**: To support multilingual features, enabling translation and locale-based content.
- **Socket.io (Optional for Real-Time Communication)**: For implementing features like discussion forums and chat, allowing real-time interaction between users.

### Backend Development
- **WebSockets (with Socket.io)**: To facilitate real-time updates for the discussion forums or news/events features.
- **Passport.js or Auth0**: For User Authentication to manage registration and login securely. These tools simplify the process of integrating authentication into the platform.
- **JSON Web Tokens (JWT) or Express Sessions**: For implementing secure user authentication and session management.

### Database
- **MongoDB**: MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for dynamic schemas and easy scalability.

### APIs and Integration
- **REST API**: For communication between the frontend and backend, allowing the platform to retrieve or manipulate user data.

### Game Development for Legal Literacy
- **Three.js**: For creating interactive game scenarios where users can choose roles, take action, and see the consequences of their actions. WebGL-based frameworks like Three.js can help create interactive game environments in the browser.

### Multilingual Support
- **Google Translate API (Optional)**: To assist with language translation, particularly in the initial stages before manually-curated translations are ready.


## Project Timeline

| **Stage**                        | **Date**         |
|-----------------------------------|------------------|
| **S1 Project Plan Submission**    | Sep 2, 2024      |
| **S2 Requirements**               | Sep 20, 2024     |
| **S3 Use Cases**                  | Sep 23, 2024     |
| **S4 Use Case Diagram**           | Sep 27, 2024     |
| **S5 Release 1**                  | Oct 9, 2024      |
| **S6 UML Diagrams**               | Oct 10, 2024     |
| **S7 Test Plan**                  | Oct 23, 2024     |
| **S8 Test Case Execution Results**| Nov 1, 2024      |
| **S9 Release 2**                  | Nov 11, 2024     |
| **S10 Final Report Submission**   | Nov 14, 2024     |
| **S11 Final Project Submission**  | Nov 18, 2024     |



## Contributions
## Contributors and Their Roles

- **Akilesh**: 
  - Developed the environment for the game using Three.js.
  - Initiated the News Block and Discussion Forum pages.
  - Integrated the NEWS API for fetching live updates.
  - Implemented backend connectivity for:
    - User:
      - Login & Signup
      - Uploading profile photo
      - Editing profile contents
      - Creating new communities
      - Uploading a new post
    - Admin:
      - Admin page
      - Reviewing, approving, and deleting posts
      - Connecting sentiment analysis to all posts
    - Post:
      - Creating, liking/disliking, and sharing a post
    - Communities:
      - Registering to a community
      - Connecting posts with specific tags to respective communities
  - Chatbot:
    - Connected the chatbot to the backend and retrieved chat history from the database
  - Made the following pages responsive:
    - Chatbot
    - Discussion Forum
    - Communities
    - Individual Post View
    - Admin Dashboard
  - Created UML Class Diagram.
  - Designed and developed the Admin Page.

- **Shivadharshan**: 
  - Implemented player movement, player model, and car controller.
  - Integrated MongoDB for backend data storage.
  - Developed and connected the Login/Signup page to the backend.
  - Added navigation arrows within the game environment.
  - Deployed the website on Vercel.
  - Created Sequence Diagram.
  - Built the game using Unity 3D, incorporating features like:
    - Navigation and collision detection
    - Trespassing alerts
    - Max load checks
    - Collisions with vehicles, buildings, and during jumping traffic scenarios

- **Preet**: 
  - Developed the Chat Assistant to assist users.
  - Created the Sentiment Analysis backend for chatbot functionality.
  - Integrated the chatbot with the website UI and main platform.

- **Lavkush**:  
  - Designed and updated:
    - Home Page
    - Login Page
    - Contact Page
    - Navbar and Footer
  - Added frontend functionality for the chatbot.
  - Enhanced the Home Page using Framer Motion.
  - Designed and updated the glossary.
  - Implemented multilingual support for Indian languages.
  - Enhanced the Forum UI for a better user experience.

- **Vineeth**: 
  - Designed the UI for Login/Signup pages.
  - Assisted with the Law Chronicles page.
  - Designed the UI for the chatbot.
  - Made the UI responsive for mobile resolutions (Chatbot, Login).

- **Nayak**: 
  - Designed the News Block sections to provide informative resources.
  - Assisted with the Login/Signup page.
  - Designed the Glossary section.
  - Designed the Law Chronicles page.




## Setup Instructions

1. **Clone the Repository**:
   - Clone the repository:
     ```bash
     git clone https://github.com/Akileshdash/saral_samvidhan.git
     ```
   - Navigate to the `saral_samvidhan` folder:
     ```bash
     cd saral_samvidhan
     ```

2. **Install Dependencies**:
   - To install dependencies in the main folder, run:
     ```bash
     npm install
     ```
   - Then, navigate to the Chat Bot Backend folder and run:
     ```bash
     cd ChatBotBackend
     npm install
     ```

3. **Start the Servers**:
   - In the main folder, run:
     ```bash
     node server.js
     ```
   - In the Chat Bot Backend folder, run:
     ```bash
     node index.js
     ```

4. **Run the Development Environment**:
   - Finally, in the `saral_samvidhan` folder, run:
     ```bash
     npm run dev
     ```

## Screenshots 
![image](https://github.com/user-attachments/assets/f2c42656-7fe3-45cc-ae2b-d7047706b9d8)
___
![image](https://github.com/user-attachments/assets/2d9ecb16-5e93-4b57-a381-2ed0502f25da)
___
![image](https://github.com/user-attachments/assets/76988dc0-df6d-48f6-ae73-190bd41f8f36)
___
![image](https://github.com/user-attachments/assets/25c4d882-f642-49f5-b0cb-56ce0840d31f)
___
![image](https://github.com/user-attachments/assets/6e856f7e-3257-4cd5-b1a5-43650de7bdfe)
___
![image](https://github.com/user-attachments/assets/8050ccd1-13fb-4859-92d9-5064ed5dada5)
___
![image](https://github.com/user-attachments/assets/2f9e033d-8c94-41d2-b70c-4c1f08368f05)
___
![image](https://github.com/user-attachments/assets/50c5b6cc-c95e-45da-ad7f-dddced5b21a4)





