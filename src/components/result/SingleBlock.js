import React, { Component } from 'react';
import axios from 'axios';
import { Table, Container, Row, Col } from 'reactstrap';

class SingleBlock extends Component {
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

    let displaySingleBlock = blockData.map((value, index) => {
      // console.log(value, index)
      return(
        <div>
          <p>Block #{ value.height }</p>
          <Row>
            <Col>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Summary</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Number Of Transaction</th>
                    <td>{ value.n_tx }</td>
                  </tr>
                  <tr>
                    <th scope="row">Transaction Fees</th>
                    <td>{ value.fee }</td>
                  </tr>
                  <tr>
                    <th scope="row">Height</th>
                    <td>{ value.height }</td>
                  </tr>
                  <tr>
                    <th scope="row">Bits</th>
                    <td>{ value.bits }</td>
                  </tr>
                  <tr>
                    <th scope="row">Size</th>
                    <td>{ value.size }</td>
                  </tr>
                  <tr>
                    <th scope="row">Version</th>
                    <td>{ value.ver }</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Hashes</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Hash</th>
                    <td>{ value.hash }</td>
                  </tr>
                  <tr>
                    <th scope="row">Previous block</th>
                    <td>{ value.prev_block }</td>
                  </tr>
                  <tr>
                    <th scope="row">Merkle Root</th>
                    <td>{ value.mrkl_root }</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      )
    });

    return(
      <Container>
        <p>SingleBlock</p>
          { displaySingleBlock }
      </Container>
    )
  }
}

export default SingleBlock;