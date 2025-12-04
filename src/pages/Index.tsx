import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-background"
    >
      <HeroSection />
      <SocialProof />
      
      {/* Before/After Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4"
          >
            Resultados Reales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Desliza para ver la transformación
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <BeforeAfterSlider />
        </motion.div>
      </section>

      <TreatmentsGrid />
      <Footer />
      <StickyCTA />
    </motion.div>
  );
};

export default Index;
