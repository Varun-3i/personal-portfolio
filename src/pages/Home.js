import React, { useState, useEffect } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <div className="about">
        <h2 className={showName ? "name-show" : "name-hide"}>Hi, My Name is Varun Bikkumalla</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/varunc9/">
            <LinkedInIcon />
          </a>
          <a href="mailto:varunbikkumalla968@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/Varun-c9/">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, Flutter, BootStrap, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Home;
