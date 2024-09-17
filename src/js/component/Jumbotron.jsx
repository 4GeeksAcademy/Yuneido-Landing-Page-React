import React from "react";
import PropTypes from "prop-types";

function Jumbotron(props) {
  let width = !props.width ? "97%" : props.width
  return (

      <div className="row p-3" id="jumbotron" style={{width: width}}>
        <div className="col-auto">
          <h1 id="jumboTittle">{props.title}</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam cum
            voluptatum id deserunt, quibusdam a optio accusamus repellat odit,
            ipsum non? Blanditiis saepe culpa ad temporibus, voluptate iusto
            beatae doloribus.
          </p>
          <button className="btn btn-primary">{props.buttonLabel}</button>
        </div>
      </div>

  );
}
Jumbotron.propTypes ={
  title: PropTypes.string,

}
export default Jumbotron;
