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
        <a href="https://github.com/briancantrell/bottled-cocktail-math"><img src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" className="fork-me" alt="Fork me on GitHub" /></a>
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
          <h3>About</h3>
          <p>
            Bottled cocktails are great for hosts of large groups, and the lazy. Batch them the night (or week) before, chill, and pop them open when company arrives. Instant hero. To get started you'll need a <a target="_blank" href="https://www.amazon.com/gp/product/B000HJBFC6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000HJBFC6&linkCode=as2&tag=inditwee-20&linkId=5748fbb27b5fe88f8dd81694791c357d">funnel</a>, <a target="_blank" href="https://www.amazon.com/gp/product/B001D6KGTK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001D6KGTK&linkCode=as2&tag=inditwee-20&linkId=dde78732446345358da4b497062c3424">a bottle capper</a>, <a target="_blank" href="https://www.amazon.com/gp/product/B00ZSEH8RG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00ZSEH8RG&linkCode=as2&tag=inditwee-20&linkId=284af27f916a0c93ca28771af2d9bda6">bottle caps</a>, and <a target="_blank" href="https://www.amazon.com/gp/product/B07FJ616KL/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07FJ616KL&linkCode=as2&tag=inditwee-20&linkId=cba3fb5c5e325e2d35dd7edaf0ee140f">some cute bottles</a>.
          </p>
          <p>
            If you find this website useful, or you have an improvement to suggest, <a href="https://twitter.com/briancantrell" target="_blank">please let me know.</a><br /><br />
                For cocktail inspiration, and cocktail bottling pro-tips, I can't recommend Dave Arnold's <a target="_blank" href="https://www.amazon.com/gp/product/0393089037/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0393089037&linkCode=as2&tag=inditwee-20&linkId=ac52a1814092d9d95deab522b0675bc9">Liquid Intelligence</a> enough.
        </p>
        </section>
      </div>
    );
  }
}

export default App;
