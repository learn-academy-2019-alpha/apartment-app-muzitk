import React from "react"
import PropTypes from "prop-types"
import {
   BrowserRouter as Router,
   Route,
   Switch, } from 'react-router-dom'

class NewApartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address1: '',
        address2: '',
        zipcode: '',
        city: '',
        state: '',
        country: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          Address1:
          <input type="text" value={this.state.address1} onChange={this.handleChange} />
          Address2:
          <input type="text" value={this.state.address2} onChange={this.handleChange} />
          Zipcode:
          <input type="text" value={this.state.zipcode} onChange={this.handleChange} />
          City:
          <input type="text" value={this.state.city} onChange={this.handleChange} />
          State:
          <input type="text" value={this.state.state} onChange={this.handleChange} />
          Country:
          <input type="text" value={this.state.country} onChange={this.handleChange} />

        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default NewApartment
