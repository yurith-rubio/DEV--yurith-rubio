import '@styles/App.css'
import '@styles/AppMobile.css'
import '@styles/AppIpadDesktop.css'
import React, {useState, useContext} from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom";
import NavBar from '@/NavBar.jsx';
import Home from '@/Home.jsx';
import { ThemeProvider } from "@/ThemeContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <NavBar />
        <Home />
      </ThemeProvider>
    </BrowserRouter>
  )
}

createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)