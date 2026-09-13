export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-[10vw] relative overflow-hidden gap-10 pt-nav-h max-[1024px]:flex-col max-[1024px]:px-8 max-[1024px]:pt-[120px] max-[1024px]:pb-20 max-[1024px]:text-center" id="home">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-[100px] opacity-[0.18] animate-float w-[600px] h-[600px] bg-orange -top-[150px] -right-[100px]" style={{ animationDelay: '0s' }}></div>
        <div className="absolute rounded-full blur-[100px] opacity-[0.18] animate-float w-[400px] h-[400px] bg-[#7928ca] -bottom-[100px] -left-[50px]" style={{ animationDelay: '3s' }}></div>
        <div className="absolute rounded-full blur-[100px] opacity-[0.18] animate-float w-[300px] h-[300px] bg-orange-light top-[40%] left-[30%]" style={{ animationDelay: '5s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[600px] flex-1">
        <div className="inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[1px] text-orange bg-[rgba(249,115,22,0.12)] border border-[rgba(249,115,22,0.25)] py-2 px-[18px] rounded-full mb-7 animate-fadeUp" style={{ animationDelay: '0.2s' }}>✦ Creative Digital Agency</div>

        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] tracking-[-1.5px] mb-6 animate-fadeUp" style={{ animationDelay: '0.4s' }}>
          We Build <span className="bg-gradient-to-br from-orange via-orange-light to-[#fbbf24] bg-clip-text text-transparent">Digital</span><br />
          Experiences That <span className="bg-gradient-to-br from-orange via-orange-light to-[#fbbf24] bg-clip-text text-transparent">Matter</span>
        </h1>

        <p className="text-[1.1rem] text-text-muted leading-[1.7] mb-10 animate-fadeUp" style={{ animationDelay: '0.6s' }}>
          Octenix crafts cutting-edge websites, brands, and digital products
          that captivate audiences and drive measurable results.
        </p>

        <div className="flex gap-4 flex-wrap mb-[60px] animate-fadeUp max-[1024px]:justify-center" style={{ animationDelay: '0.8s' }}>
          <a href="#work" className="no-underline inline-flex justify-center items-center gap-2 font-sans text-[0.95rem] font-bold text-white bg-gradient-to-br from-orange-dark to-orange py-3.5 px-8 rounded-full border-none cursor-pointer transition-all duration-200 shadow-[0_6px_30px_rgba(249,115,22,0.4)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(249,115,22,0.55)]" id="hero-cta-work">View Our Work</a>
          <a href="#about" className="no-underline inline-flex justify-center items-center gap-2 text-[0.95rem] font-semibold text-white bg-transparent border border-border py-3.5 px-8 rounded-full transition-all duration-200 hover:border-orange hover:bg-[rgba(249,115,22,0.08)]" id="hero-cta-about">Learn More</a>
        </div>

        <div className="flex items-center gap-8 animate-fadeUp max-[1024px]:justify-center max-[640px]:flex-col max-[640px]:gap-5" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col gap-0.5">
            <span className="text-[1.8rem] font-extrabold text-white">150+</span>
            <span className="text-[0.78rem] text-text-muted font-medium uppercase tracking-[0.5px]">Projects Done</span>
          </div>
          <div className="w-px h-10 bg-border max-[640px]:w-[60px] max-[640px]:h-px"></div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[1.8rem] font-extrabold text-white">98%</span>
            <span className="text-[0.78rem] text-text-muted font-medium uppercase tracking-[0.5px]">Client Satisfaction</span>
          </div>
          <div className="w-px h-10 bg-border max-[640px]:w-[60px] max-[640px]:h-px"></div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[1.8rem] font-extrabold text-white">8+</span>
            <span className="text-[0.78rem] text-text-muted font-medium uppercase tracking-[0.5px]">Years Experience</span>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="relative flex-[0_0_420px] h-[500px] z-10 animate-fadeUp max-[1024px]:hidden" style={{ animationDelay: '1.2s' }}>
        <div className="absolute bg-[rgba(255,255,255,0.06)] border border-border backdrop-blur-[20px] rounded-2xl py-5 px-6 flex items-center gap-3.5 transition-transform duration-300 shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:scale-105 top-[60px] left-0 animate-cardFloat">
          <div className="text-[2rem]">🎨</div>
          <div className="flex flex-col gap-0.5">
            <strong className="text-[0.95rem] font-bold text-white">UI/UX Design</strong>
            <span className="text-[0.78rem] text-text-muted">Pixel-perfect interfaces</span>
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.06)] border border-border backdrop-blur-[20px] rounded-2xl py-5 px-6 flex items-center gap-3.5 transition-transform duration-300 shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:scale-105 top-[200px] right-0 animate-cardFloat" style={{ animationDelay: '2s' }}>
          <div className="text-[2rem]">⚡</div>
          <div className="flex flex-col gap-0.5">
            <strong className="text-[0.95rem] font-bold text-white">Development</strong>
            <span className="text-[0.78rem] text-text-muted">Fast &amp; scalable builds</span>
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.06)] border border-border backdrop-blur-[20px] rounded-2xl py-5 px-6 flex items-center gap-3.5 transition-transform duration-300 shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:scale-105 bottom-[60px] left-[40px] animate-cardFloat" style={{ animationDelay: '4s' }}>
          <div className="text-[2rem]">🚀</div>
          <div className="flex flex-col gap-0.5">
            <strong className="text-[0.95rem] font-bold text-white">Strategy</strong>
            <span className="text-[0.78rem] text-text-muted">Data-driven growth</span>
          </div>
        </div>
        <div className="absolute rounded-full border border-[rgba(249,115,22,0.15)] animate-spin-slow w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute rounded-full border border-[rgba(249,115,22,0.15)] animate-spin-reverse w-[420px] h-[420px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  )
}
