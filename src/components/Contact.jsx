import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth slide up reveal for individual letters
      gsap.fromTo('.contact-char',
        { yPercent: 120, rotateZ: 5, opacity: 0 },
        { 
          yPercent: 0, 
          rotateZ: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.04,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%'
          }
        }
      );
      
      // Elastic pop-in for the contact button
      gsap.fromTo('.contact-btn',
        { scale: 0, opacity: 0, rotate: -45 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1.5,
          ease: 'elastic.out(1, 0.4)',
          delay: 0.8, // Slightly delayed so it pops in after the letters finish
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Prevent scrolling on the main page when modal is open, and listen for external open events
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-contact-modal', handleOpenModal);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('open-contact-modal', handleOpenModal);
    };
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ text: '', type: '' });

    const formData = new FormData(e.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "9f44e411-1fa3-47b2-86ea-adacc85307e5";
    formData.append("access_key", accessKey);
    formData.append("subject", "New Inquiry from Octenix Website");
    formData.append("from_name", "Octenix Portfolio Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({ text: "Thank you! Your message has been sent successfully.", type: "success" });
        e.target.reset();
        setTimeout(() => {
          setIsModalOpen(false);
          setStatusMessage({ text: '', type: '' });
        }, 2200);
      } else {
        setStatusMessage({ text: data.message || "Something went wrong. Please check your access key.", type: "error" });
      }
    } catch (error) {
      setStatusMessage({ text: "Network error. Please try again later.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={containerRef} className="pt-12 md:pt-16 pb-24 md:pb-48 bg-[#050505] w-full overflow-hidden" id="contact">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
        
        <p className="text-neutral-400 text-lg md:text-xl font-light mb-8 md:mb-12">
          Got a question?
        </p>
        
        <div className="flex flex-col">
          <div className="flex flex-wrap pb-4">
            {"Want to talk".split('').map((char, i) => (
              <span key={i} className={`inline-block overflow-hidden ${char === ' ' ? 'w-[3vw] md:w-[1.8rem] lg:w-[2.5rem]' : ''}`}>
                <span className="contact-char inline-block text-[15vw] md:text-[6.5rem] lg:text-[10rem] font-medium leading-[0.85] tracking-tight text-white origin-bottom-left will-change-transform">
                  {char}
                </span>
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-3 sm:gap-5 md:gap-6 lg:gap-10 mt-2 md:mt-3 lg:mt-4">
            <div className="flex flex-wrap pb-4">
              {"to us?".split('').map((char, i) => (
                <span key={i} className={`inline-block overflow-hidden ${char === ' ' ? 'w-[3vw] md:w-[1.8rem] lg:w-[2.5rem]' : ''}`}>
                  <span className="contact-char inline-block text-[15vw] md:text-[6.5rem] lg:text-[10rem] font-medium leading-[0.85] tracking-tight text-orange-500 origin-bottom-left will-change-transform">
                    {char}
                  </span>
                </span>
              ))}
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="contact-btn group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-36 lg:h-36 rounded-full bg-white flex items-center justify-center shrink-0 cursor-pointer overflow-hidden will-change-transform"
            >
              {/* GSAP-style Liquid Fill from Bottom */}
              <div className="absolute w-[150%] h-[150%] left-[-25%] top-[100%] bg-orange-500 rounded-[45%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[85%] z-0"></div>

              <div className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-12 lg:h-12 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                  <svg 
                    viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                    className="w-full h-full transition-colors duration-300 group-hover:stroke-white"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                  <svg 
                    viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                    className="w-full h-full transition-colors duration-300 group-hover:stroke-white"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Gray Backdrop for Contrast */}
      <div 
        className={`fixed inset-0 z-40 bg-neutral-900 transition-opacity duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsModalOpen(false)}
      />

      {/* Full Screen Slide-Up Curved Modal (Spacious & Breathable) */}
      <div 
        className={`fixed inset-x-0 bottom-0 top-3 md:top-10 lg:top-12 z-50 bg-[#050505] text-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isModalOpen ? 'translate-y-0' : 'translate-y-full'
        } rounded-t-[32px] md:rounded-t-[60px] overflow-y-auto flex flex-col shadow-2xl`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-6 right-6 md:top-10 md:right-12 w-12 h-12 md:w-14 md:h-14 rounded-full border border-neutral-700/80 flex items-center justify-center hover:bg-neutral-800 transition-colors z-50 cursor-pointer"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Content - Spacious, Airy, and Breathable */}
        <div className="w-full min-h-full max-w-[1360px] mx-auto px-6 sm:px-8 md:px-14 lg:px-20 flex flex-col justify-start md:justify-center items-stretch relative py-12 md:py-16 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 w-full items-center">
            
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <div>
                <h2 className="text-4xl md:text-6xl xl:text-7xl font-medium tracking-tight text-orange-500 leading-[1]">
                  Get in touch.
                </h2>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-light tracking-tight text-white leading-[1.2] mt-2 md:mt-3 max-w-md">
                  We aim to reply within 1 business day.
                </h2>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="flex flex-col justify-center">
              <h3 className="text-base md:text-lg font-light text-neutral-400 mb-8 md:mb-10">
                Please fill in the form below.
              </h3>

              <form className="flex flex-col gap-6 md:gap-7" onSubmit={handleSubmit}>
                <div className="relative w-full">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name *" 
                    className="w-full bg-transparent border-b border-neutral-800 py-3 text-base md:text-lg leading-normal outline-none focus:border-white transition-colors placeholder:text-neutral-600 text-white font-light" 
                    required 
                  />
                </div>
                
                <div className="relative w-full">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="E-mail *" 
                    className="w-full bg-transparent border-b border-neutral-800 py-3 text-base md:text-lg leading-normal outline-none focus:border-white transition-colors placeholder:text-neutral-600 text-white font-light" 
                    required 
                  />
                </div>
                
                <div className="relative w-full">
                  <textarea 
                    name="message"
                    placeholder="Your message" 
                    rows="3" 
                    className="w-full bg-transparent border-b border-neutral-800 py-3 text-base md:text-lg leading-relaxed outline-none focus:border-white transition-colors placeholder:text-neutral-600 text-white font-light resize-none block" 
                    required
                  />
                </div>

                <label className="flex items-start gap-3.5 cursor-pointer mt-2">
                  <input type="checkbox" name="subscribe_updates" className="mt-1 w-4 h-4 accent-neutral-500 shrink-0 cursor-pointer" />
                  <span className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
                    Would you like to receive updates from us? (We promise no spam!)
                  </span>
                </label>

                {/* Status Message Display */}
                {statusMessage.text && (
                  <div className={`p-4 rounded-xl text-sm ${statusMessage.type === 'success' ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50' : 'bg-rose-950/60 text-rose-300 border border-rose-800/50'}`}>
                    {statusMessage.text}
                  </div>
                )}
                
                <div className="pt-3">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative bg-white text-black py-3.5 md:py-4 px-8 md:px-10 rounded-full font-medium text-base flex items-center gap-3 self-start cursor-pointer overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {/* GSAP-style Liquid Fill from Bottom */}
                    <div className="absolute w-[150%] h-[150%] left-[-25%] top-[100%] bg-orange-500 rounded-[45%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[85%] z-0"></div>

                    <div className="relative z-10 overflow-hidden flex items-center justify-center">
                      <span className="absolute transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%] text-black font-medium">
                        {isSubmitting ? "Sending..." : "Submit"}
                      </span>
                      <span className="absolute transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[150%] group-hover:translate-y-0 text-white font-medium">
                        {isSubmitting ? "Sending..." : "Submit"}
                      </span>
                      <span className="opacity-0 invisible font-medium">
                        {isSubmitting ? "Sending..." : "Submit"}
                      </span>
                    </div>
                    
                    <div className="relative z-10 w-4 h-4 md:w-5 md:h-5 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                        <svg 
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                          className="w-full h-full transition-colors duration-300 text-black group-hover:stroke-white"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                        <svg 
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                          className="w-full h-full transition-colors duration-300 text-black group-hover:stroke-white"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
