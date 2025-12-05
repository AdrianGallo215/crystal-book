import { useState, useEffect } from "react";
import {
  MessageSquare,
  MapPin,
  Star,
  ShieldCheck,
  Activity,
  LogOut,
  Lock,
  Clock,
  Phone,
  Menu,
  Stethoscope,
  Smile,
  Sparkles
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { cn } from "@/lib/utils";

// --- COMPONENTES VISUALES ---

// Marquee Infinito para Google Reviews (Single line, slow)
const GoogleReviewMarquee = () => {
  const reviews = [
    { name: "Jorge L.", text: "Cero dolor, increíble.", stars: 5 },
    { name: "María P.", text: "Muy profesionales.", stars: 5 },
    { name: "Carlos A.", text: "La mejor clínica en San Isidro.", stars: 5 },
    { name: "Lucía R.", text: "Me salvaron una muela.", stars: 5 },
    { name: "Pedro S.", text: "Atención A1.", stars: 5 },
  ];

  return (
    <div className="relative flex overflow-hidden w-full py-6">
      <div className="animate-marquee flex gap-4 whitespace-nowrap">
        {[...reviews, ...reviews, ...reviews].map((review, i) => (
          <div key={i} className="w-[260px] flex-shrink-0 bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
            </div>
            <p className="text-slate-600 text-sm italic truncate">"{review.text}"</p>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- VISTA PRINCIPAL ---

const Index = () => {
  const [viewMode, setViewMode] = useState<"patient" | "admin">("patient");
  const [loading, setLoading] = useState(false);
  const [kpi1, setKpi1] = useState(0);

  // Simulación de carga de datos al entrar al admin
  useEffect(() => {
    if (viewMode === "admin") {
      setLoading(true);
      setTimeout(() => setLoading(false), 800);
      // Animación de números
      let start = 0;
      const timer = setInterval(() => {
        start += 1;
        setKpi1(start);
        if (start >= 12) clearInterval(timer);
      }, 50);
      return () => clearInterval(timer);
    }
  }, [viewMode]);

  const toggleView = () => {
    setViewMode(viewMode === "patient" ? "admin" : "patient");
  };

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center font-sans">

      {/* MOBILE CONTAINER WRAPPER */}
      <div className="w-full max-w-[430px] h-screen max-h-[932px] bg-slate-50 shadow-2xl overflow-hidden relative flex flex-col">

        {/* VISTA PACIENTE */}
        <div className={cn(
          "transition-all duration-500 absolute inset-0 overflow-y-auto no-scrollbar bg-slate-50",
          viewMode === "patient" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        )}>

          {/* Header */}
          <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/50 h-14 flex items-center justify-between px-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
              <h1 className="text-sm font-bold text-slate-900 tracking-tight">DENTAL<span className="text-blue-600">SANISIDRO</span></h1>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-2 py-1 rounded-full border border-green-100">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Abierto</span>
            </div>
          </header>

          {/* Contenido Principal */}
          <main className="pt-6 px-5 pb-32">

            {/* Hero Section */}
            <section className="mb-10 relative">
              {/* Static Blue Orb */}
              <div className="absolute top-10 right-0 -z-10 bg-blue-600 opacity-15 w-64 h-64 blur-3xl rounded-full pointer-events-none"></div>

              <div className="mb-6">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-3 border border-blue-100">
                  Clínica Premium
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-[1.1] mb-3">
                  Odontología Moderna <br /> en <span className="text-blue-600">San Isidro.</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[90%]">
                  Tecnología avanzada y trato humano para recuperar tu sonrisa sin dolor ni estrés.
                </p>
              </div>

              {/* Doctor Profile Card (Glass) */}
              <div className="glass-card rounded-2xl p-5 flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt="Dr. Adrián" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Dr. Adrián Gallo</h3>
                  <p className="text-xs text-slate-500 font-medium mb-1">Director Clínico</p>
                  <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">COP 12345</span>
                </div>
                <div className="ml-auto">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Stethoscope size={20} />
                  </div>
                </div>
              </div>

              {/* Before/After Slider */}
              <BeforeAfterSlider />

            </section>

            {/* Services Grid */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="font-bold text-slate-900">Tratamientos</h3>
                <span className="text-xs text-blue-600 font-medium">Ver todos</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Card 1 */}
                <div className="glass-card p-4 rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3 text-blue-600 group-hover:scale-110 transition-transform">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Diseño de Sonrisa</h4>
                  <p className="text-[10px] text-slate-500">Carillas de porcelana y resina.</p>
                </div>

                {/* Card 2 */}
                <div className="glass-card p-4 rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-3 text-emerald-600 group-hover:scale-110 transition-transform">
                    <Activity size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Implantes</h4>
                  <p className="text-[10px] text-slate-500">Recupera tu diente en 24h.</p>
                </div>

                {/* Card 3 */}
                <div className="glass-card p-4 rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-3 text-purple-600 group-hover:scale-110 transition-transform">
                    <Smile size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Ortodoncia</h4>
                  <p className="text-[10px] text-slate-500">Brackets e invisalign.</p>
                </div>

                {/* Card 4 */}
                <div className="glass-card p-4 rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-3 text-orange-600 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Urgencias</h4>
                  <p className="text-[10px] text-slate-500">Atención prioritaria hoy.</p>
                </div>
              </div>
            </section>

            {/* Social Proof */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-2 px-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold text-slate-900">4.9/5 en Google Maps</span>
              </div>
              <GoogleReviewMarquee />
            </section>

            {/* Location */}
            <section className="mb-8 glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 text-slate-500">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Av. Conquistadores 123</h4>
                <p className="text-xs text-slate-500 mb-2">San Isidro, Lima</p>
                <div className="flex items-center gap-4 text-[10px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1"><Clock size={10} /> Lun-Sab: 9am - 8pm</span>
                  <span className="flex items-center gap-1"><Phone size={10} /> (01) 222-3333</span>
                </div>
              </div>
            </section>

          </main>

          {/* Footer CTA */}
          <div className="fixed bottom-6 left-4 right-4 z-50 max-w-[400px] mx-auto">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 shimmer-effect overflow-hidden">
              <MessageSquare size={20} />
              Agendar por WhatsApp
            </button>

            <div className="text-center mt-4 pb-2">
              <button onClick={toggleView} className="text-[10px] text-slate-300 hover:text-slate-400 font-medium flex items-center justify-center gap-1 mx-auto transition-colors">
                <Lock size={8} /> Staff Access
              </button>
            </div>
          </div>
        </div>

        {/* VISTA ADMIN (DOCTOR) */}
        <div className={cn(
          "absolute inset-0 bg-slate-900 text-white transition-all duration-500 flex flex-col overflow-hidden z-50",
          viewMode === "admin" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}>
          {/* Admin Header */}
          <div className="p-6 pt-12 flex justify-between items-center bg-slate-800/50 backdrop-blur-md border-b border-white/5">
            <div>
              <h2 className="text-lg font-bold text-white">Panel de Control</h2>
              <p className="text-xs text-slate-400">Dr. Adrián Gallo</p>
            </div>
            <button onClick={toggleView} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors border border-white/10">
              <LogOut size={16} className="text-slate-400" />
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5">
                <p className="text-slate-400 text-xs mb-1">Pacientes Hoy</p>
                <h3 className="text-3xl font-bold text-blue-400">{kpi1}</h3>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5">
                <p className="text-slate-400 text-xs mb-1">Nuevos Leads</p>
                <h3 className="text-3xl font-bold text-emerald-400">5</h3>
              </div>
            </div>

            {/* Live Feed */}
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Actividad Reciente</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-800/30 p-3 rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold text-xs">
                    {["MG", "JL", "CR", "Ana"][i]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-slate-200">{["María González", "Jorge Luis", "Carlos Ruiz", "Ana Torres"][i]}</h4>
                    <p className="text-xs text-slate-500">Interesado en {["Implante", "Diseño Sonrisa", "Urgencia", "Ortodoncia"][i]}</p>
                  </div>
                  <span className="text-[10px] text-slate-600">{i * 5 + 2} min</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;