import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';
import Friends from './Component/Friends/Friends';


function App() {
  return (
    <div className="App">
      <h1>Use Routes</h1>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Friends" element={<Friends/>} />
        
        <Route path="/About" element={<About />} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
