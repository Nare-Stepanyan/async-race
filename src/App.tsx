import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
