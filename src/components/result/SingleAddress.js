import React, { Component } from 'react';
import axios from 'axios';
import { Table, Container } from 'reactstrap';

class SingleAddress extends Component {
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

    let displayLatestBlock = blockData.map((value, index) => {
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
                <th scope="row">Address</th>
                <td>{ value.address }</td>
              </tr>
              <tr>
                <th scope="row">Final blance</th>
                <td>{ value.final_balance }</td>
              </tr>
              <tr>
                <th scope="row">Hash160</th>
                <td>{ value.hash160 }</td>
              </tr>
              <tr>
                <th scope="row">Number of transaction</th>
                <td>{ value.n_tx }</td>
              </tr>
              <tr>
                <th scope="row">Total received</th>
                <td>{ value.total_received }</td>
              </tr>
              <tr>
                <th scope="row">Total send</th>
                <td>{ value.total_sent }</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
    });

    return(
      <Container>
        <p><strong>Bitcoin Address</strong> Addresses are identifiers which you use to send bitcoins to another person.</p>
          { displayLatestBlock }
      </Container>
    )

  }
}

export default SingleAddress;