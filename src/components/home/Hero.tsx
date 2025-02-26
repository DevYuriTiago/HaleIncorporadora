import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Visita_Tecnica_Ordem_Engenheiros_44.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Construindo sonhos com qualidade e sustentabilidade
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Criando espaços inovadores que transformam vidas e respeitam nosso meio ambiente.
            </p>
            <Link to="/projects" 
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg 
                           flex items-center space-x-2 transition-colors 
                           inline-block transform hover:scale-105 duration-300">
              <span>Conheça nossos projetos</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;