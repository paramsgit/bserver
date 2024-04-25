const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle POST requests
app.post('/api/data', (req, res) => {
  const {isOn} = req.body;
  console.log('Received data:', isOn);
  if(isOn==undefined){
    return res.status(401).json({message:"Data not found"})
  }
  res.send('Data received successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
