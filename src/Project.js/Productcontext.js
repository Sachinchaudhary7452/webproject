

import React, { createContext, useContext,useEffect } from 'react';
import axios from "axios";
const AppContext = createContext();
const API = "https://jsonplaceholder.typicode.com/photos";

const AppProvider = ({ children }) => {

 const getProduct = async (url) => {
  const res = await axios.get(url);
  const Products = await res.data;
  console.log(Products);
 };

  useEffect (() => {
    getProduct(API);
  },[])
  return <AppContext.Provider value={{myname: ""}}>{children}</AppContext.Provider>;
};
//Custom Hooks....

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
