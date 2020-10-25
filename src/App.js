import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    handlerTextBox(e){
      var campotexto=e.target.value;
    }

    consultarApi(){

    }

  render(){
  
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          consulta Api
        </a>
        <input type="text" onChange={this.handlerTextBox.bind(this)}></input>
      </header>
    </div>
  );
}

}
export default App;
