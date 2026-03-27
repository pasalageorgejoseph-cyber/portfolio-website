function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-title">Contact</div>
      <div className="contact-grid">
        <div className="contact-card card fade-in">
          <h2>Let’s build something together</h2>
          <p className="text-muted">
            Send a message or connect on LinkedIn and GitHub. I’m open to freelance work, internships, and collaboration.
          </p>
          <div className="contact-info">
            <p>
              <strong>Email</strong>
              <br />
              <a href="mailto:hello@example.com">hello@example.com</a>
            </p>
            <p>
              <strong>Social</strong>
              <br />
              <a href="https://github.com/username" target="_blank" rel="noreferrer">GitHub</a>
              <br />
              <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
        <form className="contact-form card fade-in" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Your message" required />
          </label>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
