import { Routes, Route, Link } from "react-router-dom";
import './style.css';
import WeatherBox from "./page/WeatherBox";


function App() {
  return (
    <div className="wrap">
      <header>
        <Link to="/">
          <h1 className="app-tit"><img src={`${process.env.PUBLIC_URL}/img/title.png`} alt="title-logo"/></h1>
        </Link>
      </header>
      <WeatherBox />

    </div>
  );
}

export default App;
