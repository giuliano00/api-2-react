import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends React.Component{

  componentDidMount(){
    axios.get('https://kitsu.io/api/edge/characters/1').then(result=>{console.log(result.data)}).catch(console.log)

  }
  render(){
    return(<h1>kitsu api</h1>);
    
  }
}
export default App;