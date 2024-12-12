import React from 'react';
import {Mail, Phone, MapPin, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <img 
              src="Logos/LogoBranco.png" 
              alt="HALE" 
              className="h-16 w-auto"
            />
            </div>
            <p className="text-gray-300">
              Construindo sonhos com qualidade e sustentabilidade desde 2021.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>haleincorporadora@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+55 81 99910-3679</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Av. Gov. Agamenon Magalhaes, nº 2656, Empresarial Agamenon Magalhães, Sala 1401, 52.020-000, Espinheiro, Recife/PE.</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@HALEInc" className="text-gray-300 hover:text-secondary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/haleincorporadora/" className="text-gray-300 hover:text-secondary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/hale-incorporadora-9b9b76283" className="text-gray-300 hover:text-secondary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 rounded bg-primary-dark/50 border border-primary-light/20 focus:outline-none focus:border-secondary placeholder-gray-400 text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-secondary hover:bg-secondary-dark transition-colors rounded"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary-light/10 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Hale Incorporadora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;