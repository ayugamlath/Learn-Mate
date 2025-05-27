import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    label: 'LITERATURE SURVEY',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">LITERATURE SURVEY</h3>
        
       
        Several tools and systems have been developed to assist in diagnosing and supporting children with learning disabilities such as dysgraphia, dyslexia, ADHD, and dyscalculia. However, these tools often have key limitations.
        For dysgraphia, traditional methods involve manual observation and paper-based checklists, which are time-consuming and may not detect issues early. Some digital handwriting tools exist, but they focus on screen-based writing and do not encourage real handwriting practice. Machine learning models like CNNs can accura        
        {/* Add the rest of your literature survey content here */}
      </>
    ),
  },
  {
    label: 'RESEARCH PROBLEM',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">RESEARCH PROBLEM</h3>
         
       
        There is a need for an integrated, application that can accurately screen and support children with learning disabilities-especially dysgraphia, dyslexia, ADHD, and dyscalculia-by providing real-time feedback, handwriting analysis, and personalized learning activities to improve skill development and track progress effectively.        
      </>
    ),
  },
  {
    label: 'RESEARCH GAP',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">RESEARCH GAP</h3>
         
        
        Current tools for diagnosing and supporting learning disabilities like dysgraphia, dyslexia, ADHD, and dyscalculia often lack real-time feedback, handwriting-based interaction, adaptive learning features, and integrated AI support. Many are limited to specific functions and are not widely implemented in practical, everyday educational settings.        
      </>
    ),
  },
  {
    label: 'RESEARCH OBJECTIVE',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">RESEARCH OBJECTIVE</h3>
       
       
          The primary objective of this research is to develop Manthra-X, an integrated autonomous vehicle framework that addresses core limitations in perception, decision-making, collision avoidance, and in-cabin safety. The project is structured around the following goals:

 <br></br>1. Improve Object Detection and Perception Accuracy: Deploy hybrid models combining YOLOv5, Transformers, and Graph Neural Networks to accurately detect and track multiple dynamic objects in real-time under various traffic conditions.

<br></br>2.Enhance Ethical Decision-Making: Implement Reinforcement Learning-based ethical frameworks that allow AVs to make morally appropriate choices in complex, life-critical scenarios involving pedestrians, passengers, and other vehicles.

<br></br>3.Optimize Collision Avoidance Strategies: Use Deep Reinforcement Learning (DQN, PPO) in tandem with PID controllers to learn adaptive, safe navigation policies that reduce collision risks and improve route planning across highway and urban environments.

<br></br>4.Ensure In-Cabin Security and Awareness: Utilize multimodal sensor fusion to detect threats (weapons, aggressive voice tones, unauthorized access) and monitor driver alertness using facial tracking and eyeball movement.

<br></br>5.Validate Performance in Simulated Environments: Leverage the CARLA simulator to test and refine model performance under varying weather, traffic, and lighting conditions.

<br></br>Through these objectives, Manthra-X aims to create a comprehensive, ethical, and intelligent AV platform ready for real-world challenges.
        
      </>
    ),
  },
  {
    label: 'METHODOLOGY',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">METHODOLOGY</h3>
         
       
        

This research adopts a structured four-phase methodology: data collection, system design, model development, and system evaluation. Data was collected from primary school students through various inputs-handwriting samples to detect dysgraphia, reading and speech recordings for dyslexia, facial images and eye-tracking data for ADHD, and math concept questionnaire responses for dyscalculia. A user-friendly mobile application was designed with a Flask-based API to enable real-time communication between the frontend and backend machine learning models. Convolutional Neural Networks (CNNs) were used to analyze handwriting patterns, speech fluency, facial focus, and gaze direction, while logistic regression was applied for predicting dyscalculia risk. The app not only identifies learning difficulties but also delivers personalized intervention activities such as line writing, phoneme matching, focus games, and math skill enhancement exercises. Instant feedback, scoring systems, and progress tracking are integrated to help students improve over time. Evaluation was performed using accuracy metrics, with the dysgraphia model achieving 96% accuracy, and the entire system tested in school environments to ensure practical relevance and impact.

       
      </>
    ),
  },
  {
    label: 'TECHNOLOGIES',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">TECHNOLOGIES</h3>
        
        This research project integrates a range of modern technologies to build an intelligent, responsive system for detecting and supporting learning disabilities in children. Convolutional Neural Networks (CNNs) were utilized for image classification tasks such as handwriting analysis and facial focus detection, while Support Vector Machine (SVM) models were applied for accurate prediction of dyscalculia risk. OpenCV and image processing techniques were used to analyze spatial features in handwriting and facial movements. The backend of the system was developed using Python, incorporating machine learning models served via Flask for real-time data processing and prediction. The mobile application was built using React Native to ensure cross-platform compatibility and ease of use for students, parents, and teachers. Node.js was used to handle additional server-side operations, enabling smooth communication between the mobile front-end and backend services. Together, these technologies support an effective, interactive, and scalable solution for early detection and personalized intervention of learning disabilities.       
      </>
    ),
  },
];

function Project_domain() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-white">PROJECT DOMAIN</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setSelected(idx)}
            className={`px-4 py-2 rounded transition-colors duration-200 font-semibold
              ${selected === idx
                ? 'bg-blue-500 text-white'
                : 'bg-zinc-800 text-gray-200 hover:bg-blue-700 hover:text-white'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-900 text-gray-100 rounded-lg shadow-lg p-6 min-h-[200px]"
        >
          {tabs[selected].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Project_domain;