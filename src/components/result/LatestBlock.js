import React, { Component } from 'react';
import axios from 'axios';

class LatestBlock extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      blockData: [],
     }
  }

  componentDidMount() {
    axios.get('/api/getResult')
    .then((response) => {
      // console.log(response.data)
      this.setState({ blockData: response.data });
    })
    .catch((error) => {
      console.log(`Danger! ${ error }`)
    });


  }



  render() {
    let { blockData, hashData, inputsData, outputsData, transactionIndexData } = this.state;
    console.log('blockData:', blockData);


    let displayLatestBlock = blockData.map((value, index) => {
      console.log(value, index)
      return(
        <div>
          <p>block index: { value.block_index }</p>
          <p>hash: { value.hash }</p>
          <p>height: { value.height }</p>
          <p>time: { value.time }</p>

        </div>
      )
    })

    return(
 
      <div>
        <p>Latest Block</p>
          { displayLatestBlock }
      </div>
    )

    
  }
}

export default LatestBlock;