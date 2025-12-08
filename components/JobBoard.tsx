import React from 'react';
import { MapPin, Clock, Briefcase, Euro } from 'lucide-react';
import { JobListing } from '../types';

interface JobBoardProps {
  jobs: JobListing[];
}

const JobBoard: React.FC<JobBoardProps> = ({ jobs }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Aktuelle Stellenangebote</h2>
            <p className="text-slate-600 mt-2">Die neuesten Jobs für Fliesenleger in Deutschland</p>
          </div>
          <a href="#" className="hidden md:block text-brand-600 font-medium hover:text-brand-800">
            Alle Jobs anzeigen &rarr;
          </a>
        </div>

        <div className="grid gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div 
                key={job.id} 
                className={`group border rounded-xl p-6 transition-all hover:shadow-lg ${
                  job.isFeatured ? 'border-brand-200 bg-brand-50/50' : 'border-slate-100 bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {job.isFeatured && (
                        <span className="bg-accent-500 text-white text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                          Top Job
                        </span>
                      )}
                      <span className="text-slate-500 text-sm">{job.postedDate}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-slate-700 font-medium mt-1">{job.company}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Euro size={16} />
                        {job.salaryRange}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <button className="w-full md:w-auto bg-white border border-slate-300 text-slate-700 font-medium px-6 py-2 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors">
                      Details ansehen
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500">
              Keine Jobs gefunden, die Ihren Kriterien entsprechen.
            </div>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-brand-600 font-medium hover:text-brand-800">
            Alle Jobs anzeigen &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobBoard;