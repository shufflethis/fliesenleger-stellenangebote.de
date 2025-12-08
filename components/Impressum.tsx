import React from 'react';
import { X } from 'lucide-react';

interface ImpressumProps {
  onClose: () => void;
}

const Impressum: React.FC<ImpressumProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-slate-900">Impressum</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
            <X size={24} className="text-slate-600" />
          </button>
        </div>
        <div className="p-8 prose prose-slate">
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            <strong>Fliesenleger Stellenangebote GmbH (Musterfirma)</strong><br />
            Handwerkerstraße 1<br />
            10115 Berlin<br />
            Deutschland
          </p>

          <p>
            <strong>Vertreten durch:</strong><br />
            Max Mustermann (Geschäftsführer)
          </p>

          <h3>Kontakt</h3>
          <p>
            Telefon: +49 (0) 30 12345678<br />
            E-Mail: kontakt@fliesenleger-stellenangebote.de
          </p>

          <h3>Registereintrag</h3>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Charlottenburg<br />
            Registernummer: HRB 123456
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 123 456 789
          </p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            Max Mustermann<br />
            Handwerkerstraße 1<br />
            10115 Berlin
          </p>

          <hr />
          <p className="text-sm text-slate-500 italic">
            Dies ist ein Platzhalter-Impressum für Demonstrationszwecke der erstellten Website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;