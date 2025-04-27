import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Header from './Header/Header.jsx';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Designer } from './Designer/Designer.jsx';
import List from './List/List.jsx';

ReactDOM.createRoot(  document.getElementById('root')
).render(
  <React.StrictMode>
        <Header></Header>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path='/:id' element={<App/>} />
    <Route path="/create" element={<Designer/>} />
    <Route path="/list" element={<List/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
