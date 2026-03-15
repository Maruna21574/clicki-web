import React, { useEffect, useRef, useState } from "react";

interface GallerySliderProps {
  images: string[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Swipe/drag support
  const startX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) setCurrent((current + 1) % images.length);
      else setCurrent((current - 1 + images.length) % images.length);
    }
    startX.current = null;
  };
  // Mouse drag
  const mouseStartX = useRef<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseStartX.current = e.clientX;
    setDragging(true);
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging || mouseStartX.current === null) return;
    const delta = e.clientX - mouseStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) setCurrent((current + 1) % images.length);
      else setCurrent((current - 1 + images.length) % images.length);
    }
    setDragging(false);
    mouseStartX.current = null;
  };
  const handleMouseLeave = () => {
    setDragging(false);
    mouseStartX.current = null;
  };

  useEffect(() => {
    if (images.length <= 1) return;
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
    // eslint-disable-next-line
  }, [current, images]);

  if (!images.length) return null;

  return (
    <div
      className="relative w-full aspect-[9/10] rounded-[1rem] overflow-hidden border border-white/10 shadow-lg select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: dragging ? 'grabbing' : 'grab' }}
    >
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Screenshot ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          style={{ borderRadius: "1rem" }}
        />
      ))}
      {/* Šípky dole vpravo - elegantný dizajn, bez guličiek */}
      {images.length > 1 && (
        <div className="absolute bottom-6 right-8 flex items-center gap-5 z-30">
          <button
            className="bg-white/90 text-[#F43182] hover:bg-[#F43182] hover:text-white rounded-full p-2 shadow-xl transition-colors border border-[#F43182] text-xl font-bold focus:outline-none focus:ring-2 focus:ring-[#F43182]"
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            aria-label="Predchádzajúci obrázok"
            style={{ boxShadow: '0 2px 12px 0 #F4318233' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 16L8 10L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            className="bg-white/90 text-[#F43182] hover:bg-[#F43182] hover:text-white rounded-full p-2 shadow-xl transition-colors border border-[#F43182] text-xl font-bold focus:outline-none focus:ring-2 focus:ring-[#F43182]"
            onClick={() => setCurrent((current + 1) % images.length)}
            aria-label="Ďalší obrázok"
            style={{ boxShadow: '0 2px 12px 0 #F4318233' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4L12 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      )}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 ${idx === current ? "bg-[#F43182] border-[#F43182]" : "bg-white/30 border-white/30"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Zobraziť obrázok ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
