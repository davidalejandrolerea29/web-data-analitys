import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { 
  LineChart, 
  BarChart3, 
  Database, 
  Brain, 
  Mail, 
  Phone,
  MessageSquare,
  ChevronRight,
  Users,
  Settings,
  Zap,
  Briefcase,
  Compass,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
const services = [
  {
    icon: <Compass className="w-10 h-10 text-blue-600" />,
    title: "Diagnóstico y Estrategia Digital",
    items: [
      { title: "Assessment Digital", desc: "Evaluación del nivel de madurez digital de la empresa." },
      { title: "Roadmap de Transformación Digital", desc: "Diseño de una hoja de ruta con prioridades, objetivos y soluciones." },
      { title: "Benchmarking", desc: "Análisis de la competencia y tendencias del sector para definir estrategias innovadoras." }
    ]
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
    title: "Business Intelligence y Analítica",
    items: [
      { title: "Implementación de plataformas de BI", desc: "Optimización de sistemas para extraer valor de los datos." },
      { title: "Cuadros de mando avanzados", desc: "Reportes visuales para facilitar la toma de decisiones." },
      { title: "Integración de datos", desc: "Consolidación desde múltiples fuentes en tiempo real." }
    ]
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    title: "Automatización de Procesos",
    items: [
      { title: "Automatización con RPA", desc: "Eliminamos tareas repetitivas con robots digitales." },
      { title: "Optimización de flujos de trabajo", desc: "Mejoramos la eficiencia con herramientas digitales." },
      { title: "Gobierno de datos", desc: "Garantizamos calidad, gestión y seguridad de la información." }
    ]
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-600" />,
    title: "Innovación y Digitalización",
    items: [
      { title: "Consultoría en modelos digitales", desc: "Adaptamos negocios a la era digital." },
      { title: "Implementación de CRM y ERP", desc: "Digitalizamos procesos con herramientas eficientes." },
      { title: "IA y Machine Learning", desc: "Usamos datos para predicción y optimización." }
    ]
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Capacitación y Change Management",
    items: [
      { title: "Formación en cultura digital", desc: "Capacitamos equipos para la transformación digital." },
      { title: "Gestión del cambio", desc: "Estrategias para una adopción efectiva de tecnología." },
      { title: "Coaching para líderes", desc: "Guiamos a directivos en el proceso de cambio." }
    ]
  }
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@digitalconsulting.com?subject=Nueva Solicitud de Contacto&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMensaje: ${formData.message}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Botón flotante de WhatsApp */}
      <motion.a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>

      {/* Sección Hero */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
           <img src="https://fotoporfolio.s3.us-east-1.amazonaws.com/DDD_1__1_-removebg-preview.png" alt="DataDriven Decisions" className="w-12 h-12" />
           <span className="text-xl font-bold">DataDriven Decisions</span>

          </motion.div>
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#about" className="hover:text-blue-200 transition-colors">Nosotros</a>
            <a href="#services" className="hover:text-blue-200 transition-colors">Servicios</a>
           {/* <a href="#projects" className="hover:text-blue-200 transition-colors">Proyectos</a> */}
            <a href="#contact" className="hover:text-blue-200 transition-colors">Contacto</a>
          </motion.div>
        </nav>
        
        <motion.div 
          className="container mx-auto px-6 py-24 relative z-10"
          style={{ opacity, scale }}
        >
          <motion.div 
            className="max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Soluciones para
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
               La transformación Digital de tu empresa
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">En <b>DataDriven Decisions</b>, no creemos en la intuición sin fundamento. Creemos en el poder de los datos para transformar negocios, desafiar lo establecido y tomar decisiones con impacto real.</p>
            <motion.a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar
              <ChevronRight className="ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </header>

      {/* Sección Nosotros */}
      <section id="about" className="py-20">
  <div className="container mx-auto px-6">
    <motion.h2
      className="text-3xl font-bold text-center mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Quiénes Somos
    </motion.h2>

    <motion.p
      className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Somos una consultora IT especializada en <b>Transformación Digital y Business Intelligence</b>. 
      Ayudamos a empresas a convertir el caos de la información en estrategias accionables, 
      optimizando procesos y maximizando el valor de cada dato.
      <br />
      Nuestro enfoque es disruptivo: <b>rompemos paradigmas, eliminamos la incertidumbre y 
      ponemos a los datos en el centro de la toma de decisiones</b>.
    </motion.p>

    <motion.div
      className="grid md:grid-cols-3 gap-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        {
          icon: <Users className="w-8 h-8 text-blue-600" />,
          title: "Equipo Experto",
          description: "Nuestro equipo no solo domina BI y transformación digital, sino que sabe cómo convertir datos en decisiones que impactan.",
        },
        {
          icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
          title: "Soluciones Innovadoras",
          description: "Diseñamos estrategias y herramientas adaptadas a la realidad y necesidades específicas de cada negocio.",
        },
        {
          icon: <Brain className="w-8 h-8 text-blue-600" />,
          title: "Pensamiento Estratégico",
          description: "Rompemos con lo convencional. Transformamos datos en decisiones poderosas que redefinen el juego.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="text-center"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform hover:rotate-12">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Sección Servicios */}
      <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nuestros Servicios
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <ul className="list-none space-y-2 text-gray-700">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-blue-500">•</span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

     {/* 
  Sección Proyectos - Casos de Éxito 
  Comentado temporalmente 
*/}

{/* 
<section id="projects" className="py-20">
  <div className="container mx-auto px-6">
    <motion.h2 
      className="text-3xl font-bold text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Casos de Éxito
    </motion.h2>
    <motion.div 
      className="grid md:grid-cols-2 gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Análisis para Servicios Financieros",
          description: "Implementación de solución BI integral resultando en 40% de mejora en la eficiencia de toma de decisiones."
        },
        {
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Transformación Digital Retail",
          description: "Transformación digital completa que logró un aumento del 65% en el engagement de clientes online."
        }
      ].map((project, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden">
            <motion.img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section> 
*/}


      {/* Sección Contacto */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contáctanos
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@digitalconsulting.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </motion.div>

            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={fadeInUp}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></motion.textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enviar Mensaje
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <motion.div 
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center space-x-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <LineChart className="w-6 h-6" />
            <span className="text-lg font-bold">DataDriven Decisions</span>
          </motion.div>
          <p className="text-gray-400">© 2025 DataDriven Decisions. Todos los derechos reservados.</p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;