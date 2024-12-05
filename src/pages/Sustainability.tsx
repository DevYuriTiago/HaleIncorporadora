import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import { fadeInUp, staggerChildren } from '../utils/animations';
import { Leaf, Recycle, Sun, Droplets } from 'lucide-react';

const initiatives = [
  {
    icon: <Sun className="h-12 w-12" />,
    title: 'Energia Solar',
    description: 'Implementação de painéis solares em todos os nossos empreendimentos.'
  },
  {
    icon: <Droplets className="h-12 w-12" />,
    title: 'Gestão de Água',
    description: 'Sistemas de captação de água da chuva e reuso de água cinza.'
  },
  {
    icon: <Recycle className="h-12 w-12" />,
    title: 'Gestão de Resíduos',
    description: 'Programa completo de reciclagem e gestão de resíduos da construção.'
  },
  {
    icon: <Leaf className="h-12 w-12" />,
    title: 'Áreas Verdes',
    description: 'Integração de espaços verdes e jardins verticais em todos os projetos.'
  }
];

const Sustainability = () => {
  return (
    <div>
      <PageHeader
        title="Sustentabilidade"
        description="Nosso compromisso com um futuro melhor"
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Compromisso com o Meio Ambiente</h2>
            <p className="text-gray-600">
              Na Hale Incorporadora, a sustentabilidade está no centro de tudo o que fazemos.
              Nosso compromisso vai além da construção sustentável, buscando criar um impacto
              positivo em nossas comunidades e no planeta.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren().container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                variants={staggerChildren().item}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-primary mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Certificações e Reconhecimentos</h3>
            <p className="text-gray-600 mb-6">
              Nossos projetos são desenvolvidos seguindo as mais rigorosas normas de
              sustentabilidade, buscando certificações que atestam nosso compromisso com
              o meio ambiente e a qualidade de vida dos moradores.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded shadow">
                <h4 className="font-semibold mb-2">LEED Certification</h4>
                <p className="text-sm text-gray-600">Certificação em construção sustentável</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h4 className="font-semibold mb-2">AQUA-HQE</h4>
                <p className="text-sm text-gray-600">Alta Qualidade Ambiental</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h4 className="font-semibold mb-2">Selo Casa Azul</h4>
                <p className="text-sm text-gray-600">Construção habitacional sustentável</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;