import React, {Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

//https://sujeitoprogramador.com/r-api/?api=filmes/
class Header extends Component {
  render(){
    return (
      <div className="header">
          <Link to="/">K-MARQUES FILMES</Link>
      </div>
    );
  }
}

export default Header;
