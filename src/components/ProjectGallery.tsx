import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Home } from 'lucide-react';

interface ProjectGalleryProps {
  projectId: string;
  onClose: () => void;
  project?: {
    id: string;
    title: string;
    image: string;
    location?: string;
    status?: string;
    description?: string;
  };
}

interface ProjectData {
  id: string;
  title: string;
  description: string;
  location?: string;
  images: string[];
  details?: {
    area?: string;
    bedrooms?: string;
    bathrooms?: string;
    features?: string[];
    completion?: string;
  };
}

const projectsData: ProjectData[] = [
  {
    id: 'project1',
    title: 'Residencial Verde Horizonte',
    description: 'Condomínio residencial de médio padrão com unidades de 2 e 3 quartos, área de lazer completa e localização privilegiada. Projetado para oferecer o máximo de conforto e bem-estar, com áreas verdes, espaço gourmet e academia.',
    location: 'Recife, PE',
    images: [
      '/images/Pespectivas/Pespectiva-sala.jpeg',
      '/images/Pespectivas/Pespectiva-quarto.jpeg',
      '/images/Pespectivas/Pespectiva-quarto1.jpeg',
      '/images/WhatsApp Image 2024-12-12 at 09.30.43.jpeg',
      '/images/WhatsApp Image 2024-12-12 at 09.30.44.jpeg'
    ],
    details: {
      area: '62-85m²',
      bedrooms: '2-3',
      bathrooms: '1-2',
      features: ['Piscina', 'Academia', 'Playground', 'Espaço Gourmet', 'Segurança 24h'],
      completion: 'Dezembro/2026'
    }
  },
  {
    id: 'project2',
    title: 'Edifício Aurora',
    description: 'Apartamentos com vista para o mar, acabamento de alto padrão e sustentabilidade integrada em cada detalhe. Um projeto que combina elegância, funcionalidade e respeito ao meio ambiente.',
    location: 'Olinda, PE',
    images: [
      '/images/WhatsApp Image 2024-12-12 at 09.30.44 (1).jpeg',
      '/images/WhatsApp Image 2024-12-12 at 09.30.44 (2).jpeg',
      '/images/WhatsApp Image 2024-12-12 at 09.30.45.jpeg',
      '/images/Pespectivas/Pespectiva-quarto.jpeg'
    ],
    details: {
      area: '75-110m²',
      bedrooms: '2-4',
      bathrooms: '2-3',
      features: ['Vista para o mar', 'Energia solar', 'Reúso de água', 'Cobertura verde'],
      completion: 'Julho/2025'
    }
  },
  {
    id: 'project3',
    title: 'Condomínio Eco Ville',
    description: 'Casas sustentáveis com sistema de captação de água da chuva, energia solar e áreas verdes preservadas. Um projeto inovador que proporciona qualidade de vida para seus moradores.',
    location: 'Jaboatão dos Guararapes, PE',
    images: [
      '/images/WhatsApp Image 2024-12-12 at 09.30.45 (1).jpeg',
      '/images/WhatsApp Image 2024-12-12 at 09.30.45 (2).jpeg',
      '/images/WhatsApp Image 2024-12-12 at 09.30.45 (3).jpeg',
      '/images/Pespectivas/Pespectiva-quarto1.jpeg'
    ],
    details: {
      area: '120-180m²',
      bedrooms: '3-4',
      bathrooms: '2-3',
      features: ['Energia solar', 'Captação de água', 'Jardins privativos', 'Materiais sustentáveis'],
      completion: 'Entregue'
    }
  },
  {
    id: 'project4',
    title: 'Novo Empreendimento',
    description: 'Futuro lançamento com conceito inovador, combinando tecnologia, conforto e respeito ao meio ambiente. Mais informações em breve.',
    location: 'Caruaru, PE',
    images: [
      '/images/WhatsApp Image 2024-12-12 at 09.30.46.jpeg',
      '/images/WhatsApp Image 2024-12-12 at 09.30.46 (1).jpeg',
      '/images/WhatsApp Image 2024-12-12 at 09.30.46 (2).jpeg'
    ],
    details: {
      completion: 'Previsão 2027'
    }
  }
];

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projectId, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectData = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!projectData) return null;
  
  const { images, title, description, location, details } = projectData;
  
  const navigateImage = (direction: number) => {
    setCurrentImageIndex(prevIndex => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-primary-dark/95 z-50 overflow-y-auto backdrop-blur-md"
      >
        <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="flex justify-end p-4">
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-secondary transition-colors focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="md:flex">
              {/* Galeria de imagens */}
              <div className="md:w-7/12 relative">
                <div className="aspect-[4/3] relative">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={images[currentImageIndex]} 
                      alt={`${title} - Imagem ${currentImageIndex + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {/* Controles de navegação */}
                  {images.length > 1 && (
                    <>
                      <button 
                        onClick={() => navigateImage(-1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 
                                 shadow-lg transition-all hover:scale-110 focus:outline-none"
                      >
                        <ChevronLeft className="h-6 w-6 text-primary-dark" />
                      </button>
                      <button 
                        onClick={() => navigateImage(1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 
                                 shadow-lg transition-all hover:scale-110 focus:outline-none"
                      >
                        <ChevronRight className="h-6 w-6 text-primary-dark" />
                      </button>
                    </>
                  )}
                  
                  {/* Indicador de imagens */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {images.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`w-2 h-2 rounded-full ${
                            i === currentImageIndex 
                              ? 'bg-white scale-125' 
                              : 'bg-white/50 hover:bg-white/80'
                          } transition-all`}
                          aria-label={`Ver imagem ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Miniaturas */}
                {images.length > 1 && (
                  <div className="flex gap-2 p-4 overflow-x-auto scrollbar-hide">
                    {images.map((img, i) => (
                      <button 
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                          i === currentImageIndex ? 'border-primary scale-105' : 'border-transparent hover:border-primary-light'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Detalhes do projeto */}
              <div className="md:w-5/12 p-6 bg-gray-50">
                <h2 className="text-2xl font-bold text-primary-dark mb-2">{title}</h2>
                
                {location && (
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{location}</span>
                  </div>
                )}
                
                <p className="text-gray-700 mb-6">{description}</p>
                
                {details && (
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Detalhes do Empreendimento</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {details.area && (
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-2 rounded-md mr-3">
                            <Home className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Área</p>
                            <p className="font-medium">{details.area}</p>
                          </div>
                        </div>
                      )}
                      
                      {details.bedrooms && (
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-2 rounded-md mr-3">
                            <Home className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Quartos</p>
                            <p className="font-medium">{details.bedrooms}</p>
                          </div>
                        </div>
                      )}
                      
                      {details.bathrooms && (
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-2 rounded-md mr-3">
                            <Home className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Banheiros</p>
                            <p className="font-medium">{details.bathrooms}</p>
                          </div>
                        </div>
                      )}
                      
                      {details.completion && (
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-2 rounded-md mr-3">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Conclusão</p>
                            <p className="font-medium">{details.completion}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {details.features && details.features.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Características</h4>
                        <div className="flex flex-wrap gap-2">
                          {details.features.map((feature, i) => (
                            <span 
                              key={i} 
                              className="bg-primary-light/10 text-primary-dark text-xs px-3 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="mt-8">
                  <button 
                    className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg transition-colors"
                  >
                    Entre em contato para mais informações
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectGallery;
