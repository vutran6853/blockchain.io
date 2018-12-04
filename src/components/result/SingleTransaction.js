import React, { Component } from 'react';
import axios from 'axios';
import { Table, Container, Row, Col } from 'reactstrap';

class SingleTransaction extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      blockData: [],
     }
  }

  componentDidMount() {
    axios.get('/api/getResult')
    .then((response) => {
      this.setState({ blockData: response.data });
    })
    .catch((error) => {
      console.log(`Danger! ${ error }`)
    });
  }



  render() {
    let { blockData } = this.state;

    let displaySingleTransctions = blockData.map((value, index) => {
      // console.log(value, index)
      return(
        <div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Summary</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Size</th>
                <td>{ value.size }</td>
              </tr>
              <tr>
                <th scope="row">Weight</th>
                <td>{ value.weight }</td>
              </tr>
              <tr>
                <th scope="row">Block height</th>
                <td>{ value.block_height }</td>
              </tr>
              <tr>
                <th scope="row">Transaction ID</th>
                <td>{ value.tx_index }</td>
              </tr>
              <tr>
                <th scope="row">Time</th>
                <td>{ value.time }</td>
              </tr>
              <tr>
                <th scope="row">Version</th>
                <td>{ value.ver }</td>
              </tr>
              <tr>
                <th scope="row">Weight</th>
                <td>{ value.weight }</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
    });
    
    return(
      <Container>
        <p><strong>Transctions</strong> view information about a bitcoin transaction</p>
          { displaySingleTransctions }
      </Container>
    )
  }
}

export default SingleTransaction;