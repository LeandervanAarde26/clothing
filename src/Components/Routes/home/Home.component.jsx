import React from "react";
import { Directory } from "../../directory/Directory.component";
import { Outlet } from "react-router";

export const Home = () => {
  return (
  <>
   
      <Directory/>
      <Outlet/>
  </>
  );
}
