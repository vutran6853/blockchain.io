const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const port = 3002;
const app = express();

let { getHashData, getAddressData } = require('./controllers/blockchainData');

app.use(cors());
app.use(json());

////  Blockchain Endpoint
app.get('/api/getHashData/:hash', getHashData);
app.get('/api/getAddressData/:address', getAddressData);


app.listen(port, () => {
  console.log(`Sever is up and listening on port ${ port }`);
});