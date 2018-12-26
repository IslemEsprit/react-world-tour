import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    show_info: false
  };

  toggleInfo = () => {
    this.setState({
      show_info: !this.state.show_info
    });
  };

  render() {
    const { id, city, name, img, info } = this.props.tour;
    const doRemoveItem = this.props.removeItem;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <span className="close-btn" onClick={() => doRemoveItem(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.toggleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.show_info && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
