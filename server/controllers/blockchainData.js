const axios = require('axios');

let blockData = []

let getHashData = (req, res, next) => {
  // console.log(req.params.hash);

  axios.get(`https://blockchain.info/rawblock/${ req.params.hash }`)
  .then((response) => {
    blockData.push(response.data)
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
    blockData.push(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger! ${ error }`)
  });
}

let getResult = (req, res, next) => {
  res.status(200).send(blockData)
}

let newIndex = []
let finalData = []
let getTransaction = (req, res, next) => {
  let { transactionIndex }  = req.body
  newIndex = transactionIndex.slice(0, 2)
  console.log(newIndex);

  for(let i = 0; i < newIndex.length; i++) {
    console.log(`newIndex${ i }: ${ newIndex[i] }`)
    axios.get(`https://blockchain.info/rawtx/${ newIndex[i] }`)
    .then((response) => {
      // console.log(response)
      finalData.push(response.data)
      console.log(finalData);
      res.status(200).send(finalData)

    })
    .catch((error) => {
      console.log(`Danger! ${ error }`)
    });
  }

  
}

module.exports = {
  getHashData,
  getAddressData,
  getResult,
  getTransaction,
}
// 1MDUoxL1bGvMxhuoDYx6i11ePytECAk9QK
// 1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F
// 0000000000000538200a48202ca6340e983646ca088c7618ae82d68e0c76ef5a
// 00000000000007d0f98d9edca880a6c124e25095712df8952e0439ac7409738a
// 326bc2b4082b732c975219883a03739799029c5a8d1e0eabf1c9acbbe6da97d7