  
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
  render() {
    if(this.state.estado != true && this.state.estadoR != true){
      return (
        <div className="App">
          <header className="App-header">
           
          <div>
            <h2>Buscar un personaje por id</h2>
            <input type="text" name="name" pattern="{1,150}" onChange={this.handlerBuscar.bind(this)}/>
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
            <input type="text" name="name" pattern="{1,150}" onChange={this.handlerBuscar.bind(this)}/>
            <input type="button" value="Buscar" onClick={this.handlerCLick.bind(this)}/>

          </div>
            
          <div className="ApiDatosBusqueda">
             <p><img src={this.state.response.data.attributes.image.original} ></img></p>
             <p>nombre: {this.state.response.data.attributes.canonicalName}</p>
             <p>nombre en japones: {this.state.response.data.attributes.names.ja_jp}</p>             
             <p>otros nombres: {this.state.response.data.attributes.otherNames}</p>             
             <p>descripcion: {this.state.response.data.attributes.description}</p>                          
                    
         </div>
            
          </header>
        </div>
      );
  }
}
}
/*
<div className="ApiDatosBusqueda">
    <p>nombre: {this.state.response.data.attributes.canonicalName}</p>             
</div>
*/

export default App;

