import React from 'react';
import { Hammer } from 'lucide-react';

interface FooterProps {
  onOpenImpressum: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenImpressum }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Hammer className="text-brand-500" />
              <span>FliesenJobs.de</span>
            </div>
            <p className="text-sm text-slate-400">
              Die führende Plattform für Fliesenleger in Deutschland. Wir verbinden Handwerk mit Zukunft.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Für Bewerber</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Stellenangebote durchsuchen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karrieretipps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gehaltsvergleich</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Für Arbeitgeber</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Stelle inserieren</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preise & Konditionen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recruiting Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={onOpenImpressum} className="hover:text-white transition-colors">Impressum & Kontakt</button></li>
              <li><button onClick={onOpenImpressum} className="hover:text-white transition-colors">Datenschutz</button></li>
              <li><button onClick={onOpenImpressum} className="hover:text-white transition-colors">AGB</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} fliesenleger-stellenangebote.de. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;