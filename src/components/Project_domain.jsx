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
         
       
         The proposed methodology integrates multiple subsystems within Manthra-X using simulation-based development and validation. First, sensor data collection and preprocessing are performed using LIDAR, RADAR, and RGB cameras. These datasets are synchronized and cleaned to eliminate noise. The perception module uses YOLOv5 for object detection, identifying pedestrians, vehicles, and traffic signs. To improve scene understanding and motion prediction, a hybrid Transformer-GNN model is implemented, where Transformers model temporal dependencies and GNNs model spatial relationships. This module is trained and tested using the CARLA simulator, which replicates diverse real-world driving conditions. For collision avoidance, Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO) are used to learn safe driving policies from simulated interactions, while PID controllers are used for low-level controls to maintain stability. A hybrid control approach combines DQN for high-level decisions and PID for precision control. For ethical decision-making, reinforcement learning agents are trained with reward functions incorporating moral principles such as pedestrian safety and passenger preservation. In-cabin monitoring is handled by MediaPipe Face Mesh for eyeball tracking, and CNN and LSTM models for voice and object detection. Real-time threat detection is enabled through edge computing, allowing low-latency alerts. The entire system is validated on metrics such as accuracy, FPS, and ethical alignment in simulation.


       
      </>
    ),
  },
  {
    label: 'TECHNOLOGIES',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">TECHNOLOGIES</h3>
        
          Manthra-X integrates a range of cutting-edge technologies to build a unified autonomous vehicle system. For object detection, the project utilizes YOLOv5, a state-of-the-art real-time detection algorithm trained on AV-specific datasets. It is optimized to recognize pedestrians, vehicles, and traffic signs accurately. To enhance scene understanding, Transformer-GNN hybrid models are employed—Transformers for modeling temporal dependencies and Graph Neural Networks (GNNs) for capturing spatial relationships between dynamic objects. These models offer enhanced accuracy in motion prediction and behavior classification. For navigation and collision avoidance, Deep Reinforcement Learning algorithms such as Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO) are used, allowing adaptive policy learning. Traditional PID controllers are integrated for low-level vehicle control to ensure real-time responsiveness. CARLA Simulator is utilized for data generation, training, and performance evaluation under diverse traffic and weather conditions. For in-cabin security, Convolutional Neural Networks (CNNs) are used to detect objects like weapons, while LSTM and RNN-based NLP models handle voice recognition and anomaly detection. MediaPipe is used for driver alertness monitoring via eyeball tracking and facial analysis. Edge computing platforms ensure low-latency processing for real-time threat detection. This multi-tech stack empowers Manthra-X to deliver intelligent, ethical, and secure autonomous mobility.
       
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