
import { FAQ } from './types';

export interface FAQTemplate {
  id: string;
  group: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'L'; // L for Leeds-specific
  question: string;
  answer: string;
}

export const MASTER_FAQ_BANK: FAQTemplate[] = [
  // GROUP A — Test & DVSA Authority
  {
    id: 'a1',
    group: 'A',
    question: "How close is [Area] to the nearest [City] driving test centre?",
    answer: "Depending on your exact location in [Area], you are typically situated within a 15-minute drive of the [Test Centres] centres. During your automatic lessons, we make it a priority to spend significant time navigating the specific approach roads and complex junctions surrounding these hubs. This ensures that by the time your test date arrives, you feel completely familiar with the local traffic patterns and examiner expectations. We often incorporate a [mock driving test](/mock-driving-tests) into our final sessions to help settle any nerves and verify that your observation skills meet the required DVSA standard for a first-time pass."
  },
  {
    id: 'a2',
    group: 'A',
    question: "Do you practice real DVSA test routes around the [Area] vicinity?",
    answer: "Yes, our instructors have extensive knowledge of the common test routes used by examiners at the [Test Centres] centres. While the DVSA no longer publishes official routes to prevent rote learning, we focus on the 'hotspots' near [Area] where learners often struggle, such as the large multi-lane roundabouts and busy arterial roads like [Road]. By mastering these challenging sections in an automatic car, you can focus entirely on your lane discipline and hazard perception. You can see some of our [recent passes](/recent-passes) from the [Postcode] area to see how many local learners have successfully navigated these same routes with our guidance."
  },
  {
    id: 'a3',
    group: 'A',
    question: "What are the most common reasons for failing a test in [Area]?",
    answer: "In the [Area] and [Postcode] district, many learners unfortunately fail due to inadequate observation at junctions or poor road positioning on narrow residential streets. The high volume of traffic near [Landmark] can also lead to hesitation or clearance issues. Our automatic tuition is specifically designed to address these local challenges by simplifying the driving process, allowing you to dedicate 100% of your mental energy to scanning the road and planning ahead. We recommend reviewing our [test preparation](/test-preparation) checklist to ensure you've mastered the key skills needed to avoid these common pitfalls on your big day."
  },
  // ... more to be added
  {
    id: 'a4',
    group: 'A',
    question: "Do you simulate real DVSA conditions during lessons in [Area]?",
    answer: "Absolutely. We believe that the best way to prepare for your test at the [Test Centres] centres is to experience the exact conditions you'll face on the day. Our sessions in [Area] include regular [mock driving test](/mock-driving-tests) scenarios, covering everything from the 'Show Me, Tell Me' vehicle safety questions to the independent driving section using a sat-nav. This exposure helps to normalise the pressure of the exam environment, so when you finally meet the examiner, it feels like just another drive. We'll provide you with a detailed feedback sheet, much like the official DL25 form, so you know exactly which areas of your [test preparation](/test-preparation) need a final polish."
  },
  {
    id: 'a5',
    group: 'A',
    question: "Is your mock test marked like the real exam at [Test Centres]?",
    answer: "Yes, our mock tests are conducted with the same rigour as the official DVSA exam. We'll take you on a 40-minute route around [Area] and the surrounding districts, marking any faults as minor, serious, or dangerous. This gives you a realistic understanding of where you stand and ensures there are no surprises when you head to the [Test Centres] test centre. By identifying and correcting these issues early, we significantly increase your chances of joining our list of [recent passes](/recent-passes). It's all part of our commitment to providing the highest standard of [Leeds automatic driving lessons](/leeds) or Bradford tuition."
  },

  // GROUP B — Area-Specific Practicality
  {
    id: 'b1',
    group: 'B',
    question: "Do you provide home pick-up and drop-off in the [Area] vicinity?",
    answer: "We offer a complete door-to-door service for all our automatic driving lessons in [Area]. Whether you are located near [Landmark] or closer to the [Postcode] border, your instructor will collect you from your home and drop you off at your preferred destination at the end of the session. This saves you the time and stress of travelling to a meeting point, allowing you to focus entirely on your driving. This flexibility is a key part of our service, and you can [secure your start date](/contact) today to experience the convenience of learning with a truly local [City] driving school."
  },
  {
    id: 'b2',
    group: 'B',
    question: "Can you collect me from [College] or my workplace in [City]?",
    answer: "Definitely. We understand that many of our students in [Area] have busy schedules, so we are happy to arrange pick-ups and drop-offs at [College], your workplace, or any other convenient location within our coverage zone. This makes it incredibly easy to fit your [test preparation](/test-preparation) into your daily routine without any extra hassle. As long as we have prior notice, your instructor will work with you to find the most suitable meeting points. You can [view all Leeds areas](/leeds) or Bradford districts we cover to see the full extent of our flexible service across West Yorkshire."
  },
  {
    id: 'b3',
    group: 'B',
    question: "Are lessons available during peak traffic times on [Road]?",
    answer: "We actually encourage our [Area] students to take at least some of their lessons during peak traffic times. Navigating busy routes like [Road] during the morning or evening rush is an essential part of becoming a confident driver in [City]. Learning to manage heavy congestion in an automatic car is much less stressful than in a manual, as you won't have to worry about constant gear changes or stalling. This experience is invaluable for your long-term safety and will ensure you're fully prepared for any traffic conditions you might encounter during your [mock driving test](/mock-driving-tests) or the real exam."
  },
  {
    id: 'b4',
    group: 'B',
    question: "Is parking practice included in my lessons around [Area]?",
    answer: "Yes, mastering all the required DVSA manoeuvres is a core part of our syllabus. We'll use various quiet residential spots and local car parks in [Area] to practice everything from parallel parking on [Road] to bay parking at local supermarkets. Our goal is to ensure you can park confidently and safely in any situation, whether it's a tight spot near [Landmark] or a busy car park in the city centre. We'll provide you with clear, easy-to-follow reference points that work perfectly with our modern automatic vehicles. Check out our [test preparation](/test-preparation) guide for more tips on mastering these essential skills."
  },

  // GROUP C — Speed & Passing
  {
    id: 'c1',
    group: 'C',
    question: "Can I pass my test within 4–6 weeks if I live in [Area]?",
    answer: "If you have a test date already booked and can commit to regular, intensive sessions, passing within 4-6 weeks in [Area] is very achievable. Our [intensive automatic driving courses](/intensive-driving-courses) are designed to condense your learning into a shorter timeframe, focusing on the specific skills you need to reach test standard quickly. We'll assess your current ability during your first lesson and create a structured plan to get you ready for the [Test Centres] test centre as efficiently as possible. Many of our [recent passes](/recent-passes) have come from students who chose this fast-track route to gain their independence on the roads of [City]."
  },
  {
    id: 'c2',
    group: 'C',
    question: "Is an intensive course suitable for a complete beginner in [Area]?",
    answer: "Intensive courses are a popular choice for [Area] residents who want to get their license quickly. Because you're learning in an automatic, you'll spend less time on the mechanics of gear changes and more time mastering the complex road systems of [City]. This often leads to a faster pass rate compared to traditional manual lessons. We'll tailor the pace of your [intensive automatic driving courses](/intensive-driving-courses) to your individual needs, ensuring you never feel overwhelmed while still making rapid progress. It's the perfect way to [secure your start date](/contact) and get on the road to freedom sooner."
  },
  {
    id: 'c3',
    group: 'C',
    question: "How quickly can I book a driving test in [City]?",
    answer: "Test availability at the [Test Centres] centres can vary, but we often help our [Area] students find earlier dates through cancellation apps and our local network. We recommend booking your test as soon as you've passed your theory exam, and we'll ensure your training is perfectly timed to coincide with that date. Our instructors are experts at managing your progress so you reach your peak performance just in time for the big day. You can review our [test preparation](/test-preparation) resources to stay sharp while you wait for your slot at the [City] test centre."
  },
  {
    id: 'c4',
    group: 'C',
    question: "What happens if I’m not quite ready for my test date?",
    answer: "Your instructor will provide you with honest, professional feedback after every lesson in [Area]. If we feel you're not quite ready for the [Test Centres] test centre, we'll suggest moving the date back slightly to ensure you don't waste your test fee and, more importantly, that you're a safe driver for life. We want you to head into your exam feeling 100% confident in your ability to pass. We can use the extra time to conduct more [mock driving test](/mock-driving-tests) sessions and refine any areas where you might still feel a bit unsure. Our priority is your success and safety on the roads of [City]."
  },

  // GROUP D — Nervous / First-Time Learners
  {
    id: 'd1',
    group: 'D',
    question: "I’m anxious about driving in busy [City] traffic — can you help?",
    answer: "Many of our learners in [Area] feel the same way, which is why they choose automatic. Without the constant worry of stalling or managing a clutch in heavy traffic on [Road], you can focus entirely on the road ahead and your surroundings. We'll start your training on quiet residential streets and only move to busier areas when you feel completely comfortable and in control. Our patient instructors are experts at helping nervous learners build their confidence step-by-step. You can read about our [recent passes](/recent-passes) to see how many other anxious students have successfully overcome their fears with our [Leeds automatic driving lessons](/leeds) or Bradford tuition."
  },
  {
    id: 'd2',
    group: 'D',
    question: "Do you specialise in working with nervous learners in [Area]?",
    answer: "Yes, we take great pride in our ability to help nervous learners in [Area] become confident, independent drivers. Our instructors are specifically trained to be patient, encouraging, and to go at a pace that suits you. We understand that everyone learns differently, and we'll adapt our teaching style to ensure every lesson in [City] is a positive and productive experience. Whether you're worried about large roundabouts or busy junctions near [Landmark], we'll give you the tools and techniques to handle them with ease. Don't hesitate to [secure your start date](/contact) and take the first step towards overcoming your driving anxiety."
  },
  {
    id: 'd3',
    group: 'D',
    question: "What if I’ve failed my driving test before with another school?",
    answer: "Don't be discouraged! Many of our most successful students in [Area] came to us after failing a test elsewhere. We'll start by reviewing your previous test report to identify exactly which areas need improvement. Our automatic cars simplify the driving process, allowing you to focus on the observation and planning skills that are often the cause of test failures. We'll then create a targeted plan to address these weaknesses and get you ready for a successful retest at the [Test Centres] centre. Our goal is to help you join our growing list of [recent passes](/recent-passes) in [City] as quickly as possible."
  },
  {
    id: 'd4',
    group: 'D',
    question: "Can I restart my driving lessons after a long break?",
    answer: "Absolutely. If you've had a break from driving, we can offer tailored [refresher lessons](/refresher-lessons) in [Area] to get your skills back up to scratch. We'll quickly assess what you remember and focus our time on the areas where you feel a bit rusty, ensuring you're safe and confident to return to the roads of [City]. Learning in an automatic is a great way to ease back into driving, as it's much more intuitive and less physically demanding than a manual. We'll have you feeling comfortable behind the wheel again in no time, whether you're navigating [Road] or practicing manoeuvres near [Landmark]."
  },

  // GROUP E — Pricing & Commitment
  {
    id: 'e1',
    group: 'E',
    question: "How much are automatic driving lessons in [Area]?",
    answer: "Lesson prices vary depending on your location and experience level. For the most up-to-date lesson information, please [enquire today](/contact). We're committed to providing high-quality, professional automatic tuition that helps you achieve your license efficiently. By contacting us directly, you can [secure your start date](/contact) and preferred weekly slot, making it easier to plan your schedule."
  },
  {
    id: 'e2',
    group: 'E',
    question: "Do you offer flexible lesson scheduling in [Area]?",
    answer: "We understand that our [Area] students have busy lives, which is why we offer a range of lesson times including early mornings, evenings, and weekends. We'll work closely with you to find a consistent weekly slot that fits your schedule, ensuring your progress in [City] remains steady and focused. Whether you're a student at [College] or working full-time, we can accommodate your needs. Consistency is key to learning to drive, and our flexible approach ensures you can get the hours you need to reach test standard as quickly as possible. For the most up-to-date lesson information, please [contact us](/contact) directly."
  },
  {
    id: 'e3',
    group: 'E',
    question: "Can I switch to an intensive course after starting weekly lessons?",
    answer: "Yes, if you start with weekly lessons in [Area] and decide you want to speed up your progress, we can usually transition you to one of our [intensive automatic driving courses](/intensive-driving-courses). We'll just need to check our instructor availability in [City] to ensure we can accommodate the extra hours you need. This is a great option if you suddenly find you have more free time or need your license by a specific date. We'll reassess your current level and create a new, condensed plan to get you ready for the [Test Centres] test centre in record time."
  },
  {
    id: 'e4',
    group: 'E',
    question: "Is the instructor's car included for my driving test?",
    answer: "When you book your practical test at one of the [Test Centres] centres, you can use your instructor's modern, dual-controlled automatic car. This ensures you're taking your test in a vehicle you're already familiar and comfortable with. The service also includes a pre-test warm-up lesson in the [Area] vicinity to settle your nerves and ensure you're fully prepared before meeting the examiner. This is a standard part of our [test preparation](/test-preparation) and is designed to give you the best possible chance of success. We'll be there to support you every step of the way on your big day in [City]."
  },

  // GROUP F — Trust & Instructor Quality
  {
    id: 'f1',
    group: 'F',
    question: "Are all your instructors in [Area] DVSA approved?",
    answer: "Yes, every single instructor at FastAutoPass is a fully qualified, DVSA-approved Approved Driving Instructor (ADI). We take immense pride in our high standards of tuition in [Area] and ensure all our staff are up-to-date with the latest coaching techniques and [City] test requirements. Our instructors undergo regular check tests and enhanced DBS checks to ensure your safety and the quality of your learning experience. When you choose us, you're choosing a professional team dedicated to helping you become a safe, confident driver for life. You can see the results of our high standards in our many [recent passes](/recent-passes) across West Yorkshire."
  },
  {
    id: 'f2',
    group: 'F',
    question: "Do you only teach automatic driving lessons in [Area]?",
    answer: "Yes, we are dedicated automatic specialists. By focusing exclusively on automatic driving lessons in [Area] and across [City], we can provide expert coaching that is specifically tailored to the nuances of modern automatic vehicles. This specialization allows us to help our students pass faster and with significantly less stress than traditional manual schools. Our instructors are experts in teaching the smooth, efficient driving style that automatic cars allow, ensuring you're fully prepared for the roads of today. Whether you're a beginner or looking for [refresher lessons](/refresher-lessons), our automatic-only focus ensures you get the best possible tuition."
  },
  {
    id: 'f3',
    group: 'F',
    question: "Why should I choose FastAutoPass over other [City] driving schools?",
    answer: "We combine deep local expertise in [Area] with a modern, patient, and highly effective approach to automatic tuition. Our high pass rates and hundreds of 5-star reviews from [City] learners are a testament to our commitment to excellence. We don't just teach you how to pass a test; we teach you how to be a confident, safe, and independent driver. From our flexible scheduling to our comprehensive [test preparation](/test-preparation) and [mock driving test](/mock-driving-tests) sessions, we provide everything you need to succeed. When you're ready to start, we're here to help you [secure your start date](/contact) and begin your journey."
  },
  {
    id: 'f4',
    group: 'F',
    question: "Do you provide a structured syllabus for learners in [Area]?",
    answer: "Yes, every learner in [Area] follows a comprehensive and structured syllabus based on the DVSA's national standards for driver training. We keep a detailed record of your progress after every lesson, so you always know exactly which skills you've mastered and what we'll be focusing on next in your [City] training. This transparent approach ensures that your learning is efficient and that no time is wasted. It also helps you stay motivated as you see yourself moving closer to your goal. We'll use this data to determine exactly when you're ready for your [mock driving test](/mock-driving-tests) and the real exam."
  },

  // GROUP G — Localised Questions
  {
    id: 'g1',
    group: 'G',
    question: "Which specific roads do you practice on around the [Area] district?",
    answer: "We use a wide variety of roads in [Area] to ensure you're a well-rounded driver. This includes higher-speed work on arterial routes like [Road] and practicing essential manoeuvres on the quieter residential streets near [Landmark]. By experiencing these different road types, you'll be fully prepared for any scenario an examiner might throw at you during your test at the [Test Centres] centre. We'll also spend time on the specific junctions and roundabouts that are known 'hotspots' in [City]. This local knowledge is a key part of our [Leeds automatic driving lessons](/leeds) or Bradford tuition and is why our students feel so confident on test day."
  },
  {
    id: 'g2',
    group: 'G',
    question: "Do you cover neighbouring areas like [Neighbouring Area] as well?",
    answer: "Yes, our automatic instructors cover the entire [Area] district and frequently travel to [Neighbouring Area] as part of our regular lessons. This allows us to expose you to a wider range of traffic patterns, road layouts, and junction types, which is essential for becoming a truly competent driver in [City]. We believe that the more varied your experience, the better prepared you'll be for life after you pass. You can [view all Leeds areas](/leeds) or Bradford districts we cover on our website to see the full extent of our local coverage. We're committed to providing the best possible service to learners across West Yorkshire."
  },
  {
    id: 'g3',
    group: 'G',
    question: "Is motorway training available for students in [Area]?",
    answer: "While motorways aren't currently part of the practical driving test, we can certainly include motorway training for our [Area] students once they have reached a suitable level of competence. Practicing on the M606, M62, or M1 near [City] is a fantastic way to build the confidence and skills needed for high-speed driving after you've gained your license. We'll teach you about safe following distances, effective lane changes, and how to join and exit motorways safely. It's an important part of our commitment to creating safe drivers for life, and many of our [recent passes](/recent-passes) choose to take a few extra sessions to master these skills."
  },
  {
    id: 'g4',
    group: 'G',
    question: "Are evening and weekend lessons available in the [Area] area?",
    answer: "Yes, we have several instructors in [Area] who offer evening and weekend slots to accommodate those with full-time jobs or college commitments. These times are often when the traffic in [City] is a bit different, providing a valuable new perspective for your training. Because these slots are in high demand across the [Postcode] area, we recommend that you [secure your start date](/contact) as early as possible to avoid disappointment. We'll do our best to find a consistent time that works for you, ensuring your journey to a full automatic license is as smooth and convenient as possible."
  },

  // GROUP H — Conversion Push
  {
    id: 'h1',
    group: 'H',
    question: "How do I get started with my first automatic lesson in [Area]?",
    answer: "Getting started with FastAutoPass is incredibly easy! Simply fill out our quick online booking form or give our friendly team a call. We'll check our current instructor availability in [Area] and match you with an expert who knows the [City] roads inside out. We'll then get your first session booked in at a time that suits you. Whether you're a complete beginner or looking for [refresher lessons](/refresher-lessons), we're here to support you every step of the way. Don't wait any longer to gain your independence—[secure your start date](/contact) today and join the hundreds of successful learners who have passed with us."
  },
  {
    id: 'h2',
    group: 'H',
    question: "How quickly can I begin my automatic driving journey in [Area]?",
    answer: "We usually have availability to start new learners in [Area] within just a week or two, although our most popular slots in [City] do tend to fill up fast. The best way to find out our current lead times is to get in touch with your availability, and we'll do our absolute best to get you behind the wheel as soon as possible. We're committed to providing a responsive and efficient service to all our [Postcode] students. Once you've started, you'll benefit from our structured syllabus and expert coaching, helping you join our list of [recent passes](/recent-passes) in record time. Contact us now to begin."
  },
  {
    id: 'h3',
    group: 'H',
    question: "What is the first step to booking my lessons in [Area]?",
    answer: "The very first step is to reach out to us so we can discuss your specific goals and any previous driving experience you might have. Once we understand your availability in [Area], we can confirm a regular weekly slot with one of our expert [City] instructors. We'll then send you all the details you need to get started, including information on our [intensive automatic driving courses](/intensive-driving-courses) if you're looking for a faster route to your license. Our goal is to make the booking process as simple and stress-free as possible, so you can focus on the exciting journey ahead. [Secure your start date](/contact) with us today!"
  }
];
