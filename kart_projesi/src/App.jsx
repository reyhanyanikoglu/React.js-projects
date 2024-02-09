import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Boots from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import Web from "./images/kompleweb.jpg";

function App() {
  return (
    <>
      <div className="App">
        <section className="hero is-link">
          <div className="hero-body">
            <p className="title">Kurslarım</p>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <Course
                  image={Angular}
                  title="Angular" //props title ve description
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur a fuga nisi autem consequatur reiciendis dolor sapiente ullam deleniti accusamus minima, odit deserunt nam doloremque aperiam nesciunt eveniet officiis eos."
                />
              </div>
              <div className="column">
                <Course
                  image={Boots}
                  title="Bootstrap 5" //props title ve description
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur a fuga nisi autem consequatur reiciendis dolor sapiente ullam deleniti accusamus minima, odit deserunt nam doloremque aperiam nesciunt eveniet officiis eos."
                />
              </div>
              <div className="column">
                <Course
                  image={Csharp}
                  title="C#" //props title ve description
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur a fuga nisi autem consequatur reiciendis dolor sapiente ullam deleniti accusamus minima, odit deserunt nam doloremque aperiam nesciunt eveniet officiis eos."
                />
              </div>
              <div className="column">
                <Course
                  image={Web}
                  title="Frontend" //props title ve description
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur a fuga nisi autem consequatur reiciendis dolor sapiente ullam deleniti accusamus minima, odit deserunt nam doloremque aperiam nesciunt eveniet officiis eos."
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
/*
parent App.jsx child componenti Course.jsx componenti
*/
