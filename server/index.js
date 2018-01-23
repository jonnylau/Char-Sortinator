const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../client/dist'));

app.get('/', (req, res) => {
  res.status(200).send('mesage recieved');
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
});

