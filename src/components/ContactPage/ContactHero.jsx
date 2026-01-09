import React from 'react';

const ContactHero = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb & Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2 mt-20">Home / Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A1D56] mb-4">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            For any plumbing inquiries or service requests, reach out via contact form, 
            and we'll get back to you as soon as possible. Let us handle all your 
            plumbing needs with care and efficiency!
          </p>
        </div>

        {/* Contact Card Container */}
        <div className="bg-[#F8F9FC] rounded-3xl p-6 md:p-10 shadow-sm flex flex-col lg:flex-row gap-10 items-center">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800" 
              alt="Plumber working"
              className="rounded-2xl w-full h-[400px] md:h-[500px] object-cover shadow-md"
            />
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#0A1D56] mb-6">Get In Touch</h2>
            
            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Ex. +123 456 789"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              {/* Select Service */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Select A Service</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition appearance-none bg-white">
                  <option>Select</option>
                  <option>Emergency Repair</option>
                  <option>Maintenance</option>
                  <option>Installation</option>
                </select>
              </div>

              {/* Short Note */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Short Note</label>
                <textarea
                  rows="4"
                  placeholder="Type here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#003B95] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-colors shadow-lg mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;