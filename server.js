const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Calculator Microservice! Use the endpoints like /add, /subtract, /multiply, /divide, /power, /sqrt, or /modulo.');
});


// Function to validate input
function validateNumbers(num1, num2 = null) {
    if (isNaN(num1) || (num2 !== null && isNaN(num2))) {
        return { error: "Invalid input. Please provide valid numbers." };
    }
    return null;
}

// Exponentiation (num1 ^ num2)
app.get('/power', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    res.json({ result: Math.pow(num1, num2) });
});

// Square Root (√num1)
app.get('/sqrt', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    if (isNaN(num1) || num1 < 0) {
        return res.status(400).json({ error: "Invalid input. Number must be non-negative." });
    }
    res.json({ result: Math.sqrt(num1) });
});

// Modulo (num1 % num2)
app.get('/modulo', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    res.json({ result: num1 % num2 });
});

// Existing arithmetic operations
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    res.json({ result: num1 + num2 });
});

app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    res.json({ result: num1 - num2 });
});

app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    res.json({ result: num1 * num2 });
});

app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    if (num2 === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed." });
    }
    res.json({ result: num1 / num2 });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});

