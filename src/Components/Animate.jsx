import "./Animate.css";
import businessman from "../Assets/businessman.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Animate = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div className="wrapper">
      <div className="nav">
        <nav>
          <ul>
            <li>Pricing</li>
            <button>Get Started</button>
          </ul>
        </nav>
      </div>

      <div className="baxs">
        <div className="bax">Lorem, ipsum dolor.</div>
        <div className="bax">Lorem, ipsum dolor.</div>
        <div className="bax" data-aos="fade-up">
          Lorem, ipsum dolor.
        </div>
        <div className="bax" data-aos="fade-up">
          Lorem, ipsum dolor.
        </div>
        <div className="bax" data-aos="fade-left">
          Lorem, ipsum dolor.
        </div>
        <div className="bax" data-aos="fade-right">
          Lorem, ipsum dolor.
        </div>
      </div>
      <div className="hero-box" data-aos="zoom-in">
        <div className="hero-text" data-aos='slide-right'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          porro animi vero excepturi, quisquam qui, aliquam itaque consequatur
          enim architecto quis reiciendis amet dolorem asperiores.
        </div>

        <div className="illustration">
          <div className="circle"></div>
          <img src={businessman} alt="" data-aos="slide-down" />
        </div>
      </div>
    </div>
  );
};

export default Animate;
