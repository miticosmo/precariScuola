import React from 'react';
import { ArrowRight, Star, CheckCircle2, HeartHandshake, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      
      {/* Background Image - Italian School Atmosphere (Blurred Corridor) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop')" }} 
      />
      {/* Heavy Overlay for Readability */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-0"></div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Empathetic Copy */}
        <div className="text-left">
          {/* Emotional Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50/80 border border-orange-200 text-orange-700 text-xs font-bold mb-6 shadow-sm backdrop-blur-md"
          >
            <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            <span className="tracking-wide">IL TUO FUTURO CONTA</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl mb-6 leading-[1.15] drop-shadow-sm"
          >
            Dal Precariato al Ruolo: <br/>
            <span className="text-ministry font-serif italic">
              Riprenditi il Tuo Futuro.
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 max-w-xl mb-10 leading-relaxed font-medium"
          >
            Non sei più solo contro GPS, Algoritmi e burocrazia. 
            Ti guidiamo passo dopo passo, dalla domanda alla nomina, per trasformare la tua vocazione in una carriera stabile.
          </motion.p>

          {/* CTAs with Illuminating Effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-hope text-white rounded-full font-bold text-lg shadow-lg shadow-emerald-900/10 hover:shadow-xl hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
              {/* Shine Effect */}
              <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></span>
              <span className="relative z-20 flex items-center gap-2">
                Scopri le tue possibilità
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-slate-700 bg-white/80 border border-slate-200 hover:bg-white hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm backdrop-blur">
              Come funziona
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.7, delay: 0.5 }}
             className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                 {avatars.map((src, i) => (
                   <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={src} alt={`Docente ${i+1}`} />
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-xs font-bold text-ministry">+10k</div>
              </div>
              <p className="text-sm text-slate-700 font-medium">
                Già scelto da oltre <span className="font-bold text-slate-900">10.000 colleghi</span> per le GPS 2024.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600 uppercase tracking-wide mt-2">
               <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-hope" /> Conforme MIM</span>
               <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-hope" /> Dati NoiPA</span>
               <span className="flex items-center gap-1.5"><HeartHandshake className="w-4 h-4 text-hope" /> Supporto Legale</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Authentic Teacher with High School Students */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative lg:h-auto"
        >
          {/* Photo Frame */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white transform rotate-1 hover:rotate-0 transition-transform duration-700">
            {/* Image of Teacher with Students and Smartboard */}
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop" 
              alt="Professoressa in classe con lavagna interattiva e studenti con laptop" 
              className="w-full h-[600px] object-cover"
            />
            
            {/* Overlay: Success Message */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md shadow-lg p-5 rounded-3xl border border-stone-100 max-w-xs"
            >
              <div className="flex items-start gap-4">
                 <div className="bg-emerald-100 p-2.5 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Cattedra Assegnata!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                       "Finalmente di ruolo nella scuola dei miei sogni. Grazie per aver reso tutto semplice."
                    </p>
                    <p className="text-xs font-semibold text-ministry mt-2">— Elena B., Prof.ssa Lettere</p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Background Blobs behind image */}
          <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
        </motion.div>

      </div>
    </section>
  );
};