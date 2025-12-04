import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import CountUp from "./CountUp";

interface StatCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: LucideIcon;
  change?: string;
  positive?: boolean;
  decimals?: number;
}

const StatCard = ({ 
  title, 
  value, 
  prefix = "", 
  suffix = "", 
  icon: Icon, 
  change,
  positive = true,
  decimals = 0
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        {change && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            positive 
              ? "bg-primary/20 text-primary" 
              : "bg-destructive/20 text-destructive"
          }`}>
            {change}
          </span>
        )}
      </div>
      
      <div className="text-3xl font-bold text-foreground mb-1">
        <CountUp end={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      
      <p className="text-sm text-muted-foreground">{title}</p>
    </motion.div>
  );
};

export default StatCard;
