import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface HeroProps {
  onSearch: (term: string, location: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [term, setTerm] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term, location);
  };

  return (
    <div className="relative bg-slate-900 text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://picsum.photos/1920/1080" 
          alt="Fliesenleger bei der Arbeit Hintergrund" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Deutschlands Nr. 1 für <span className="text-brand-500">Fliesenleger</span> Jobs
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Verbinden Sie handwerkliches Können mit Top-Arbeitgebern. Finden Sie offene Stellen in Ihrer Region oder rekrutieren Sie qualifizierte Fachkräfte.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-2 rounded-lg md:rounded-full max-w-4xl mx-auto shadow-xl flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 md:bg-transparent rounded-full md:rounded-none border md:border-none border-slate-200">
            <Search className="text-slate-400 w-5 h-5 mr-3" />
            <input 
              type="text" 
              placeholder="Jobtitel, z.B. Fliesenleger, Meister..." 
              className="bg-transparent w-full outline-none text-slate-800 placeholder-slate-400"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <div className="hidden md:block w-px bg-slate-200 h-8 self-center"></div>
          <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 md:bg-transparent rounded-full md:rounded-none border md:border-none border-slate-200">
            <MapPin className="text-slate-400 w-5 h-5 mr-3" />
            <input 
              type="text" 
              placeholder="Stadt oder PLZ" 
              className="bg-transparent w-full outline-none text-slate-800 placeholder-slate-400"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-8 rounded-full transition-colors w-full md:w-auto">
            Jobs finden
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-4 text-sm text-slate-400">
          <span>Beliebte Suchen:</span>
          <button onClick={() => setTerm('Meister')} className="hover:text-white underline decoration-slate-600 underline-offset-4">Meister</button>
          <button onClick={() => setTerm('Ausbildung')} className="hover:text-white underline decoration-slate-600 underline-offset-4">Ausbildung</button>
          <button onClick={() => setLocation('Berlin')} className="hover:text-white underline decoration-slate-600 underline-offset-4">Berlin</button>
          <button onClick={() => setLocation('München')} className="hover:text-white underline decoration-slate-600 underline-offset-4">München</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;