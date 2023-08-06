import React from 'react';
import { render } from 'react-dom';
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
    
  }
  
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2> 
        <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="Submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;