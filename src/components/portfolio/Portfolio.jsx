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
        <div className="item">
          <img src="asset/national-parks.png" alt="national parks" />
          {/* <div class="proj-links">
            <a href="https://github.com/mdbow22/Project-One" rel="noreferrer">
              Repo
            </a>
            <a href="https://mdbow22.github.io/Project-One" rel="noreferrer">
              Demo
            </a>
          </div> */}
          <h3>National Park Website</h3>
        </div>
        <br />
        <br />
        <div class="proj-links">
          <a href="https://github.com/mdbow22/Project-One" rel="noreferrer">
            Repo
          </a>
          <a href="https://mdbow22.github.io/Project-One" rel="noreferrer">
            Demo
          </a>
        </div>
        <div className="item">
          <img src="asset/portfolio.png" alt="portfolio website" />
          <h3>Portfolio Website</h3>
        </div>
        <div className="item">
          <img src="asset/Password-generator.png" alt="password generator" />
          <h3>Password Generator</h3>
        </div>
        <div className="item">
          <img src="asset/schedule-planner.png" alt="schedule planner" />
          <h3>Schedule Planner</h3>
        </div>
        <div className="item">
          <img
            src="asset/team-profile-generator.png"
            alt="team profile generator"
          />
          <h3>Team Profile Generator</h3>
        </div>
      </div>
    </div>
  );
}

{
  /* <img src="asset/Password-generator.png" alt="password generator" />
            <img src="asset/schedule-planner.png" alt="schedule planner" />
            <img src="asset/take-a-break.png" alt="restaurant website" />
            <img
              src="asset/team-profile-generator.png"
              alt="team profile generator"
            />
            <img src="asset/portfolio.png" alt="Basu Khanal portfolio" /> */
}
