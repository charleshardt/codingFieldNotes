import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillsData = [
  { name: "HTML", level: "advanced", color: "dodgerblue" },
  { name: "CSS", level: "intermediate", color: "gold" },
  { name: "JavaScript", level: "advanced", color: "tomato" },
  { name: "React", level: "beginner", color: "mediumseagreen" },
  { name: "WordPress", level: "advanced", color: "palegreen" },
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
        <Skill
          name={skill.name}
          level={skill.level}
          color={skill.color}
          key={skill.name}
        />
      ))}
    </div>
  );
}

function Skill({ name, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "beginner" && "🐣"}
        {level === "intermediate" && "🏃‍♂️"}
        {level === "advanced" && "💪"}
      </span>
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
