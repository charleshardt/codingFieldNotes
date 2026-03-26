import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillsData = [
  { name: "HTML💪", level: "advanced", color: "lightgreen" },
  { name: "CSS💪", level: "advanced", color: "yellow" },
  { name: "JavaScript💪", level: "advanced", color: "lightblue" },
  { name: "React💪", level: "intermediate", color: "orange" },
  { name: "WordPress💪", level: "advanced", color: "lightgray" },
];

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
      src="./recording-session-3-pigs.jpg"
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
  // const skills = skillsData;
  return (
    <div className="skill-list">
      {skillsData.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.name}</span>
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
