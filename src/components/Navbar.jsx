import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import octenixLogo from '../assets/octenix_logo.png'
import StaggeredMenu from './StaggeredMenu'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const navRef = useRef(null)

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'faq', label: 'FAQ' },
  ]

  const handleNav = (id) => {
    setActive(id)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Work', ariaLabel: 'View our work', link: '#work' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'FAQ', ariaLabel: 'Frequently asked questions', link: '#faq' },
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/octenix?stkn=cHUyM2VhZTd6cXdr&utm_source=qr' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/octenix/' }
  ];



  return (
    <>
    <header
      className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 ease-in-out max-[1024px]:hidden"
    >
      <div className="relative flex items-center justify-between gap-20 rounded-2xl pl-6 pr-4 py-2">
        {/* Background Layer */}
        <div className="absolute inset-0 z-10 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl pointer-events-none"></div>

        {/* LEFT — Logo + Brand Name */}
        <a
          href="#home"
          className="relative z-20 flex items-center gap-0.5 no-underline shrink-0"
          onClick={() => handleNav('home')}
        >
          <img
            src={octenixLogo}
            alt="Octenix Logo"
            className="w-12 h-12 object-contain shrink-0 block"
          />

          <span className="text-2xl font-medium tracking-[-0.5px] text-white">
            octenix
          </span>
        </a>

        {/* CENTER — Navigation Links */}
        <nav
          className="relative z-20 flex items-center gap-1"
          ref={navRef}
        >
          {links.map((link) => (
            <button
              key={link.id}
              data-id={link.id}
              id={`nav-${link.id}`}
              className={`group relative no-underline bg-none border-none cursor-pointer font-sans text-base font-normal tracking-[0.5px] text-white py-2 px-3 transition-opacity duration-300 ${
                active === link.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              }`}
              onClick={() => handleNav(link.id)}
            >
              <div className="relative overflow-hidden flex items-center justify-center py-0.5 leading-none">
                <span className="inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-neutral-300">
                  {link.label}
                </span>
                <span className="absolute inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-white font-medium">
                  {link.label}
                </span>
              </div>
            </button>
          ))}
        </nav>

        {/* RIGHT — Contact + Hamburger */}
        <div className="relative z-20 flex items-center gap-4">

          <button
            className="no-underline text-[0.85rem] font-bold text-black bg-white py-2.5 px-6 rounded-lg border border-transparent cursor-pointer whitespace-nowrap hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 ease-in-out"
            id="btn-contact"
            onClick={() => handleNav('contact')}
          >
            Contact Us
          </button>

        </div>

      </div>
    </header>

    {/* MOBILE & TABLET NAV: StaggeredMenu */}
    <div className="hidden max-[1024px]:block fixed inset-0 pointer-events-none z-50">
      <StaggeredMenu
        position="right"
        isFixed={true}
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['rgba(255,255,255,0.05)']}
        logoUrl={octenixLogo}
        accentColor="#fff"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
    </>
  )
}