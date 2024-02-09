//bir course yaratıp sonrasında çoğaltacağız
import React from "react";

function Course({ image, title, description }) {
  //propsları bu şekilde de tanımlayabiliriz.
  //console.log(props);
  //const title = props.title;
  //const description = props.title;
  //const {title, description} = props; //üstteki kodun kısaltılması
  return (
    <div className="Course">
      {/*<div>{props.title}</div> 
           <div>{props.description}</div>*/}
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="" />
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

export default Course;

/*
propslarla componenti farklı kullanabiliriz.
*/
