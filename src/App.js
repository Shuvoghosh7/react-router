import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Friend from './Component/Friend/Friend';
import About from './Component/About/About';


function App() {
  return (
    <div className="App">
      <h1>Use Routes</h1>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Friend" element={<Friend />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
