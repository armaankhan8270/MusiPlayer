import './App.css';
import Downloadpage from './Components/DownloadPage';
import Footer from './Components/Footer';
import Help from './Components/Help';
import Home from './Components/Home';
import MediaPlayer from './Components/MediaPlayer';
import MusicPlayer from './Components/MusicPlayer';
import Nav from './Components/Nav';
import Signin from './Components/Signin';
// import tracks from './Components/tracks';import * as ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import TailwindNav from './Components/TailwindNav';


function App() {
  return (
    <div className="App ">
     <h1 className='my-2'>Music App</h1>
     {/* <MusicPlayer/> */}
     <HashRouter>
     {/* <TailwindNav/> */}
     {/* <Nav/> */}
     
     {/* <Signin/> */}
     {/* <Home/> */}
     <NavBar/>
     {/* <Downloadpage/> */}
       <Routes>
          <Route path="/" element={<MusicPlayer />} />
          <Route path="/MusicPlayer" element={<MusicPlayer />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Signin" element={<SignUp/>} />
          <Route path="/Signup" element={<Signin/>} />
          {/* <Route path="/Signup" element={<MusicPlayer />} /> */}
       </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
