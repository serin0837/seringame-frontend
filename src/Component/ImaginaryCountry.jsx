import React, { Component } from "react";
import axios from "axios";

//countryadder
class ImaginaryCountry extends Component {
  state = {
    country_name: "",
    capital: "",
    description: "",
    country_img: "",
    populations: "very small",
    religions: "christianity",
  };
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    //add country to database
    axios
      .post("https://seringame.herokuapp.com/countries", { ...this.state })
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    return (
      <form className="imaginarycountry" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={this.handleInput}
            name="planet_name"
            required
          ></input>
        </label>
        <br />
        <label>
          Capital:
          <input
            type="text"
            onChange={this.handleInput}
            name="capital"
            required
          ></input>
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            onChange={this.handleInput}
            name="description"
            required
          ></input>
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            onChange={this.handleInput}
            name="country_img"
            required
          ></input>
        </label>
        <br />
        <label>
          Population:
          <select onChange={this.handleInput} name="populations">
            <option value="very small">Very Small</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="very large">Very Large</option>
          </select>
        </label>
        <label>
          <br />
          Religion:
          <select onChange={this.handleInput} name="religions">
            <option value="christianity">Christianity</option>
            <option value="islam">Islam</option>
            <option value="hinduism">Hinduism</option>
            <option value="unaffiliated">Unaffiliated</option>
            <option value="buddhism">Buddhism</option>
            <option value="make yours">Make yours</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Country!</button>
      </form>
    );
  }
}

export default ImaginaryCountry;
