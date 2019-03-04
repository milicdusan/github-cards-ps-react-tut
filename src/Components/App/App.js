import React, { Component } from 'react';
import CardList from '.././CardList/CardList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CardList />
      </div>
    );
  }
}

export default App;
