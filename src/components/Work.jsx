import project1Image from '../assets/project 1.png';
import project2Image from '../assets/project 2 (1).png';
import project3Image from '../assets/project 3.png';

export default function Work() {
  const projects = [
    {
      title: "The Code hotel",
      year: "2024",
      description: "Static website and hotel booking platform",
      image: project1Image
    },
    {
      title: "Hyperlocal Discovery",
      year: "2024",
      description: "Product design and platform build",
      image: project2Image
    },
    {
      title: "Creative Branding & Identity",
      year: "2023",
      description: "Visual identity and web presence",
      image: project3Image
    }
  ];

  return (
    <section className="bg-black w-full pt-32 pb-16 md:pt-48 md:pb-20 px-6 md:px-24" id="work">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 md:mb-10 lg:mb-12">
          <h2 
            className="text-4xl md:text-5xl lg:text-7xl font-thin text-white tracking-tight"
            style={{ 
              fontFamily: "'Coolvetica', sans-serif", 
              fontWeight: 100,
              WebkitTextStroke: '1.5px #000000'
            }}
          >
            Selected Works
          </h2>
        </div>

        {/* Project Cards: Stacked vertically under each other on mobile & tablet, horizontal scroll on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:flex lg:overflow-x-auto lg:snap-x lg:snap-mandatory no-scrollbar gap-8 md:gap-12 pb-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="flex flex-col group cursor-pointer w-full lg:w-[calc(33.333%-1rem)] lg:flex-shrink-0 lg:snap-center"
            >
              {/* Image */}
              <div className="w-full aspect-video mb-5 relative bg-[#111111] overflow-hidden rounded-lg md:rounded-none">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual if images aren't uploaded yet
                    e.target.style.opacity = '0';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = `<span class="text-neutral-600 text-sm">Image: ${project.title}</span>`;
                  }}
                />
              </div>

              {/* Title row */}
              <div className="flex items-start mb-1">
                <h3 className="text-xl md:text-xl font-medium text-white transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-neutral-400 text-sm md:text-base">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <button className="group no-underline inline-flex justify-center items-center gap-3 font-sans text-[0.95rem] font-bold text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-md py-2 pl-6 pr-2 rounded-full border border-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)]">
            More work
            <span className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-black transition-transform duration-200 group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
