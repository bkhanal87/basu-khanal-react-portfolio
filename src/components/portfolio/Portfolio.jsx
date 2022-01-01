import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="item">
          <img src="asset/take-a-break.png" alt="restaurant website" />

          <h3>Take-a-Break</h3>
        </div>
        <br />
        <br />
        <div class="proj-links">
          <a href="https://github.com/bkhanal87/Take-a-Break" rel="noreferrer">
            Repo
          </a>
          <a
            href="https://enigmatic-hamlet-26860.herokuapp.com"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>

        <div className="item">
          <img src="asset/national-parks.png" alt="national parks" />

          <h3>National Park Website</h3>
        </div>
        <br />
        <br />
        <div class="proj-links">
          <a
            href="https://github.com/bkhanal87/National-Parks"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href="https://bkhanal87.github.io/National-Parks/"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
        <div className="item">
          <img src="asset/portfolio.png" alt="portfolio website" />
          <h3>Portfolio Website</h3>
        </div>
        <br />
        <br />
        <div class="proj-links">
          <a
            href="https://github.com/bkhanal87/Basu-Khanal-Portfolio"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href="https://bkhanal87.github.io/Basu-Khanal-Portfolio/"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
        <div className="item">
          <img src="asset/Password-generator.png" alt="password generator" />
          <h3>Password Generator</h3>
        </div>
        <br />
        <br />
        <div class="proj-links">
          <a
            href="https://github.com/bkhanal87/JavaScript-Password-Generator"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href="https://bkhanal87.github.io/JavaScript-Password-Generator/"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
        <div className="item">
          <img src="asset/schedule-planner.png" alt="schedule planner" />
          <h3>Schedule Planner</h3>
        </div>
        <br />
        <br />
        <div class="proj-links">
          <a
            href="https://github.com/bkhanal87/Schedule-Planner"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href="https://bkhanal87.github.io/Schedule-Planner/"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
        <div className="item">
          <img
            src="asset/team-profile-generator.png"
            alt="team profile generator"
          />
          <h3>Team Profile Generator</h3>
        </div>
        <br />
        <br />
        <div class="proj-links">
          <a
            href="https://github.com/bkhanal87/Team-Profile-Generator"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href="https://watch.screencastify.com/v/MXXwXvx42viaQOumLWzE"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
