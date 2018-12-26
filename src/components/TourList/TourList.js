import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = { tours: tourData };

  removeItem = id => {
    const new_items = this.state.tours.filter(item => {
      return item.id !== id;
    });

    this.setState({
      tours: new_items
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tour-list">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeItem={this.removeItem} />
          );
        })}
      </section>
    );
  }
}
