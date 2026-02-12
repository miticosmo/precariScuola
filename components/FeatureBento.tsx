import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Zap, 
  Euro, 
  Scale, 
  Calculator, 
  Bot, 
  Clock, 
  Users, 
  FileText
} from 'lucide-react';

export const FeatureBento: React.FC = () => {
  return (
    <section id="features" className="py-24 relative max-w-7xl mx-auto px-6 bg-[#fdfbf7]">
      
      {/* Section Header */}
      <div className="mb-16 md:text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-ministry mb-6 font-serif">
          La tranquillità di avere tutto sotto controllo.
        </h2>
        <p className="text-slate-600 text-lg">
          Abbiamo creato un ecosistema che lavora per te, trasformando la complessità burocratica in opportunità concrete.
        </p>
      </div>

      {/* The Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">

        {/* Module 1: Algoritmo 150 (Large Feature) */}
        <GlassCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-blue-50 to-white" delay={0.1}>
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-ministry flex items-center justify-center mb-6 shadow-md shadow-blue-900/10">
                <BrainCircuit className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Algoritmo Predittivo "150 Preferenze"</h3>
              <p className="text-slate-600">
                Non compilare la domanda al buio. Il nostro sistema analizza lo storico e ti suggerisce l'ordine ottimale per massimizzare le probabilità di nomina vicino a casa.
              </p>
            </div>
            <div className="mt-8 relative h-32 w-full bg-white rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                {/* Mock UI visual */}
                <div className="absolute top-4 left-4 right-4 h-2 bg-stone-100 rounded-full w-3/4"></div>
                <div className="absolute top-8 left-4 right-4 h-2 bg-stone-100 rounded-full w-1/2"></div>
                <div className="absolute bottom-0 right-0 p-3 bg-emerald-50 border-t border-l border-emerald-100 rounded-tl-lg text-emerald-700 text-xs font-bold font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Ottimizzazione: ECCELLENTE
                </div>
            </div>
          </div>
        </GlassCard>

        {/* Module 3: Interpelli Real-Time (Large Vertical) */}
        <GlassCard className="col-span-1 md:col-span-1 row-span-2" delay={0.2}>
          <div className="flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6 border border-amber-200">
              <Zap className="text-amber-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Interpelli Senza Stress</h3>
            <p className="text-slate-600 text-sm mb-4">
              Monitoriamo 8.000 siti scolastici per te. Ricevi una notifica solo per le scuole che ti interessano davvero.
            </p>
            <div className="flex-1 bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-stone-200 shadow-sm border-l-4 border-l-amber-400">
                    <div className="flex-1 min-w-0">
                        <div className="h-2 w-20 bg-stone-200 rounded"></div>
                        <div className="h-1.5 w-12 bg-stone-100 rounded mt-1"></div>
                    </div>
                    <span className="text-[10px] text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">NUOVO</span>
                </div>
                 <div className="flex items-center gap-2 p-2 bg-white/60 rounded border border-stone-100 opacity-60">
                     <div className="h-2 w-20 bg-stone-200 rounded"></div>
                </div>
            </div>
          </div>
        </GlassCard>

        {/* Module 2: Validatore */}
        <GlassCard className="col-span-1" delay={0.3}>
          <ShieldCheck className="text-ministry w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">Protezione Punteggio</h3>
          <p className="text-slate-600 text-sm">Controlliamo che non ci siano errori nel calcolo del tuo punteggio prima delle segreterie.</p>
        </GlassCard>

        {/* Module 4: Tracker Finanziario */}
        <GlassCard className="col-span-1" delay={0.4}>
          <Euro className="text-ministry w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">Stipendio Chiaro</h3>
          <p className="text-slate-600 text-sm">Previsione netta reale e monitoraggio emissioni NoiPa. Niente più sorprese.</p>
        </GlassCard>

        {/* Module 5: Auto-Legal */}
        <GlassCard className="col-span-1" delay={0.5}>
          <Scale className="text-rose-600 w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">Tutela Legale</h3>
          <p className="text-slate-600 text-sm">Genera reclami via PEC in 5 minuti con modelli validati da avvocati.</p>
        </GlassCard>

        {/* Module 6: ROI Calculator */}
        <GlassCard className="col-span-1 md:col-span-2 bg-blue-50/50" delay={0.6}>
           <div className="flex items-start gap-4">
              <Calculator className="text-ministry w-8 h-8 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Conviene davvero?</h3>
                <p className="text-slate-600 text-sm">
                  Valuta se accettare una supplenza lontana: calcoliamo il netto reale sottraendo affitto e viaggio.
                </p>
              </div>
           </div>
        </GlassCard>

        {/* Module 7: AI Expert */}
        <GlassCard className="col-span-1" delay={0.7}>
          <Bot className="text-purple-600 w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">Esperto CCNL</h3>
          <p className="text-slate-600 text-sm">Hai dubbi su ferie o permessi? La nostra AI risponde basandosi sul contratto nazionale.</p>
        </GlassCard>

        {/* Module 8: NASpI Alert */}
        <GlassCard className="col-span-1" delay={0.8}>
          <Clock className="text-orange-600 w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">SOS NASpI</h3>
          <p className="text-slate-600 text-sm">Ti avvisiamo noi quando è il momento di fare domanda di disoccupazione.</p>
        </GlassCard>

        {/* Module 9: Community */}
        <GlassCard className="col-span-1" delay={0.9}>
          <Users className="text-pink-600 w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">Voce ai Docenti</h3>
          <p className="text-slate-600 text-sm">Leggi le esperienze vere dei colleghi sulle scuole dove andrai a insegnare.</p>
        </GlassCard>

        {/* Module 10: Digital Dossier */}
        <GlassCard className="col-span-1 md:col-span-1" delay={1.0}>
          <FileText className="text-teal-600 w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">Archivio Sicuro</h3>
          <p className="text-slate-600 text-sm">Contratti, cedolini e certificati sempre a portata di mano.</p>
        </GlassCard>

      </div>
    </section>
  );
};