
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';

interface MockTestChecklistProps {
  locationName?: string;
  variant?: 'full' | 'compact' | 'teaser' | 'home';
  showCTA?: boolean;
}

const MockTestChecklist: React.FC<MockTestChecklistProps> = ({ locationName, variant = 'full', showCTA = true }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (groupIndex: number, itemIndex: number) => {
    const key = `${groupIndex}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const checklistData = [
    {
      title: "1) Pre-test essentials",
      items: [
        "Number plate eyesight check readiness",
        "Document/test-day readiness (arrive early, calm start, etc.)",
        "“Tell me / show me” readiness (DVSA question bank)"
      ],
      whatWeLookFor: "Ensuring you are legally and mentally prepared before the engine even starts."
    },
    {
      title: "2) Controls & smooth driving",
      items: [
        "Smooth acceleration and braking",
        "Good steering control",
        "Correct use of ancillary controls (wipers, demisters, lights)",
        "Safe, controlled stops and move-offs"
      ],
      whatWeLookFor: "Demonstrating total command over the automatic vehicle's primary and secondary controls."
    },
    {
      title: "3) Observation & mirrors",
      items: [
        "Mirrors before changing speed/direction",
        "Blind-spot checks when needed",
        "Timely awareness of other road users"
      ],
      whatWeLookFor: "Maintaining a 360-degree 'bubble' of awareness at all times during the drive."
    },
    {
      title: "4) Signals & communication",
      items: [
        "Signalling at the right time (not too early/late)",
        "Cancelling signals",
        "Clear communication with pedestrians/cyclists"
      ],
      whatWeLookFor: "Clearly informing other road users of your intentions without causing confusion."
    },
    {
      title: "5) Junctions & roundabouts",
      items: [
        "Approach speed control",
        "Proper observation and planning",
        "Correct lane discipline",
        "Safe gap judgement"
      ],
      whatWeLookFor: "Navigating complex intersections with priority awareness and decisive planning."
    },
    {
      title: "6) Positioning & road discipline",
      items: [
        "Lane positioning on multi-lane roads",
        "Meeting situations / parked cars",
        "Safe clearance",
        "Following distance"
      ],
      whatWeLookFor: "Maintaining the safest possible position on the road relative to hazards and other vehicles."
    },
    {
      title: "7) Speed management",
      items: [
        "Correct speed for the limit and conditions",
        "Progress where safe (avoid undue hesitation)",
        "Smooth planning for hazards and changing limits"
      ],
      whatWeLookFor: "Driving at a speed that is safe, legal, and appropriate for the current environment."
    },
    {
      title: "8) Manoeuvres (DVSA-style)",
      items: [
        "Controlled reverse with all-round observation",
        "Accuracy and control (bay/parallel/pull-up-on-right)",
        "Safe finishing position"
      ],
      whatWeLookFor: "Executing low-speed manoeuvres with high accuracy and constant observation."
    },
    {
      title: "9) Independent driving (sat nav / signs)",
      items: [
        "Following directions calmly",
        "Correct decisions at late instruction points",
        "Safe recovery if a turn is missed (no panic)"
      ],
      whatWeLookFor: "Navigating a route independently while maintaining safe driving standards."
    },
    {
      title: "10) Risk awareness & planning",
      items: [
        "Anticipating hazards early",
        "Pedestrian crossings awareness",
        "Safe decision-making in busy traffic"
      ],
      whatWeLookFor: "Proactively identifying and responding to potential risks before they become problems."
    }
  ];

  if (variant === 'home') {
    return (
      <div className="p-8 lg:p-12">
        <h3 className="text-xl font-black mb-8 italic uppercase tracking-tight text-white">
          DVSA Assessment <span className="text-red-600">Criteria</span>
        </h3>
        
        <div className="space-y-6">
          {[
            { title: "Test Route Familiarity", desc: "Actual routes in Bradford & Leeds" },
            { title: "DVSA Marking Standards", desc: "Minors, Serious & Dangerous faults" },
            { title: "Independent Driving", desc: "Sat Nav and traffic sign navigation" },
            { title: "Manoeuvre Accuracy", desc: "Precision control and observation" }
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="text-red-600 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-black uppercase italic tracking-widest text-[10px] text-white mb-1">{item.title}</div>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <Link to="/mock-driving-tests" className="text-red-500 font-black uppercase italic tracking-widest text-[10px] hover:text-red-400 transition-colors flex items-center">
            View Full Checklist <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'teaser') {
    return (
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">Mock Test & Test Preparation in {locationName}</h2>
            <p className="text-gray-600 font-medium mb-8 leading-relaxed">
              We specialise in preparing learners for the specific challenges of local test routes. Our mock tests ensure you are ready for the real thing.
            </p>
            <ul className="space-y-4 mb-10">
              {["Mastering local junction layouts", "High-speed dual carriageway planning", "DVSA-style marking and feedback"].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-800 font-bold uppercase italic tracking-tight text-sm">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/mock-driving-tests" className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-black uppercase italic tracking-widest hover:bg-red-700 transition-all shadow-xl">
              See the Full Mock Test Checklist
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    const compactData = [
      checklistData[2], // Observation & Mirrors
      checklistData[4], // Junctions & Planning
      checklistData[7], // Manoeuvres (includes Independent Driving in user request logic)
    ];

    return (
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">Mock Test Readiness (Compact)</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Key assessment areas for automatic learners</p>
          </div>
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-8 lg:p-12 mb-10">
            <Accordion title="Observation & Mirrors">
              <ul className="space-y-3">
                {checklistData[2].items.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-start space-x-3 text-gray-700 font-bold cursor-pointer select-none group"
                    onClick={() => toggleItem(2, i)}
                  >
                    <span className={`transition-colors flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 rounded ${checkedItems[`2-${i}`] ? 'bg-red-600 border-red-600 text-white' : 'border-gray-300 text-transparent group-hover:border-red-400'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className={checkedItems[`2-${i}`] ? 'text-gray-400 line-through' : ''}>{item}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Junctions & Planning">
              <ul className="space-y-3">
                {checklistData[4].items.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-start space-x-3 text-gray-700 font-bold cursor-pointer select-none group"
                    onClick={() => toggleItem(4, i)}
                  >
                    <span className={`transition-colors flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 rounded ${checkedItems[`4-${i}`] ? 'bg-red-600 border-red-600 text-white' : 'border-gray-300 text-transparent group-hover:border-red-400'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className={checkedItems[`4-${i}`] ? 'text-gray-400 line-through' : ''}>{item}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Manoeuvres & Independent Driving">
              <ul className="space-y-3">
                {[...checklistData[7].items, ...checklistData[8].items].map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-start space-x-3 text-gray-700 font-bold cursor-pointer select-none group"
                    onClick={() => toggleItem(100, i)} // 100 as dummy group index for combined
                  >
                    <span className={`transition-colors flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 rounded ${checkedItems[`100-${i}`] ? 'bg-red-600 border-red-600 text-white' : 'border-gray-300 text-transparent group-hover:border-red-400'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className={checkedItems[`100-${i}`] ? 'text-gray-400 line-through' : ''}>{item}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
          <div className="text-center">
            <Link to="/mock-driving-tests" className="text-red-600 font-black uppercase italic tracking-widest text-sm hover:underline">
              See the Full DVSA-Style Checklist →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">Mock Test Readiness Checklist (DVSA-Style)</h2>
          {locationName && (
            <p className="text-red-600 font-bold mb-4 italic">
              If you’re learning in {locationName}, this checklist is what we focus on during mock tests and test-route practice.
            </p>
          )}
          <p className="text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            This checklist mirrors the areas examiners assess on the day. We use it in our mock tests so you know exactly what to improve before you book your practical test.
          </p>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mt-8"></div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden">
          <div className="p-8 lg:p-12 space-y-0">
            {checklistData.map((group, index) => (
              <Accordion key={index} title={group.title}>
                <p className="text-sm font-black text-red-600 uppercase tracking-widest mb-4 italic">What we look for: {group.whatWeLookFor}</p>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-start space-x-4 text-gray-700 font-bold cursor-pointer select-none group"
                      onClick={() => toggleItem(index, i)}
                    >
                      <span className={`transition-colors flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 rounded ${checkedItems[`${index}-${i}`] ? 'bg-red-600 border-red-600 text-white' : 'border-gray-300 text-transparent group-hover:border-red-400'}`}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={`transition-all ${checkedItems[`${index}-${i}`] ? 'text-gray-400 line-through' : ''}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </div>

          {/* How it's marked strip */}
          <div className="bg-gray-900 p-8 border-t border-white/10">
            <h4 className="text-white font-black uppercase italic mb-4 tracking-widest text-sm">How it’s marked:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                <p className="text-xs text-gray-400 font-medium"><span className="text-white font-bold block uppercase mb-1">Driving faults (minors)</span> Logged when something needs improvement but isn't an immediate danger.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>
                <p className="text-xs text-gray-400 font-medium"><span className="text-white font-bold block uppercase mb-1">Serious faults</span> A major safety or standard issue that results in a test fail.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-1.5 shrink-0"></div>
                <p className="text-xs text-gray-400 font-medium"><span className="text-white font-bold block uppercase mb-1">Dangerous faults</span> Actual danger created to you, the examiner, or others (test fail).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion CTA */}
        {showCTA && (
          <div className="mt-12 bg-gray-50 p-10 rounded-[3rem] border border-gray-100 text-center">
            <h3 className="text-2xl lg:text-3xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">Want a proper mock test that feels like the real thing?</h3>
            <p className="text-gray-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              We’ll mark your drive using the checklist above and give clear feedback on what to fix next.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/mock-driving-tests" className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-red-700 transition-all shadow-xl uppercase italic tracking-widest">
                Book a Mock Test
              </Link>
              <a href="#booking" className="bg-gray-900 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-black transition-all uppercase italic tracking-widest">
                Check Availability
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MockTestChecklist;
