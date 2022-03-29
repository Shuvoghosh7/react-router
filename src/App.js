import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';
import Friends from './Component/Friends/Friends';
import Headder from './Component/Headder/Headder';
import FriendDetail from './Component/FriendDetail/FriendDetail';


function App() {
  return (
    <div className="App">
  
      <Headder/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends/>} />
        <Route path='friend/:friendId' element={<FriendDetail/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
