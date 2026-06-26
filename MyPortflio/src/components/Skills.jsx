import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "React & React Native",
      tags: ["Frontend", "Mobile", "UI Development"],
    },
    {
      title: "Spring Boot",
      tags: ["Backend", "REST APIs", "Java"],
    },
    {
      title:
        "Software Design & Modeling (UML Diagrams: Use Case, Class, Sequence, Activity)",
      tags: ["Architecture", "Modeling", "System Design"],
    },
    {
      title: "Object-Oriented Programming (OOP) using Java & C++",
      tags: ["Java", "C++", "OOP"],
    },
    {
      title:
        "Computer Troubleshooting & Maintenance (Hardware & Software)",
      tags: ["Hardware", "Software", "Diagnostics"],
    },
  ];

  return (
    <section className="skills pf-section" id="skills">
      <div className="pf-grain" aria-hidden="true" />
      <div className="pf-container">
        <h2 className="pf-heading-xl skills-title">Skills</h2>

        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.title} className="skills-row">
              <span className="skills-row-title">{skill.title}</span>
              <span className="skills-row-tags">
                {skill.tags.map((tag, i) => (
                  <span key={tag}>
                    {i > 0 && <span className="skills-dot"> • </span>}
                    {tag}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
