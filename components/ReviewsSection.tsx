
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Heart, Truck, ShieldCheck, Building2, Briefcase } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const ReviewsSection: React.FC = () => {
  const organisations = [
    { name: "NHS", logo: "https://logo.clearbit.com/nhs.uk", alt: "NHS – trusted organisation" },
    { name: "Hanson School", logo: "https://logo.clearbit.com/hanson.org.uk", alt: "Hanson School – trusted organisation" },
    { name: "Bradford College", logo: "https://logo.clearbit.com/bradfordcollege.ac.uk", alt: "Bradford College – trusted organisation" },
    { name: "University of Bradford", logo: "https://logo.clearbit.com/bradford.ac.uk", alt: "University of Bradford – trusted organisation" },
    { name: "Bradford Council", logo: "https://logo.clearbit.com/bradford.gov.uk", alt: "Bradford Council – trusted organisation" },
    { name: "Care Sector Clients", icon: <Heart className="w-10 h-10" />, alt: "Care Sector Clients – trusted organisation" },
    { name: "Logistics Partner", icon: <Truck className="w-10 h-10" />, alt: "Logistics & Delivery Clients – trusted organisation" },
    { name: "Security Industry Clients", icon: <ShieldCheck className="w-10 h-10" />, alt: "Security Industry Clients – trusted organisation" },
    { name: "Local Authority Clients", icon: <Building2 className="w-10 h-10" />, alt: "Local Authority Clients – trusted organisation" },
    { name: "Corporate Clients", icon: <Briefcase className="w-10 h-10" />, alt: "Corporate Clients – trusted organisation" }
  ];

  return (
    <section className="py-12 bg-white overflow-hidden border-y border-gray-100 tight-section" id="trust">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block italic">
            Trusted by Organisations
          </span>
          <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
            Trusted by Leading Organisations
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Professional Logo Slider */}
        <div className="relative">
          {/* Gradient Masks for Premium Fade Effect */}
          <div className="absolute inset-y-0 left-0 w-24 lg:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 lg:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            freeMode={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="logo-swiper pointer-events-auto"
          >
            {organisations.map((org, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center justify-center h-40 px-4 group transition-all duration-500">
                  <div className="w-full h-[60px] flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300">
                    {org.logo ? (
                      <img 
                        src={org.logo} 
                        alt={org.alt}
                        loading="lazy"
                        className="h-[60px] w-auto object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          // Show name instead if image fails
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.fallback-text')) {
                            const span = document.createElement('span');
                            span.className = "fallback-text text-gray-400 font-black uppercase text-[10px] tracking-widest text-center";
                            span.innerText = org.name;
                            parent.appendChild(span);
                          }
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center text-gray-400 group-hover:text-red-600 transition-colors">
                        {org.icon}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 mt-6 text-center leading-tight transition-colors duration-300 group-hover:text-gray-900">
                    {org.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Credibility Footer */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            Logos used with permission where applicable.
          </p>
          <p className="text-gray-600 font-bold uppercase tracking-[0.15em] text-xs leading-relaxed italic border-t border-gray-50 pt-8">
            Providing professional driver training and safety assessments to employers, schools, and healthcare institutions across Bradford and Leeds for over a decade.
          </p>
          <div className="flex justify-center items-center space-x-8 mt-8 opacity-40 grayscale">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>
              <span className="text-[10px] font-black tracking-widest uppercase">DVSA Approved Standards</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span className="text-[10px] font-black tracking-widest uppercase">Corporate Safety Certified</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .logo-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
