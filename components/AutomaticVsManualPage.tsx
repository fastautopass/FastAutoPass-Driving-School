import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CONTACT_INFO, REVIEWS, TRUST_LINKS } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import RecentPasses from './RecentPasses';
import Schema from './Schema';
import { getArticleSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AutomaticVsManualPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  React.useEffect(() => {
    document.title = "Automatic vs Manual Driving Lessons Bradford & Leeds | FastAutoPass";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Compare automatic vs manual driving lessons in Bradford and Leeds. Understand the differences in clutch control, gear changes, and lesson pace to choose the right path for your driving future.');
  }, []);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Are automatic driving lessons easier than manual lessons?",
      answer: (
        <>
          Generally, yes. Learning in an automatic removes the need to master clutch control and gear synchronization, which are often the most challenging parts for new learners. By choosing <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons</Link>, you can focus your energy on road awareness and planning much sooner.
        </>
      )
    },
    {
      question: "Is automatic better for nervous drivers?",
      answer: "Many nervous learners find automatic cars much more approachable. Without the fear of stalling at busy junctions or rolling back on hills, you can stay calmer and build your confidence at a much steadier pace. It allows you to feel in control of the vehicle from your very first lesson."
    },
    {
      question: "Can you pass quicker in an automatic car?",
      answer: (
        <>
          Because you aren't spending time learning the mechanics of a gearbox, many students reach the required test standard in fewer hours. If you need to get your licence quickly, combining automatic lessons with one of our <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive driving courses</Link> is often the most efficient route.
        </>
      )
    },
    {
      question: "What is the main difference between automatic and manual driving lessons?",
      answer: "The practical difference is how the car handles power. In a manual, you use a clutch and gear stick to change speed. In an automatic, the car does this for you. For a learner, this means your left foot is idle and your hands stay on the wheel, making the physical act of driving much simpler."
    },
    {
      question: "Is automatic a better option for beginners?",
      answer: "It depends on your goals. If you want the simplest, most stress-free way to get on the road, automatic is excellent. However, if you want the flexibility to drive any car in the future, manual is the traditional choice. Most modern learners now find that the ease of automatic outweighs the need for manual flexibility."
    },
    {
      question: "Can I switch from manual to automatic lessons if I am struggling?",
      answer: "Yes, and many people do. If you've found the coordination of a manual car frustrating, switching to automatic can feel like a weight has been lifted. It often turns a stressful learning experience into an enjoyable one, helping you get your progress back on track immediately."
    },
    {
      question: "What licence do I get if I pass in an automatic car?",
      answer: "You will receive a full UK driving licence (Category B Auto), which allows you to drive any automatic car. With the rapid rise of electric and hybrid vehicles, an automatic licence is becoming the standard for the next generation of drivers."
    },
    {
      question: "Can I drive a manual car if I pass in an automatic?",
      answer: "No. If you pass in an automatic, your licence is restricted to automatic vehicles. To drive a manual car later, you would need to take a manual practical test. You would not need to retake your theory test, but you would need to demonstrate you can handle a manual gearbox to the examiner."
    },
    {
      question: "Is manual still worth learning?",
      answer: "Manual is worth it if you specifically need to drive manual work vans, older cars, or if you enjoy the mechanical feel of driving. For most daily commuters and city drivers, however, automatic is more practical and less tiring."
    },
    {
      question: "Is automatic better for city driving in Bradford and Leeds?",
      answer: (
        <>
          Absolutely. Navigating the stop-start traffic, steep hills, and busy roundabouts in <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link> is much easier in an automatic. You can keep your eyes on the road and your hands on the wheel, making city driving far less demanding.
        </>
      )
    },
    {
      question: "Do automatic learners spend less time thinking about gears and clutch control?",
      answer: (
        <>
          Yes. By removing those mechanical tasks, you free up "mental bandwidth" to focus on observation and hazard perception. This is why automatic learners often perform better in <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving tests</Link> earlier in their training—they are simply more aware of their surroundings.
        </>
      )
    },
    {
      question: "Will choosing automatic affect my driving confidence?",
      answer: (
        <>
          It usually improves it. Stalling is one of the biggest confidence-killers for new drivers. Since you can't really stall an automatic, you'll feel more capable from day one. If you've had a break from driving, our <Link to="/refresher-lessons" className="text-red-600 font-bold hover:underline">refresher lessons</Link> are a great way to rebuild that confidence in a low-pressure environment.
        </>
      )
    },
    {
      question: "How do I know whether automatic or manual is right for me?",
      answer: "If you want to learn quickly, feel nervous, or struggle with multitasking, choose automatic. If you are mechanically minded and want the absolute widest choice of vehicles (like older vans or sports cars), manual might be for you. Most of our students find automatic is the right balance for modern life."
    },
    {
      question: "How can I get started with automatic lessons at FastAutoPass?",
      answer: (
        <>
          The best way is to <Link to="/contact" className="text-red-600 font-bold hover:underline">contact us</Link> or fill out our booking form. We'll chat about your experience and goals, then match you with a patient, local instructor in Bradford or Leeds who can help you get started on the right foot.
        </>
      )
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans auto-vs-manual-page">
      <Schema type="Article" data={getArticleSchema(
        "Automatic vs Manual Driving Lessons: Which is Best for You?",
        "Deciding between automatic and manual driving lessons in Bradford and Leeds. Compare clutch control, gear changes, and learning pace.",
        "https://fastautopass.co.uk/automatic-vs-manual",
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1600"
      )} />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Automatic vs Manual", item: "https://fastautopass.co.uk/automatic-vs-manual" }
      ])} />
      <Schema type="FAQPage" data={{
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are automatic driving lessons easier than manual lessons?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally, yes. Automatic lessons remove the need for clutch control and gear changes, allowing you to focus on road awareness."
            }
          },
          {
            "@type": "Question",
            "name": "Can you pass quicker in an automatic car?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many students reach the test standard in fewer hours because they don't have to learn complex manual mechanics."
            }
          },
          {
            "@type": "Question",
            "name": "Is automatic better for city driving in Bradford and Leeds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, automatic is ideal for stop-start traffic and steep hills common in West Yorkshire city driving."
            }
          }
        ]
      }} />
      {/* 1. HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-12 lg:py-24 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-7/12 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
                Automatic vs Manual <br/><span className="text-red-500">Driving Lessons</span> in <br/>Bradford & Leeds
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Deciding between automatic and manual is a big step. We help you understand the practical differences so you can choose the most confident path to your driving licence in West Yorkshire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a href="#booking" className="w-full sm:w-auto bg-red-600 text-white px-10 py-4 rounded-full font-black text-lg text-center hover:bg-red-700 transition-all uppercase italic tracking-widest shadow-xl">
                  Send Enquiry
                </a>
                <button 
                  onClick={() => setShowCallPopup(true)}
                  className="w-full sm:w-auto bg-white text-gray-900 px-10 py-4 rounded-full font-black text-lg text-center hover:bg-gray-100 transition-all uppercase italic tracking-widest shadow-xl"
                >
                  Call Now
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start opacity-80 scale-90 origin-left">
                <TrustBadges dark minimal />
              </div>
            </div>
            <div className="lg:w-5/12 w-full" id="booking">
              <BookingForm areaName="Bradford & Leeds" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE REAL DIFFERENCES EXPLAINED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              The Real Differences Explained
            </h2>
            <div className="h-1.5 w-20 bg-red-600 mx-auto"></div>
          </div>
          <div className="text-gray-600 font-medium leading-relaxed space-y-6 text-lg">
            <p>
              A lot of people start unsure about which path to take, but the main difference comes down to how much you want to manage while you're behind the wheel. In a manual car, you’re constantly balancing the clutch and gear stick to keep the engine happy. Many learners find this especially tricky when tackling the steep residential hills in <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> or navigating the complex, multi-lane roundabouts across <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link>.
            </p>
            <p>
              Automatic cars remove that mechanical stress entirely. There’s no clutch to worry about and no risk of stalling at a busy junction. It feels much more like a modern experience—you simply put the car in 'Drive' and focus on your surroundings. Learners across Bradford and Leeds often tell us that switching to automatic allowed them to stop worrying about the car and start focusing on the road, leading to a much more natural and confident way of driving.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT LEARNERS SAY */}
      <section className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100" id="reviews-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block italic">
              Verified Feedback
            </span>
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              What Learners Say
            </h2>
            <p className="text-gray-600 font-medium italic">Verified reviews from Google and Trustpilot.</p>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mt-6"></div>
          </div>

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
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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
        </div>
      </section>

      {/* 4. COMPARISON SECTION */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Automatic vs Manual: A Direct Comparison
            </h2>
            <div className="h-1.5 w-20 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 font-medium max-w-2xl mx-auto">
              Both options have their merits, and the right choice depends entirely on your personal goals and how you prefer to learn.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Automatic Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-black mb-6 uppercase italic text-red-600 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm not-italic">A</span>
                Automatic Lessons
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-700 font-medium">
                  <span className="text-green-600 font-black uppercase text-xs mt-1">PRO:</span>
                  <span>No clutch or gears to manage, so you can keep both hands on the wheel and your eyes on the road.</span>
                </li>
                <li className="flex gap-3 text-gray-700 font-medium">
                  <span className="text-green-600 font-black uppercase text-xs mt-1">PRO:</span>
                  <span>You'll likely pass sooner, as most people reach test standard in fewer hours without the mechanical learning curve.</span>
                </li>
                <li className="flex gap-3 text-gray-700 font-medium">
                  <span className="text-green-600 font-black uppercase text-xs mt-1">PRO:</span>
                  <span>Perfect for West Yorkshire's busy city centres, making stop-start traffic feel effortless rather than exhausting.</span>
                </li>
                <li className="flex gap-3 text-gray-700 font-medium border-t border-gray-100 pt-4">
                  <span className="text-red-600 font-black uppercase text-xs mt-1">CON:</span>
                  <span>Your licence will be for automatic cars only, though with more electric cars on the road, this is becoming the new standard.</span>
                </li>
              </ul>
            </div>
            {/* Manual Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-black mb-6 uppercase italic text-gray-900 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm not-italic">M</span>
                Manual Lessons
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-700 font-medium">
                  <span className="text-green-600 font-black uppercase text-xs mt-1">PRO:</span>
                  <span>Total flexibility to drive any car, which can be useful if you need to drive manual work vans or older vehicles.</span>
                </li>
                <li className="flex gap-3 text-gray-700 font-medium">
                  <span className="text-green-600 font-black uppercase text-xs mt-1">PRO:</span>
                  <span>Manual cars can sometimes be cheaper to buy second-hand, though the gap is closing as automatics become more common.</span>
                </li>
                <li className="flex gap-3 text-gray-700 font-medium border-t border-gray-100 pt-4">
                  <span className="text-red-600 font-black uppercase text-xs mt-1">CON:</span>
                  <span>It takes longer to get started, as you have to master the 'biting point' and gear synchronization before you can really focus on driving.</span>
                </li>
                <li className="flex gap-3 text-gray-700 font-medium">
                  <span className="text-red-600 font-black uppercase text-xs mt-1">CON:</span>
                  <span>It can feel a bit more work in heavy traffic, especially when you're constantly shifting gears on hills.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCAL DRIVING IN BRADFORD & LEEDS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
                Local Driving in <br/><span className="text-red-600">Bradford & Leeds</span>
              </h2>
              <div className="text-gray-600 font-medium leading-relaxed space-y-4 text-lg">
                <p>
                  Driving in West Yorkshire has its own unique character. From the steep residential hills of Bradford to the complex, multi-lane roundabouts in Leeds city centre, the road conditions can be quite demanding for anyone just starting out.
                </p>
                <p>
                  Many learners find that automatic is the most practical choice for our local roads. When you aren't worried about finding the right gear while merging onto a busy dual carriageway or managing a tricky hill start in traffic, you can give your full attention to safety and planning. It simply makes the learning process feel more manageable and less overwhelming.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-black uppercase italic text-xs text-red-600 mb-2">City Traffic</h4>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Smoother navigation through Leeds city centre and the inner ring road.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-black uppercase italic text-xs text-red-600 mb-2">Complex Junctions</h4>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Better focus at busy Bradford intersections like Thornbury or Staygate.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-black uppercase italic text-xs text-red-600 mb-2">Steep Hills</h4>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Effortless hill starts in residential areas without the fear of rolling back.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-black uppercase italic text-xs text-red-600 mb-2">Test Readiness</h4>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Prepared for local examiner-preferred routes in Thornbury, Heaton, or Harehills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO AUTOMATIC SUITS BEST */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 italic uppercase tracking-tighter">
              Who Automatic Suits Best
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">The Modern Choice for Confidence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Complete Beginners", desc: "If you want to start your journey without the initial frustration of learning complex mechanical controls." },
              { title: "Nervous Learners", desc: "A calmer, more predictable car helps you build confidence at a much faster pace on busy roads." },
              { title: "Struggling in Manual", desc: "If gears or clutch control have become a barrier, switching to automatic can unlock your potential." },
              { title: "Urban Drivers", desc: "Ideal for those who frequently navigate the stop-start traffic and busy roundabouts of Bradford and Leeds." },
              { title: "Road Awareness", desc: "Perfect if you want to focus your energy on planning and observation rather than coordination." },
              { title: "Future-Proofers", desc: "With the rapid shift to electric and hybrid cars, automatic is quickly becoming the global standard." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-black mb-2 uppercase italic text-red-600">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO MANUAL MAY SUIT BETTER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
            Who Manual May Suit Better
          </h2>
          <p className="text-gray-600 font-medium mb-10 max-w-2xl mx-auto">
            While automatic is the modern standard for ease and efficiency, manual driving remains a valuable skill for those with specific requirements or a genuine passion for mechanical control.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-red-600 transition-colors"></div>
              <h3 className="font-black uppercase italic mb-4 text-gray-900 text-sm tracking-wider">Full Flexibility</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">Ideal if you plan to drive older vehicles, specific commercial vans, or want the freedom to hire any car while travelling abroad.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-red-600 transition-colors"></div>
              <h3 className="font-black uppercase italic mb-4 text-gray-900 text-sm tracking-wider">Mechanical Control</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">Perfect for those who enjoy the tactile feel of gear changes and want a deeper, more traditional connection with the car's mechanics.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-red-600 transition-colors"></div>
              <h3 className="font-black uppercase italic mb-4 text-gray-900 text-sm tracking-wider">Career Requirements</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">Essential for certain career paths, including some roles in the emergency services, logistics, or specialized fleet driving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. THE FASTAUTOPASS APPROACH */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
            The FastAutoPass Approach
          </h2>
          <div className="h-1.5 w-20 bg-red-600 mx-auto mb-8"></div>
          <div className="text-gray-600 font-medium leading-relaxed space-y-4 text-lg">
            <p>
              We focus on providing calm, structured automatic tuition that adapts to you. We know that every learner is different, so our instructors don't use a one-size-fits-all method. Instead, we create a supportive environment where you can build your skills without pressure.
            </p>
            <p>
              Our goal is to help you become a safe, observant driver who feels comfortable behind the wheel. Whether you're aiming for a <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive driving courses</Link> pass, need some <Link to="/refresher-lessons" className="text-red-600 font-bold hover:underline">refresher lessons</Link> after a break, or want to test your skills with <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving tests</Link>, we're here to support you every mile of the way. For those looking to advance further, we also offer <Link to="/pass-plus" className="text-red-600 font-bold hover:underline">Pass Plus</Link> and <Link to="/motorway-lessons" className="text-red-600 font-bold hover:underline">motorway lessons</Link> to sharpen your skills. If you're unsure where to start, feel free to visit our <Link to="/contact" className="text-red-600 font-bold hover:underline">contact page</Link> for a friendly chat.
            </p>
          </div>
        </div>
      </section>

      {/* 9. RELATED SERVICES */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-black italic uppercase tracking-tighter text-gray-900">
              Related Services
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/bradford" className="bg-white px-6 py-3 rounded-xl border border-gray-200 font-black text-xs text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Automatic Lessons Bradford
            </Link>
            <Link to="/leeds" className="bg-white px-6 py-3 rounded-xl border border-gray-200 font-black text-xs text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Automatic Lessons Leeds
            </Link>
            <Link to="/intensive-driving-courses" className="bg-white px-6 py-3 rounded-xl border border-gray-200 font-black text-xs text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Intensive Courses
            </Link>
            <Link to="/mock-driving-tests" className="bg-white px-6 py-3 rounded-xl border border-gray-200 font-black text-xs text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Mock Tests
            </Link>
            <Link to="/refresher-lessons" className="bg-white px-6 py-3 rounded-xl border border-gray-200 font-black text-xs text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Refresher Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Helping you make the right choice</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-sm font-black uppercase italic text-gray-900 group-hover:text-red-600 transition-colors">{faq.question}</span>
                  <div className={`w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all ${openFaq === i ? 'bg-red-600 border-red-600 text-white rotate-45' : 'text-gray-400'}`}>
                    <span className="text-lg font-black">+</span>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200 animate-slideDown">
                    <div className="text-gray-600 font-medium leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Booking Team Popup */}
      {showCallPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-slideUp">
            <div className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-gray-900">Call Booking Team</h3>
              <p className="text-gray-500 font-medium mb-8 italic">Our team is available to discuss your automatic lessons.</p>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="block w-full bg-red-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-100 uppercase italic tracking-widest"
                >
                  {CONTACT_INFO.phone}
                </a>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-green-700 transition-all shadow-xl shadow-green-100 uppercase italic tracking-widest"
                >
                  WhatsApp Us
                </a>
                <button 
                  onClick={() => setShowCallPopup(false)}
                  className="block w-full py-4 text-gray-400 font-black uppercase italic tracking-widest text-xs hover:text-gray-600 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutomaticVsManualPage;
