
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

import Card from "./Components/Card";
import { ContextProvider } from "./Components/utils/global.context";



function App() {


  return (
 <ContextProvider> 
      <div className="App">
        
          <Navbar/>
          
          <Card/>
          <Footer/>
          <Outlet/>
      </div>
      </ContextProvider>
      
  );
}

export default App;
