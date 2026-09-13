import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import octenixLogo from '../assets/octenix_logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'faq', label: 'FAQ' },
  ]

  const handleNav = (id) => {
    setActive(id)
    setMenuOpen(false)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }



  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-nav-h bg-transparent transition-all duration-500 ease-in-out"
    >
      <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between gap-6">

        {/* LEFT — Logo + Brand Name */}
        <a
          href="#home"
          className="flex items-center gap-0.5 no-underline shrink-0"
          onClick={() => handleNav('home')}
        >
          <img
            src={octenixLogo}
            alt="Octenix Logo"
            className="w-12 h-12 object-contain shrink-0 block"
          />

          <span className="text-2xl font-extrabold tracking-[-0.5px] text-white">
            octenix
          </span>
        </a>

        {/* CENTER — Navigation Links */}
        <nav
          className={`flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2 max-[900px]:fixed max-[900px]:top-nav-h max-[900px]:left-0 max-[900px]:right-0 max-[900px]:flex-col max-[900px]:items-start max-[900px]:bg-transparent max-[900px]:p-6 max-[900px]:pt-6 max-[900px]:pb-8 max-[900px]:gap-1 max-[900px]:-translate-y-[120%] max-[900px]:translate-x-0 transition-transform duration-500 ${menuOpen ? 'max-[900px]:translate-y-0' : ''}`}
          ref={navRef}
        >
          {links.map((link) => (
            <button
              key={link.id}
              data-id={link.id}
              id={`nav-${link.id}`}
              className={`nav-link no-underline bg-none border-none cursor-pointer font-sans text-base font-normal tracking-[0.5px] text-white py-2 px-3 transition-opacity duration-300 ease-in-out hover:opacity-100 max-[900px]:text-base max-[900px]:py-3 max-[900px]:px-0 max-[900px]:w-full max-[900px]:text-left ${
                active === link.id ? 'opacity-100 max-[900px]:opacity-100' : 'opacity-55 max-[900px]:opacity-60'
              }`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* RIGHT — Contact + Hamburger */}
        <div className="flex items-center gap-4">

          <button
            className="no-underline text-[0.85rem] font-bold text-black bg-white py-2.5 px-6 rounded-lg border border-transparent cursor-pointer whitespace-nowrap hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 ease-in-out"
            id="btn-contact"
            onClick={() => handleNav('contact')}
          >
            Contact Us
          </button>

          <button
            className="hidden max-[900px]:flex flex-col gap-[5px] bg-none border-none cursor-pointer p-1"
            id="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="block w-6 h-0.5 bg-white rounded-sm transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-white rounded-sm transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-white rounded-sm transition-all duration-300"></span>
          </button>

        </div>

      </div>
    </header>
  )
}