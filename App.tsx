import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobBoard from './components/JobBoard';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Impressum from './components/Impressum';
import { MOCK_JOBS, SEO_SCHEMA } from './constants';
import { JobListing, SectionType } from './types';

function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>(MOCK_JOBS);

  // Inject JSON-LD for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(SEO_SCHEMA);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSearch = (term: string, location: string) => {
    const lowerTerm = term.toLowerCase();
    const lowerLoc = location.toLowerCase();
    
    const results = MOCK_JOBS.filter(job => {
      const matchesTerm = !term || job.title.toLowerCase().includes(lowerTerm) || job.company.toLowerCase().includes(lowerTerm);
      const matchesLoc = !location || job.location.toLowerCase().includes(lowerLoc);
      return matchesTerm && matchesLoc;
    });
    setFilteredJobs(results);
    
    // Scroll to jobs
    const jobsSection = document.getElementById('jobs-section');
    jobsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (section: string) => {
    if (section === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    if (section === 'jobs') document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'employers' || section === 'advice') document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onNavClick={handleNavClick} />
      
      <main className="flex-grow">
        <Hero onSearch={handleSearch} />
        
        <div id="jobs-section">
          <JobBoard jobs={filteredJobs} />
        </div>
        
        <div id="content-section">
          <ContentSection />
        </div>
      </main>

      <Footer onOpenImpressum={() => setShowImpressum(true)} />
      
      <AIAssistant />
      
      {showImpressum && (
        <Impressum onClose={() => setShowImpressum(false)} />
      )}
    </div>
  );
}

export default App;