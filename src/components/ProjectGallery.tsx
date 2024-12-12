import React, { useEffect } from 'react';

interface ProjectGalleryProps {
  projectId: string;
  onClose: () => void;
}

interface ProjectData {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const projectsData: ProjectData[] = [
  {
    id: 'project1',
    title: 'Pespectivas Digitais',
    description: 'Descrição detalhada do Projeto 1. Aqui você pode adicionar todas as informações relevantes sobre o projeto.',
    images: [
      '/public/images/Pespectivas/Pespectiva-sala.jpeg',
      '/public/images/Pespectivas/Pespectiva-quarto.jpeg',
      '/public/images/Pespectivas/Pespectiva-quarto1.jpeg'
    ]
  },
  {
    id: 'project2',
    title: 'Projeto 2',
    description: 'Descrição detalhada do Projeto 2. Aqui você pode adicionar todas as informações relevantes sobre o projeto.',
    images: ['/project2/image1.jpg', '/project2/image2.jpg', '/project2/image3.jpg']
  },
  {
    id: 'project3',
    title: 'Projeto 3',
    description: 'Descrição detalhada do Projeto 3. Aqui você pode adicionar todas as informações relevantes sobre o projeto.',
    images: ['/project3/image1.jpg', '/project3/image2.jpg', '/project3/image3.jpg']
  },
  {
    id: 'project4',
    title: 'Projeto 4',
    description: 'Descrição detalhada do Projeto 4. Aqui você pode adicionar todas as informações relevantes sobre o projeto.',
    images: ['/project4/image1.jpg', '/project4/image2.jpg', '/project4/image3.jpg']
  }
];

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projectId, onClose }) => {
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-primary-dark/95 z-50 overflow-y-auto backdrop-blur-sm">
      <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden
                      border border-primary-light/20">
          {/* Header */}
          <div className="relative bg-secondary px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors bg-transparent hover:bg-transparent p-2"
                aria-label="Fechar galeria"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md 
                           hover:shadow-xl transition-all duration-300 
                           border border-primary-light/20"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-text-dark mb-3">Sobre o Projeto</h3>
              <p className="text-text-light leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
