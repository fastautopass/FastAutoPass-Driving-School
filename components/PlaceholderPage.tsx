
import React from 'react';
import BookingForm from './BookingForm';
import MockTestChecklist from './MockTestChecklist';
import Schema from './Schema';
import { getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  React.useEffect(() => {
    // metadata handled by SEO component
  }, [title, description]);

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${title} | FastAutoPass Driving School`}
        description={description || `Information about ${title} with FastAutoPass Driving School. We are currently updating this page to provide full details for our learners in Bradford and Leeds.`}
      />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: title, item: typeof window !== 'undefined' ? window.location.href : `https://fastautopass.co.uk` }
      ])} />
      <section className="py-24 lg:py-40 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter mb-6">{title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            {description || "We are currently finalising the information for this page to provide you with the highest standard of service. Please check back shortly."}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-black italic uppercase mb-6">Need Immediate Help?</h2>
              <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                Our team is available 7 days a week to answer your questions about automatic driving lessons, intensive courses, and test availability in Bradford and Leeds.
              </p>
              <div className="flex flex-col space-y-4">
                <a href="tel:07842587200" className="text-red-600 font-black text-2xl italic">07842 587200</a>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Available 8am - 8pm</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <BookingForm areaName="General Enquiry" />
            </div>
          </div>
        </div>
      </section>
      <MockTestChecklist variant="compact" />
    </div>
  );
};

export default PlaceholderPage;
