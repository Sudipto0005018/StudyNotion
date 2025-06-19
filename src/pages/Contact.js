import React, { useEffect } from "react";
import AOS from "aos";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-richblack-900 text-white py-16 px-4">
      <div className="w-11/12 max-w-[1160px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-yellow-50 mb-4">Contact Us</h2>
          <p className="text-richblack-200 text-lg">
            Have questions or feedback? Reach out to us anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <form className="bg-richblack-800 p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <label className="block mb-2 text-sm font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-richblack-700 text-white outline-none focus:ring-2 focus:ring-yellow-50"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-richblack-700 text-white outline-none focus:ring-2 focus:ring-yellow-50"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded bg-richblack-700 text-white outline-none focus:ring-2 focus:ring-yellow-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-50 text-richblack-900 font-semibold py-2 rounded hover:bg-yellow-100 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div
            className="bg-richblack-800 p-8 rounded-lg shadow-lg space-y-6 flex flex-col justify-center"
            data-aos="fade-left"
          >
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-yellow-50 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <p className="text-richblack-200">support@studynotion.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-yellow-50 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Phone</h4>
                <p className="text-richblack-200">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-50 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Address</h4>
                <p className="text-richblack-200">
                  123 StudyNotion Lane, Tech City, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
