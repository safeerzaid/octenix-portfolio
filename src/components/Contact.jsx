import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="py-[120px] relative max-[640px]:py-[80px] bg-[#060609] overflow-hidden" id="contact">
      <div className="max-w-[1200px] mx-auto px-8 max-[640px]:px-5 relative">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.12)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="inline-block text-[0.75rem] font-bold tracking-[2px] uppercase text-orange bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] py-1.5 px-4 rounded-full mb-5">Get In Touch</div>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1px] leading-[1.15] mb-5 text-white">
          Let's Build Something <span className="bg-gradient-to-br from-orange via-orange-light to-[#fbbf24] bg-clip-text text-transparent">Great</span>
        </h2>
        <p className="text-[1.05rem] text-text-muted max-w-[560px] leading-[1.75] mb-16">
          Ready to start your project? Drop us a message and we'll get back to you within 24 hours.
        </p>

        {sent && (
          <div className="bg-[rgba(249,115,22,0.15)] border border-[rgba(249,115,22,0.4)] rounded-xl py-4 px-6 mb-6 text-orange-light font-semibold max-w-[720px] relative z-10">
            ✦ Message sent! We'll get back to you within 24 hours.
          </div>
        )}

        <form className="max-w-[720px] flex flex-col gap-5 relative z-10" id="contactForm" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[0.85rem] font-semibold text-text-muted tracking-[0.3px]">Your Name</label>
              <input
                type="text" id="name" name="name"
                className="font-sans text-[0.95rem] text-white bg-[rgba(255,255,255,0.05)] border border-border rounded-xl py-3.5 px-[18px] outline-none transition-colors duration-300 placeholder:text-[rgba(255,255,255,0.25)] focus:border-orange focus:bg-[rgba(249,115,22,0.05)]"
                placeholder="John Doe" required
                value={form.name} onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[0.85rem] font-semibold text-text-muted tracking-[0.3px]">Email Address</label>
              <input
                type="email" id="email" name="email"
                className="font-sans text-[0.95rem] text-white bg-[rgba(255,255,255,0.05)] border border-border rounded-xl py-3.5 px-[18px] outline-none transition-colors duration-300 placeholder:text-[rgba(255,255,255,0.25)] focus:border-orange focus:bg-[rgba(249,115,22,0.05)]"
                placeholder="john@company.com" required
                value={form.email} onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-[0.85rem] font-semibold text-text-muted tracking-[0.3px]">Subject</label>
            <input
              type="text" id="subject" name="subject"
              className="font-sans text-[0.95rem] text-white bg-[rgba(255,255,255,0.05)] border border-border rounded-xl py-3.5 px-[18px] outline-none transition-colors duration-300 placeholder:text-[rgba(255,255,255,0.25)] focus:border-orange focus:bg-[rgba(249,115,22,0.05)]"
              placeholder="Project Inquiry"
              value={form.subject} onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[0.85rem] font-semibold text-text-muted tracking-[0.3px]">Message</label>
            <textarea
              id="message" name="message" rows="5"
              className="font-sans text-[0.95rem] text-white bg-[rgba(255,255,255,0.05)] border border-border rounded-xl py-3.5 px-[18px] outline-none transition-colors duration-300 resize-y placeholder:text-[rgba(255,255,255,0.25)] focus:border-orange focus:bg-[rgba(249,115,22,0.05)]"
              placeholder="Tell us about your project..." required
              value={form.message} onChange={handleChange}
            />
          </div>

          <button type="submit" className="no-underline inline-flex justify-center items-center gap-2 font-sans text-[0.95rem] font-bold text-white bg-gradient-to-br from-orange-dark to-orange py-3.5 px-8 w-full rounded-default border-none cursor-pointer transition-all duration-200 shadow-[0_6px_30px_rgba(249,115,22,0.4)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(249,115,22,0.55)]" id="btn-submit">
            Send Message ✦
          </button>
        </form>
      </div>
    </section>
  )
}
