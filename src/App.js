import './App.css';
import Homepage from './homepage.js'
import Explore from './explore';
import Contact from './contact';
import Centreofexclence from './centreofexclence';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dental from './Dental';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage/>} />
        <Route path='/home' element={<Homepage/>} />
        <Route path='/contact' element={"#footer"} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/centreofexclence' element={<Centreofexclence/>} />
        <Route path='/dental' element={<Dental/>} />


        
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
