import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './App';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs'
import Contact from './Routes/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Routes> 
      <Route path='/' element= {<App/>}>
      <Route path='/contacto' element={<Contact/>}/>
        <Route path='/dentist/:id' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
      </Route> 
    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);


