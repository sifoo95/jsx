import video from "./videos/video.mp4"
import react from 'react';
import img1 from './images/phot2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{borderStyle:"solid", maxwidth:"100vw"}}/>
<h1 style={{color:"red"}}> seyfeddine ghrimil </h1>
<div>
  <img src={img1} alt=""/>
</div>
<div>
  <img src="./images/phot1.jpg" alt=""/>
</div>
<video width="320" height="240" controls>

 <source src={video} type="video/mp4" />

</video>
    </div>
  );
}

export default App;
