import React from "react";

function Meals({ images, title, description }) {
  //const title = props.title;
  //const description = props.description;

  //const { title, description } = props;

  return (
    <div className="Meals">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={images} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>

          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Meals;
