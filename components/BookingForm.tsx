
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface BookingFormProps {
  areaName: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ areaName }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    experience: 'Beginner',
    lessonType: 'Automatic Driving Lessons',
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          areaName
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMsg(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 animate-fadeIn">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Your enquiry has been sent successfully</h3>
        <p className="text-white font-bold mb-8">We will contact you shortly.</p>
        <div className="space-y-4">
          <a 
            href="tel:07842587200" 
            className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg"
          >
            Call us now
          </a>
          <a 
            href="https://wa.me/447842587200" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg"
          >
            Message us on WhatsApp
          </a>
          <button 
            onClick={() => {
              setFormData({
                name: '',
                phone: '',
                postcode: '',
                experience: 'Beginner',
                lessonType: 'Automatic Driving Lessons',
                consent: false
              });
              setSubmitted(false);
            }}
            className="text-white hover:text-red-500 text-sm font-bold transition-colors mt-4 block mx-auto"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 lg:p-8 rounded-[3rem] shadow-2xl text-gray-900 w-full max-w-md lg:max-w-xl border border-gray-100 mx-auto animate-slideUp relative z-10">
      <div className="mb-3 text-center">
        <h2 className="text-3xl font-bold mb-0.5 tracking-tight">Start your enquiry</h2>
        <p className="text-gray-900 text-sm font-bold">
          ⚡ Response within 2 hours • 24/7 support
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Row 1: Full Name & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1 ml-1">
              Full Name *
            </label>
            <input 
              type="text" 
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-300 bg-gray-50 disabled:opacity-50"
              placeholder="Your full name"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1 ml-1">Mobile Number *</label>
            <input 
              type="tel" 
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-300 bg-gray-50 disabled:opacity-50"
              placeholder="07XXX XXXXXX"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        {/* Row 2: Postcode */}
        <div className="grid grid-cols-1 gap-3">
          <div className="w-full">
            <label className="block text-xs font-bold text-gray-700 mb-1 ml-1">Postcode *</label>
            <input 
              type="text" 
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-300 bg-gray-50 disabled:opacity-50"
              placeholder="Postcode"
              value={formData.postcode}
              onChange={e => setFormData({...formData, postcode: e.target.value})}
            />
          </div>
        </div>

        {/* Row 3: What are you looking for? */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1 ml-1">What are you looking for? *</label>
          <select 
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all font-medium text-gray-800 appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em] bg-gray-50 disabled:opacity-50"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")` }}
            value={formData.lessonType}
            onChange={e => setFormData({...formData, lessonType: e.target.value})}
          >
            <option value="" disabled>Select a service</option>
            <option>Automatic Driving Lessons</option>
            <option>Manual Driving Lessons</option>
            <option>Intensive Driving Courses</option>
            <option>Pass Plus Course</option>
            <option>Refresher Lessons</option>
            <option>Motorway Lessons</option>
            <option>Taxi Driver Assessments</option>
            <option>ADI Part 2 Training</option>
            <option>ADI Part 3 Training</option>
            <option>Mock Driving Tests</option>
            <option>Other</option>
          </select>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-xs font-bold text-center animate-shake">
            {errorMsg}
          </div>
        )}

        {/* GDPR Consent */}
        <div className="flex items-start space-x-3 py-1">
          <input 
            type="checkbox" 
            id="gdpr-consent"
            required
            disabled={isSubmitting}
            className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer disabled:opacity-50"
            checked={formData.consent}
            onChange={e => setFormData({...formData, consent: e.target.checked})}
            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Please confirm consent before submitting')}
            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
          />
          <label htmlFor="gdpr-consent" className="text-[10px] lg:text-[11px] font-medium text-gray-600 leading-tight cursor-pointer">
            I confirm that I have read and agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">Terms & Conditions</a> and <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">Privacy Policy</a>, and consent to FastAutoPass Driving School storing my details and contacting me regarding my enquiry.
          </label>
        </div>

        {/* Row 4: CTA */}
        <div className="pt-1">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform active:scale-[0.98] transition-all uppercase tracking-wider text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                SENDING...
              </>
            ) : 'SEND AN ENQUIRY'}
          </button>
          
          <div className="mt-3 flex flex-col items-center">
            <div className="flex items-center justify-center space-x-4 text-[11px] font-bold text-gray-500 uppercase tracking-tight">
              <span>✔ DVSA Approved</span>
              <span className="text-gray-300">•</span>
              <span>✔ Automatic & Manual</span>
              <span className="text-gray-300">•</span>
              <span>⭐ 5-Star Rated</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
