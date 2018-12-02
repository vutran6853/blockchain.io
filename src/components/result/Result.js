import React, { Component } from 'react';
import axios from 'axios';
import DisplayInput from './inputsData';

let lodash = require('lodash');

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      blockData: [],
      blockTransactions: [],
      hashData: [],
      inputsData: [],
      outputsData: [],
      transactionIndexData: [],
     }
     this.handleblockTransactionsFn = this.handleblockTransactionsFn.bind(this);
  }

  componentDidMount() {
    axios.get('/api/getResult')
    .then((response) => {
      // console.log(response.data)
      this.setState({ blockData: response.data });
      return response
    })
    .then((response) => {
      // console.log(response.data)
      this.setState({ blockTransactions: response.data.map((value, index) => {
        return value.tx.splice(0, 5)
        }) 
      });
    })
    .catch((error) => {
      console.log(`Danger! ${ error }`)
    });

    setTimeout(() => {
      this.handleblockTransactionsFn()
    }, 1000)

  }

  handleblockTransactionsFn() {
    let { blockTransactions } = this.state;
    let hash = []
    let inputs = []
    let outputs = []
    let transactionIndex = []
    let finalInputs = []

    let multlayArrayMap = blockTransactions[0].map((value, index) => {
      // console.log(value, index)
      hash.push(value.hash)
      inputs.push(value.inputs)
      outputs.push(value.out)
      transactionIndex.push(value.tx_index)
    });

    let flattenInputData = lodash.flattenDeep(inputs)
    // console.log(flattenInputData);


    let multlayArrayInputs = flattenInputData.filter((value, index) => {
      // console.log(value.prev_out !== undefined);
      // console.log(value.prev_out , undefined);
      if(value.prev_out !== undefined) {
        // console.log(value.prev_out.addr , 'undefined');
        finalInputs.push(value.prev_out.addr)
      } else {
        // console.log(value.prev_out);
        finalInputs.push('No Inputs (Newly Generated Coins)')
      }
    });

    console.log(outputs);
    let multlayArrayOutputs = outputs.filter((value, index) => {
      // console.log(value, index)
      for(let i = 0; i < value.length; i++) {
        console.log('value[i].addr:', value[i].addr, 'valueMap', value)
        console.log(value[0].addr, index);
        if(value[i].addr === value[0].addr) {
          console.log(true)
        } else {
          console.log(false);
        }
      }
    })


    
    this.setState({ hashData: hash })
    this.setState({ inputsData: finalInputs })
    this.setState({ outputsData: outputs })
    this.setState({ transactionIndexData: transactionIndex })
  }


 

  render() {
    let { blockData, hashData, inputsData, outputsData, transactionIndexData } = this.state;

    let displayBlockSummary = blockData.map((value, index) => {
      // console.log(value, index)
      return(
        <div>
          <p>Number of Transactions: { value.n_tx }</p>
          <p>Height: { value.height }</p>
          <p>Time: </p>
          <p>Bits: { value.bits }</p>
          <p>Size: { value.size }</p>
          <p>Version: { value.ver }</p>
          <p>Nonce: { value.nonce }</p>
        </div>
      )
    })

    let displayBlockHashes = blockData.map((value, index) => {
      // console.log(value, index)
      return(
        <div>
          <p>Hash: { value.hash }</p>
          <p>Prev_block: { value.prev_block }</p>
          <p>Merle Root: { value.mrkl_root }</p>
        </div>
      )
    })

    let displayBlockTransctions = hashData.map((value, index) => {
      // console.log(inputsData[index]);
      return(
        <div>
          <p>Hash: { value }</p>
          <p>Input: { inputsData[index] }</p>
          {/* <DisplayInput data={ transactionIndexData } /> */}
        </div>
      )
    })

    return(
 
      <div>
        <p>Summary</p>
        { displayBlockSummary }
        { displayBlockHashes }
        { displayBlockTransctions }
        {/* <DisplayInput data={ transactionIndexData } /> */}
      </div>
    )

    
  }
}

export default Result;