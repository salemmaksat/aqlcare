import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import awardVideo from "../assets/award.mp4";

const teamMembers = [
  {
    id: 1,
    name: "Maksat Khobdabayev",
    title: "Founder",
    image: team1,
  },
  {
    id: 2,
    name: "Evan Lim",
    title: "Co-Founder",
    image: team2,
  },
  {
    id: 3,
    name: "Rafael Song, PhD",
    title: "Principal Investigator",
    image: team3,
  },
  {
    id: 4,
    name: "Hanan Sheikh Ibrahim, MD",
    title: "Medical Advisor",
    image: team4,
  },
];

const AboutUs = () => {
  return (
    <section id="aboutus" className="bg-white py-12">
      {/* Top Break Line */}
      <hr className="border-gray-200 mb-20" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black">About Us</h1>
          <p className="mt-2 text-gray-700">
            We are a team of innovators from NYU and Cleveland Clinic Abu Dhabi, dedicated to transforming dementia care through AI.
          </p>
        </div>

        {/* Team Members - Displayed Horizontally (No Bios) */}
        <div className="flex flex-row justify-center gap-8 mb-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center p-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <h3 className="mt-2 font-bold text-black">{member.name}</h3>
              <p className="text-sm text-gray-700">{member.title}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row: Video on Left, Map on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Award Video */}
          <div className="flex flex-col items-center">
            <video
              src={awardVideo}
              controls
              className="w-full rounded-lg border border-gray-200"
            />
            <p className="mt-2 text-gray-700 text-center">
              DOH Award Ceremony – Recognized for Excellence in Innovation (0:55)
            </p>
          </div>
          {/* Right: Google Maps Embed */}
          <div className="flex flex-col items-center">
            <div className="w-full rounded-lg border border-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.8080405484354!2d54.43352810422732!3d24.52474198477963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67adc56b0ac7%3A0xc7ef9637cae7ee47!2sExperimental%20Research%20Building%20(C1)!5e1!3m2!1sen!2sus!4v1744558324721!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location on Google Maps"
              />
            </div>
            <p className="mt-2 text-gray-700 text-center">
              AqlCare HQ at NYU Abu Dhabi, UAE.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Break Line */}
      <hr className="border-gray-200 mt-8" />
    </section>
  );
};

export default AboutUs;
