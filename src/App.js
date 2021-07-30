import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import "./App.css";

import Routes from './routes';
import AppProvider from './hooks';


function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
