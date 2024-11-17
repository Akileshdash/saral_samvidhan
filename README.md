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

- **Akilesh**: 
  - Worked on frontend development and implemented Tailwind CSS.
  - News API has been implemented.
  - Frontend for News Block Section. 
  - Inititalzed Environment and Players in the game.
  - SetUp the physics and crontrols for the same.


- **Shivadharshan**: 
  - Developed game animations.
  - Created the player model.
  - Designed controllers for both the player and car.
  - Integrated the backend server with mongodb
  - Developed backend for login register and law chronicles
  - Fixed cookie and session management 

- **Preet**: 
  - Created UI for chatbot.  
  - Integrated the chatbot into the platform.
  - Created the sentiment analysis feature which will further be used into moderation of community forum.
  - Frontend fixes.

- **Nayak**:
  - Developed the Login and SignUp pages.
  - Designed and implemented the news block section.
  - Helped in fronted development. 

- **Lavkush**:  
  - Constructed the foundational layout of the frontend for all pages.
  - Developed frontend for Law Chronicals. 
  - Implemented Translation into multiple languages across the website.

- **Vineeth**: 
    - Developed the Login and SignUp pages.
    - Made several frontend improvements to enhance user experience.
    - Supported in Data Collection.







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

Screenshots 
![image](https://github.com/user-attachments/assets/f2c42656-7fe3-45cc-ae2b-d7047706b9d8)
![image](https://github.com/user-attachments/assets/2d9ecb16-5e93-4b57-a381-2ed0502f25da)


