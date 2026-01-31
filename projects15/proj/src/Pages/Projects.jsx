
import { motion } from "framer-motion";

export default function Projects() {
  // Variants for container to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for each project card
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    },
  };

  return (
    <motion.div
      className="px-10 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((p) => (
          <motion.div
            key={p}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold">Project {p}</h3>
            <p className="text-gray-400 mt-3">
              Animated React portfolio project
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
