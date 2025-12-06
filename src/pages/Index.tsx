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
  Stethoscope,
  Smile,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { cn } from "@/lib/utils";

// --- COMPONENTES VISUALES ---

// Marquee Infinito para Google Reviews (Slower, cleaner)
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
      <div className="animate-marquee flex gap-4 whitespace-nowrap" style={{ animationDuration: '40s' }}>
        {[...reviews, ...reviews, ...reviews].map((review, i) => (
          <div key={i} className="w-[260px] flex-shrink-0 bg-white border border-slate-100 p-4 rounded-lg shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
            </div>
            <p className="text-slate-700 text-sm italic truncate font-serif">"{review.text}"</p>
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
          <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 h-14 flex items-center justify-between px-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-serif font-bold">D</div>
              <h1 className="text-sm font-bold text-slate-900 tracking-tight font-sans">DENTAL<span className="text-slate-500 font-normal">SANISIDRO</span></h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">Abierto</span>
            </div>
          </header>

          {/* Contenido Principal */}
          <main className="pb-32">

            {/* Hero Section (Editorial Style) */}
            <section className="relative h-[480px] w-full overflow-hidden flex flex-col justify-end pb-10 px-6">
              {/* Background Image */}
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                alt="Clinical Environment"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <span className="inline-block mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Clínica Dental en San Isidro
                </span>
                <h2 className="text-4xl font-serif font-medium leading-tight mb-4">
                  Transformamos <br /> sonrisas.
                </h2>
                <p className="text-slate-200 text-sm leading-relaxed mb-6 max-w-[90%] font-light">
                  Tecnología avanzada y trato humano para una experiencia odontológica sin estrés.
                </p>

                <div className="flex flex-col gap-3">
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3.5 rounded-lg shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <MessageSquare size={18} />
                    Agendar por WhatsApp
                  </button>
                  <button className="w-full bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium py-3.5 rounded-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    Ver tratamientos
                  </button>
                </div>
              </div>
            </section>

            {/* Doctor Section (Dedicated) */}
            <section className="px-5 py-8 bg-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif text-slate-900">Tu dentista</h3>
                <span className="text-xs text-slate-400 font-medium">Director Clínico</span>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-24 h-32 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300" alt="Dr. Adrián" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 py-1">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Dr. Adrián Gallo</h4>
                  <p className="text-sm text-slate-500 mb-3 leading-relaxed">Especialista en rehabilitación oral y estética dental.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100">COP 12345</span>
                    <span className="text-[10px] bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100">15 Años Exp.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Before/After Section */}
            <section className="px-5 py-8 bg-slate-50 border-t border-slate-100">
              <div className="mb-2">
                <h3 className="text-xl font-serif text-slate-900">Resultados reales</h3>
                <p className="text-sm text-slate-500">Devolvemos la confianza a nuestros pacientes.</p>
              </div>
              <BeforeAfterSlider />
            </section>

            {/* Services Grid */}
            <section className="px-5 py-8 bg-white border-t border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif text-slate-900">Tratamientos</h3>
                <button className="text-xs text-slate-900 font-bold flex items-center gap-1">
                  Ver todos <ArrowRight size={12} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <Sparkles size={24} className="text-slate-900 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Diseño de Sonrisa</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">Carillas y estética.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <Activity size={24} className="text-slate-900 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Implantes</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">Carga inmediata.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <Smile size={24} className="text-slate-900 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Ortodoncia</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">Invisible y brackets.</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <ShieldCheck size={24} className="text-slate-900 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Urgencias</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">Atención hoy mismo.</p>
                </div>
              </div>
            </section>

            {/* Social Proof */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
              <div className="px-5 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-slate-900">4.9/5 en Google Maps</span>
                </div>
                <p className="text-xs text-slate-500">Lo que dicen nuestros pacientes.</p>
              </div>
              <GoogleReviewMarquee />
            </section>

            {/* Location */}
            <section className="px-5 py-8 bg-white border-t border-slate-100">
              <div className="bg-slate-50 p-5 rounded-lg flex items-start gap-4 border border-slate-100">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-slate-900 border border-slate-100 shadow-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Visítanos</h4>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">Av. Conquistadores 123, San Isidro.<br />Lima, Perú.</p>
                  <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
                    <span className="flex items-center gap-1"><Clock size={10} /> Lun-Sab: 9am - 8pm</span>
                  </div>
                </div>
              </div>
            </section>

          </main>

          {/* Footer CTA (Sticky) */}
          <div className="fixed bottom-6 left-4 right-4 z-50 max-w-[400px] mx-auto">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shimmer-effect overflow-hidden">
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
              <h2 className="text-lg font-serif font-medium text-white">Resumen de Consultas</h2>
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
              <div className="bg-slate-800/50 p-4 rounded-lg border border-white/5">
                <p className="text-slate-400 text-xs mb-1">Consultas Hoy</p>
                <h3 className="text-3xl font-serif text-white">{kpi1}</h3>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-white/5">
                <p className="text-slate-400 text-xs mb-1">Nuevos Pacientes</p>
                <h3 className="text-3xl font-serif text-emerald-400">5</h3>
              </div>
            </div>

            {/* Live Feed */}
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Actividad Reciente</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-800/30 p-3 rounded-lg border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-serif text-xs">
                    {["MG", "JL", "CR", "Ana"][i]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-slate-200">{["María González", "Jorge Luis", "Carlos Ruiz", "Ana Torres"][i]}</h4>
                    <p className="text-xs text-slate-500">Consulta por {["Implante", "Diseño Sonrisa", "Urgencia", "Ortodoncia"][i]}</p>
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