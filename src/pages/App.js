import './App.css';

import Router from '../router';
import { BrowserRouter } from 'react-router-dom';
import Header from '../moves/header';
import { LanguageContext } from '../context/language';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en')

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Header />
        <div className=' bg-black '>
          <Router />
        </div>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
