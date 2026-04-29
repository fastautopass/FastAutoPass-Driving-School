
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CONTACT_INFO } from '../constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface RecentPassesProps {
  areaName: string;
  subHeading?: string;
  title?: string;
}

const PASS_IMAGES = [
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/57ad16ba-a1b2-40de-927e-46914f95cda4.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_4019.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_4020.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3987.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3988.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3989.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3990.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3992.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3994.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/08/496f2ee6-e002-49e8-ab26-5774ec5c8621.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3996.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/08/52ee1509-a674-40c4-8c7a-3ab1d9b7bcec.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/08/9417e2a3-58cd-4418-9961-84f591602294.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3991.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3993.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2025/07/IMG_3995.jpg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/1.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/2.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/3.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/4.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/5.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/6.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/7.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/8.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/9.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/10.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/11.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/12.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/13.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/14.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/15.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/16.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/17.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/18.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/19.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/20.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/21.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/22.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/23.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/24.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/25.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/26.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/27.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/28.jpeg",
  "https://fastautopass.co.uk/wp-content/uploads/2026/04/29.jpeg"
];

const RecentPasses: React.FC<RecentPassesProps> = ({ areaName, subHeading, title }) => {
  return (
    <section className="py-10 bg-white overflow-hidden tight-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
            {title ? title : <>Recent Passes – <span className="text-red-600">Bradford & Leeds</span></>}
          </h2>
          <p className="text-gray-600 font-medium italic">{subHeading || "Real learners. Real results. Recent driving test passes across Bradford, Leeds and West Yorkshire."}</p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="relative px-4 lg:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3750,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="recent-passes-swiper pb-16"
          >
            {PASS_IMAGES.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                    <img
                      src={url}
                      alt={`Automatic driving lessons in ${areaName} – FastAutoPass pass photo`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .recent-passes-swiper .swiper-pagination-bullet-active {
          background: #dc2626;
        }
        .recent-passes-swiper .swiper-button-next,
        .recent-passes-swiper .swiper-button-prev {
          color: #dc2626;
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .recent-passes-swiper .swiper-button-next:after,
        .recent-passes-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        @media (max-width: 1024px) {
          .recent-passes-swiper .swiper-button-next,
          .recent-passes-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default RecentPasses;
