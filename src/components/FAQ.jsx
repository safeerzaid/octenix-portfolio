import { useState } from 'react'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope. A landing page takes 1–2 weeks, while a full web app can take 6–12 weeks. We\'ll give you a detailed timeline after our discovery call.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We work across all industries — from tech startups and SaaS companies to e-commerce, healthcare, real estate, and lifestyle brands.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Absolutely. We offer flexible maintenance and support retainers to keep your product running smoothly and evolving with your needs.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer project-based pricing and monthly retainers. Every engagement starts with a free discovery call to understand your goals and provide a transparent quote.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply click the "Contact Us" button and fill out our brief. We\'ll reach out within 24 hours to schedule your free strategy session.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-[#050505] w-full" id="faq">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column - Large Title */}
          <div className="lg:w-1/3">
            <h2 
              className="text-5xl md:text-7xl font-thin text-white tracking-wide lg:sticky lg:top-32 font-coolvetica"
            >
              FAQ
            </h2>
          </div>

          {/* Right Column - Questions List */}
          <div className="lg:w-2/3 flex flex-col border-t border-neutral-800">
            {faqs.map((item, i) => (
              <div
                className="border-b border-neutral-800 overflow-hidden"
                key={i}
              >
                <button
                  className="w-full text-left py-6 md:py-8 flex items-center justify-between gap-4 group"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className={`text-lg md:text-xl lg:text-2xl font-medium transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                    {item.q}
                  </span>
                  <span className={`text-3xl text-white transition-transform duration-300 ease-out shrink-0 font-light ${openIndex === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                {/* Smooth Dropdown Content using CSS Grid */}
                <div 
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 text-neutral-400 text-base md:text-lg leading-relaxed pr-4 md:pr-12">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
