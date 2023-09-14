import './App.css'

import bg from "./bg.svg"
import photo from "./photo.jpg"
import inst from "./inst.png"
import git from "./git.png"
import tele from "./tele.png"
import you from "./you.png"

function App() {

  return (
    <div className='app'>
      <img className='photo' src={photo} alt='' />

      <p className='name'>nalore</p>

      <div className='card'>
        <a href="https://www.instagram.com/doneflory/?ysclid=liheucdd5485132824" className="btn">
          <img className="images" src={inst} />
          <h4>Instagram</h4>
        </a>
        <a href="https://github.com/dnfff" className="btn">
          <img className="images" src={git} />
          <h4>GitHub</h4>
        </a>
        <a href="https://t.me/dnnffff" className="btn">
          <img className="images" src={tele} />
          <h4>Telegram</h4>
        </a>
        <a href="https://youtube.com/@nalore_design?si=PXhyphxKLFCOUyu4" className="btn">
          <img className="images" src={you} />
          <h4>YouTube</h4>
        </a>
      </div>

      <p>Prod. by <span>nalore</span>.</p>

      <img className="bg" src={bg} alt='' />
    </div>
  )
}

export default App
