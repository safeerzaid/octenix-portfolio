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
]

export default function About() {
  return (
    <section className="py-[120px] relative max-[640px]:py-[80px] bg-gradient-to-b from-dark to-[#080810]" id="about">
      <div className="max-w-[1200px] mx-auto px-8 max-[640px]:px-5">
        <div className="inline-block text-[0.75rem] font-bold tracking-[2px] uppercase text-orange bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] py-1.5 px-4 rounded-full mb-5">Who We Are</div>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1px] leading-[1.15] mb-5 text-white">
          A Team Obsessed With <span className="bg-gradient-to-br from-orange via-orange-light to-[#fbbf24] bg-clip-text text-transparent">Excellence</span>
        </h2>
        <p className="text-[1.05rem] text-text-muted max-w-[560px] leading-[1.75] mb-16">
          We are a passionate team of designers, developers, and strategists united by one mission —
          to create digital products that leave a lasting impression.
        </p>

        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
          {cards.map((c, i) => (
            <div className="bg-card border border-border rounded-default py-10 px-8 transition-all duration-300 relative overflow-hidden group hover:border-[rgba(249,115,22,0.4)] hover:-translate-y-1.5 cursor-default" key={i} id={`about-card-${i + 1}`}>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-[3rem] font-black text-[rgba(249,115,22,0.15)] leading-none mb-5 relative z-10">{c.num}</div>
              <h3 className="text-[1.2rem] font-bold mb-3 relative z-10 text-white">{c.title}</h3>
              <p className="text-text-muted text-[0.95rem] leading-[1.7] relative z-10">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
