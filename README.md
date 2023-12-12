# WeCanTalk (comp231-group-project-team-11)
chat in real time application

## server side (backend)
server folder contains nodeJS code for the backend
```sh
cd server/
npm start
```

## client side (frontend)
client folder contains reactJS code for the frontend application

```sh
cd client/
npm start
```

# Deployments (Render)

## api deployed
https://comp231-back-end.onrender.com/

### health endpoint 
https://comp231-back-end.onrender.com/api/health 

must return {"msg":"OK"}

## website deployed
https://comp231-front-end.onrender.com/


## Environment Variables:
Create a .env file in the root directory and configure the necessary environment variables, including MongoDB connection details, OpenAI API key, and other required parameters.

Example .env file:

```sh
MONGODB_URL=<your_mongodb_url>
OPENAI_API_KEY=<your_openai_api_key>
PORT=<your_server_port>
```

### Features
1. Health Check Endpoint
Endpoint: /api/health
Method: GET
Description: Used for basic health checking. Responds with a JSON message "OK" when the server is running.
2. Authentication and User Routes
User Routes Module: ./routes/userRoutes
Description: Handles user registration, login, and other authentication-related endpoints.
3. Message Routes
Message Routes Module: ./routes/messages
Description: Manages endpoints related to chat messages.
4. OpenAI Integration
Endpoint: /api/openai
Method: POST
Description: Sends messages to the OpenAI GPT-3.5 Turbo model and retrieves AI-generated responses.
5. Real-Time Chat
Socket.IO Integration: Enables real-time communication between clients for sending and receiving messages.
6. Mailing
Welcome Email Sender: Utilizes nodemailer for sending welcome emails to new users.



### Health Check:
Access the health check endpoint at http://localhost:<your_port>/api/health to ensure the server is running.

API Endpoints:
Explore the various API endpoints for user authentication, message handling, and OpenAI integration.

Real-Time Chat:
Utilize the real-time chat functionality with Socket.IO. Connect to the server using Socket.IO and emit events for user registration and message sending.