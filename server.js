const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/teams', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/teams.html'));
});

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/news.html'));
});

app.get('/shop', (req, res) => {
    res.redirect('/');  // Redirect to home page for now
});

app.get('/submit', (req, res) => {
    res.redirect('/');  // Redirect to home page for now
});

// Handle 404
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
