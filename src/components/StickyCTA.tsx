import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const StickyCTA = () => {
  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <a
        href="https://wa.me/51999999999?text=Hola,%20quiero%20reservar%20una%20cita"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-6 py-4 rounded-full gradient-emerald shadow-emerald hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 text-primary-foreground" />
        <span className="text-primary-foreground font-semibold tracking-tight">
          Reservar Cita por WhatsApp
        </span>
        <motion.span
          className="w-2 h-2 rounded-full bg-primary-foreground/80"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </a>
    </motion.div>
  );
};

export default StickyCTA;
