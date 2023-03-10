import React, { useContext,useState } from "react";

const AppContext = React.createContext();




const AppProvider = ({ children }) => {

    const [cart,setCart] = useState(0);


  return (
    <AppContext.Provider value="Ravindra Meena">{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext , AppProvider, useGlobalContext};
