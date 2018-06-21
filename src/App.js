import 'wingcss';
import './App.css';

import React, { Component } from 'react';
import IngredientList from './components/ingredient_list';
import Bottles from './components/bottles';
import Totals from './components/totals';
import AddIngredient from './components/add_ingredient';
import DilutionProfile from './components/dilution_profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header header text-center">
					<div className="app-logo center" >
						<span role="img" aria-label="cocktail">🍹</span>
					</div>
          <h1 className="app-title">Bottled Cocktail Math</h1>
        </header>
        <div className="appControls container row">
          <div className="ingredient-list col">
						<h3>Ingredients</h3>
            <IngredientList />
            <AddIngredient />
          </div>
					<div className="batch-info col">
						<h3>Batch info</h3>
						<Bottles />
						<DilutionProfile />
          </div>
          <div className="results col">
						<h3>Results</h3>
						<Totals />
					</div>
        </div>
      </div>
    );
  }
}

export default App;
