import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="./44-recording-session-3-pigs.jpg"
      alt="Charles Hardt"
    ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Charles Hardt</h1>
      <p>
        A developer that crafts seamless interfaces with clean code and a
        curious mind. Driven by user experience and a good challenge—always one
        refactor away from perfection.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS💪" color="lightblue" />
      <Skill skill="Git and GitHub💪" color="yellow" />
      <Skill skill="JavaScript💪" color="orange" />
      <Skill skill="React💪" color="lightgreen" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
