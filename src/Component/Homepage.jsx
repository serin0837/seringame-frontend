import React from "react";
import Continents from "./Continents";

const Homepage = () => {
  return (
    <section>
      <nav>
        <Continents />
      </nav>
      <main>
        <img
          className="world_img"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag-map_of_the_world_%282017%29.png"
        />
      </main>
    </section>
  );
};

export default Homepage;
