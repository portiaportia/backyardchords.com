import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import Home from './pages/home/Home';
import Fretboard from "./pages/fretboard/Fretboard";
import Chords from "./pages/chords/Chords";
import Lessons from "./pages/lessons/Lessons";
import Strums from "./pages/strums/Strums";
import Songs from "./pages/songs/Songs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/fretboard" element={<Fretboard />}/>
          <Route path ="/chords" element={<Chords />}/>
          <Route path = "/lessons" element={<Lessons />}/>
          <Route path = "/strums" element={<Strums />}/>
          <Route path = "/songs" element={<Songs />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
