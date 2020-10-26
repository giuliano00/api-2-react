  
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component{

state = {
response: [],
estado: null

}

handlerBuscar(t){

  var buscar = t.target.value;
  this.setState({value : buscar });

}

handlerCLick = () =>{

  var buscar = this.state.value;

 if(buscar == null ){
  axios.get("https://kitsu.io/api/edge/characters/"
  )
  .then(
    dato => {
      console.log( dato.data);

      this.setState({
        response: dato.data,
        estado: true
      })
      console.log(this.state)

    });

 }else{

  axios.get("https://kitsu.io/api/edge/characters/"+buscar)
  .then(
    dato => {
      console.log( dato.data);

      this.setState({
        response: dato.data,
        estado: true
      })
      console.log(this.state)

    });
  }
}

handlerCLickRandom = () =>{

  axios.get("https://kitsu.io/api/edge/characters/")
  .then(
    dato => {
      console.log( dato.data);

      this.setState({
        response: dato.data,
        estadoR: true
      })
      console.log(this.state)
    });
}
  render() {
    if(this.state.estado != true && this.state.estadoR != true){
      return (
        <div className="App">
          <header className="App-header">
           
          <div>
            <h2>Buscar un personaje por id</h2>
            <input type="text" name="name" pattern="[a-z]{1,15}" onChange={this.handlerBuscar.bind(this)}/>
            <input type="button" value="Buscar" onClick={this.handlerCLick.bind(this)}/>
          </div>

         
          </header>
        </div>
      );

      }else if(this.state.estado == true) {
      return (
        <div className="App">
          <header className="App-header">
           
          <div>
            <h2>Buscar otro personaje por id</h2>
            <input type="text" name="name" pattern="[a-z]{1,15}" onChange={this.handlerBuscar.bind(this)}/>
            <input type="button" value="Buscar" onClick={this.handlerCLick.bind(this)}/>

          </div>
          </header>
        </div>
      );
  }
}
}

export default App;

