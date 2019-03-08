'use strict';

const express = require('express'); 

const app = express();
const bodyParser = express.json();  

let data = [{name: 'Chris'}]; 

app.get('/', (req, res, next) => {
  res.status(200).json(data).end(); 
}); 

app.post('/', bodyParser, (req, res, next) => { 
  data.push({name: req.body.name}); 
  res.status(201).json({name: req.body.name});  
});

app.listen(8000, () => console.log('Server listening on port 8000'));  

module.exports = {app}; 