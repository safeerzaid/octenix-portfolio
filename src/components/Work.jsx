const projects = [
  {
    tag: 'Branding',
    title: 'Luminary Brand Identity',
    desc: 'Complete visual identity system for a luxury lifestyle brand.',
    gradient: 'linear-gradient(135deg,#ff6b35,#f7c59f)',
    tall: false,
  },
  {
    tag: 'Web App',
    title: 'Nexus Dashboard',
    desc: 'SaaS analytics platform with real-time data visualisation.',
    gradient: 'linear-gradient(135deg,#7928ca,#ff0080)',
    tall: true,
  },
  {
    tag: 'UI/UX',
    title: 'Aero Mobile App',
    desc: 'Award-winning travel app redesign increasing bookings by 40%.',
    gradient: 'linear-gradient(135deg,#0ea5e9,#38bdf8)',
    tall: false,
  },
  {
    tag: 'E-commerce',
    title: 'GreenLeaf Store',
    desc: 'Eco-brand online store with 3x conversion improvement.',
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
    tall: false,
  },
]

export default function Work() {
  return (
    <section className="py-[120px] relative max-[640px]:py-[80px] bg-[#060609]" id="work">
      <div className="max-w-[1200px] mx-auto px-8 max-[640px]:px-5">
        <div className="inline-block text-[0.75rem] font-bold tracking-[2px] uppercase text-orange bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] py-1.5 px-4 rounded-full mb-5">Portfolio</div>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1px] leading-[1.15] mb-5 text-white">Our Recent <span className="bg-gradient-to-br from-orange via-orange-light to-[#fbbf24] bg-clip-text text-transparent">Work</span></h2>
        <p className="text-[1.05rem] text-text-muted max-w-[560px] leading-[1.75] mb-16">
          Handpicked projects showcasing design, development, and strategy.
        </p>

        <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
          {projects.map((p, i) => (
            <div
              className="rounded-default overflow-hidden bg-card border border-border transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:border-[rgba(249,115,22,0.35)]"
              key={i}
              id={`work-card-${i + 1}`}
            >
              <div className="overflow-hidden">
                <div className={`transition-transform duration-500 group-hover:scale-105 ${p.tall ? 'h-[320px]' : 'h-[220px]'}`} style={{ background: p.gradient }}></div>
              </div>
              <div className="py-7 px-7 pb-8 bg-card">
                <span className="text-[0.72rem] font-bold tracking-[1.5px] uppercase text-orange bg-[rgba(249,115,22,0.1)] py-1 px-3 rounded-full inline-block mb-3.5">{p.tag}</span>
                <h3 className="text-[1.15rem] font-bold mb-2 text-white">{p.title}</h3>
                <p className="text-text-muted text-[0.92rem]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
