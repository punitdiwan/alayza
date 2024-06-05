import React, { useContext, useState } from "react";

const AppContext = React.createContext();

// localStorage.setItem("cart-item",cart1)

// const total = localStorage.getItem('items')
const AppProvider = ({ children }) => {
  const [cart1, setCart1] = useState();

  const [data, setData] = useState([]);

  return (
    <AppContext.Provider value={{ cart1, setCart1, data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
