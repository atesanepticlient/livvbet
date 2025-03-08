const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST Callback URL
app.post('/callback', (req, res) => {
    console.log('Received POST callback:', req.body); // Log incoming data

    // Process the callback data
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Invalid payload' });
    }

    // Example: Extract relevant data
    const { event, data } = req.body; 

    // Handle different event types (if needed)
    if (event === 'payment_received') {
        console.log('Payment received:', data);
    } else {
        console.log('Other event:', event);
    }

    // Respond to acknowledge the callback
    res.status(200).json({ message: 'Callback received successfully', receivedData: req.body });
});

// Start the server
app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});