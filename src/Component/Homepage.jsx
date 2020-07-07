import React from "react";
import Continents from "./Continents";
import ViewToggler from "./ViewToggler";

const Homepage = () => {
  return (
    <main>
      <ViewToggler className="continentdropdown">
        <Continents className="drondowncontent" />
      </ViewToggler>
      <img
        className="world_img"
        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag-map_of_the_world_%282017%29.png"
        alt="world flag"
      />
    </main>
  );
};

export default Homepage;
