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
          <h3>Software Developer</h3>
        </div>
      </div>
    </div>
  );
}
