import { motion } from 'framer-motion';
import { PLANS_CONTENT } from '../constants';

const Pricing = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="pricing" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        {/* Header & Subtitle */}
        <motion.div
          className="text-center mb-12 border-t border-gray-200 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2
            className="text-3xl lg:text-5xl mt-8 tracking-tighter \
                       bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 \
                       bg-clip-text text-transparent"
          >
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-gray-700">
            {PLANS_CONTENT.sectionDescription}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.5 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={childVariants}
              className={`p-8 rounded-lg shadow-lg bg-white \
                         ${plan.isPopular ? 'border-2 border-blue-600' : 'border border-gray-200'}`}
            >
              {plan.isPopular && (
                <div className="text-center mb-4">
                  <span className="bg-blue-600 text-white text-xs py-1 px-3 rounded-full uppercase">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </div>
              )}

              <h3 className="text-lg lg:text-xl mb-4 tracking-tighter text-black">
                {plan.name}
              </h3>

                <p className="text-gray-700 mb-6">
                  {plan.description}
                </p>

              <div className="text-2xl lg:text-3xl font-bold text-black mb-6">
                {plan.price}
              </div>

              <ul className="mb-8 space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#calcom"
                className="w-full inline-block text-center bg-purple-900 hover:bg-purple-800 text-white py-3 px-4 rounded-lg transition"
              >
                {PLANS_CONTENT.ctaText}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
