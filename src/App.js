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

        <div className="img-set">
          <img className="img-style" src={imageInSrc} alt ='myImage' /> <br />
          <img className="img-style" src="/imageInPublic.jpg" alt="myimage" />
        </div>

        <div className="vid-style">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KSsG65TXo3Q" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
          

        </div>

        
    
    </div>
  );
}

export default App;
