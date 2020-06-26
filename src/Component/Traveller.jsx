import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";

class Traveller extends Component {
  state = {
    travellers: [],
    isLoading: true,
  };
  componentDidMount() {
    axios.get("https://seringame.herokuapp.com/travellers").then(({ data }) => {
      console.log(data);
      this.setState({ travellers: data, isLoading: false });
    });
  }
  render() {
    const { isLoading, travellers } = this.state;
    if (isLoading) return <Loader />;
    return (
      <aside>
        {travellers.map((traveller) => {
          console.log(traveller);
          return (
            <article>
              <p>{traveller.Name}</p>
            </article>
          );
        })}
      </aside>
    );
  }
}

export default Traveller;
