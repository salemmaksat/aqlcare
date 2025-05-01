import React from 'react';
import { motion } from 'framer-motion';

const Calcom = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="calcom"
      className="py-12 bg-white"
      initial="hidden"
      whileInView="visible"
      variants={headerVariants}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header & Subtitle with Gradient Title */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          variants={headerVariants}
        >
          <h2
            className="text-3xl lg:text-5xl tracking-tighter \
                       bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 \
                       bg-clip-text text-transparent mb-2"
          >
            Limited Beta Only
          </h2>
          <p className="text-lg text-gray-600">
            Book a demo to see if our product is a good match for you.
          </p>
        </motion.div>

        {/* Cal.com Embed */}
        <div className="w-full">
          <iframe
            src="https://cal.com/aqlcare-demo"
            style={{ border: 0 }}
            width="100%"
            height="800"
            frameBorder="0"
            title="Schedule a Demo"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Calcom;
