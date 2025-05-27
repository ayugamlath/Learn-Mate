import React from 'react';
import { motion } from 'framer-motion';


const teamMembers = [
  {
    name: 'Gamlathge G.G.A.U.',
    role: 'Researcher',
    degree: 'Bachelor of Science (Hons) in Information Technology Specializing in Information Technology',
    image: 'src/assets/aayu.jpg',
  },

  {
    name: 'W.A.S Heshan',
    role: 'Researcher',
    degree: 'Bachelor of Science (Hons) in Information Technology Specializing in Information Technology',
    image: 'src/assets/sachintha.jpg',
  },

  {
    name: 'N.G.S.S.M Bandara',
    role: 'Researcher',
    degree: 'Bachelor of Science (Hons) in Information Technology Specializing in Information Technology',
    image: 'src/assets/shehan.jpg',
  },
  
  {
    name: 'P.A.D.S Lakshan',
    role: 'Researcher',
    degree: 'Bachelor of Science (Hons) in Information Technology Specializing in Information Technology',
    image: 'src/assets/lakshan.jpg',
  },

  {
    name: 'Ms.Wishalya Thisera',
    role: 'Supervisor',
    image: 'src/assets/wishalya.jpg',
  },
  
  {
    name: 'Dr.Darshana Kasthurirathne',
    role: 'Co-Supervisor',
   image: 'src/assets/darshana.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' } },
  hover: { scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' },
};

function Team() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-white">CHECK OUR TEAM</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
        <motion.div
          key={idx}
          className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 text-center border border-zinc-800 min-h-[380px]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-70 h-80 object-cover rounded-lg mb-4 border-4 border-zinc-800"
          />
          <div className="text-lg font-semibold text-white">{member.name}</div>
          <div className="text-blue-400 text-sm mb-1">{member.role}</div>
          <div className="text-gray-400 text-xs">{member.degree}</div>
        </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Team;