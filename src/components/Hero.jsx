import AeroShards from './AeroShards'
import Aurora from './Aurora'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-[10vw] relative overflow-hidden gap-10 pt-nav-h max-[1024px]:flex-col max-[1024px]:px-8 max-[1024px]:pt-[140px] max-[1024px]:pb-14 max-[640px]:min-h-0 max-[640px]:pt-[110px] max-[640px]:pb-10 max-[640px]:px-6 max-[1024px]:text-center" id="home">
      {/* Background decoration: AeroShards on Desktop, Aurora on Tablet & Mobile */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {isMobile ? (
          <Aurora
            colorStops={["#f0a672", "#cf5d0e", "#f1873e"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        ) : (
          <AeroShards
            backgroundColor="#000000"
            shardColor="#F97316"
            accentColor="#F97316"
            placement="full"
            flow="stream"
            material="pearl"
            detail="balanced"
            effect="none"
            scale={1}
            spread={1}
            depth={1}
            speed={0.5}
            spin={1}
            interaction="repel"
            density={1.5}
            shardSize={1.1}
            stretch={1}
            turbulence={1}
            glow={1}
            edgeSoftness={2}
            bloom={0.5}
            grain={0.05}
            chromaticAberration={0.0075}
            transitionDuration={1}
            interactionRadius={1.5}
            interactionStrength={0.5}
            rippleIntensity={1}
            holdToGather
            paused={false}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] flex-1 flex flex-col items-center">
        <h1 
          className="text-[2.2rem] sm:text-[2.6rem] md:text-[clamp(3rem,5vw,5rem)] font-thin leading-[1.12] mb-4 md:mb-6 animate-fadeUp text-white whitespace-normal md:whitespace-nowrap" 
          style={{ animationDelay: '0.4s', fontFamily: '"Coolvetica", sans-serif', fontWeight: 100 }}
        >
          Engineered for <br className="block md:hidden" /> your <span className="text-white">Business.</span>
        </h1>

        <p 
          className="text-[0.95rem] sm:text-[1.05rem] md:text-[1.35rem] text-white/70 leading-[1.5] md:leading-[1.6] mb-5 md:mb-7 animate-fadeUp max-w-[92%] sm:max-w-[85%] md:max-w-[800px] mx-auto w-full" 
          style={{ animationDelay: '0.6s' }}
        >
          Octenix builds technology solutions that solve business challenges, <br className="hidden md:block" /> streamline operations, and drive measurable growth.
        </p>

        <div className="flex gap-4 flex-wrap mb-4 sm:mb-6 md:mb-[60px] animate-fadeUp justify-center max-[1024px]:justify-center" style={{ animationDelay: '0.8s' }}>
          <a href="#work" className="group no-underline inline-flex justify-center items-center gap-3 font-sans text-[0.95rem] font-bold text-white bg-[rgba(255,255,255,0.05)] backdrop-blur-md py-2 pl-6 pr-2 rounded-full border border-[rgba(255,255,255,0.1)] cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)]" id="hero-cta-work">
            View Our Work
            <span className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-black transition-transform duration-200 group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </span>
          </a>
        </div>


      </div>
    </section>
  )
}
