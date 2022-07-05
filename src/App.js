import React from "react";
import "../src/categories.styles.scss";
import { Directory } from "./Components/directory/Directory.component";
import { Home } from "./Components/Routes/home/Home.component";
import { Routes, Route } from "react-router";
import { Navigation } from "./Components/Routes/Navigation/Navigation.component";
import { Signin } from "./Components/Routes/Signin/Signin.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path="signin" element={<Signin/>}/>
      </Route>
    </Routes>

  );
}

export default App;
