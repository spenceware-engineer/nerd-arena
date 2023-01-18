import '../App.css'
import Auth from './Auth'
import Face from './Nav/components/Face'
import { useTheme } from 'styled-components'
import { backFaceNav, bottomFaceNav, leftFaceNav, rightFaceNav, upFaceNav } from '../constants/nav.consts'

function App() {
  const theme = useTheme()

  return (
    <>
      <Face theme={theme} colors={upFaceNav} />
      <div className="navbar">
        <Face theme={theme} colors={leftFaceNav} />
        <img src='favicon.ico' alt="rubik's cube icon" className="icon" />
        <Face theme={theme} colors={rightFaceNav} />
        <Face theme={theme} colors={backFaceNav} />
      </div>
      <Face theme={theme} colors={bottomFaceNav} />
      <iframe
        width={16 * window.innerWidth / 20}
        height={9 * window.innerWidth / 20}
        src="https://www.youtube.com/embed/NevGDFBfQGw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
      <Auth />
    </>
  )
}

export default App
