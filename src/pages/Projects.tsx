import React, { useState } from 'react';
import ProjectGallery from '../components/ProjectGallery';
import { motion } from 'framer-motion';
import { Building2, Home, MapPin, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  location?: string;
  status?: string;
  description?: string;
  onClick: () => void;
}

const projectsData = [
  {
    id: 'project1',
    title: 'Residencial Verde Horizonte',
    image: '/images/Pespectivas/Pespectiva-sala.jpeg',
    location: 'Recife, PE',
    status: 'Em construção',
    description: 'Condomínio residencial de médio padrão com unidades de 2 e 3 quartos, área de lazer completa e localização privilegiada.'
  },
  {
    id: 'project2',
    title: 'Edifício Aurora',
    image: '/images/Pespectivas/Pespectiva-quarto.jpeg',
    location: 'Olinda, PE',
    status: 'Lançamento',
    description: 'Apartamentos com vista para o mar, acabamento de alto padrão e sustentabilidade integrada em cada detalhe.'
  },
  {
    id: 'project3',
    title: 'Condomínio Eco Ville',
    image: '/images/Pespectivas/Pespectiva-quarto1.jpeg',
    location: 'Jaboatão dos Guararapes, PE',
    status: 'Entregue',
    description: 'Casas sustentáveis com sistema de captação de água da chuva, energia solar e áreas verdes preservadas.'
  },
  {
    id: 'project4',
    title: 'Novo Empreendimento',
    image: '/images/WhatsApp Image 2024-12-12 at 09.30.43.jpeg',
    location: 'Caruaru, PE',
    status: 'Em planejamento',
    description: 'Futuro lançamento com conceito inovador, combinando tecnologia, conforto e respeito ao meio ambiente.'
  }
];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, location, status, description, onClick }) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-xl shadow-lg h-full bg-white hover:shadow-2xl transition-all duration-300 border border-primary-light/10"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {status && (
        <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
          {status}
        </div>
      )}
    </div>
    
    <div className="p-5">
      <h3 className="text-xl font-bold mb-2 text-primary-dark group-hover:text-secondary transition-colors duration-300">{title}</h3>
      
      {location && (
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
      )}
      
      {description && (
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>
      )}
      
      <button 
        onClick={onClick}
        className="mt-auto inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
      >
        Ver detalhes <ArrowRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-2 text-primary-dark">
            Nossos Empreendimentos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra os projetos que estão transformando a paisagem urbana, sempre com qualidade, 
            sustentabilidade e respeito às comunidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard 
                {...project}
                onClick={() => setSelectedProject(project.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Seção de projetos futuros */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-r from-primary/10 to-secondary/5 p-8 rounded-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-primary-dark">Projetos Futuros</h2>
              <p className="text-gray-700 mb-6">
                Estamos sempre inovando e expandindo nossa atuação. Fique por dentro dos próximos 
                lançamentos e seja o primeiro a conhecer nossos novos empreendimentos.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg 
                           inline-flex items-center space-x-2 transition-colors">
                <span>Inscreva-se para novidades</span>
                <ArrowRight className="h-5 w-5 ml-1" />
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="relative">
                <Building2 className="h-24 w-24 text-primary-light opacity-30" />
                <Home className="h-12 w-12 text-secondary absolute bottom-0 right-0" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectGallery
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
          project={projectsData.find(p => p.id === selectedProject)}
        />
      )}
    </div>
  );
};

export default Projects;