import React, { Component } from "react";
import Title from "./title";
import Description from "./description";
import Image from "./image";

class SimpleCard extends Component {
  render() {
    return (
      <div>
        <Title title="title" />
        <Description title="description" />
        <Image title="imagesrc" />
      </div>
    );
  }
}

export default SimpleCard;
