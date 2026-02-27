export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-muted text-sm tracking-widest uppercase">
          © 2024 KEVIN GÓMEZ — TODOS LOS DERECHOS RESERVADOS
        </div>
        <div className="text-muted text-xs tracking-widest uppercase">
          HECHO CON <span className="text-accent font-bold mx-1">NEXT.JS</span> + <span className="text-accent font-bold mx-1">GSAP</span>
        </div>
      </div>
    </footer>
  );
};
