// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokemonData } from "./Components/PokemonDatas";
import Halaman1 from "./Components/Pages1";
import Halaman2 from "./Components/Pages2";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Button from "./elements/Button";

function App() {
  return (
    <>
      <div className="container">
        <h1>TugasMod5_PRPLBK</h1>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <PokemonData>
          <div className="content">
            <Router>
              <Routes>
                <Route path="/" element={<Halaman1 />} />
                <Route path="/halaman2" element={<Halaman2 />} />
              </Routes>
              {/* <Button /> */}
            </Router>
          </div>
        </PokemonData>
      </div>
    </>
  );
}

export default App;
