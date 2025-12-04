import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, DollarSign, Calendar, TrendingUp, ArrowLeft, Bell } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import LeadItem from "@/components/dashboard/LeadItem";

const leads = [
  { id: 1, name: "María García", treatment: "Blanqueamiento", source: "WhatsApp", time: "Hace 5 min", status: "new" as const },
  { id: 2, name: "Carlos Pérez", treatment: "Ortodoncia", source: "Google Ads", time: "Hace 15 min", status: "new" as const },
  { id: 3, name: "Ana López", treatment: "Limpieza", source: "Instagram", time: "Hace 1 hora", status: "contacted" as const },
  { id: 4, name: "Roberto Mendoza", treatment: "Implantes", source: "Referido", time: "Hace 2 horas", status: "scheduled" as const },
  { id: 5, name: "Sofía Ruiz", treatment: "Carillas", source: "WhatsApp", time: "Hace 3 horas", status: "contacted" as const },
];

const Dashboard = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Clínica Dental San Isidro</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="relative w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
              <Bell className="w-5 h-5 text-foreground" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-10 h-10 rounded-full gradient-emerald" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <StatCard 
            title="Leads Este Mes"
            value={47}
            icon={Users}
            change="+12%"
            positive
          />
          <StatCard 
            title="Ingresos Potenciales"
            value={28500}
            prefix="S/ "
            icon={DollarSign}
            change="+8%"
            positive
          />
          <StatCard 
            title="Citas Agendadas"
            value={23}
            icon={Calendar}
            change="+5"
            positive
          />
          <StatCard 
            title="Tasa de Conversión"
            value={48.9}
            suffix="%"
            icon={TrendingUp}
            change="-2%"
            positive={false}
            decimals={1}
          />
        </motion.div>

        {/* Live Leads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Leads en Vivo</h2>
              <p className="text-sm text-muted-foreground">Últimas consultas recibidas</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Actualizando en tiempo real</span>
            </div>
          </div>

          <div className="space-y-3">
            {leads.map((lead, index) => (
              <LeadItem key={lead.id} lead={lead} index={index} />
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border text-center">
            <button className="text-sm font-medium text-primary hover:underline">
              Ver todos los leads →
            </button>
          </div>
        </motion.div>

        {/* Revenue Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 glass-card rounded-2xl p-6"
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Proyección de Ingresos</h2>
          <div className="h-64 flex items-center justify-center border border-dashed border-border rounded-xl">
            <p className="text-muted-foreground">Gráfico de ingresos próximamente</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
