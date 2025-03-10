// Create web server
// Create comments route
// Add comments to the comments route
// Listen on port 3000

const express = require('express')
const app = express()

app.get('/comments', (req, res) => {
    res.send('Comments route')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

// Run the server and test the route in the browser