import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="asset/basu.jpg" alt="Basu Khanal" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Basu Khanal</h1>
          <h3>
            Software <span>Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="asset/down-arrow.png" alt="A down arrow" />
        </a>
      </div>
    </div>
  );
}
