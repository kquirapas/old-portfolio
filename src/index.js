import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import LinkTree from './components/LinkTree';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjContent from './components/ProjContent';
import Experiments from './components/Experiments';
import ExpContent from './components/ExpContent';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound.js';

import reportWebVitals from './reportWebVitals';
import GoToTop from './components/GoToTop';

import Navbar from './components/Navbar';
import Fonts from './modules/fonts';

import { Helmet } from 'react-helmet';

function MetaTags() {
  return (
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet" />

      <meta property="og:title" content="Kristian Quirapas | Portfolio" />
      <meta property="og:url" content="https://kquirapas.github.io" />
      <meta property="og:description" content="A blockchain engineer's passion for building and security." />
      <meta property="og:image" content="/assets/meta-image.jpg" />
      <meta property="og:type" content="website" /> 

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kristian Quirapas | Portfolio" />
      <meta name="twitter:url" content="https://kquirapas.github.io" />
      <meta name="twitter:description" content="A blockchain engineer's passion for building and security." />
      <meta name="twitter:image:src" content="/assets/meta-image.jpg" /> 

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <MetaTags />
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
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Fonts />
//     <LinkTree />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
