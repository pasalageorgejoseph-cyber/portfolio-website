function ProjectCard({ project }) {
  return (
    <article className="project-card card fade-in">
      <div className="project-header">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-tech">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="project-links">
        <a className="btn btn-outline" href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn" href={project.demo} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
