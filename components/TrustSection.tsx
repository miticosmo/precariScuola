import React from 'react';
import { Lock, FileCheck, Award, BarChart3 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          <div className="flex flex-col gap-3">
            <Lock className="w-6 h-6 text-ministry mb-2" />
            <h4 className="text-slate-900 font-bold">GDPR & Sicurezza</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dati criptati end-to-end. I tuoi documenti e contratti sono al sicuro. Accesso 2FA disponibile.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <FileCheck className="w-6 h-6 text-ministry mb-2" />
            <h4 className="text-slate-900 font-bold">Normativa Aggiornata</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Database sincronizzato entro 24h dalle nuove Ordinanze Ministeriali e circolari ARAN.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Award className="w-6 h-6 text-ministry mb-2" />
            <h4 className="text-slate-900 font-bold">Qualità Certificata</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Template legali validati da avvocati specializzati in diritto scolastico e amministrativo.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <BarChart3 className="w-6 h-6 text-ministry mb-2" />
            <h4 className="text-slate-900 font-bold">Dati Aperti</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Utilizziamo Open Data MIM per garantire la massima trasparenza nelle proiezioni.
            </p>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-10 rounded-3xl bg-ministry text-center relative overflow-hidden shadow-2xl group">
           <div className="absolute top-0 right-0 p-32 bg-white/5 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
           <div className="absolute bottom-0 left-0 p-24 bg-blue-500/20 blur-3xl rounded-full -translate-x-10 translate-y-10"></div>
           
           <h3 className="text-3xl font-bold text-white mb-4 relative z-10">La scuola del futuro inizia qui.</h3>
           <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
             Unisciti a Maria, Luca e altri 2.000 docenti che hanno smesso di preoccuparsi della burocrazia.
           </p>
           <button className="group/btn relative bg-white text-ministry px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:bg-slate-50 transition-all relative z-10 overflow-hidden">
             <span className="absolute inset-0 w-full h-full -translate-x-full group-hover/btn:animate-shimmer bg-gradient-to-r from-transparent via-blue-100/50 to-transparent z-10"></span>
             <span className="relative z-20">Crea account gratuito</span>
           </button>
        </div>

      </div>
    </section>
  );
};