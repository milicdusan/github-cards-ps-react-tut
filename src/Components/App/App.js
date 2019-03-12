import React from 'react';
import Form from '.././Form/Form';
import CardList from '.././CardList/CardList';
import './App.css';

class App extends React.Component {
  state = {
    cards: []
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      cards: [...prevState.cards, profileData]
    }));
  }

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
