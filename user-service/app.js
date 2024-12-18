const express = require('express');
const app = express();

// Define a route for the root (/) path
app.get('/', (req, res) => {
    res.send('Welcome to User Service!');
});

// You can also define other routes
app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }]);
});

// Specify the port and start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
