import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import ToDos from "./Components/ToDos/ToDos";
import ToDosDetails from "./Pages/ToDosDetails/ToDosDetails";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/todos" element={<ToDos/>}/>
              <Route path="/todos/:id" element={<ToDosDetails/>}/>
          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
