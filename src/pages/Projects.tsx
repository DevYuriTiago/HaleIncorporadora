import React, { useState } from 'react';
import ProjectGallery from '../components/ProjectGallery';

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  onClick: () => void;
}

const projectsData = [
  {
    id: 'project1',
    title: 'Projeto 1',
    image: '/project1/cover.jpg'
  },
  {
    id: 'project2',
    title: 'Projeto 2',
    image: '/project2/cover.jpg'
  },
  {
    id: 'project3',
    title: 'Projeto 3',
    image: '/project3/cover.jpg'
  },
  {
    id: 'project4',
    title: 'Projeto 4',
    image: '/project4/cover.jpg'
  }
];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, onClick }) => (
  <button
    onClick={onClick}
    className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg 
               transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-primary-dark/30
               border border-primary-light/20"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent 
                    group-hover:from-secondary/80 group-hover:via-secondary/40 group-hover:to-transparent 
                    transition-all duration-500 flex items-end justify-start p-6">
      <h3 className="text-white text-xl md:text-2xl font-bold transform group-hover:scale-105 
                     transition-transform duration-300 drop-shadow-lg">{title}</h3>
    </div>
  </button>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title text-center">
          Nossos <span className="text-secondary">Projetos</span>
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectGallery
            projectId={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;