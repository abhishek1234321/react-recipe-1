import React, { Component } from 'react';
import './App.css';

import Form from './Components/Form';
import Recipes from './Components/Recipes';

const F2F_API_KEY = 'aedbb2d845263a9cad4857bcec585195';

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async (event) => {
    const recipeName = event.target.elements.recipeName.value;
    event.preventDefault();

    const apiUrl = `http://food2fork.com/api/search?key=${F2F_API_KEY}&q=${recipeName}&count=10`;

    const apiCall = await fetch(apiUrl);
    const data = await apiCall.json();

    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;