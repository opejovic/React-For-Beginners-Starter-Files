import React from 'react';
import { render } from 'react-dom';

class StorePicker extends React.Component {

  goToStore = (event) => {
    event.preventDefault();
    console.log(this);
  }
  
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2> 
        <input type="text" required placeholder="Store Name" />
        <button type="Submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;