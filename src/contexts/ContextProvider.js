import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

const intialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(intialState);

  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setactiveMenu,
        isClicked,
        setisClicked,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
