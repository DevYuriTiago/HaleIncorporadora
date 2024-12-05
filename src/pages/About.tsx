import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import { fadeInUp, staggerChildren } from '../utils/animations';
import { Building2, Trophy, Users } from 'lucide-react';

const stats = [
  { icon: <Building2 className="h-8 w-8" />, value: '14.000+', label: 'Unidades Entregues' },
  { icon: <Trophy className="h-8 w-8" />, value: '23+', label: 'Anos de Experiência' },
  { icon: <Users className="h-8 w-8" />, value: '3', label: 'Países' }
];

const About = () => {
  return (
    <div>
      <PageHeader
        title="Sobre a Hale Incorporadora"
        description="Construindo futuros sustentáveis desde 2021"
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
            <p className="text-gray-600">
              Fundada em 2021 por sócios com mais de 23 anos de experiência no setor imobiliário,
              a Hale Incorporadora surgiu da visão de transformar a indústria da construção através
              da inovação e sustentabilidade.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren().container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerChildren().item}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-primary mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">O Significado de Hale</h3>
            <p className="text-gray-600">
              O nome "Hale" vem do havaiano, significando "Lar, Casa, Construção". Este nome
              incorpora nosso compromisso de criar não apenas edifícios, mas verdadeiros lares que
              refletem nossos valores de sustentabilidade, qualidade e comunidade.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;