import React, { Component } from 'react';
import axios from 'axios';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userInputData: '',
     };
     this.handleUserInput = this.handleUserInput.bind(this);
     this.handleSubmitData = this.handleSubmitData.bind(this);
  }

  handleUserInput(value) {
    // console.log(`value ${ value }`);
    this.setState({ userInputData: value })
  }

  ////  Check the length of user input for address or hash data
  ////  Http request
  ////  Send User to Result View to see the result data
  handleSubmitData() {
    let { userInputData } = this.state;

    if(userInputData.length === 64) {
      axios.get(`/api/getHashData/${ userInputData }`,)
      .then(this.props.history.push('/result'))
      .catch((error) => {
        console.log(`Danger! ${ error }`)
      });
    } else if(userInputData.length === 34){
            axios.get(`/api/getAddressData/${ userInputData }`,)
            .then(this.props.history.push('/result'))
            .catch((error) => {
              console.log(`Danger! ${ error }`)
            });
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        <p>BashBoard Components</p>
        <input placeholder='Enter address'  onChange={ (e) => this.handleUserInput(e.target.value) }></input>
        <button onClick={ () => this.handleSubmitData() }>Go</button>
      </div>
    );
  }
}

export default DashBoard;