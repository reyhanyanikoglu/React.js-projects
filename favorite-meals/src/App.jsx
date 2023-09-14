import "bulma/css/bulma.css";
import "./App.css";
import Meals from "./Meals";
import salmon from "./images/salmon.jpg";
import fettucini_alfredo from "./images/fettucini-alfredo.webp";
import steak from "./images/steak.jpg";
import lentil_soup from "./images/lentil_soup.webp";

function App() {
  return (
    <div className="App">
      <div className="web_title">My Favorite Meals</div>
      <div className="columns">
        <div className="column">
          <Meals
            images={salmon}
            title="Salmon"
            description="Salmon is brimming with omega-3 fats, which have been shown to reduce the risk of high blood pressure, Alzheimer's and rheumatoid arthritis. Salmon also contains vitamin B 12, which has been shown to help lower the risk of coronary heart disease."
          />
        </div>
        <div className="column">
          <Meals
            images={fettucini_alfredo}
            title="Fettucini Alfredo"
            description="A man named Alfredo di Lelio invented it. Di Lelio came up with this famous dish right here in Rome in 1908. Legend says that his wife had lost her appetite after giving birth, so he came up with this simple but delicious pasta recipe."
          />
        </div>
        <div className="column">
          <Meals
            images={steak}
            title="Steak"
            description="A steak is a thick cut of meat generally sliced across the muscle fibers, sometimes including a bone. It is normally grilled or fried. Steak can be diced, cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers.
        "
          />
        </div>
        <div className="column">
          <Meals
            images={lentil_soup}
            title="Lentil Soup"
            description="Lentil soup is a soup with lentils as its main ingredient; it may be vegetarian or include meat, and may use brown, red, yellow, green or black lentils, with or without the husk. Dehulled yellow and red lentils disintegrate in cooking, making a thick soup.
        "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
