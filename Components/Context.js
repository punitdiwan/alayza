import React, { useContext,useState } from "react";

const AppContext = React.createContext();




const AppProvider = ({ children }) => {

    const [cart1,setCart1] = useState(0);


  return (
    <AppContext.Provider value={{cart1,setCart1}}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext , AppProvider, useGlobalContext};
