import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import Countrycard from "./Countrycard";
import ViewToggler from "./ViewToggler";
import Continents from "./Continents";

class Countries extends Component {
  state = {
    countries: [],
    isLoading: true,
  };
  componentDidMount() {
    this.getCountry();
  }
  componentDidUpdate(previousProps, previousState) {
    console.log("this component has updated!");
    if (this.props.continentid !== previousProps.continentid) {
      this.getCountry();
    }
  }
  getCountry = () => {
    axios
      .get(
        `https://seringame.herokuapp.com/continents/${this.props.continentid}`
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ countries: data.countries, isLoading: false });
      });
  };

  render() {
    const { isLoading, countries } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main className="countrycard">
        <ViewToggler className="continentdropdown">
          <Continents className="drondowncontent" />
        </ViewToggler>
        {countries.map((country) => {
          return (
            <Countrycard className="items" key={country.id} {...country} />
          );
        })}
      </main>
    );
  }
}

export default Countries;
