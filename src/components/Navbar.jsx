import { useState } from 'react'
import logo from '../assets/logo-text.png'
import MobileMenu from './MobileMenu.jsx'

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* mobile: hamburger */}
        <button
          type="button"
          className="md:hidden text-2xl leading-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <a href="#" className="flex items-center">
          <img src={logo} alt="Dev Stack" className="h-8" />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link, index) => (
            <li key={link}>
              <a href="#" className={index === 0 ? 'text-pink-600' : 'hover:text-pink-600'}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button type="button" className="text-sm font-medium text-gray-700">
            Sign In
          </button>
          <button type="button" className="rounded-full bg-pink-600 px-5 py-2 text-sm font-medium text-white hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* mobile: compact sign up so the right side isn't empty */}
        <button type="button" className="md:hidden rounded-full bg-pink-600 px-4 py-1.5 text-sm font-medium text-white">
          Sign Up
        </button>
      </nav>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  )
}

export default Navbar
