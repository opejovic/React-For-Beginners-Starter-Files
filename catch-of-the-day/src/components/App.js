import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

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

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Fish Daily" />
          </div>
          <Order />
          <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes} 
          />
        </div>

        
      </React.Fragment>
    );
  };
}

export default App;