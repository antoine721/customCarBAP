import React from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  currentIndex: number;
  onSwipe: (direction: number) => void;
}

export function Carousel<T>({ items, renderItem, currentIndex, onSwipe }: CarouselProps<T>) {
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      onSwipe(info.offset.x > 0 ? -1 : 1);
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex items-center justify-center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderItem(items[currentIndex])}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}