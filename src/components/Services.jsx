const services = [
  { icon: '🎨', title: 'UI/UX Design',       desc: 'Intuitive and visually stunning interfaces crafted through deep user research and iterative design.' },
  { icon: '💻', title: 'Web Development',     desc: 'High-performance websites and web apps built with modern frameworks and best practices.' },
  { icon: '📱', title: 'Mobile Apps',         desc: 'Native and cross-platform mobile experiences that users love and businesses depend on.' },
  { icon: '✦',  title: 'Brand Identity',      desc: 'Strategic branding that positions your company distinctly in a competitive marketplace.' },
  { icon: '📈', title: 'Digital Marketing',   desc: 'Data-driven campaigns that grow your audience, engage customers, and boost ROI.' },
  { icon: '🤖', title: 'AI Integration',      desc: 'Smart automation and AI-powered features that give your product a competitive edge.' },
]

export default function Services() {
  return (
    <section className="py-[120px] relative max-[640px]:py-[80px] bg-gradient-to-b from-[#060609] to-dark" id="services">
      <div className="max-w-[1200px] mx-auto px-8 max-[640px]:px-5">
        <div className="inline-block text-[0.75rem] font-bold tracking-[2px] uppercase text-orange bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] py-1.5 px-4 rounded-full mb-5">What We Do</div>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1px] leading-[1.15] mb-5 text-white">Services That <span className="bg-gradient-to-br from-orange via-orange-light to-[#fbbf24] bg-clip-text text-transparent">Deliver</span></h2>
        <p className="text-[1.05rem] text-text-muted max-w-[560px] leading-[1.75] mb-16">
          End-to-end digital solutions tailored to your growth goals.
        </p>

        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
          {services.map((s, i) => (
            <div className="bg-card border border-border rounded-default py-9 px-8 transition-all duration-300 relative overflow-hidden cursor-pointer group hover:border-[rgba(249,115,22,0.4)] hover:bg-[rgba(249,115,22,0.05)] hover:-translate-y-1.5" key={i} id={`service-card-${i + 1}`}>
              <span className="text-[2.4rem] mb-5 block">{s.icon}</span>
              <h3 className="text-[1.1rem] font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-text-muted text-[0.9rem] leading-[1.7] mb-6">{s.desc}</p>
              <span className="text-[1.2rem] text-orange transition-transform duration-300 inline-block group-hover:translate-x-1.5">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
