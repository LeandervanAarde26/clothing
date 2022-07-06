import React from "react";
import "../src/categories.styles.scss";
import { Directory } from "./Components/directory/Directory.component";
import { Home } from "./Components/Routes/home/Home.component";
import { Routes, Route } from "react-router";
import { Navigation } from "./Components/Routes/Navigation/Navigation.component";
import { Signin } from "./Components/Routes/Signin/Signin.component";
import { SignPage } from "./Components/Routes/Signpage/SignPage.component";
import { Shop } from "./Components/Routes/shop/Shop.component";
import { Checkout } from "./Components/Routes/Checkout/Checkout.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path="shop" element={<Shop/>}></Route>
      <Route path="sign" element={<SignPage/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>

  );
}

export default App;
