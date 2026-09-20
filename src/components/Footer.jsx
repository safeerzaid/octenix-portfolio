import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Silky smooth cinematic word reveal for "Are you ready to book your slot?"
      gsap.fromTo('.footer-book-word',
        { 
          y: 25, 
          opacity: 0, 
          filter: 'blur(6px)'
        },
        { 
          y: 0, 
          opacity: 1, 
          filter: 'blur(0px)', 
          duration: 1.0, 
          stagger: 0.05, 
          ease: 'power3.out', 
          scrollTrigger: { 
            trigger: footerRef.current, 
            start: 'top 85%' 
          } 
        }
      );

      // Advanced silky smooth GSAP letter-by-letter reveal for OCTENIX
      gsap.fromTo('.footer-octenix-letter',
        {
          y: '60%',
          opacity: 0,
          filter: 'blur(16px)',
          scale: 0.85
        },
        {
          y: '0%',
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
          duration: 1.3,
          stagger: 0.06,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.footer-octenix-title',
            start: 'top 95%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const FooterLink = ({ title, href, onClick, target, rel }) => (
    <a 
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className="group flex items-end text-lg md:text-2xl font-light w-fit cursor-pointer"
    >
      <div className="relative overflow-hidden flex items-center py-0.5 leading-none">
        <span className="inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-neutral-300">{title}</span>
        <span className="absolute inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-white">{title}</span>
      </div>
      <span className="inline-block opacity-0 -translate-x-2 -translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-2 text-white text-xs ml-1">↗</span>
    </a>
  );

  const socialLinks = [
    { title: 'Instagram', href: 'https://www.instagram.com/octenix?stkn=cHUyM2VhZTd6cXdr&utm_source=qr' },
    { title: 'LinkedIn', href: 'https://www.linkedin.com/company/octenix/' },
    { title: 'Twitter', href: 'https://twitter.com' }
  ];

  return (
    <footer ref={footerRef} className="w-full bg-[#050505] text-white pt-16 md:pt-10 lg:pt-20 pb-0 overflow-hidden relative" id="contact-footer">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col justify-between">
        
        {/* Main Grid: Left Heading, Right Nav & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center md:pb-2">
          
          {/* Left Block: Scaled Down Heading */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-snug flex flex-wrap gap-x-2.5 gap-y-1">
              {"Are you ready to book your slot?".split(' ').map((word, i) => (
                <span key={i} className="footer-book-word inline-block">{word}</span>
              ))}
            </h2>
          </div>

          {/* Right Block: Navigation & Social Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 md:gap-16 pt-2 lg:pt-0 lg:pl-12">
            {/* Column 1: Main Links */}
            <div className="flex flex-col gap-5 md:gap-6">
              <h4 className="text-neutral-500 text-xs md:text-sm font-medium tracking-wide">Navigation</h4>
              <nav className="flex flex-col gap-3">
                {['Home', 'Clients', 'Work'].map((link) => (
                  <FooterLink key={link} title={link} href={`#${link.toLowerCase().replace(' ', '-')}`} />
                ))}
                <FooterLink 
                  title="Contact Us" 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal')); }} 
                />
              </nav>
            </div>

            {/* Column 2: Social */}
            <div className="flex flex-col gap-5 md:gap-6">
              <h4 className="text-neutral-500 text-xs md:text-sm font-medium tracking-wide">Social</h4>
              <nav className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <FooterLink 
                    key={link.title} 
                    title={link.title} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                  />
                ))}
              </nav>
            </div>
          </div>

        </div>
      </div>
      
      {/* Half-cut Massive Footer Text with Staggered Letter Animation */}
      <div className="footer-octenix-title w-full flex justify-center mt-2 md:mt-4 pointer-events-none select-none overflow-hidden">
        <h1 
          className="text-[28vw] leading-[0.75] tracking-normal text-white/30 font-thin uppercase translate-y-[22%] flex justify-center"
          style={{ fontFamily: "'Coolvetica', sans-serif" }}
        >
          {"OCTENIX".split('').map((letter, i) => (
            <span 
              key={i} 
              className="footer-octenix-letter inline-block will-change-[transform,opacity,filter]"
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </footer>
  );
}
