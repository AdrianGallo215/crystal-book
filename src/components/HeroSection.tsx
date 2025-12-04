import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, CheckCircle2, User } from "lucide-react";

const FloatingAppointmentCard = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <motion.div
        className="preserve-3d glass-card rounded-2xl p-6 w-[320px] md:w-[380px] shadow-glass-lg"
        style={{
          rotateX,
          rotateY,
          transition: "transform 0.1s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground tracking-tight uppercase">
            Confirmación de Cita
          </span>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-emerald flex items-center justify-center">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Paciente</p>
              <p className="text-xs text-muted-foreground">Tú</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Calendar className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Dr. Especialista</p>
              <p className="text-xs text-muted-foreground">Mañana, 10:00 AM</p>
            </div>
          </div>
          
          <div className="pt-3 border-t border-border">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Pre-aprobado</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 dot-pattern opacity-30"
        style={{
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-light/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                San Isidro, Lima
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Odontología.
              <br />
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-light">
                Sin Miedo.
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              La experiencia clínica que mereces. Tecnología de vanguardia, trato humano y resultados extraordinarios.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://wa.me/51999999999"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-emerald text-primary-foreground font-medium shadow-emerald hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Reservar Consulta
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all duration-300"
              >
                Ver Tratamientos
              </a>
            </motion.div>
          </div>
          
          {/* Floating Card */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <FloatingAppointmentCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
