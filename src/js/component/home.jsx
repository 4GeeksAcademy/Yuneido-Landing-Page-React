import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./card";
import Footer from "./Footer"
//create your first component

const navbarContent = [
  { label: "Home", url: "#Home" },
  { label: "About", url: "#About" },
  { label: "Services", url: "#Services" },
  { label: "Contact", url: "#Contact" },
];

const cardDataArray = [
  {
    cardImage: "https://picsum.photos/500/325?random=1",
    title: "Card Title 1",
    innerText: "This is the inner text for card 1.",
    buttonLabel: "Learn More",
    buttonUrl: "https://example.com/page1",
  },
  {
    cardImage: "https://picsum.photos/500/325?random=2",
    title: "Card Title 2",
    innerText: "This is the inner text for card 2.",
    buttonLabel: "Read More",
    buttonUrl: "https://example.com/page2",
  },
  {
    cardImage: "https://picsum.photos/500/325?random=3",
    title: "Card Title 3",
    innerText: "This is the inner text for card 3.",
    buttonLabel: "Get Started",
    buttonUrl: "https://example.com/page3",
  },
  {
    cardImage: "https://picsum.photos/500/325?random=4",
    title: "Card Title 4",
    innerText: "This is the inner text for card 4.",
    buttonLabel: "Join Now",
    buttonUrl: "https://example.com/page4",
  }
];

const handleClick = (e) =>{
  e.preventDefault()

  alert(e.target.innerText)
}

const Home = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ padding: 0, margin: 0 }}
    >
      <Navbar brand={"Start Bootstrap"} url={"#"} data={navbarContent} />
      <div className="container-fluid d-flex flex-column align-items-center">
        <Jumbotron title="Una Calida Bienvenida" buttonLabel="Hazme click" />
        <div className="row g-3 m-3 justify-content-center" id="cardContainer">
          {cardDataArray.map((post, index) => {
            return (
              <div key={index} className="col-md-3 col-sm-6 d-flex justify-content-center">
                {" "}
                <Card
                  key={index}
                  cardImage={post.cardImage}
                  title={post.title}
                  innerText={post.innerText}
                  buttonLabel={post.buttonLabel}
                  buttonUrl={post.buttonUrl}
                  onClick={handleClick}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
      <Footer website="Landing Page" year="2024"/>
    </div>
  );
};

export default Home;
