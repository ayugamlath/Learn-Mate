import React from 'react';
import { motion } from 'framer-motion';

function Project_proposal() {
  const presentations = [
    {
      title: 'Proposal presentation',
      description: 'Initial Presentation with Overview of Research Problem',
      pdfUrl: '/src/assets/pdf/MANTHRA-X_Proposal_presentation_24_25J_213.pdf',
      imageUrl: 'src/assets/innovation.png',
      color: 'bg-pink-100',
    },
    {
      title: 'Progress presentation-1',
      description: '50% Project Completion',
      pdfUrl: 'src/assets/pdf/24-25J-213_Progress_Presentation_01_MANTHRA-X.pdf',
      imageUrl: 'src/assets/pp1.png',
      color: 'bg-blue-100',
    },
    {
      title: 'Progress presentation-2',
      description: '90% Project Completion',
      pdfUrl: 'src/assets/pdf/24-25J-213_Progress_Presentation_02_MANTHRA-X.pdf',
      imageUrl: 'src/assets/pp2.png',
      color: 'bg-yellow-100',
    },
    {
      title: 'Final presentation',
      description: '100% Completion with deployed Solution',
      pdfUrl: 'src/assets/pdf/24-25J-213_Progress_Presentation_04_MANTHRA-X.pdf',
      imageUrl: 'src/assets/goal.png',
      color: 'bg-green-100',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="container mx-auto py-12">
      <motion.h2
        className="text-3xl font-bold mb-8 text-left text-white-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        PROJECT PRESENTATIONS
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {presentations.map((presentation, index) => (
          <motion.div
            key={index}
            className={`${presentation.color} rounded-lg shadow-lg p-6 text-gray-800 flex flex-col justify-between h-[370px]`}
            variants={cardVariants}
            whileHover="hover"
          >
            <img
              src={presentation.imageUrl}
              alt={presentation.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">{presentation.title}</h3>
            <p className="text-sm mb-4 text-center">{presentation.description}</p>
            <motion.a
              href={presentation.pdfUrl}
              download
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Download
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Project_proposal;