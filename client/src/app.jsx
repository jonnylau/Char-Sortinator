import React from ('react');
import ReactDOM from ('react-dom');
import $ from ('jquery');


class App extends React.component {
  constructor(props) {
    this.state = {input: ''}
  }
  
  render() {
    return(
      <div>
        <input type='text'>
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
