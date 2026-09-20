import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import growthSystemsImg from '../assets/growth-systems.jpg'
import businessNeedsUsImg from '../assets/business-needs-us.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function Strategy() {
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.word-inner');
      
      gsap.fromTo(words, 
        { 
          opacity: 0.15
        },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
          }
        }
      );
    }, textRef);
    
    return () => ctx.revert(); // Cleanup on unmount
  }, [])

  const cards = [
    {
      title: "Digital Experiences",
      text: "Not just screens. We build digital experiences that connect your business with the people who matter.",
      hasOrangeBlob: true,
    },
    {
      isImage: true,
      image: growthSystemsImg,
      objectPosition: 'object-top',
    },
    {
      isImage: true,
      image: businessNeedsUsImg,
      objectPosition: 'object-top',
    }
  ]

  const textToAnimate = "We bring strategy, technology, and creativity together to build solutions that move businesses forward."

  return (
    <section className="min-h-[70vh] bg-black flex flex-col justify-start items-start pt-16 sm:pt-20 md:pt-16 lg:pt-20 pb-16 md:pb-20 px-6 md:px-8 lg:px-[10vw] w-full">
      <div className="max-w-[1280px] w-full mx-auto">
        <p ref={textRef} className="text-[clamp(1.5rem,3.5vw,3rem)] font-thin leading-[1.3] text-white max-w-[1100px] text-left mb-14 sm:mb-16 md:mb-14 lg:mb-20 flex flex-wrap" style={{ fontFamily: '"Coolvetica", sans-serif', fontWeight: 100 }}>
          {textToAnimate.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em] mb-[0.1em]">
              <span className="word-inner inline-block">{word}</span>
            </span>
          ))}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full items-stretch">
          {cards.map((card, idx) => (
            card.isImage ? (
              <div key={idx} className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[260px] md:h-[220px] lg:h-[280px] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:border-[rgba(255,255,255,0.2)] group w-full">
                <img 
                  src={card.image} 
                  alt="Strategy Card" 
                  className={`w-full h-full object-cover ${card.objectPosition || 'object-top'} transition-transform duration-500 group-hover:scale-105`} 
                />
              </div>
            ) : (
              <div key={idx} className="relative overflow-hidden flex flex-col justify-between rounded-2xl md:rounded-3xl p-6 md:p-6 lg:p-10 h-[260px] md:h-[220px] lg:h-[280px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-2xl transition-all duration-300 hover:border-[rgba(255,255,255,0.2)] group w-full">
                {card.hasOrangeBlob && (
                  <div className="absolute -top-[50px] -right-[50px] w-[200px] md:w-[220px] lg:w-[250px] h-[200px] md:h-[220px] lg:h-[250px] rounded-full bg-orange opacity-[0.35] blur-[50px] md:blur-[60px] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.55]"></div>
                )}
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <h3 className="text-white text-xl md:text-xl lg:text-[1.8rem] font-medium leading-tight mb-2 md:mb-3">{card.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-xs md:text-sm lg:text-[1.15rem]">
                    {card.text}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
