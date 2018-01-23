import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      sorted: ''
    }
    
    this.updateTerm = this.updateTerm.bind(this);
    this.submit = this.submit.bind(this);
  }
  
  updateTerm(event) {
    this.setState({
      input: event.target.value
    })
    console.log(this.state.input);
  }
  
  submit() {
    let searchTerm = this.state.input;

    fetch('/sort', {
      method: 'POST',
      body: JSON.stringify({'searchTerm': searchTerm}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      console.log(response.message);
      this.setState({
        sorted: response.message
      })
    })
    // .catch((error) => {
    //   console.log('Error:', error)
    // })
  }

  render() {
    return(
      <div>
        <input type='text' onChange={this.updateTerm}></input>
        <button onClick={this.submit}>Submit</button>
        <p>{this.state.sorted}</p>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));
