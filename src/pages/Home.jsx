import React from 'react'
import Pastry from '../components/Pastry';
import Culinary from '../components/Culinary';
import {motion} from 'framer-motion';

function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
        <Pastry />
        <Culinary />
    </motion.div>
  )
}

export default Home