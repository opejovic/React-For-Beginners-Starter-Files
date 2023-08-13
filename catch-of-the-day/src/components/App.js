import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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

  addToOrder = (index) => {
    console.log(index);
    let order = { ...this.state.order }
    order[index] = order[index] + 1 || 1;
    this.setState({order});
  }

  render() {
    return (
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Fish Daily" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key =>
                <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
              )}
            </ul>
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