import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList/Card_List';
import {SearchBox} from './components/SearchBox/SearchBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [ ],
      searchFiled: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchFiled: e.target.value})
  }

  render () {
    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes( this.state.searchFiled.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder = 'searchs monsters'
        handleChange = { this.handleChange }       
        />
        <CardList monsters = { filteredMonsters } />            
      </div>
    );
  }  
}

export default App;
