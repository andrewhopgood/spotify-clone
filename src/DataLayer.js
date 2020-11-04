import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext(); //prepares data layer

export const DataLayer = (
  { initialState, reducer, children } //children refers to <App />, what the data layer wraps
) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext); //gives app access to data layer
