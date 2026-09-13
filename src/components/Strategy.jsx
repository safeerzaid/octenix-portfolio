import growthSystemsImg from '../assets/growth-systems.jpg'
import businessNeedsUsImg from '../assets/business-needs-us.jpg'

export default function Strategy() {
  const cards = [
    {
      title: "Digital Experiences",
      text: "Not just screens. We build digital experiences that connect your business with the people who matter.",
      hasOrangeBlob: true,
    },
    {
      isImage: true,
      image: growthSystemsImg,
    },
    {
      isImage: true,
      image: businessNeedsUsImg,
    }
  ]

  return (
    <section className="min-h-[80vh] bg-black flex flex-col justify-start items-start pt-16 px-[10vw] pb-20">
      <div className="max-w-[1280px] w-full mx-auto">
        <p className="text-[clamp(2rem,4.5vw,3.8rem)] font-light leading-[1.25] text-white max-w-[1100px] text-left mb-20">
          We bring strategy, technology, and creativity together to build solutions that move businesses forward.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            card.isImage ? (
              <div key={idx} className="relative overflow-hidden rounded-3xl min-h-[280px] border border-[rgba(255,255,255,0.1)] transition-colors duration-300 hover:border-[rgba(255,255,255,0.2)] group">
                <img src={card.image} alt="Growth Systems" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div key={idx} className="relative overflow-hidden flex flex-col rounded-3xl p-10 min-h-[280px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-2xl transition-colors duration-300 hover:border-[rgba(255,255,255,0.2)] group">
                {card.hasOrangeBlob && (
                  <div className="absolute -top-[50px] -right-[50px] w-[250px] h-[250px] rounded-full bg-orange opacity-[0.35] blur-[60px] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.55]"></div>
                )}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-white text-[1.8rem] font-medium leading-[1.2] mb-4">{card.title}</h3>
                  <p className="text-text-muted leading-[1.7] text-[1.15rem] mt-auto">
                    {card.text}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
