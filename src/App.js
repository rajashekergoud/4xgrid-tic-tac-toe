import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Component/Main";
import Home from "./Component/Home";
import Game from "./Component/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Gameover" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
