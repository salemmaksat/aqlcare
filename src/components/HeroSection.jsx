import { BRAND_LOGOS, HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  // Define container variants if needed
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-28 lg:pt-36 bg-white" 
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          className="mb-8 border border-gray-200 px-3 py-2 rounded-full text-xs text-black"
        >
          {HERO_CONTENT.badgeText}
        </motion.div>
        {/* Main Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter 
                     bg-gradient-to-b from-purple-900 to-gray-700 
                     bg-clip-text text-transparent"
        >
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </motion.h1>
        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-gray-700 max-w-xl"
        >
          {HERO_CONTENT.subHeading}
        </motion.p>
        {/* Call-to-Action Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 space-x-4"
        >
          <a
            href="#works"
            className="inline-block bg-purple-900 hover:bg-purple-800 text-white py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.primary}
          </a>
          <a
            href="#calcom"
            className="inline-block border border-black hover:border-gray-700 text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
        </motion.div>
        {/* Trusted By Section */}
        <motion.div
          variants={fadeIn}
          className="py-10"
        >
          <p className="text-gray-700 text-center mb-8">
            {HERO_CONTENT.trustedByText}
          </p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8"
          >
            {BRAND_LOGOS.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="h-16" />
            ))}
          </motion.div>
        </motion.div>
        {/* Hero Image */}
       
      </div>
    </motion.section>
  );
};

export default HeroSection;
