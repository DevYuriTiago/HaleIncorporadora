import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 1000);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark"
        >
          {/* Grade de fundo */}
          <div className="absolute inset-0 overflow-hidden" 
               style={{
                 backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
                 backgroundSize: "20px 20px"
               }}
          />

          {/* Círculos de luz */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full blur-3xl"
                initial={{ 
                  scale: 0.8,
                  opacity: 0.5
                }}
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + i,
                  ease: "easeInOut"
                }}
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  background: i === 1 ? 'rgba(244, 123, 32, 0.5)' : 'rgba(107, 142, 78, 0.6)',
                  left: `${50 + (i % 2 === 0 ? -15 : 15)}%`,
                  top: `${50 + (i % 2 === 0 ? 10 : -10)}%`,
                  transform: 'translate(-50%, -50%)',
                  filter: 'blur(50px)'
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.43, 0.13, 0.23, 0.96] 
              }}
              className="mb-8"
            >
              <img 
                src="/Logos/LogoBranco.png" 
                alt="HALE" 
                className="h-32 w-auto"
              />
            </motion.div>
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white text-xl font-light tracking-wider"
            >
              Construindo sonhos sustentáveis
            </motion.p>
            
            {/* Loading dots */}
            <div className="mt-8 flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="h-2 w-2 rounded-full bg-white"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
