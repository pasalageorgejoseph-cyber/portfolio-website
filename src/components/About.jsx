const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
]

function About() {
  return (
    <section id="about" className="section">
      <div className="section-title">About</div>
      <div className="about-grid">
        <div className="about-copy card fade-in">
          <h2>Design-focused student building real web projects.</h2>
          <p className="text-muted">
            I study frontend development and enjoy turning ideas into accessible experiences. My current focus is on JavaScript, React, and clean UI design.
          </p>
          <p className="text-lg">
            I love learning new tools, collaborating on team projects, and building portfolio-ready interfaces that feel thoughtful and fast.
          </p>
        </div>
        <div className="about-skills">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
