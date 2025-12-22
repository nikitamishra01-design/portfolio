
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="h-[80vh] flex flex-col justify-center items-center text-center"
    >
      {/* Container Animation Variants */}
      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Heading Animation */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
          }}
          className="text-5xl font-bold"
        >
          Hi, I'm <span className="text-pink-500">Nikita</span>
        </motion.h2>

        {/* Subheading Animation */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
          }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          Frontend Developer | React | Framer Motion
        </motion.p>

        {/* Button Animation */}
        <motion.button
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
          }}
          className="mt-8 px-8 py-3 bg-pink-500 rounded-full text-white font-semibold shadow-lg"
        >
          Hire Me
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
