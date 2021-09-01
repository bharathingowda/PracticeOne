import React, { Component } from "react";
class NewParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: true
    };
  }
  toggleShowHide = () => {
    this.setState((state) => ({ isDisplayed: !state.isDisplayed }));
  };
  render() {
    const hello = "Say Hello to learning Props/State in React!";
    return (
      <div>
        {this.state.isDisplayed ? <HelloReact hello={hello} /> : null}
        <Button onClick={this.toggleShowHide} />
      </div>
    );
  }
}
const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show/Hide
  </button>
);
const HelloReact = ({ hello }) => <h1>{hello}</h1>;
export default NewParent;
