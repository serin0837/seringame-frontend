import React, { Component } from "react";
import Loader from "./Loader";
import axios from "axios";
import ImaginaryCountry from "./ImaginaryCountry";

class Traveller extends Component {
  state = {
    traveller: [],
    isLoading: true,
  };
  componentDidMount() {
    this.getTraveller();
  }
  componentDidUpdate(previousProps, previousState) {
    // console.log("travaller has updated");
    if (this.props.travellerid !== previousProps.travellerid) {
      this.getTraveller();
    }
  }
  getTraveller = () => {
    axios
      .get(
        `https://seringame.herokuapp.com/travellers/${this.props.travellerid}`
      )
      .then(({ data }) => {
        // console.log(data, "<travellerdata");
        this.setState({ traveller: data, isLoading: false });
      });
  };
  render() {
    const { isLoading, traveller } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        <h5>{traveller.Name}</h5>
        <section>
          <p>add your imaginary country</p>
          <ImaginaryCountry />
        </section>
      </main>
    );
  }
}

export default Traveller;
