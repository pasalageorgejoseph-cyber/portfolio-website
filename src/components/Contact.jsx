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
              <a href="mailto:pasalageorgejoseph@gmail.com" className="contact-email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                pasalageorgejoseph@gmail.com
              </a>
            </p>
            <p>
              <strong>Social</strong>
            </p>
            <div className="social-links">
              <a
                href="https://github.com/pasalageorgejoseph-cyber"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.81 1.103.81 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.217.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/pasala-george-joseph/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm7-17h4.8v2.4h.1c.7-1.2 2.4-2.4 5-2.4 5.4 0 6.4 3.6 6.4 8.3V24H18V14.5c0-2.3 0-5.2-3.2-5.2-3.2 0-3.7 2.5-3.7 5v9.7H7V7z" />
                </svg>
              </a>
            </div>
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
