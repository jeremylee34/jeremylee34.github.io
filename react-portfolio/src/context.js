import React from 'react';

export const initial = {
  darkMode: localStorage.getItem('darkMode'),
  bgColor: '#181a1b',
  fontColor: '#e8e6e3'
};

export const Context = React.createContext(initial);
export const useContext = React.useContext;
