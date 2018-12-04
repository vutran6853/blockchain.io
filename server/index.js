const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const port = 3002;
const app = express();

let { getSingleBlock, getSingleTransaction, getLatestBlock, getAddress, getResult } = require('./controllers/blockchainData');

app.use(cors());
app.use(json());

////  Blockchain Endpoint
app.get('/api/getSingleBlock/:hash', getSingleBlock);
app.get('/api/getSingleTransaction/:hash', getSingleTransaction);
app.get('/api/getSingleAddress/:address', getAddress);
app.get('/api/getLatestBlock', getLatestBlock);
app.get('/api/getResult', getResult)

app.listen(port, () => {
  console.log(`Sever is up and listening on port ${ port }`);
});