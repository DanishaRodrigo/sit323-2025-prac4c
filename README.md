1. Project Overview -
A simple Calculator Microservice built with Node.js and Express.
Add advannced arithmetic operations via REST API.
Handles errors for invalid input and division by zero.

2. Setup Instructions-
Step 1: Clone the Repository
git clone https://github.com/yourusername/sit323-2025-prac4p.git
cd sit323-2025-prac4p
Step 2: Create new Repository called "sit323-2025-prac4c"
Step 3: Install Dependencies
npm install
Step 4: Add new endpoints.
Step 5: Run the Microservice
node server.js
Server will run on http://localhost:3000/

4. Error Handling- (Improve the error handling)
Invalid input (non-numeric values) -
{ "error": "Invalid input. Please provide valid numbers." }

Missing parameters-
{ "error": "Invalid input. Please provide valid numbers." }

Division by zero-
{ "error": "Division by zero is not allowed." }

