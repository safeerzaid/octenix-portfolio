import { useEffect, useRef, useState } from 'react';

const servicesData = [
  {
    title: 'Web & Mobile Development',
    subtitle: 'Custom digital experiences',
    tags: ['React', 'Node.js', 'iOS', 'Android'],
    description: "Our team will assist in developing robust, scalable applications, ensuring that all technical requirements align with your business objectives and user needs."
  },
  {
    title: 'E-Commerce',
    subtitle: 'High-performance storefronts',
    tags: ['Shopify', 'Stripe', 'Next.js', 'Headless'],
    description: "We build seamless, high-conversion shopping experiences designed to maximize your revenue and provide customers with intuitive purchasing flows."
  },
  {
    title: 'Branding',
    subtitle: 'Strategic brand positioning',
    tags: ['Logo', 'Typography', 'Color Palette', 'Guidelines'],
    description: "Our team will assist in developing a consistent brand voice, ensuring that all messages align with the brand's tone, values, objectives and goals."
  },
  {
    title: 'Custom Software',
    subtitle: 'Enterprise-grade solutions',
    tags: ['Architecture', 'Cloud', 'APIs', 'Automation'],
    description: "We design tailored internal tools and software ecosystems to streamline operations, eliminate bottlenecks, and drive organizational efficiency."
  },
  {
    title: 'UI/UX Designing',
    subtitle: 'User-centric interfaces',
    tags: ['Wireframes', 'Prototyping', 'Research', 'Design System'],
    description: "We craft intuitive, visually compelling digital products focused on user engagement, accessibility, and frictionless interactions."
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [screenType, setScreenType] = useState('desktop');
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);

  // Handle responsive layout state (mobile < 740, tablet 768-1199, desktop >= 1200)
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 740) setScreenType('mobile');
      else if (w < 1200) setScreenType('tablet');
      else setScreenType('desktop');
    };
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle smooth scroll interpolation
  useEffect(() => {
    let animationFrame;
    
    const updateProgress = () => {
      // Lerp for smooth interpolation - 0.15 for a responsive feel
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.15;
      setProgress(currentProgress.current);
      
      // Keep looping if not reached target
      if (Math.abs(targetProgress.current - currentProgress.current) > 0.001) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        animationFrame = null;
      }
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      
      let newProgress = 0;
      if (rect.top > 0) {
        newProgress = 0;
      } else if (rect.top < -scrollHeight) {
        newProgress = 1;
      } else {
        newProgress = -rect.top / scrollHeight;
      }
      
      targetProgress.current = newProgress;
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  const isMobile = screenType === 'mobile';
  const isTablet = screenType === 'tablet';

  // Multiplier of 5 means it reaches 4.0 at 80% scroll.
  // Math.min(4) ensures that for the last 20% of the scroll, the animation freezes and the 5th item lingers.
  const activeIndexFloat = Math.min(4, progress * 5);
  const activeIndex = Math.round(activeIndexFloat);

  // Wheel geometry based on device:
  // Mobile: top-anchored wheel, active position is bottom (90deg), spacing = -18
  // Tablet: right-anchored wheel, active position is left rim (180deg), spacing = 18
  // Desktop: left-anchored wheel, active position is right rim (0deg), spacing = -18
  const spacing = isTablet ? 18 : -18;
  const baseAngleOffset = isMobile ? 90 : (isTablet ? 180 : 0);
  const wheelRotation = -(activeIndexFloat * spacing);

  const getWheelStyle = () => {
    if (isMobile) {
      return {
        top: '-420px',
        left: '50%',
        width: '600px',
        height: '600px',
        transform: `translateX(-50%) rotate(${wheelRotation}deg)`,
        willChange: 'transform'
      };
    }
    if (isTablet) {
      return {
        top: '50%',
        right: '-540px',
        width: '820px',
        height: '820px',
        transform: `translateY(-50%) rotate(${wheelRotation}deg)`,
        willChange: 'transform'
      };
    }
    return {
      top: '50%',
      left: '-950px',
      width: '1200px',
      height: '1200px',
      transform: `translateY(-50%) rotate(${wheelRotation}deg)`,
      willChange: 'transform'
    };
  };

  return (
    <section ref={containerRef} className="w-full h-[600vh] bg-[#050505] text-white relative" id="services">
      <div className={`sticky top-0 w-full h-screen overflow-hidden flex ${
        isTablet ? 'flex-row items-center justify-start px-8 md:px-12 lg:px-16' : 'flex-col md:flex-row items-center justify-start md:justify-end px-6 md:px-8 lg:px-24'
      }`}>
        
        {/* Large Circular Navigation Wheel */}
        <div 
          className="absolute border-[1px] border-neutral-800 rounded-full pointer-events-none"
          style={getWheelStyle()}
        >
          {/* Numbers around the edge */}
          {servicesData.map((_, idx) => {
            const angle = idx * spacing + baseAngleOffset;
            const isCurrentlyActive = activeIndex === idx;
            
            return (
              <div
                key={idx}
                className="absolute flex items-center justify-start origin-left"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '50%', // from center to edge
                  transform: `translateY(-50%) rotate(${angle}deg)`,
                }}
              >
                <div 
                  className="ml-auto relative flex items-center justify-end pr-4 md:pr-5 lg:pr-12"
                  style={{
                    // Counter-rotate the text so it stays perfectly horizontal
                    transform: `rotate(${-(angle + wheelRotation)}deg)`,
                    willChange: 'transform'
                  }}
                >
                  <div 
                    className={`absolute right-0 md:right-1 lg:right-2 w-1.5 h-1.5 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full bg-orange-500 transition-opacity duration-500 ease-out ${
                      isCurrentlyActive ? 'opacity-100' : 'opacity-0'
                    }`} 
                  />
                  <span className={`text-sm md:text-sm lg:text-2xl font-light tracking-widest transition-colors duration-500 ease-out ${
                    isCurrentlyActive ? 'text-white' : 'text-neutral-700'
                  }`}>
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Area - LEFT on tablet, RIGHT on desktop, CENTERED on mobile */}
        <div className={`z-10 relative ${
          isTablet 
            ? 'w-full max-w-[340px] md:max-w-[380px] h-[380px] mt-0 text-left' 
            : 'w-full max-w-[650px] lg:max-w-[800px] lg:mr-[10vw] h-[60vh] lg:h-[600px] mt-[220px] md:mt-0'
        }`}>
          {servicesData.map((service, idx) => {
            const isActive = activeIndex === idx;
            // Calculate distance for smooth staggered translate effect
            const distance = activeIndexFloat - idx;
            // Travel distance scaled appropriately for tablet vs desktop vs mobile
            const translateY = isTablet ? distance * -120 : (isMobile ? distance * -150 : distance * -200); 
            
            // Pure scroll-driven opacity to prevent overlapping texts
            const dynamicOpacity = Math.max(0, 1 - Math.abs(distance) * 1.8);
            
            // Dynamic blur effect based on distance
            const blurAmount = Math.abs(distance) * 4;
            
            return (
              <div 
                key={idx}
                className={`absolute top-1/2 left-0 w-full flex flex-col ${
                  isTablet 
                    ? 'items-start text-left' 
                    : 'items-center text-center md:items-start md:text-left'
                }`}
                style={{
                  opacity: dynamicOpacity,
                  transform: `translateY(calc(-50% + ${translateY}px))`,
                  filter: `blur(${blurAmount}px)`,
                  pointerEvents: isActive ? 'auto' : 'none',
                  visibility: dynamicOpacity === 0 ? 'hidden' : 'visible',
                  willChange: 'opacity, transform, filter'
                }}
              >
                <h3 
                  className={`font-thin tracking-tight mb-2 text-white leading-tight ${
                    isTablet ? 'text-2xl md:text-3xl' : 'text-3xl lg:text-6xl mb-4'
                  }`}
                  style={{ 
                    fontFamily: "'Coolvetica', sans-serif", 
                    fontWeight: 100,
                    WebkitTextStroke: '1.5px #050505'
                  }}
                >
                  {service.title}
                </h3>
                <h4 className={`text-neutral-400 font-light ${
                  isTablet ? 'text-xs md:text-sm mb-3' : 'text-base lg:text-xl mb-4 lg:mb-12'
                }`}>
                  {service.subtitle}
                </h4>

                <div className={`flex flex-wrap ${
                  isTablet ? 'justify-start gap-1.5 text-[9px] md:text-[10px] mb-3' : 'justify-center md:justify-start gap-2 lg:gap-4 text-[10px] lg:text-xs mb-4 lg:mb-6'
                } tracking-wider uppercase text-neutral-500`}>
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="border border-neutral-800 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className={`text-neutral-400 leading-relaxed ${
                  isTablet ? 'text-xs md:text-sm max-w-[340px] md:max-w-[370px]' : 'text-base lg:text-xl w-full'
                }`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
