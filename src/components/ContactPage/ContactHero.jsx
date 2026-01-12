import React from 'react';

const ContactHero = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb & Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-black mb-2 mt-20">Home / Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-[#404143] leading-relaxed">
            Have questions about our window tinting or headlight services? Need a quote or advice for your vehicle? Reach out to Thomas Exterior, and we’ll provide fast, professional support.
          </p>
          <p className="max-w-2xl mx-auto mt-3 text-[#404143] leading-relaxed" >Whether it’s a simple inquiry, a service request, or scheduling an appointment, we’re here to help with care and precision.</p>
        </div>

        {/* Contact Card Container */}
        <div className="bg-[#F8F9FC] rounded-3xl p-6 md:p-10 shadow-sm flex flex-col lg:flex-row gap-10 items-center">

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086849132467!2d-122.41941508468182!3d37.77492977975932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1c2f8f83%3A0xf0b5e0b7e7b5e7b5!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              className="rounded-2xl shadow-md md:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>


          {/* Form Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-black mb-6">Get In Touch</h2>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-[#404143] mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#404143] mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Ex. +123 456 789"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition"
                />
              </div>

              {/* Select Service */}
              <div>
                <label className="block text-sm font-semibold text-[#404143] mb-1">Select A Service</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition appearance-none bg-white">
                  <option>Select</option>
                  <option>Emergency Repair</option>
                  <option>Maintenance</option>
                  <option>Installation</option>
                </select>
              </div>

              {/* Short Note */}
              <div>
                <label className="block text-sm font-semibold text-[#404143] mb-1">Short Note</label>
                <textarea
                  rows="4"
                  placeholder="Type here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#F21B23] text-white font-bold py-4 rounded-xl hover:bg-[#404143] transition-colors shadow-lg mt-2"
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