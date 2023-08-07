import React from 'react';
import { render } from 'react-dom';
import StorePicker from './StorePicker';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // copy the state, 
    // because you never want to reach into state 
    // and modify directly (mutate)
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    // add a fish to the state this.setState()
    this.setState({
      fishes: fishes
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Fish Daily" />
          </div>
          <Inventory />
          <Order addFish={this.addFish} />
        </div>

        
      </React.Fragment>
    );
  };
}

export default App;