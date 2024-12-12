import React from 'react';
import Hero from '../components/home/Hero';
import { Building2, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Missão',
    description: 'Construir moradias de qualidade, visando materializar os sonhos dos nossos clientes.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Visão', 
    description: 'Ser reconhecida como a melhor empresa no estado de Pernambuco, na construção de moradias para média renda até 2028.',
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Valores',
    description: 'Responsabilidade social e ambiental, integridade, profissionalismo, qualidade, materialização de sonho.',
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Institucional</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Na Hale Incorporadora, acreditamos em construir mais do que estruturas.
              Criamos espaços sustentáveis que valorizam vidas e comunidades.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary mb-6 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {React.cloneElement(value.icon, { className: "h-10 w-10 text-primary" })}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;