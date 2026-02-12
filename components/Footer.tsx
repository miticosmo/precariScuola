import React from 'react';
import { ShieldCheck, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002B55] pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-white w-6 h-6" />
                <span className="text-lg font-bold">Precari Scuola</span>
             </div>
             <p className="text-blue-200 text-sm">
               Il partner tecnologico per il personale scolastico italiano.
             </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-4">Prodotto</h5>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Algoritmo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interpelli</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prezzi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Risorse</h5>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Glossario GPS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guida NASpI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supporto</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Legale</h5>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termini di Servizio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-sm">
            © 2026 Precari Scuola. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4 text-blue-300">
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

      </div>
    </footer>
  );
};