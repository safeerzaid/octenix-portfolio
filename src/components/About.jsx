import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpotlightCard from './SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    num: '01',
    title: 'Our Vision',
    text: "To be the world's most trusted creative partner for businesses ready to grow digitally.",
  },
  {
    num: '02',
    title: 'Our Mission',
    text: 'Delivering premium design and technology solutions that solve real problems and inspire.',
  },
  {
    num: '03',
    title: 'Our Values',
    text: 'Integrity, creativity, and relentless pursuit of quality in every pixel and every line of code.',
  },
];

export default function About() {
  const containerRef = useRef(null);
  const pText = "We are a passionate team of designers, developers, and strategists united by one mission — to create digital products that leave a lasting impression.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Advanced 3D kinetic letter-by-letter reveal with blur focus pull
      gsap.fromTo('.about-char', 
        { 
          yPercent: 130, 
          rotateX: -75, 
          opacity: 0, 
          filter: 'blur(12px)',
          transformPerspective: 1000
        },
        { 
          yPercent: 0, 
          rotateX: 0, 
          opacity: 1, 
          filter: 'blur(0px)', 
          duration: 1.3, 
          stagger: 0.025, 
          ease: 'power4.out', 
          scrollTrigger: { 
            trigger: '.about-heading', 
            start: 'top 85%' 
          } 
        }
      );

      // Apple-style scrub for paragraph
      const words = gsap.utils.toArray('.about-word');
      gsap.fromTo(words, 
        { opacity: 0.15 },
        { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: '.about-p', start: 'top 90%', end: 'bottom 65%', scrub: true } }
      );
      // Animate each card individually when it enters the viewport
      const cardEls = gsap.utils.toArray('.about-card');
      cardEls.forEach((card) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, filter: 'blur(6px)' },
          { 
            y: 0, 
            opacity: 1, 
            filter: 'blur(0px)',
            duration: 1.1, 
            ease: 'power3.out', 
            scrollTrigger: { 
              trigger: card, 
              start: 'top 85%',
              toggleActions: 'play none none none'
            } 
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[120px] relative max-[640px]:py-[80px] bg-black overflow-hidden" id="about">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        <h2 
          className="about-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin tracking-wide leading-[1.15] mb-6 md:mb-8 text-white flex flex-col font-coolvetica"
          style={{ fontWeight: 100, WebkitTextStroke: '0.5px #000' }}
        >
          <div className="flex flex-wrap">
            {"A Team Obsessed".split("").map((char, i) => (
              <span key={i} className={`inline-block overflow-hidden ${char === ' ' ? 'w-[0.25em]' : ''} py-0.5 md:py-1`}>
                <span className="about-char inline-block origin-bottom-left will-change-transform">
                  {char}
                </span>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap">
            {"With ".split("").map((char, i) => (
              <span key={`w-${i}`} className={`inline-block overflow-hidden ${char === ' ' ? 'w-[0.25em]' : ''} py-0.5 md:py-1`}>
                <span className="about-char inline-block origin-bottom-left will-change-transform">
                  {char}
                </span>
              </span>
            ))}
            {"Excellence".split("").map((char, i) => (
              <span key={`ex-${i}`} className="inline-block overflow-hidden py-0.5 md:py-1">
                <span className="about-char inline-block text-orange-500 origin-bottom-left will-change-transform">
                  {char}
                </span>
              </span>
            ))}
          </div>
        </h2>
        
        <p className="about-p text-base md:text-xl lg:text-2xl text-neutral-400 max-w-[800px] leading-relaxed mb-10 md:mb-16 font-light flex flex-wrap">
          {pText.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em] mb-[0.1em]">
              <span className="about-word inline-block">{word}</span>
            </span>
          ))}
        </p>

        <div className="about-cards-container grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="about-card h-full">
              <SpotlightCard className="h-full min-h-[300px]" spotlightColor="rgba(249, 115, 22, 0.15)">
                
                {/* Background Full-Size Number */}
                <div 
                  className="absolute -bottom-8 -right-4 text-[180px] text-white/5 leading-none select-none pointer-events-none font-coolvetica"
                >
                  {c.num}
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 
                    className="text-3xl tracking-wider mb-4 text-white font-thin font-coolvetica"
                  >
                    {c.title}
                  </h3>
                  <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    {c.text}
                  </p>
                </div>
                
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
