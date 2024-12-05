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
          className="splash-screen"
        >
          {/* Grid de fundo */}
          <div className="tech-grid" />

          {/* Círculos de luz */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  background: `rgba(107, 142, 78, ${0.8 - i * 0.02})`,
                  animation: `pulse ${3 + i}s ease-in-out infinite alternate`,
                  left: `${50 - (i * 10)}%`,
                  top: `${50 - (i * 10)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.43, 0.13, 0.23, 0.96] 
            }}
            exit={{ 
              scale: 0.2, 
              opacity: 0,
              x: '50vw',
              y: '-45vh',
              transition: { 
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
            className="flex flex-col items-center relative z-10"
          >
            {/* Logo HALE */}
            <div className="mb-4">
              <motion.img 
                src="/Logos/SímboloOficial.png" 
                alt="Logo da Hale" 
                className="w-auto h-32 md:h-48 lg:h-64"
                animate={{
                  filter: [
                    'drop-shadow(0 0 10px rgba(244, 123, 32, 0.5))',
                    'drop-shadow(0 0 25px rgba(244, 123, 32, 0.7))',
                    'drop-shadow(0 0 10px rgba(244, 123, 32, 0.5))'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Linha animada embaixo do logo */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100px', opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"
              style={{
                boxShadow: '0 0 15px #F47B20, 0 0 30px rgba(244, 123, 32, 0.7)'
              }}
            />

            {/* Partículas tecnológicas */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-secondary rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.3,
                    animation: `float ${2 + Math.random() * 3}s linear infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
