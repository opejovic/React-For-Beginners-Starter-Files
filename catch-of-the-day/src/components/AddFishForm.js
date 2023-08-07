import React, { Fragment } from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descriptionRef = React.createRef();
  imageRef = React.createRef();
  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      description: this.descriptionRef.current.value,
      image: this.imageRef.current.value,
    };

    this.props.addFish(fish);
    event.currentTarget.reset();
  }
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="name" />
        <input type="number" name="price" ref={this.priceRef} placeholder="price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="description" ref={this.descriptionRef} placeholder="description"></textarea>
        <input type="text" name="image" ref={this.imageRef} placeholder="image" />

        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;