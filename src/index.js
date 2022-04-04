import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjContent from './components/ProjContent';
import Experiments from './components/Experiments';
import ExpContent from './components/ExpContent';
import Contacts from './components/Contacts';
import reportWebVitals from './reportWebVitals';
import GoToTop from './components/GoToTop';

import Navbar from './components/Navbar';
import Fonts from './modules/fonts';

ReactDOM.render(
  <React.StrictMode>
    <Fonts />
    <BrowserRouter>
      <GoToTop />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/projects" element={<Projects />}/>
        <Route exact path="/projects/:idx" element={<ProjContent />}/>
        <Route exact path="/experiments" element={<Experiments />}/>
        <Route exact path="/experiments/:idx" element={<ExpContent />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contacts" element={<Contacts />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
