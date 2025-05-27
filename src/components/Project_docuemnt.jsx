import React from "react";
import { motion } from "framer-motion";

// PDF imports
import charterPDF from "../assets/pdf/24_25J_213_Ethical Analysis Report.pdf";
import proposalPDF from "../assets/pdf/Project Proposal Report.pdf";
import researchPDF from "../assets/pdf/24-25J-213_Research_Paper.pdf";
import thesisPDF from "../assets/pdf/24_25J_213_MLOps Report.pdf";
import studentDocPDF from "../assets/pdf/studentdoc.pdf";
import logbookPDF from "../assets/pdf/24-25J-213 _Data Analysis Report.pdf";
import businessPDF from "../assets/pdf/business.pdf";

const docs = [
  {
    title: "Project Charter",
    desc: "The document gives the information regarding the statement of scope, objectives overview, an outline of scope, an approximate schedule and people who are participating in a project.",
    pdf: charterPDF,
    icon: "📊",
    color: "from-pink-200 to-pink-100",
  },
  {
    title: "Project Proposal",
    desc: "The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the project.",
    pdf: proposalPDF,
    icon: "📝",
    color: "from-blue-200 to-blue-100",
  },
  {
    title: "Research Paper",
    desc: "A research paper contains writing that provides Literature review, Research methodology, analysis, interpretation, and argument based on in-depth independent research.",
    pdf: researchPDF,
    icon: "📄",
    color: "from-purple-200 to-purple-100",
  },
  {
    title: "Final Thesis",
    desc: "The document contains the Proposed solution to the research question, which was finalized after completing the research.",
    pdf: thesisPDF,
    icon: "📚",
    color: "from-green-200 to-green-100",
  },
  {
    title: "Student Document",
    desc: "Contains all student-related project documents.",
    pdf: studentDocPDF,
    icon: "👨‍🎓",
    color: "from-yellow-200 to-yellow-100",
  },
  {
    title: "Research Logbook",
    desc: "The document describes the progress of the project within the specific time period and compares it against the project plan checklist.",
    pdf: logbookPDF,
    icon: "📔",
    color: "from-orange-200 to-orange-100",
  },
  {
    title: "Business Plan",
    desc: "The document outlines the business plan for the project.",
    pdf: businessPDF,
    icon: "💼",
    color: "from-teal-200 to-teal-100",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, type: "spring" }
  }),
};

function Documents() {
  return (
    <div className="py-10 min-h-screen bg-neutral-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Project Documents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {docs.map((doc, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className={`rounded-xl shadow-lg p-8 flex flex-col items-center text-center bg-gradient-to-br ${doc.color} transition-transform duration-300 hover:scale-105`}
          >
            <div className="text-6xl mb-4 drop-shadow">{doc.icon}</div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">{doc.title}</h3>
            <p className="mb-6 text-gray-700">{doc.desc}</p>
            <a
              href={doc.pdf}
              download
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Download PDF
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Documents;