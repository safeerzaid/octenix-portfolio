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
    <section className="py-[120px] relative max-[640px]:py-[80px] bg-dark" id="faq">
      <div className="max-w-[1200px] mx-auto px-8 max-[640px]:px-5">
        <div className="inline-block text-[0.75rem] font-bold tracking-[2px] uppercase text-orange bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] py-1.5 px-4 rounded-full mb-5">Got Questions?</div>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1px] leading-[1.15] mb-16 text-white">
          Frequently Asked <span className="bg-gradient-to-br from-orange via-orange-light to-[#fbbf24] bg-clip-text text-transparent">Questions</span>
        </h2>

        <div className="max-w-[760px] flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div
              className={`bg-card border rounded-default overflow-hidden transition-colors duration-300 ${openIndex === i ? 'border-[rgba(249,115,22,0.35)]' : 'border-border'}`}
              key={i}
              id={`faq-${i + 1}`}
            >
              <button
                className="w-full bg-none border-none text-white font-sans text-base font-semibold text-left py-6 px-7 cursor-pointer flex items-center justify-between gap-4 transition-colors duration-200 hover:text-orange group"
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
              >
                {item.q}
                <span className={`text-[1.4rem] text-orange transition-transform duration-300 shrink-0 inline-block ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-[max-height,padding] duration-400 ease-in-out ${openIndex === i ? 'max-h-[300px]' : 'max-h-0'}`}>
                <p className="px-7 pb-7 text-text-muted text-[0.95rem] leading-[1.75]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
