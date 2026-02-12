import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md border-stone-200 py-3 shadow-sm' : 'bg-transparent border-transparent py-5'}`}>
      
      {/* Top Tricolor Strip for institutional feel */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-white to-red-600 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mt-1">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-ministry p-2 rounded-xl group-hover:bg-blue-800 transition-colors shadow-md">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>Precari Scuola</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Ecosistema Digitale</span>
          </div>
        </div>

        {/* Desktop Links - Rounded Keys Effect */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600">
          <a href="#features" className="px-4 py-2 rounded-full hover:bg-stone-100 hover:text-ministry transition-all">Perché Noi</a>
          <a href="#roadmap" className="px-4 py-2 rounded-full hover:bg-stone-100 hover:text-ministry transition-all">Come Funziona</a>
          <a href="#pricing" className="px-4 py-2 rounded-full hover:bg-stone-100 hover:text-ministry transition-all">Piani</a>
          
          <div className="w-px h-6 bg-stone-300 mx-2"></div>
          
          <a href="#login" className="px-5 py-2 hover:bg-stone-100 rounded-full transition-all text-ministry font-bold">Accedi</a>
          
          <button className="group relative bg-hope text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 shadow-emerald-900/10 border border-transparent overflow-hidden">
            <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></span>
            <span className="relative z-20">Inizia il Tuo Percorso</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-700 p-2 rounded-full hover:bg-stone-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5 shadow-xl">
           <a href="#features" className="text-slate-700 py-3 px-4 rounded-xl hover:bg-stone-50 font-medium">Perché Noi</a>
           <a href="#roadmap" className="text-slate-700 py-3 px-4 rounded-xl hover:bg-stone-50 font-medium">Come Funziona</a>
           <button className="bg-hope text-white py-3 rounded-xl font-semibold mt-2 shadow-md w-full">
            Inizia il Tuo Percorso
           </button>
        </div>
      )}
    </nav>
  );
};