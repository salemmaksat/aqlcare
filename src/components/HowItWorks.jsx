import { HOW_IT_WORKS_CONTENT } from "../constants";
import { motion } from "framer-motion";
import audioTransGif from "../assets/audiotrans.gif";

const HowItWorks = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="works" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-gray-300 pt-20"
        >
          <h2 className="text-3xl lg:text-5xl tracking-tighter text-black">
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={stepVariants}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between border border-gray-200"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-black">
                  {step.title}
                </h3>
                <p className="text-gray-700 mb-4">{step.description}</p>
              </div>
              <div className="flex justify-center">
                {index === 3 ? (
                  <img
                    src={audioTransGif}
                    alt="Audiotrans Animation"
                    className="rounded-lg"
                  />
                ) : (
                  <img
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    className="rounded-lg"
                  />
                )}
              </div>
              {/* Render avatars and Connect button except for the second step */}
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
