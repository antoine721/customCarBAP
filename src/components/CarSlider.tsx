import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CarModel } from '../types/car';

interface CarSliderProps {
  cars: CarModel[];
  onSelect: (index: number) => void;
}

export const CarSlider: React.FC<CarSliderProps> = ({ cars, onSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: any) => {
    setIsDragging(false);
    const threshold = 50;
    const delta = info.offset.x;
    
    if (Math.abs(delta) > threshold) {
      const direction = delta > 0 ? -1 : 1;
      const newIndex = Math.max(0, Math.min(currentIndex + direction, cars.length - 1));
      setCurrentIndex(newIndex);
      onSelect(newIndex);
    }
  };

  const cardWidth = 300;
  const gap = 20;

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex items-center gap-5 px-[calc(50%-150px)]"
        drag="x"
        dragConstraints={{ left: -((cars.length - 1) * (cardWidth + gap)), right: 0 }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        animate={{
          x: -(currentIndex * (cardWidth + gap))
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            className={`
              relative flex-shrink-0 w-[300px] rounded-xl overflow-hidden
              transition-all duration-300 transform
              ${currentIndex === index ? 'scale-110 shadow-2xl z-10' : 'scale-90 opacity-50'}
            `}
            animate={{
              scale: currentIndex === index ? 1.1 : 0.9,
              opacity: currentIndex === index ? 1 : 0.5
            }}
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-xl font-bold text-white">{car.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};