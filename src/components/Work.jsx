import hotelSagarPlazaMockup from '../assets/hotel-sagar-plaza-mockup.jpg'
import chocoRaspb from '../assets/choco-raspb.jpg'
import shingify from '../assets/shingify.jpg'
import octoPos from '../assets/octo-pos.png'

const projects = [
  {
    title: 'Hotel sagar plaza',
    category: 'food industry | website',
    image: hotelSagarPlazaMockup
  },
  {
    title: 'chocho rasp',
    category: 'food industry | website',
    image: chocoRaspb
  },
  {
    title: 'shingify',
    category: 'fashion | website',
    image: shingify
  },
  {
    title: 'pos',
    category: 'Retail Industry, Software',
    image: octoPos
  }
];

export default function Work() {
  return (
    <section className="py-[120px] relative max-[640px]:py-[80px] bg-black w-full flex flex-col justify-start items-start" id="work">
      <div className="max-w-[1200px] w-full mx-auto px-8 max-[640px]:px-5">
        {/* Large section header */}
        <div className="mb-20">
          <h2 className="text-[clamp(2.5rem,6vw,7rem)] font-light text-white uppercase leading-none tracking-[-0.02em] text-left shrink-0">
            OUR WORK
          </h2>
        </div>

        {/* 4-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16 lg:gap-x-4 lg:gap-y-20">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="w-full relative overflow-hidden rounded-none mb-6 aspect-[4/3] flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start px-2">
                <h3 className="text-[1.8rem] md:text-[2.2rem] font-bold text-white mb-2 capitalize transition-colors duration-300 group-hover:text-orange">
                  {project.title}
                </h3>
                <span className="text-[#a6a6a6] text-[1rem] tracking-[1px] uppercase">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
