import React from 'react';
import * as Icons from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="flex items-center justify-center min-h-screen"
    >
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
          ¡Hola! Soy{' '}
          <span className="text-secondary">Tu Nombre</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-dark/80 mb-12">
          Desarrollador Web Full Stack con más de 3 años de experiencia
          creando soluciones web innovadoras y escalables.
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-dark/80 hover:text-secondary transition-colors"
          >
            <Icons.Github className="h-7 w-7" />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-dark/80 hover:text-secondary transition-colors"
          >
            <Icons.Linkedin className="h-7 w-7" />
          </a>
          <a
            href="mailto:tu@email.com"
            className="p-2 text-dark/80 hover:text-secondary transition-colors"
          >
            <Icons.Mail className="h-7 w-7" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium min-w-[200px]"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-lg font-medium min-w-[200px]"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;