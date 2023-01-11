import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="navbar-top">
        <div className="square red"></div>
        <div className="square red"></div>
        <div className="square red"></div>
        <div className="square red"></div>
        <div className="square red"></div>
        <div className="square red"></div>
        <div className="square red"></div>
        <div className="square red"></div>
        <div className="square red"></div>
      </div>
      <div className="navbar">
        <div className="navbar-side">
          <div className="square yellow"></div>
          <div className="square yellow"></div>
          <div className="square yellow"></div>
          <div className="square yellow"></div>
          <div className="square yellow"></div>
          <div className="square yellow"></div>
          <div className="square yellow"></div>
          <div className="square yellow"></div>
          <div className="square yellow"></div>
        </div>
        <img src='rubik.png' alt="rubik's cube icon" className="icon" />
        <div className="navbar-side">
          <div className="square blue"></div>
          <div className="square blue"></div>
          <div className="square blue"></div>
          <div className="square blue"></div>
          <div className="square blue"></div>
          <div className="square blue"></div>
          <div className="square blue"></div>
          <div className="square blue"></div>
          <div className="square blue"></div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="square orange"></div>
        <div className="square orange"></div>
        <div className="square orange"></div>
        <div className="square orange"></div>
        <div className="square orange"></div>
        <div className="square orange"></div>
        <div className="square orange"></div>
        <div className="square orange"></div>
        <div className="square orange"></div>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NevGDFBfQGw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </>
  );
}

export default App;
