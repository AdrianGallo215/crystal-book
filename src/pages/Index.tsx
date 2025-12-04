import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
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
      <TreatmentsGrid />
      <Footer />
      <StickyCTA />
    </motion.div>
  );
};

export default Index;
