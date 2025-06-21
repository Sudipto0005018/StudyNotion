import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaChalkboardTeacher, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

import aboutImg1 from "../assets/about1.webp";
import aboutImg2 from "../assets/about2.webp";
import aboutImg3 from "../assets/about3.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const carouselItems = [
    {
      image: aboutImg1,
      caption: "Learn from industry experts",
    },
    {
      image: aboutImg2,
      caption: "Project-based hands-on learning",
    },
    {
      image: aboutImg3,
      caption: "Join a vibrant learner community",
    },
  ];

  const testimonialItems = [
    {
      name: "Alice Johnson",
      message: "StudyNotion helped me land my dream job!",
    },
    {
      name: "Bob Smith",
      message: "The live projects boosted my confidence and skills.",
    },
    {
      name: "Clara Lee",
      message: "Mentors are super supportive and knowledgeable!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-11/12 max-w-[1160px] mx-auto py-12 text-white">
      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-12">
        <h1 className="text-4xl font-bold text-richblack-5 mb-4">
          About StudyNotion
        </h1>
        <p className="text-richblack-100 text-lg max-w-3xl mx-auto">
          StudyNotion is a learning platform crafted for aspiring developers.
          Our goal is to provide real-world education through interactive,
          project-based learning.
        </p>
      </div>

      {/* Fun Facts Section */}
      <div
        className="grid md:grid-cols-3 gap-8 text-center mb-16"
        data-aos="fade-up"
      >
        <div>
          <h2 className="text-5xl font-bold text-yellow-50">
            <CountUp end={50} duration={2} />+
          </h2>
          <p className="text-richblack-200 mt-2">Expert Mentors</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-yellow-50">
            <CountUp end={1200} duration={2} />+
          </h2>
          <p className="text-richblack-200 mt-2">Students Enrolled</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-yellow-50">
            <CountUp end={300} duration={2} />+
          </h2>
          <p className="text-richblack-200 mt-2">Projects Built</p>
        </div>
      </div>

      {/* Carousel */}
      <div data-aos="zoom-in" className="mb-16">
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={item.image}
                alt={`carousel-${index}`}
                className="rounded-xl w-full max-w-[900px] h-[500px] object-cover mx-auto shadow-2xl"
              />
              <p className="mt-4 text-lg text-richblack-200 font-medium">
                {item.caption}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16" data-aos="fade-up">
        <div className="bg-richblack-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2 text-yellow-50">
            Mentor Guidance
          </h3>
          <p className="text-richblack-200">
            Get support from mentors and instructors with real-world experience.
          </p>
        </div>
        <div className="bg-richblack-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2 text-yellow-50">
            Live Projects
          </h3>
          <p className="text-richblack-200">
            Build projects you can showcase on your resume and GitHub profile.
          </p>
        </div>
        <div className="bg-richblack-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2 text-yellow-50">
            Career Support
          </h3>
          <p className="text-richblack-200">
            Get interview preparation, resume tips, and placement support.
          </p>
        </div>
      </div>

      {/* Fun Facts Section
      <div
        className="grid md:grid-cols-3 gap-8 text-center mb-16"
        data-aos="fade-up"
      >
        <div>
          <h2 className="text-5xl font-bold text-yellow-50">
            <CountUp end={50} duration={2} />+
          </h2>
          <p className="text-richblack-200 mt-2">Expert Mentors</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-yellow-50">
            <CountUp end={1200} duration={2} />+
          </h2>
          <p className="text-richblack-200 mt-2">Students Enrolled</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-yellow-50">
            <CountUp end={300} duration={2} />+
          </h2>
          <p className="text-richblack-200 mt-2">Projects Built</p>
        </div>
      </div> */}

      {/* Timeline Section */}
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        Your Learning Journey
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d1d1f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1d1d1f" }}
          iconStyle={{ background: "#FFD60A", color: "#000" }}
          icon={<FaChalkboardTeacher />}
        >
          <h3 className="vertical-timeline-element-title">Enroll</h3>
          <p>Choose a track and enroll in a structured curriculum.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d1d1f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1d1d1f" }}
          iconStyle={{ background: "#FFD60A", color: "#000" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Build Projects</h3>
          <p>Apply skills with hands-on projects and assignments.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d1d1f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1d1d1f" }}
          iconStyle={{ background: "#FFD60A", color: "#000" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Get Hired</h3>
          <p>Receive career support and land your dream job.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Testimonials Section */}
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        What Our Students Say
      </h2>
      <Slider {...settings}>
        {testimonialItems.map((item, index) => (
          <div key={index} className="text-center px-4">
            <p className="text-xl italic text-richblack-200">
              “{item.message}”
            </p>
            <h4 className="mt-4 font-semibold text-yellow-50">- {item.name}</h4>
          </div>
        ))}
      </Slider>

      {/* CTA Banner */}
      <div
        className="mt-20 bg-yellow-50 text-richblack-900 rounded-xl p-10 text-center shadow-lg"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Career?
        </h2>
        <p className="text-lg mb-6">
          Join thousands of learners on their path to success with StudyNotion.
        </p>
        <button className="bg-richblack-900 text-white px-6 py-3 rounded-lg hover:bg-richblack-800 transition duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default About;
