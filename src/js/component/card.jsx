import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  let cardWidth = !props.width ? "100%" : props.width;
  return (
    <div className="card " style={{ width: cardWidth }}>
      <img src={props.cardImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.innerText}</p>
        <a href={props.buttonUrl} className="btn btn-primary" onClick={props.onClick}>
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
}


Card.propTypes = {
  cardImage: PropTypes.string,
  title: PropTypes.string,
  innerText: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonUrl: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func
};

export default Card;
