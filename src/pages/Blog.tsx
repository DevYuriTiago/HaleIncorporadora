import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import { fadeInUp, staggerChildren } from '../utils/animations';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'O Futuro da Construção Sustentável',
    excerpt: 'Descubra as últimas tendências em construção sustentável e como elas estão moldando o futuro do setor imobiliário.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    author: 'Ana Silva',
    date: '15 Mar 2024',
    category: 'Sustentabilidade'
  },
  {
    id: 2,
    title: 'Inovações em Smart Homes',
    excerpt: 'Como a tecnologia está transformando nossas casas e melhorando nossa qualidade de vida.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    author: 'Carlos Santos',
    date: '10 Mar 2024',
    category: 'Tecnologia'
  },
  {
    id: 3,
    title: 'Tendências do Mercado Imobiliário 2024',
    excerpt: 'Análise das principais tendências que estão moldando o mercado imobiliário brasileiro.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    author: 'Roberto Oliveira',
    date: '5 Mar 2024',
    category: 'Mercado'
  }
];

const Blog = () => {
  return (
    <div>
      <PageHeader
        title="Blog"
        description="Notícias e insights sobre o mercado imobiliário"
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren().container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={staggerChildren().item}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 text-primary hover:text-primary-dark flex items-center transition-colors">
                    Ler mais
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;