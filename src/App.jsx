import { motion } from "motion/react";
import './index.css';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-3xl font-bold text-blue-600 underline"
    >
      Hello Tailwind with animation!
    </motion.div>
  );
}

export default App;
