
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";




export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold"
        >
          Nikita.dev
        </motion.h1>

<ul className="flex gap-6 text-gray-300">
  <li><Link to="/home" className="hover:text-white transition">Home</Link></li>
  <li><Link to="/about" className="hover:text-white transition">About</Link></li>
  <li><Link to="/skills" className="hover:text-white transition">Skills</Link></li>
  <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
  <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
</ul>


    

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-[80vh] px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Hi, I'm <span className="text-pink-500">Nikita</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          Frontend Developer skilled in React, JavaScript, Tailwind CSS & Framer Motion.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-pink-500 rounded-full font-semibold"
        >
           
            <Link to="/contact" className="hover:text-white transition">hire me</Link>
        </motion.button>
      </section>

      {/* Skills Section */}
      <section className="px-10 py-20">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10"
        >
          Skills
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Tailwind",
            "Git",
            "Framer Motion",
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-10 py-20 bg-black">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10"
        >
          Projects
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-xl"
            >
              <h4 className="text-xl font-semibold">Project {item}</h4>
              <p className="text-gray-400 mt-3">
                Animated portfolio / website using React and Framer Motion.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500">
        © 2025 Nikita Mishra | All Rights Reserved
      </footer>

    </div>
  );
}
