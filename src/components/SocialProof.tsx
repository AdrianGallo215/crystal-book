import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { text: "Excelente atención", author: "María G." },
  { text: "Cero dolor, increíble", author: "Carlos P." },
  { text: "Muy puntuales siempre", author: "Ana L." },
  { text: "Instalaciones A1", author: "Roberto M." },
  { text: "Los mejores de Lima", author: "Sofía R." },
  { text: "Profesionales de verdad", author: "Diego H." },
  { text: "Mi dentista de confianza", author: "Laura T." },
  { text: "Recomendado 100%", author: "Juan F." },
];

const GoogleLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const ReviewCard = ({ text, author }: { text: string; author: string }) => (
  <div className="glass-card rounded-2xl p-5 min-w-[280px] mx-3 hover:scale-[1.02] transition-transform duration-300">
    <div className="flex items-center gap-2 mb-3">
      <GoogleLogo />
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
    </div>
    <p className="text-foreground font-medium mb-2">"{text}"</p>
    <p className="text-sm text-muted-foreground">{author}</p>
  </div>
);

const SocialProof = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-primary tracking-tight uppercase mb-2 block">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-4">
            La confianza de tus vecinos
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            +500 pacientes satisfechos en San Isidro confían en nosotros
          </p>
        </motion.div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-4">
        <div className="flex animate-marquee">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`row1-${index}`} text={review.text} author={review.author} />
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="flex animate-marquee-reverse">
          {[...reviews.reverse(), ...reviews].map((review, index) => (
            <ReviewCard key={`row2-${index}`} text={review.text} author={review.author} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
