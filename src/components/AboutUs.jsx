import React from "react";
import { motion } from 'framer-motion';
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
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
    title: "Academic Advisor",
    image: team3,
  },
];

const AboutUs = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section id="aboutus" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with matching gradient title */}
        <motion.div
          className="text-center mb-12 border-t border-gray-200 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-3xl lg:text-5xl mt-8 tracking-tighter \
                         bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 \
                         bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="mt-4 text-gray-700">
            We are a team of innovators from NYU and Cleveland Clinic Abu Dhabi, dedicated to transforming dementia care.
          </p>
        </motion.div>

        {/* Team Members with Motion */}
        <motion.div
          className="flex flex-row justify-center gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              custom={index}
              variants={childVariants}
              className="flex flex-col items-center text-center p-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <h3 className="mt-2 font-bold text-black">{member.name}</h3>
              <p className="text-sm text-gray-700">{member.title}</p>
            </motion.div>
          ))}
        </motion.div>

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
