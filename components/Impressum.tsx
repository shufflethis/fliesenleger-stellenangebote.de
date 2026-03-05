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
            <strong>Social Media Venture GmbH</strong><br />
            Schliemannstraße 23<br />
            10437 Berlin<br />
            Deutschland
          </p>

          <p>
            <strong>Vertreten durch:</strong><br />
            Thomas Sander (Geschäftsführer)
          </p>

          <h3>Kontakt</h3>
          <p>
            Telefon: <a href="tel:+4930959988700">+49 30 959 988 700</a><br />
            E-Mail: <a href="mailto:info@socialmediaventure.com">info@socialmediaventure.com</a>
          </p>

          <h3>Registereintrag</h3>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Berlin-Charlottenburg<br />
            Registernummer: HRB 162557 B
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE298885799
          </p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            Thomas Sander<br />
            Schliemannstraße 23<br />
            10437 Berlin
          </p>

          <h3>Verbraucherstreitbeilegung</h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
