
import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js"];

export default function Skills() {
  // Container variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  // Each skill card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotate: -5, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 } 
    }
  };

  // Different colors for skills
  const colors = ["bg-pink-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-orange-500"];

  return (
    <motion.div
      className="px-10 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            className={`p-6 rounded-xl text-center text-white shadow-lg cursor-pointer ${colors[i % colors.length]}`}
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
