import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="px-10 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input className="p-3 rounded bg-gray-800" placeholder="Name" />
        <input className="p-3 rounded bg-gray-800" placeholder="Email" />
        <textarea className="p-3 rounded bg-gray-800" placeholder="Message" />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-pink-500 py-3 rounded"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}
