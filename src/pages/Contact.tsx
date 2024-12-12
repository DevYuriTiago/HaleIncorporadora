import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import { fadeInUp } from '../utils/animations';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        'sitehale', // Substitua pelo seu Service ID
        'template_g6i19yb', // Substitua pelo seu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'haleincorporadora@gmail.com'
        },
        'Kd4rgkUKoOGr__y5A' // Substitua pela sua Public Key
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
      });
    }
  };

  return (
    <div>
      <PageHeader
        title="Contato"
        description="Entre em contato com nossa equipe"
        image="../public/images/PHG09895.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>

                {status.error && (
                  <div className="text-red-500 text-sm">{status.error}</div>
                )}

                {status.submitted && (
                  <div className="text-green-500 text-sm">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
                >
                  {status.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>haleincorporadora@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+55 81 99910-3679</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Av. Gov. Agamenon Magalhaes, nº 2656, Empresarial Agamenon Magalhães, Sala 1401, 52.020-000, Espinheiro, Recife/PE.</span>
                  </div>
                </div>
              </div>

              <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.536643160528!2d-34.89453072594595!3d-8.046611730366921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19ab1b6b4ddb%3A0x91d374df84511c9a!2sEmpresarial%20Agamenon%20Magalh%C3%A3es!5e0!3m2!1spt-BR!2sbr!4v1733973901857!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
