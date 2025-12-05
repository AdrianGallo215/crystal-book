import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

    let position = ((clientX - containerRect.left) / containerRect.width) * 100;
    position = Math.max(0, Math.min(100, position));

    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent | TouchEvent) => handleMove(e);
    const handleGlobalUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMove);
      document.addEventListener('mouseup', handleGlobalUp);
      document.addEventListener('touchmove', handleGlobalMove, { passive: false });
      document.addEventListener('touchend', handleGlobalUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMove);
      document.removeEventListener('mouseup', handleGlobalUp);
      document.removeEventListener('touchmove', handleGlobalMove);
      document.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full my-8 select-none" ref={containerRef}>
      <div className="flex items-center gap-2 mb-4 px-1">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resultados Reales</span>
      </div>

      <div
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl border border-white/20 group touch-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* IMAGEN 'DESPUÉS' (Fondo) */}
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
          alt="After"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
          DESPUÉS
        </div>

        {/* IMAGEN 'ANTES' (Recortada) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661775756810-82dbd209dc95?q=80&w=800&auto=format&fit=crop"
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
            ANTES
          </div>
        </div>

        {/* EL MANEJADOR (Slider Handle) */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform active:scale-95">
            <div className="flex text-slate-900">
              <ChevronLeft size={14} className="-mr-1" />
              <ChevronRight size={14} className="-ml-1" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-slate-400 mt-3 font-medium">Desliza para ver la transformación</p>
    </div>
  );
};