import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, image }) => {
  return (
    <div className="relative h-[40vh] min-h-[400px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative container mx-auto px-4">
        <motion.div
          {...fadeInUp}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-200">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;