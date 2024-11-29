require('dotenv').config();

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json()) // To parse JSON bodies

// Sample route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' })
})

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const path = require('path')
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Fallback route to serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
