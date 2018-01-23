const express = require('express');
const bodyParser = require('body-parser');
const sort = require('../utils/sorter.js').sort;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../client/dist'));


app.post('/sort', (req, res) => {
  let term = req.body.searchTerm;
  let sorted = sort(term);

  res.status(201).send({'message': sorted});
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
});

