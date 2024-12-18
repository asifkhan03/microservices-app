const express = require('express');
const app = express();

// Add a route for "/"
app.get('/', (req, res) => {
    res.send('Welcome to the Order Service!');
});

// Add other routes as needed
app.get('/orders', (req, res) => {
    res.json([{ id: 1, item: 'Book' }, { id: 2, item: 'Pen' }]);
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
