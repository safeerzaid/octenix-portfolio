import heroImage from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-[10vw] relative overflow-hidden gap-10 pt-nav-h max-[1024px]:flex-col max-[1024px]:px-8 max-[1024px]:pt-[120px] max-[1024px]:pb-20 max-[1024px]:text-center" id="home">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute blur-[120px] opacity-[0.25] animate-float w-[800px] h-[500px] rounded-[100%_150%_100%_150%] bg-orange -top-[100px] -right-[150px]" style={{ animationDelay: '0s' }}></div>
        <div className="absolute blur-[120px] opacity-[0.25] animate-float w-[700px] h-[500px] rounded-[150%_100%_150%_100%] bg-orange-dark -bottom-[100px] -left-[150px]" style={{ animationDelay: '3s' }}></div>
        <div className="absolute blur-[100px] opacity-[0.2] animate-float w-[400px] h-[400px] rounded-[120%_120%_100%_100%] bg-orange-light top-[30%] left-[20%]" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[600px] flex-1">
        <h1 className="text-[clamp(2.8rem,5vw,5rem)] font-light leading-[1.1] mb-6 animate-fadeUp text-white" style={{ animationDelay: '0.4s' }}>
          <span className="whitespace-nowrap">Engineered for</span> <br />
          your <span className="text-orange">Business.</span>
        </h1>

        <p className="text-[1.2rem] text-text-muted leading-[1.7] mb-7 animate-fadeUp" style={{ animationDelay: '0.6s' }}>
          Octenix builds technology solutions that solve business challenges, streamline operations, and drive measurable growth.
        </p>

        <div className="flex gap-4 flex-wrap mb-[60px] animate-fadeUp max-[1024px]:justify-center" style={{ animationDelay: '0.8s' }}>
          <a href="#work" className="group no-underline inline-flex justify-center items-center gap-3 font-sans text-[0.95rem] font-bold text-white bg-transparent py-2 pl-6 pr-2 rounded-full border border-border cursor-pointer transition-all duration-200 hover:border-[rgba(255,255,255,0.3)]" id="hero-cta-work">
            View Our Work
            <span className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-black transition-transform duration-200 group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </span>
          </a>
        </div>


      </div>

      {/* Hero Image */}
      <div className="relative flex-[0_0_55%] z-10 flex justify-center items-center animate-fadeUp max-[1024px]:mt-10 max-[1024px]:w-full" style={{ animationDelay: '1.2s' }}>
        <img src={heroImage} alt="Engineered for business" className="w-full max-w-[750px] h-auto object-contain drop-shadow-[0_15px_50px_rgba(249,115,22,0.25)] translate-x-20 -translate-y-6 max-[1024px]:translate-x-0 max-[1024px]:translate-y-0" />
      </div>
    </section>
  )
}
