const services = [
  { id: 'web-mobile-dev', title: 'Web & Mobile Development', desc: 'High-performance websites and native mobile apps built with modern frameworks to deliver seamless cross-platform experiences.' },
  { id: 'e-commerce', title: 'E-Commerce', desc: 'Robust, secure, and highly converting e-commerce platforms designed to scale your online sales and simplify store management.' },
  { id: 'branding', title: 'Branding', desc: 'Strategic brand identity design that communicates your core values, differentiates you from competitors, and resonates with your audience.' },
  { id: 'custom-software', title: 'Custom Software', desc: 'Bespoke software solutions engineered from the ground up to solve your unique operational challenges and drive efficiency.' },
  { id: 'ui-ux-designing', title: 'UI/UX Designing', desc: 'Intuitive, user-centered interface designs that look beautiful and function flawlessly, ensuring maximum user engagement.' },
]

const ServiceRow = ({ num, title, desc, id }) => {
  return (
    <a href={`#service-${id}`} className="group block border-b border-[rgba(255,255,255,0.1)] py-8 md:py-12 no-underline cursor-pointer hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-300 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-y-2 lg:gap-y-0 items-start md:items-center w-full">
        
        {/* Number */}
        <div className="md:col-span-1 lg:col-span-1 flex items-start w-full">
          <span className="text-[0.75rem] text-[rgba(255,255,255,0.4)] font-mono">{num}</span>
        </div>
        
        {/* Title */}
        <div className="md:col-span-11 lg:col-span-5 flex justify-between items-center w-full">
          <h3 className="text-white text-[1.6rem] md:text-[2rem] lg:text-[2.2rem] font-medium tracking-tight transition-all duration-300 group-hover:translate-x-1 lg:group-hover:translate-x-2">
            {title}
          </h3>
          <span className="lg:hidden text-[rgba(255,255,255,0.5)] text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
        </div>

        {/* Description & Arrow (Desktop) */}
        <div className="md:col-span-11 md:col-start-2 lg:col-span-6 lg:col-start-7 flex justify-between items-center w-full mt-1 md:mt-0">
          <p className="text-[rgba(255,255,255,0.5)] text-[0.95rem] md:text-[1rem] leading-[1.6] max-w-[420px] transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.9)]">
            {desc}
          </p>
          <span className="hidden lg:block text-[rgba(255,255,255,0.5)] text-xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">→</span>
        </div>

      </div>
    </a>
  )
}

export default function Services() {
  return (
    <section className="bg-black pt-24 pb-32 overflow-hidden flex flex-col justify-start items-start w-full" id="services">
      <div className="w-full px-4 md:px-[5vw] lg:px-[4vw]">
        
        {/* Large section header */}
        <div className="mb-16">
          <h2 className="text-[clamp(2.5rem,6vw,7rem)] font-light text-white uppercase leading-none tracking-[-0.02em] text-left">
            SERVICES
          </h2>
        </div>
        
        {/* Top divider before first item */}
        <div className="w-full h-[1px] bg-[rgba(255,255,255,0.1)]"></div>
        
        <div className="flex flex-col w-full">
          {services.map((service, index) => {
            // Generate zero-padded number (01, 02, etc.)
            const num = (index + 1).toString().padStart(2, '0')
            return (
              <ServiceRow 
                key={service.id}
                id={service.id}
                num={num}
                title={service.title}
                desc={service.desc}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}
