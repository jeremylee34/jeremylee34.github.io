import React from 'react';

export const initial = {
  darkMode: localStorage.getItem('darkMode'),
  bgColor: 'rgb(23 23 23)',
  fontColor: '#e8e6e3',
  sidebarOpen: false,
  baseUrl: 'react-portfolio'
};

export const Context = React.createContext(initial);
export const useContext = React.useContext;
