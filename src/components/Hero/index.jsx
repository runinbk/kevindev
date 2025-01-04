import React from 'react';
import * as Icons from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="grid place-items-center min-h-screen"
    >
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="grid place-items-center gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            ¡Hola! Soy{' '}
            <span className="text-secondary">Kevin Gomez</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-dark/80 text-center max-w-2xl">
            Desarrollador Web Full Stack con más de 5 años de experiencia
            creando soluciones web innovadoras y escalables.
          </p>

          <div className="flex justify-center items-center gap-8 py-6">
            <a
              href="https://github.com/runinbk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark/80 hover:text-secondary transition-colors"
            >
              <Icons.Github className="h-7 w-7" />
            </a>
            <a
              href="https://linkedin.com/in/kevinbgr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark/80 hover:text-secondary transition-colors"
            >
              <Icons.Linkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:brayankgr@email.com"
              className="p-2 text-dark/80 hover:text-secondary transition-colors"
            >
              <Icons.Mail className="h-7 w-7" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 w-full max-w-lg">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium text-center"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-lg font-medium text-center"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;