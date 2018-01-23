const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../client/dist'));

app.get('/test', (req, res) => {
  console.log(req.body);
  res.status(200).send('mesage recieved');
})

app.post('/sort', (req, res) => {
  console.log(req.body.searchTerm);
  res.status(201).send({'message': req.body.searchTerm});
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
});

