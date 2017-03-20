import React, { Component } from 'react';
import '.././mainView.css';
import logo from '../../../assets/logo.png';

class renderHeader extends React.Component {
  constructor(props) {
    super(props);
    console.log("entro al render");
  };


  render() {
  var pagId = localStorage.getItem('pagina');
  if (pagId == "home") {
  	console.log("entro al home comun");
    return(
      <header className="main-view__header">
      <a href="/"><img src={logo} className="main-view__logo" alt="logo" /></a>
      </header>
    );
 }
  else{
  	console.log("entro al otro home");
  	return (
      <header className="main-view__header">
      <h1>BUSCADOR</h1>
      <a href="/"><img src={logo} className="main-view__logo" alt="logo" /></a>
      <h1>BUSCADOR</h1>
      </header>
    );
  }
  }
}

export default renderHeader;

