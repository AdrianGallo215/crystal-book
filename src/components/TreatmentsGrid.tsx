import { motion } from "framer-motion";
import { Sparkles, Shield, Smile, Scan, Syringe, Crown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Treatment {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

const treatments: Treatment[] = [
  {
    icon: Sparkles,
    title: "Blanqueamiento",
    description: "Resultados visibles desde la primera sesión con tecnología LED",
    featured: true,
  },
  {
    icon: Shield,
    title: "Limpieza Profunda",
    description: "Eliminación de sarro y placa con ultrasonido",
  },
  {
    icon: Smile,
    title: "Ortodoncia Invisible",
    description: "Alineadores transparentes sin brackets metálicos",
  },
  {
    icon: Scan,
    title: "Diagnóstico Digital",
    description: "Escáner 3D para planes de tratamiento precisos",
  },
  {
    icon: Syringe,
    title: "Implantes",
    description: "Implantes de titanio con garantía de por vida",
  },
  {
    icon: Crown,
    title: "Carillas Dentales",
    description: "Porcelana premium para una sonrisa perfecta",
  },
];

const TreatmentCard = ({ treatment, index }: { treatment: Treatment; index: number }) => {
  const IconComponent = treatment.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-glass-lg ${
        treatment.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
        treatment.featured 
          ? "gradient-emerald" 
          : "bg-secondary group-hover:bg-primary/10"
      }`}>
        <IconComponent className={`w-6 h-6 ${
          treatment.featured 
            ? "text-primary-foreground" 
            : "text-foreground group-hover:text-primary"
        }`} />
      </div>
      
      <h3 className={`font-semibold tracking-tight text-foreground mb-2 ${
        treatment.featured ? "text-2xl" : "text-lg"
      }`}>
        {treatment.title}
      </h3>
      
      <p className={`text-muted-foreground ${
        treatment.featured ? "text-base" : "text-sm"
      }`}>
        {treatment.description}
      </p>
      
      {treatment.featured && (
        <div className="mt-6 pt-4 border-t border-border">
          <span className="text-sm font-medium text-primary">
            Más popular →
          </span>
        </div>
      )}
    </motion.div>
  );
};

const TreatmentsGrid = () => {
  return (
    <section id="treatments" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-tight uppercase mb-2 block">
            Tratamientos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-4">
            Servicios de excelencia
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tecnología de punta combinada con el mejor equipo humano
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={treatment.title} treatment={treatment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsGrid;
