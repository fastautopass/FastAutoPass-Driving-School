
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Heart, Truck, ShieldCheck, Building2, Briefcase, GraduationCap, School, Stethoscope, Landmark } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HomeTrustSection: React.FC = () => {
  const trustItems = [
    { name: "NHS", icon: <Stethoscope className="w-6 h-6" />, desc: "Healthcare Support" },
    { name: "Bradford Council", icon: <Landmark className="w-6 h-6" />, desc: "Local Authority" },
    { name: "Leeds City Council", icon: <Building2 className="w-6 h-6" />, desc: "Local Authority" },
    { name: "Universities & Colleges", icon: <GraduationCap className="w-6 h-6" />, desc: "Higher Education" },
    { name: "Schools & Sixth Forms", icon: <School className="w-6 h-6" />, desc: "Education Sector" },
    { name: "Corporate Clients", icon: <Briefcase className="w-6 h-6" />, desc: "Business Fleet" },
    { name: "Security Industry", icon: <ShieldCheck className="w-6 h-6" />, desc: "Safety Training" },
    { name: "Logistics Companies", icon: <Truck className="w-6 h-6" />, desc: "Fleet Development" },
    { name: "Healthcare Organisations", icon: <Heart className="w-6 h-6" />, desc: "Private Care" }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100" id="trust-home">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-6 italic uppercase tracking-tighter text-gray-900 leading-tight">
            Trusted by Organisations <br className="hidden lg:block" /> Across <span className="text-red-600">Bradford & Leeds</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 font-medium italic text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Providing professional driver training, safety assessments and driver development for organisations across Bradford and Leeds.
          </p>
        </div>

        {/* Trust Carousel — Compact & Premium */}
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="trust-swiper pb-12"
          >
            {trustItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="group flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-red-100 h-full">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base lg:text-lg font-black uppercase italic tracking-tight text-gray-900 leading-none mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 italic">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .trust-swiper .swiper-pagination-bullet-active {
          background: #dc2626 !important;
        }
        .trust-swiper .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default HomeTrustSection;
