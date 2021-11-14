import logo from './logo.svg';
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import './styles.css';

function App() {
  let name = "David";
  return (
    <div className="App">
      
      <div style={{border:"solid 1px black", maxWidth:"100vw" }}>

        <h1 className="title red">{name}</h1> <br />

        <img src={imageInSrc} alt ='myImage' /> <br />
        <img src="/imageInPublic.jpg" alt="myimage" />

        </div>

        <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
        </video>
        
    </div>
  );
}

export default App;
