
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function About() {
  // Variants for text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Variants for skill badges
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
  };

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="px-10 py-20 text-center relative"
    >
      {/* Heading */}
      <motion.h2
        variants={textVariants}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={textVariants}
        className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg"
      >
        I am a passionate frontend developer who loves animations, clean UI, and building interactive web experiences. I enjoy learning new technologies and improving my skills every day.
      </motion.p>

      {/* Skill Badges */}
      <div className="flex justify-center gap-6 flex-wrap">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={badgeVariants}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-white shadow-lg cursor-pointer"
          >
            <span className="text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Optional animated background circles */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
        className="absolute top-10 left-10 w-20 h-20 bg-pink-500 rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-20"
      />
    </motion.section>
  );
}
