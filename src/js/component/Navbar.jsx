import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
  let brand = props.brand;
  let brandUrl = props.url;
  let options = props.data;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid m-0 d-flex justify-content-evenly">
        <a className="navbar-brand" href={`${brandUrl}`}>
          {brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end me-2"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {options.map((opcion, index) => {
              return (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    aria-current="page"
                    href={opcion.url}
                  >
                    {opcion.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  brand: PropTypes.string,
  url: PropTypes.string,
  data: PropTypes.array,
};

export default Navbar;
