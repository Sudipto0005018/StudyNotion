import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../assets/hero.jpg";
import { FaChalkboardTeacher, FaLaptopCode, FaUsers } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-richblack-900 via-richblack-800 to-richblack-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-11/12 max-w-[1160px] mx-auto pt-20 pb-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text */}
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-50 leading-tight mb-4">
            Unlock Your Potential with <br />
            <span className="text-blue-100">StudyNotion</span>
          </h1>
          <p className="text-richblack-200 text-lg mb-6">
            Interactive courses. Live projects. Career support. All in one
            platform to supercharge your learning journey.
          </p>
          <button className="bg-yellow-50 text-richblack-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-100 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2" data-aos="fade-left">
          <img
            src={heroImg}
            alt="Study"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Curve Divider */}
      <svg
        className="-mt-16 md:-mt-28"
        viewBox="0 0 1440 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#111827"
          d="M0,192L60,181.3C120,171,240,149,360,144C480,139,600,149,720,160C840,171,960,181,1080,170.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      {/* Feature Section */}
      <section className="bg-richblack-900 w-11/12 max-w-[1160px] mx-auto pt-4 pb-20">
        <h2
          className="text-3xl font-bold text-center text-yellow-50 mb-12"
          data-aos="fade-up"
        >
          Why Choose StudyNotion?
        </h2>
        <div className="grid md:grid-cols-3 gap-10" data-aos="fade-up">
          <div className="bg-richblack-800 p-8 rounded-xl text-center shadow-xl hover:scale-105 transition-transform">
            <FaChalkboardTeacher className="text-4xl text-yellow-50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-richblack-200">
              Learn from professionals with industry experience and teaching
              skills.
            </p>
          </div>
          <div className="bg-richblack-800 p-8 rounded-xl text-center shadow-xl hover:scale-105 transition-transform">
            <FaLaptopCode className="text-4xl text-yellow-50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hands-on Projects</h3>
            <p className="text-richblack-200">
              Work on real-world assignments and build a strong portfolio.
            </p>
          </div>
          <div className="bg-richblack-800 p-8 rounded-xl text-center shadow-xl hover:scale-105 transition-transform">
            <FaUsers className="text-4xl text-yellow-50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-richblack-200">
              Connect with learners, get guidance, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-gradient-to-r from-yellow-50 to-yellow-100 text-richblack-900 py-16 mt-16"
        data-aos="zoom-in"
      >
        <div className="w-11/12 max-w-[1160px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Join the Future of Learning
            </h2>
            <p className="text-lg">
              Enroll today and take the next step toward your tech career.
            </p>
          </div>
          <button className="bg-richblack-900 text-yellow-50 px-6 py-3 rounded-lg hover:bg-richblack-800 transition duration-300">
            Start Learning
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
