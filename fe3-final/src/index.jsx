import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './App';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs'
import Contact from './Routes/Contact';
import { ContextProvider } from './Components/utils/global.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
  <ContextProvider>
    <Routes> 
      <Route path='/' element= {<App/>}>
      <Route path='/contacto' element={<Contact/>}/>
        <Route path='/dentist/:id' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
      </Route> 
    </Routes>
    </ContextProvider>
    </BrowserRouter>
  
  </React.StrictMode>
);


