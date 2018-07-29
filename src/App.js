import './App.css';

import React, { Component } from 'react';
import IngredientList from 'components/ingredient_list';
import BottlesContainer from 'containers/bottles_container';
import TotalsContainer from 'containers/totals_container';
import AddIngredient from 'components/add_ingredient';
import DilutionProfile from 'components/dilution_profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header header">
					<div className="app-logo">
						<span role="img" aria-label="cocktail">🍹</span>
					</div>
          <h1 className="app-title">Bottled Cocktail Calculator</h1>
        </header>

        <div className="ingredient-list form-control-set">
          <h3>Ingredients</h3>
          <IngredientList />
          <AddIngredient />
        </div>

        <div className="batch-info form-control-set">
          <h3>Bottles</h3>
          <BottlesContainer />
          <h3 className="dilution-header">Dilution</h3>
          <DilutionProfile />
        </div>

        <div>
          <h3 className="results">Results</h3>
          <TotalsContainer />
        </div>

        <section className="about">
          <h3 className="about">About</h3>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </section>
      </div>
    );
  }
}

export default App;
