import './App.css'
import Cube from './puzzles3d/Cube'

function App() {

  return (
    <>
      <div className="navbar-top">
        <div className="square green"></div>
        <div className="square orange"></div>
        <div className="square blue"></div>
        <div className="square orange"></div>
        <div className="square blue"></div>
        <div className="square red"></div>
        <div className="square green"></div>
        <div className="square red"></div>
        <div className="square blue"></div>
      </div>
      <div className="navbar">
        <div className="navbar-side">
          <div className="square white"></div>
          <div className="square green"></div>
          <div className="square white"></div>
          <div className="square yellow"></div>
          <div className="square orange"></div>
          <div className="square white"></div>
          <div className="square yellow"></div>
          <div className="square yellow"></div>
          <div className="square orange"></div>
        </div>
        <img src='rubik.png' alt="rubik's cube icon" className="icon" />
        <div className="navbar-side">
          <div className="square orange"></div>
          <div className="square blue"></div>
          <div className="square orange"></div>
          <div className="square orange"></div>
          <div className="square red"></div>
          <div className="square green"></div>
          <div className="square red"></div>
          <div className="square white"></div>
          <div className="square white"></div>
        </div>
        <div className="navbar-side margin-left">
          <div className="square white"></div>
          <div className="square yellow"></div>
          <div className="square red"></div>
          <div className="square red"></div>
          <div className="square yellow"></div>
          <div className="square green"></div>
          <div className="square blue"></div>
          <div className="square white"></div>
          <div className="square blue"></div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="square yellow"></div>
        <div className="square yellow"></div>
        <div className="square yellow"></div>
        <div className="square red"></div>
        <div className="square green"></div>
        <div className="square orange"></div>
        <div className="square red"></div>
        <div className="square blue"></div>
        <div className="square red"></div>
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
      <Cube />
    </>
  )
}

export default App
