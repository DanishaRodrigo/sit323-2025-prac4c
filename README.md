1. Project Overview -
A simple Calculator Microservice built with Node.js and Express.
Provides basic arithmetic operations via REST API.
Handles errors for invalid input and division by zero.

2. Setup Instructions
Step 1: Clone the Repository
git clone https://github.com/yourusername/sit323-2025-prac4p.git
cd sit323-2025-prac4p
Step 2: Install Dependencies
npm install
Step 3: Run the Microservice
node server.js
Server will run on http://localhost:3000/

3. Error Handling
Invalid input (non-numeric values) -
{ "error": "Invalid input. Please provide valid numbers." }

Missing parameters-
{ "error": "Invalid input. Please provide valid numbers." }

Division by zero-
{ "error": "Division by zero is not allowed." }

