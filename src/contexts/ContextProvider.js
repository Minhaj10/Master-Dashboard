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
  const [screenSize, setscreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setisClicked({ ...intialState, [clicked]: true });
  };

  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setactiveMenu,
        isClicked,
        setisClicked,
        handleClick,
        screenSize,
        setscreenSize,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
