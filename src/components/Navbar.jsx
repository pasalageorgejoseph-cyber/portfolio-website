import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home">
          Student Forge
        </a>

        <nav className={open ? 'nav-menu open' : 'nav-menu'}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <button className="theme-toggle" onClick={() => setDarkMode((value) => !value)}>
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </nav>

        <button className="nav-toggle" onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
