import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>React Genie</p>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/609/615/desktop-wallpaper-black-haired-female-anime-digital-art-anime-girls-pfp-cute-girls-anime-girl-cute-pfp.jpg"
          alt=""
          height={55}
          width={65}
        />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User</span>
              </p>
              <p>How can I help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an incoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an incoming road trip</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an incoming road trip</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an incoming road trip</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img
                src="https://e1.pxfuel.com/desktop-wallpaper/609/615/desktop-wallpaper-black-haired-female-anime-digital-art-anime-girls-pfp-cute-girls-anime-girl-cute-pfp.jpg"
                alt=""
                height={55}
                width={65}
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img height={55} width={65} src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your prompt here..."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            React Genie may display inaccurate information, including about
            people, so double check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
