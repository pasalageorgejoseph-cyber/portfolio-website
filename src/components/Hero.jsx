import profilePic from '../../Pictures/Profile Pic.jpg'

function Hero() {
  return (
    <section id="home" className="hero section fade-in">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Frontend Developer | Student | Tech Enthusiast</p>
          <h1 className="heading-lg">Hi, I’m Pasala George Joseph. I build clean digital experiences.</h1>
          <p className="text-lg text-muted">
            I create modern, responsive interfaces with React and polished interactions for web users.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#projects">
              View Projects
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
    </section>
  )
}

export default Hero
