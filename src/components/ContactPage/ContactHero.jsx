import React, { useState } from 'react';

const ContactHero = () => {
  const services = [
    "Window Tinting",
    "Headlight Restoration",
    "Headlight Crack Repair",
    "Headlight Condensation Repair",
    "Headlight Lens Replacement",
    "Exterior Enhancement Services"
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    note: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error for the field being edited
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = encodeURIComponent(
      `Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Note: ${formData.note || "N/A"}`
    );

    window.open(
      `https://wa.me/447851823807?text=${message}`,
      "_blank"
    );

    setFormData({
      name: "",
      phone: "",
      service: "",
      note: "",
    });

    setErrors({
      name: "",
      phone: "",
      service: "",
    });
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-black mb-2 mt-20">Home / Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-[#404143] leading-relaxed">
            Have questions about our window tinting or headlight services? Need a quote or advice for your vehicle? Reach out to Thomas Exterior, and we’ll provide fast, professional support.
          </p>
          <p className="max-w-2xl mx-auto mt-3 text-[#404143] leading-relaxed">
            Whether it’s a simple inquiry, a service request, or scheduling an appointment, we’re here to help with care and precision.
          </p>
        </div>

        <div className="bg-[#F8F9FC] rounded-3xl p-6 md:p-10 shadow-sm flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2">
            <iframe
              title="Google Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2142.899561301126!2d-2.286031!3d53.59379889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba55ab7c86bb1%3A0x2d01d70333586c78!2sTomas%20Exteriors%20professional%20window%20tinting!5e1!3m2!1sen!2slk!4v1769176161599!5m2!1sen!2slk"
              width="100%"
              height="400"
              className="rounded-2xl shadow-md md:h-[500px]"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-black mb-6">Get In Touch</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-[#404143] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#404143] mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-[#404143] mb-1">
                  Select A Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition bg-white cursor-pointer"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-sm text-red-600 mt-1">{errors.service}</p>
                )}
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm font-semibold text-[#404143] mb-1">
                  Short Note
                </label>
                <textarea
                  rows="4"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Type here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition resize-none"
                ></textarea>
              </div>

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
