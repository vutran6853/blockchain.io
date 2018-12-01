const axios = require('axios');

let getHashData = (req, res, next) => {
  axios.get(`https://blockchain.info/rawblock/${ req.params.hash }`)
  .then((response) => {
    // console.log(response.data);
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger! ${ error }`)
  });
}

let getAddressData = (req, res, next) => {
  // console.log(req.params.address);

  axios.get(`https://blockchain.info/rawaddr/${ req.params.address }`)
  .then((response) => {
    // console.log(response.data);
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger! ${ error }`)
  });
}

module.exports = {
  getHashData,
  getAddressData
}
// 1MDUoxL1bGvMxhuoDYx6i11ePytECAk9QK
// 1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F
// 0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103
// 0000000000000538200a48202ca6340e983646ca088c7618ae82d68e0c76ef5a
// 00000000000007d0f98d9edca880a6c124e25095712df8952e0439ac7409738a
// 326bc2b4082b732c975219883a03739799029c5a8d1e0eabf1c9acbbe6da97d7