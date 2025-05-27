import Navbar from './components/Navbar';
import Hero from './components/Introduction';
import About from './components/Project_docuemnt';
import Main from './components/Main';
import Technologies from './components/Technologies';
import Team from './components/Team';
import Contact from './components/Footer';
import ContactUS from './components/ContactUs';
import Projectmilestones from './components/Projectmilestones';
import Project_proposal from './components/Project_proposal';
import Project_domain from './components/Project_domain';
import Gallery from './components/Gallery';
import React from 'react';
import bgImg from './assets/justice-bg.jpg';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* 🔹 Background image layer with opacity */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: 0.6, // 👈 Change opacity here
          zIndex: -1,
        }}
      />

      {/* 🔹 Top navbar (fixed) */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* 🔹 Content */}
      <div className="container mx-auto mt-24 px-4 text-neutral-100 antialiased selection:text-cyan-900">
        <section id="home">
          <Main />
        </section>
        <section id="about">
          <Hero />
        </section>
        <section id="document">
          <About />
        </section>
        <section id="milestones">
          <Projectmilestones />
        </section>
        <section id="achievements">
          <Project_proposal />
        </section>
        <section id="domain">
          <Project_domain />
        </section>
        <Technologies />
        <Gallery />
        <section id="team">
          <Team />
        </section>
        <section id="contact">
          <ContactUS />
        </section>
      </div>

      {/* 🔹 Footer */}
      <Contact />
    </div>
  );
}

export default App;
