import "./Mode.css";
import { useState } from "react";
import userphotoM from "../Assets/Ellipse 1.svg";
import userphotoF from "../Assets/Ellipse 2.svg";
import image3 from "../Assets/image3.svg";
import image4 from "../Assets/image4.svg";
import image5 from "../Assets/image5.svg";
import smiley from "../Assets/smileyemoji.svg";

const LightDarkMode = () => {
  const [toggle, setToggle] = useState(false);

  function Ontoggle() {
    setToggle((toggle) => !toggle);
  }

  return (
    <div className="body">
      <div className="container" style={{
            backgroundColor: toggle ? 'rgba(0, 0, 0, 0.7)' : '', 
            color: toggle ? 'white' : ''
            }}>

      <div className="boxx" style={{
            backgroundColor: toggle ? 'rgba(100, 190, 78, 0.356)' : ''
        }}>
            <div className="boxx-in" onClick={Ontoggle} style={{
                transition: toggle ? '300ms ease-in-out' : '300ms ease-in-out',
                left: toggle ? '23px' : '',
            }} ></div>
        </div>

        <div className="top">
          <div className="left">
            <p className="top-main">Comments</p>
            <p className="span" style={{
            backgroundColor: toggle ? '#000000' : '',
            }}>13</p>
          </div>

          <div className="right">
            <div className="latest" style={{
            backgroundColor: toggle ? '#151514' : '',
            }}>
              <p style={{
            color: toggle ? 'white' : '',
            }}>Latest</p>
            </div>
            <div className="popular">
              <p style={{color: toggle ? 'white' : '',}}>Popular</p>
            </div>
          </div>
        </div>

        <div className="comment-section" style={{backgroundColor: toggle ? '#030B13' : '',}}>
          <div className="user-input">
            <p className="user-comment" style={{color: toggle ? 'white' : '',}}>Hi</p>
            <p className="span2" style={{backgroundColor: toggle ? '#1A1A1A' : '',}}>@As</p>
            <div className="users" style={{
            backgroundColor: toggle ? '#020811' : '',
            }}>
              <div className="suggested-user1" style={{
            backgroundColor: toggle ? '#061730' : '',
            }}>
                <div className="photo">
                  <img src={userphotoM} alt="" />
                  <span className="active"></span>
                </div>
                <p>Asake Omo</p>
              </div>
              <div className="suggested-user2">
                <div className="photo">
                  <img src={userphotoF} alt="" />
                  <span className="inactive"></span>
                </div>
                <p>Ashabi Chioma</p>
              </div>
            </div>
          </div>
          <hr className="hr" />
          <div className="options">
            <p>B</p>
            <div className="right-options">
              <button id="tag" style={{backgroundColor: toggle ? '#030B13' : ''}}>@</button>
              <button id="send">Send</button>
            </div>
          </div>
        </div>

        <div className="comments">
          <div className="comment">
            <div className="photo">
              <img src={image3} alt="" />
              <span
                className="inactive"
                style={{
                  bottom: "4px",
                  backgroundColor: "#D9D9D9",
                  width: "10px",
                  height: "10px",
                }}
              ></span>
            </div>
            <p>Ayomide Oluwaseun</p>
          </div>
          <div className="more-options">
            <div className="more"></div>
            <div className="more"></div>
            <div className="more"></div>
          </div>
        </div>
        <p className="comment1">
          For the first time in a long time, I can say that this is the best
          concepts I have ever seen. Tech is the future, tech is key, know this
          and the truth <br /> shall set you free.
        </p>

        <div className="reply-options">
          <img src={smiley} alt="" />
          <p className="emoji" style={{backgroundColor: toggle ? '#1E161F' : '',}}>👍🏽 1</p>
          <p className="emoji" style={{backgroundColor: toggle ? '#1E161F' : '',}}>🔥 7</p>
          <div className="reply-time">
            <p style={{fontWeight: '700', fontSize: '16px'}}>Reply</p>
            <p style={{color: '#8A8A8E'}}>8 hour</p>
          </div>
        </div>

        <hr />

        <div className="comments">
          <div className="comment">
            <div className="photo">
              <img src={image4} alt="" />
              <span
                className="inactive"
                style={{
                  bottom: "4px",
                  backgroundColor: "#61D051",
                  width: "10px",
                  height: "10px",
                }}
              ></span>
            </div>
            <p>Chioma Jesus</p>
          </div>
          <div className="more-options">
            <div className="more"></div>
            <div className="more"></div>
            <div className="more"></div>
          </div>
        </div>
        <p className="comment1">Ran into my ex today, mo somo nu 😩</p>

        <div className="reply-options">
          <img src={smiley} alt="" />
          <div className="reply-time">
            <p style={{fontWeight: '700', fontSize: '16px'}}>Reply</p>
            <p style={{color: '#8A8A8E'}}>13 mins</p>
          </div>
        </div>

        <div className="comments" style={{marginLeft: '60px'}}>
          <div className="comment">
            <div className="photo">
              <img src={image5} alt="" />
              <span
                className="inactive"
                style={{
                  bottom: "4px",
                  backgroundColor: "#61D051",
                  width: "10px",
                  height: "10px",
                }}
              ></span>
            </div>
            <p>Pharaoh</p>
          </div>
          <div className="more-options">
            <div className="more"></div>
            <div className="more"></div>
            <div className="more"></div>
          </div>
        </div>
        <p className="comment1" style={{marginLeft: '68px'}}>Hi  @Chioma Jesus , sorry lmao..</p>

        <div className="reply-options" style={{marginLeft: '68px'}}>
          <img src={smiley} alt="" />
          <p className="emoji" style={{backgroundColor: toggle ? '#1E161F' : '',}}>🔥 5</p>
          <div className="reply-time">
            <p style={{fontWeight: '700', fontSize: '16px'}}>Reply</p>
            <p style={{color: '#8A8A8E'}}>13 mins</p>
          </div>
        </div>

        <hr />

        <div className="process">
          <div className="loading"></div>
          <p className="processing">Processing</p>
        </div>

      </div>
    </div>
  );
};

export default LightDarkMode;
