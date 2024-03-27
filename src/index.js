import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './pages/form';
import Addstudent from './pages/addStudent';
import Homepage from './homepage';



export default function Route_pr() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Homepage/>}>
         
          <Route path="/Form" element={<Form />} />
          <Route path="/Addstudent" element={<Addstudent />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route_pr />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
