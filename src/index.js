import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200?grayscale";

//Camel case for attributes

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img} />
    <img
      className="food"
      src="https://rasamalaysia.com/wp-content/uploads/2011/07/curry-laksa.jpg"
      alt="laksa"
    ></img>
    <img
      className="food"
      src="https://www.visitsingapore.com/content/dam/desktop/global/dining-drinks-singapore/local-dishes/friedkwayteow-carousel1-640x640.jpg"
      alt="kway teow"
    ></img>
  </div>,
  document.getElementById("root")
);
