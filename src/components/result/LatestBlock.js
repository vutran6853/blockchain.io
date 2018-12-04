import React, { Component } from 'react';
import axios from 'axios';
import { Table, Container } from 'reactstrap';

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
                <th scope="row">Block index</th>
                <td>{ value.block_index }</td>
              </tr>
              <tr>
                <th scope="row">Hash</th>
                <td>{ value.hash }</td>
              </tr>
              <tr>
                <th scope="row">Height</th>
                <td>{ value.height }</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
    });

    return(
      <Container>
        <p>Latest Block</p>
          { displayLatestBlock }
      </Container>
    )
  }
}

export default LatestBlock;