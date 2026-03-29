import htmlLogo from '../../Pictures/HTML5_logo_and_wordmark.svg.png'
import cssLogo from '../../Pictures/CSS-Logo-2011.png'
import jsLogo from '../../Pictures/javascript.png'
import reactLogo from '../../Pictures/React_Logo_SVG.svg.png'

const skills = [
  {
    name: 'HTML',
    icon: <img src={htmlLogo} alt="HTML logo" />,
  },
  {
    name: 'CSS',
    icon: <img src={cssLogo} alt="CSS logo" />,
  },
  {
    name: 'JavaScript',
    icon: <img src={jsLogo} alt="JavaScript logo" />,
  },
  {
    name: 'React',
    icon: <img src={reactLogo} alt="React logo" />,
  },
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
            <div key={skill.name} className="skill-item" title={skill.name} aria-label={skill.name}>
              <div className="skill-icon">
                {skill.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
