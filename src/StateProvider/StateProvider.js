import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer(the Context): this is AKA : "the BIG PICTURE".
export const StateContext = createContext();

// Wrap our app and provide data layer access to every component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
// the hook returns an array,
