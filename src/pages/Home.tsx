import React from 'react';
import Hero from '../components/home/Hero';
import { Building2, Users, Shield, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Integridade',
    description: 'Conduzimos nossos negócios com transparência e princípios éticos.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Responsabilidade Social',
    description: 'Comprometidos em criar impacto positivo nas comunidades.',
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Qualidade',
    description: 'Excelência em cada detalhe de nossos empreendimentos.',
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Sustentabilidade',
    description: 'Soluções inovadoras para preservação ambiental.',
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
            <h2 className="text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Na Hale Incorporadora, acreditamos em construir mais do que estruturas.
              Criamos espaços sustentáveis que valorizam vidas e comunidades.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;