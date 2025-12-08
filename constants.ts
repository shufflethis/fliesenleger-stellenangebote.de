import { JobListing } from './types';

export const MOCK_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Fliesenlegermeister (m/w/d) als Vorarbeiter',
    company: 'Baukeramik Müller GmbH',
    location: 'München, Bayern',
    salaryRange: '3.800€ - 4.500€',
    type: 'Vollzeit',
    postedDate: '2023-10-25',
    description: 'Wir suchen einen erfahrenen Meister für Großprojekte im gewerblichen Bereich.',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Selbstständiger Fliesenleger für Badsanierung',
    company: 'Sanitär & Design Schmidt',
    location: 'Hamburg',
    salaryRange: 'Nach Vereinbarung (Stundenlohn)',
    type: 'Projektbasis',
    postedDate: '2023-10-24',
    description: 'Suche Subunternehmer für exklusive Badrenovierungen in Villen.',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Fliesenleger-Geselle (m/w/d)',
    company: 'Handwerksbetrieb Krause',
    location: 'Berlin',
    salaryRange: '18€ - 22€ / Std.',
    type: 'Vollzeit',
    postedDate: '2023-10-22',
    description: 'Familiäres Team sucht Verstärkung für Privatkundenaufträge. Firmenwagen inklusive.',
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Ausbildung zum Fliesen-, Platten- und Mosaikleger',
    company: 'Baulöwen AG',
    location: 'Köln, NRW',
    salaryRange: 'Tarifliche Ausbildungsvergütung',
    type: 'Vollzeit',
    postedDate: '2023-10-20',
    description: 'Starte deine Karriere im Handwerk mit einer soliden Ausbildung bei uns.',
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Allround-Handwerker mit Schwerpunkt Fliesen',
    company: 'Immobilienverwaltung West',
    location: 'Düsseldorf',
    salaryRange: '3.200€ Brutto',
    type: 'Vollzeit',
    postedDate: '2023-10-18',
    description: 'Instandhaltung unserer Mietobjekte. Abwechslungsreiche Tätigkeit.',
    isFeatured: false,
  },
];

export const SEO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "name": "fliesenleger-stellenangebote.de",
  "description": "Deutschlands spezialisierte Jobbörse für das Fliesenleger-Handwerk.",
  "areaServed": "DE",
  "keywords": "Fliesenleger, Jobs, Handwerk, Stellenangebote"
};