import './App.css';

import Router from '../router';
import { BrowserRouter } from 'react-router-dom';
import Header from '../moves/header';
import { LanguageContext } from '../context/language';
import { useState } from 'react';

//lab 2
// import ToDoApp from '../components/todoApp';

//lab 1
// import '../../node_modules/bootstrap/dist/css/bootstrap.css.map'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "../components/navbar"
// import Hero from "../components/hero"
// import FirstSection from "../components/firstSection"
// import Sidebar from "../components/sidebar"
function App() {
const [lang , setLang] = useState('en') 

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{lang , setLang }}>
        <Header />
        <div className=' bg-black '>
          <Router />
        </div>
      </LanguageContext.Provider>
      {/* <ToDoApp/> */}

      {/* <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          <Navbar/>
          <Hero/>
          <FirstSection/>
        </div> */}
    </BrowserRouter>
  );
}

export default App;
