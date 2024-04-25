const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(cors());

// Endpoint to handle POST requests
app.post('/api/data', (req, res) => {
  const {isON} = req.body;
  console.log('Received data:', isON);
  res.send('Data received successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
