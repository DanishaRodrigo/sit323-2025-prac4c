const express = require("express");
const app = express();
const port = 3000;

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Calculator Microservice! Use /add, /subtract, /multiply, or /divide with num1 and num2 query parameters.");
});

// Helper function for error handling
const validateNumbers = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input. Please provide valid numbers.";
    }
    return null;
};

// Addition endpoint
app.get("/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    
    if (error) {
        return res.status(400).json({ error });
    }
    res.json({ result: num1 + num2 });
});

// Subtraction endpoint
app.get("/subtract", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    
    if (error) {
        return res.status(400).json({ error });
    }
    res.json({ result: num1 - num2 });
});

// Multiplication endpoint
app.get("/multiply", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    
    if (error) {
        return res.status(400).json({ error });
    }
    res.json({ result: num1 * num2 });
});

// Division endpoint
app.get("/divide", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);

    if (error) {
        return res.status(400).json({ error });
    }
    if (num2 === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed." });
    }
    res.json({ result: num1 / num2 });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
