import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    title: "Project Proposal (Presentation + Proposal Report)",
    date: "December 2024",
    mark: "12%",
    tags: ["Group"],
  },
  {
    title: "Progress Presentation – 1",
    date: "January  2025",
    mark: "15%",
    tags: ["Group", "Individual"],
  },
  {
    title: "Research Paper Publication",
    date: "Feb 2025",
    mark: "10%",
    tags: ["Group"],
  },
  {
    title: "Final Reports (Thesis)",
    date: "April 2025",
    mark: "10%",
    tags: ["Group", "Individual"],
  },
  {
    title: "Progress Presentation - 2",
    date: "April 2025",
    mark: "18%",
    tags: ["Group", "Individual"],
  },
  {
    title: "Status Documents 1 & 2",
    date: "April 2025",
    mark: "8%",
    tags: ["Individual"],
  },
  {
    title: "Log Books",
    date: "april 2025",
    mark: "2%",
    tags: ["Individual"],
  },
  {
    title: "Final Presentation • Viva",
    date: "May 2025",
    mark: "20%",
    tags: ["Group", "Individual"],
  },
  {
    title: "Website Development",
    date: "May 2025",
    mark: "2%",
    tags: ["Group"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, type: "spring" },
  }),
};

function ProjectMilestones() {
  return (
    <div className="py-10 px-2 md:px-10 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-white">
        <span className=" border-blue-400  pb-1">PROJECT MILESTONES</span>
      </h2>
      <div className="relative w-full flex flex-col items-center">
        {/* Timeline vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-300 z-0" style={{ transform: "translateX(-50%)" }} />
        <div className="w-full flex flex-col gap-16">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="relative w-full flex flex-col md:flex-row items-center"
              style={{ minHeight: "150px" }}
            >
              {idx % 2 === 0 ? (
                <>
                  <motion.div
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className="w-full md:w-[45%] flex justify-end items-center z-20"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg p-6 text-white w-[400px] h-[200px] flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                        <div className="text-sm mb-1">{m.date}</div>
                        <div className="text-xs mb-2">
                          Mark Allocation: <span className="font-semibold">{m.mark}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {m.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white/20 px-2 py-1 rounded text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                    <div className="hidden md:flex flex-col items-center absolute left-1/2 z-10"  style={{ transform: "translateX(-50%)" }}>
                    <div className="w-4 h-4 rounded-full bg-blue-400 border-4 border-white shadow-lg" /></div>
                  <div className="hidden md:block w-1/2" />
                </>
              ) : (
                <>
                  <div className="hidden md:block w-1/2" />
                  <div className="hidden md:flex flex-col items-center w-0 z-10">
                    <div className="w-4 h-4 rounded-full bg-blue-400 border-4 border-white shadow-lg" />
                  </div>
                    <motion.div
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className="w-full md:w-[45%] flex justify-start items-center z-20 md:ml-12" // Added margin-left
                    >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg p-6 text-white w-[400px] h-[200px] flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                        <div className="text-sm mb-1">{m.date}</div>
                        <div className="text-xs mb-2">
                          Mark Allocation: <span className="font-semibold">{m.mark}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {m.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white/20 px-2 py-1 rounded text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
              {/* Mobile version */}
              <div className="md:hidden flex flex-col items-center w-full mb-4">
                <div className="w-4 h-4 rounded-full bg-blue-400 border-4 border-white shadow-lg mb-2" />
                <motion.div
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="w-full flex justify-center z-20"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg p-6 text-white w-full h-[200px] flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                      <div className="text-sm mb-1">{m.date}</div>
                      <div className="text-xs mb-2">
                        Mark Allocation: <span className="font-semibold">{m.mark}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {m.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white/20 px-2 py-1 rounded text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectMilestones;