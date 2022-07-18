import React, {useState, useEffect }from "react";
import "../src/categories.styles.scss";
import { Home } from "./Components/Routes/home/Home.component";
import { Routes, Route } from "react-router";
import { Navigation } from "./Components/Routes/Navigation/Navigation.component";
import { SignPage } from "./Components/Routes/Signpage/SignPage.component";
import { Shop } from "./Components/Routes/shop/Shop.component";
import { Checkout } from "./Components/Routes/Checkout/Checkout.component";
import { onAuthStateChangedListener} from "./utils/firebase/firebase.utils";
import { createUserAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { createAction } from "./utils/firebase/Reducer/Reducer.utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsub = onAuthStateChangedListener((user) =>{
    if(user){
      createUserAuth(user)
    }
      dispatch(setCurrentUser(user))
     });
     return unsub;
 }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path="shop/*" element={<Shop/>}/>
      <Route path="sign" element={<SignPage/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>

  );
}

export default App;
