
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { REVIEWS, TRUST_LINKS } from '../constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ReviewsSliderProps {
  minimal?: boolean;
  hideIntro?: boolean;
}

const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ minimal = false, hideIntro = false }) => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden border-y border-gray-100" id="reviews-section">
      <div className="container mx-auto px-4">
        {!minimal && (
          <div className="text-center mb-8">
            {!hideIntro && (
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block italic">
                Verified Feedback
              </span>
            )}
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              What Learners Say
            </h2>
            <p className="text-gray-600 font-medium italic">Verified reviews from Google and Trustpilot.</p>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mt-6"></div>
          </div>
        )}

        {REVIEWS.length > 0 ? (
          <div className="relative px-4 lg:px-12">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="reviews-swiper pb-16"
            >
              {REVIEWS.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex text-[#FBBC05]">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                      <div className="flex items-center">
                        {review.source === 'Google' ? (
                          <div className="flex items-center space-x-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                            <svg className="w-3 h-3" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Google</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                            <svg className="w-3 h-3 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.954 9.58l-8.664-.001L12.59.252a.31.31 0 00-.58 0L9.31 9.579.646 9.58a.31.31 0 00-.182.558l7.01 5.093-2.677 8.24a.31.31 0 00.477.347l7.01-5.093 7.01 5.093a.31.31 0 00.477-.347l-2.677-8.24 7.01-5.093a.31.31 0 00-.182-.558z"/>
                            </svg>
                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Trustpilot</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 font-medium leading-relaxed mb-8 italic flex-grow">
                      "{review.text.length > 200 ? `${review.text.substring(0, 197)}...` : review.text}"
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <div>
                        <p className="font-black text-gray-900 uppercase italic tracking-tight">{review.name}</p>
                        <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{review.area}</p>
                      </div>
                      <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{review.date}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Google Verified Block */}
            <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center transition-all hover:shadow-xl">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center border border-gray-100 mb-8">
                <svg className="w-10 h-10" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex text-[#FBBC05] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase italic">Google Reviews</h3>
              <p className="text-gray-600 font-medium mb-8">
                We take brand integrity seriously. All our Google reviews are 100% verified and authentic.
              </p>
              <a 
                href={TRUST_LINKS.google}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white border-2 border-gray-100 py-4 rounded-full font-black uppercase italic tracking-widest text-sm hover:bg-gray-50 transition-all"
              >
                View All Google Reviews
              </a>
            </div>

            {/* Trustpilot Verified Block */}
            <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center transition-all hover:shadow-xl">
              <div className="w-20 h-20 bg-[#00b67a] rounded-3xl flex items-center justify-center shadow-lg mb-8">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.954 9.58l-8.664-.001L12.59.252a.31.31 0 00-.58 0L9.31 9.579.646 9.58a.31.31 0 00-.182.558l7.01 5.093-2.677 8.24a.31.31 0 00.477.347l7.01-5.093 7.01 5.093a.31.31 0 00.477-.347l-2.677-8.24 7.01-5.093a.31.31 0 00-.182-.558z"/>
                </svg>
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase italic">Trustpilot Reviews</h3>
              <p className="text-gray-600 font-medium mb-8">
                Excellent rating on Trustpilot. Read verified feedback from our successful students.
              </p>
              <a 
                href={TRUST_LINKS.trustpilot}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white border-2 border-[#00b67a] text-[#00b67a] py-4 rounded-full font-black uppercase italic tracking-widest text-sm hover:bg-green-50 transition-all"
              >
                View All Trustpilot Reviews
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .reviews-swiper .swiper-pagination-bullet-active {
          background: #dc2626;
        }
        .reviews-swiper .swiper-button-next,
        .reviews-swiper .swiper-button-prev {
          color: #dc2626;
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .reviews-swiper .swiper-button-next:after,
        .reviews-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        @media (max-width: 1024px) {
          .reviews-swiper .swiper-button-next,
          .reviews-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewsSlider;
