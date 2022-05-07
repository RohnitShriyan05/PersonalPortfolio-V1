import "./App.css";
import HomePg from "./components/homepg/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPg from "./components/contactpg/Contact";
import Brightness6Icon from '@mui/icons-material/Brightness6';
import {useState} from 'react';
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <Router>
        <Navbar tbg={darkTheme}/>
        <button className="toggleset fixed bottom-10 right-10" onClick={()=>{
          setDarkTheme(!darkTheme);
        }}><Brightness6Icon fontSize="8vmin"/></button>
        <Routes>
          <Route exact path="/" element={<HomePg />} />
          <Route path="/contact" element={<ContactPg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
