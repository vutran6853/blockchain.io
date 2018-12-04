import React, { Component } from 'react';
import axios from 'axios';
import { Input, Container, Row, Col, Button }  from 'reactstrap';
import './dashBoard.css';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userInputData: '',
     }
     this.handleUserInput = this.handleUserInput.bind(this);
     this.handleSubmitData = this.handleSubmitData.bind(this);
     this.getLatestBlock = this.getLatestBlock.bind(this);
  }

  handleUserInput(value) {
    this.setState({ userInputData: value })
  }

  ////  Check the length of user input for hash block, transaction, address
  ////  Http request
  ////  Send user to result page to view the result data
  handleSubmitData() {
    let { userInputData } = this.state
    let checkString = userInputData[0] + userInputData[1] + userInputData[2] + userInputData[3]
    console.log(userInputData.length);
    if(userInputData.length === 64 && checkString === '0000') {
      axios.get(`/api/getSingleBlock/${ userInputData }`)
      .then(this.props.history.push('/result/singleBlock'))
      .catch((error) => {
        console.log(`Danger! ${ error }`)
      });
    } else if(userInputData.length === 64 && checkString !== '0000') {
              axios.get(`/api/getSingleTransaction/${ userInputData }`)
              .then(this.props.history.push('/result/singleTransaction'))
              .catch((error) => {
                console.log(`Danger! ${ error }`)
              });
    } else if(userInputData.length === 34 || userInputData.length === 40){
              axios.get(`/api/getSingleAddress/${ userInputData }`)
              .then(this.props.history.push('/result/singleAddress'))
              .catch((error) => {
                console.log(`Danger! ${ error }`)
              });
    } else {
      return null
    }
  }

  getLatestBlock() {
    axios.get('/api/getLatestBlock')
    .then(this.props.history.push('/result/latestBlock'))
    .catch((error) => {
      console.log(`Danger! ${ error }`)
    });
  }


  render() {
    return (
      <Container fluid className='dashBoardBox'>
        <Row>
          <Col xs='6'>
            <Input placeholder='You can search for things like...Address, Transaction, Block, or Hash' onChange={ (e) => this.handleUserInput(e.target.value) }></Input>

          </Col>
          <Button onClick={ () => this.handleSubmitData() }>Go</Button>

        </Row>
        <Row>
          <Col xs='6'>
          <p>You can search for things like...Address, Transaction, Block, or Hash</p>

          </Col>

        </Row>

          <Button onClick={ () => this.getLatestBlock() }>Latest block</Button>

        
      </Container>
    );
  }
}

export default DashBoard;