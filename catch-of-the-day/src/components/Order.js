import React from 'react';
import { render } from 'react-dom';
import AddFishForm from "./AddFishForm";

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <h2>Order</h2>
        <AddFishForm addFish={this.props.addFish} />
      </div>
    );
  }
}

export default Order;