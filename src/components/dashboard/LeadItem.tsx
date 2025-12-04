import { motion } from "framer-motion";
import { Clock, Phone, Mail } from "lucide-react";

interface Lead {
  id: number;
  name: string;
  treatment: string;
  source: string;
  time: string;
  status: "new" | "contacted" | "scheduled";
}

const statusColors = {
  new: "bg-amber-500/20 text-amber-400",
  contacted: "bg-blue-500/20 text-blue-400",
  scheduled: "bg-primary/20 text-primary",
};

const statusLabels = {
  new: "Nuevo",
  contacted: "Contactado",
  scheduled: "Agendado",
};

const LeadItem = ({ lead, index }: { lead: Lead; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center justify-between p-4 rounded-xl bg-card/50 hover:bg-card transition-colors cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full gradient-emerald flex items-center justify-center text-primary-foreground font-semibold">
          {lead.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-foreground">{lead.name}</p>
          <p className="text-sm text-muted-foreground">{lead.treatment}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-right hidden md:block">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {lead.time}
          </div>
          <p className="text-xs text-muted-foreground">{lead.source}</p>
        </div>
        
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[lead.status]}`}>
          {statusLabels[lead.status]}
        </span>
        
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Phone className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Mail className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LeadItem;
