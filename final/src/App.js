import React from 'react'
import "./App.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Courses from "./routes/Courses";
import Contact from './routes/Contact';
import Signup from './routes/Signup';
import Harry from './components/Harry';
import Java from './components/Java';
import Machine from './components/Machine';
import BodyLanguage from './components/BodyLanguage';
import Communication from './components/communication';
import TeamWork from './components/TeamWork';
import Art from './components/Art';
import Dance from './components/Dance';
import Music from './components/Music'



const App = () => {
  return (
    <div div className='App'>
      <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />}/>
        <Route exact path={"/about"} element={<About />}/>
        <Route exact path={"/courses"} element={<Courses />}/>
        <Route exact path={"/contact"} element={<Contact />}/>
        <Route exact path={"/signup"} element={<Signup/>}/>
        <Route exact path={"/harry"} element={<Harry/>}/>
        <Route exact path={"/java"} element={<Java/>}/>
        <Route exact path={"/machine"} element={<Machine/>}/>
        <Route exact path={"/bodylanguage"} element={<BodyLanguage/>}/>
        <Route exact path={"/communication"} element={<Communication/>}/>
        <Route exact path={"/teamwork"} element={<TeamWork/>}/>
        <Route exact path={"/art"} element={<Art/>}/>
        <Route exact path={"/dance"} element={<Dance/>}/>
        <Route exact path={"/music"} element={<Music/>}/>
      </Routes>
    </BrowserRouter>
   
   
    </div>
  );
}

export default App;
