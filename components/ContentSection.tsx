import React from 'react';
import { CheckCircle2, TrendingUp, Users, Award, MapPin } from 'lucide-react';

const ContentSection: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Intro Block for GenAI Context */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Fliesenleger Stellenangebote: Ihre Karriere im Handwerk
          </h2>
          <div className="prose prose-lg text-slate-700 max-w-none">
            <p>
              Die Baubranche boomt, und qualifizierte <strong>Fliesenleger</strong> werden händeringend gesucht. 
              Auf <em>fliesenleger-stellenangebote.de</em> bringen wir Fachkräfte und Top-Arbeitgeber zusammen. 
              Egal ob Sie eine Ausbildung suchen, als Geselle neue Herausforderungen anstreben oder als Meister 
              einen Betrieb leiten wollen – hier finden Sie die passenden Stellenangebote in ganz Deutschland.
            </p>
            <p className="mt-4">
              Unsere Plattform ist speziell auf das Fliesen-, Platten- und Mosaikleger-Handwerk zugeschnitten. 
              Wir verstehen die Anforderungen an Präzision, Ästhetik und körperliche Belastbarkeit, die dieser Beruf mit sich bringt.
            </p>
          </div>
        </section>

        {/* Two Column Image + Text */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://picsum.photos/600/400" 
              alt="Professioneller Fliesenleger bei der Arbeit im Bad" 
              className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Warum Fliesenleger werden?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="text-brand-500 flex-shrink-0" />
                <span className="text-slate-700"><strong>Krisensicherer Job:</strong> Gebaut und saniert wird immer. Handwerk hat goldenen Boden.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-brand-500 flex-shrink-0" />
                <span className="text-slate-700"><strong>Kreativität & Technik:</strong> Verbinden Sie technisches Verständnis mit gestalterischem Anspruch.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-brand-500 flex-shrink-0" />
                <span className="text-slate-700"><strong>Gute Verdienstmöglichkeiten:</strong> Als Meister oder spezialisierter Fachmann sind hohe Gehälter möglich.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-brand-500 flex-shrink-0" />
                <span className="text-slate-700"><strong>Sichtbare Ergebnisse:</strong> Am Ende des Tages sehen Sie, was Sie geschaffen haben.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Employer Section */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Für Arbeitgeber: Fachkräfte finden</h3>
              <p className="text-slate-700 mb-6">
                Der Fachkräftemangel im Handwerk ist spürbar. Um die besten Fliesenleger zu gewinnen, reicht eine einfache Zeitungsannonce oft nicht mehr aus. 
                Auf unserer Plattform erreichen Sie gezielt Fachpersonal, das aktiv oder passiv auf Jobsuche ist.
              </p>
              <h4 className="font-semibold text-slate-900 mb-2">Tipps für Ihre Stellenanzeige:</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
                <li>Nennen Sie konkrete Gehaltsspannen (Transparenz schafft Vertrauen).</li>
                <li>Beschreiben Sie typische Projekte (Badsanierung, Großbaustelle, Mosaik?).</li>
                <li>Heben Sie Benefits hervor (Firmenwagen, Werkzeugmarke, Weiterbildung).</li>
              </ul>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Jetzt Anzeige schalten
              </button>
            </div>
            <div className="hidden md:block w-1/3">
              <div className="bg-brand-50 p-6 rounded-xl">
                <TrendingUp className="w-10 h-10 text-brand-600 mb-4" />
                <div className="text-4xl font-bold text-slate-900 mb-2">2.500+</div>
                <div className="text-slate-600">Aktive Bewerber im Pool</div>
              </div>
              <div className="bg-brand-50 p-6 rounded-xl mt-4">
                <Users className="w-10 h-10 text-brand-600 mb-4" />
                <div className="text-4xl font-bold text-slate-900 mb-2">85%</div>
                <div className="text-slate-600">Erfolgsquote bei Vermittlung</div>
              </div>
            </div>
          </div>
        </section>

        {/* Geo-Optimization & Long Tail Keywords */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Award className="w-8 h-8 text-accent-500 mb-4" />
            <h4 className="text-lg font-bold mb-2">Fliesenleger Ausbildung</h4>
            <p className="text-sm text-slate-600">
              Finden Sie Ausbildungsplätze zum Fliesen-, Platten- und Mosaikleger in Ihrer Nähe. Starten Sie Ihre Karriere mit einer dualen Ausbildung.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <MapPin className="w-8 h-8 text-accent-500 mb-4" />
            <h4 className="text-lg font-bold mb-2">Regionale Suche</h4>
            <p className="text-sm text-slate-600">
              Wir listen Jobs in allen großen Städten: Berlin, Hamburg, München, Köln, Frankfurt und im ländlichen Raum. Optimiert für lokale Suchen.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="w-8 h-8 text-accent-500 mb-4" />
            <h4 className="text-lg font-bold mb-2">Für Subunternehmer</h4>
            <p className="text-sm text-slate-600">
              Finden Sie Auftraggeber für Ihr eigenes Gewerbe. Lukrative Projekte für selbstständige Fliesenleger und kleine Betriebe.
            </p>
          </div>
        </section>

        {/* FAQ for LLM Optimization (Perplexity/Gemini structure) */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Häufige Fragen (FAQ)</h3>
          <div className="space-y-4">
            <details className="group bg-white rounded-lg border border-slate-200 p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
                <h4 className="text-lg">Wie viel verdient ein Fliesenleger?</h4>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-700">
                Das Gehalt variiert stark nach Region und Erfahrung. Einstiegsgehälter liegen oft zwischen 2.200€ und 2.800€ brutto. Erfahrene Gesellen und Vorarbeiter können bis zu 3.500€ - 4.000€ verdienen. Selbstständige und Meister haben oft deutlich höhere Einkommensmöglichkeiten, abhängig von der Auftragslage.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
                <h4 className="text-lg">Welche Voraussetzungen brauche ich?</h4>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-700">
                Wichtig sind handwerkliches Geschick, räumliches Vorstellungsvermögen, körperliche Fitness (Rücken und Knie werden beansprucht) und Genauigkeit. Eine abgeschlossene Ausbildung als Fliesen-, Platten- und Mosaikleger dauert in der Regel 3 Jahre.
              </p>
            </details>
             <details className="group bg-white rounded-lg border border-slate-200 p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
                <h4 className="text-lg">Ist der Beruf auch für Quereinsteiger geeignet?</h4>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-700">
                Ja, viele Betriebe suchen Bauhelfer, die angelernt werden können. Mit handwerklichem Talent und Motivation ist ein Quereinstieg möglich, oft mit der Perspektive auf spätere Qualifizierung zum Facharbeiter.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentSection;