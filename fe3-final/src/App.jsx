
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

import Card from "./Components/Card";


function App() {



  return (

      <div className="App">
          
          <Navbar/>
          <Card/>
          <Footer/>
          <Outlet/>
      </div>
  );
}

export default App;
