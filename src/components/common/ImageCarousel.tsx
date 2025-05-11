import React, { useRef, useState, useEffect, useCallback } from 'react';

interface ImageCarouselProps {
  images: string[];
  autoPlayInterval?: number; // ms
  className?: string;
  imgClassName?: string;
  dotClassName?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlayInterval = 3000,
  className = '',
  imgClassName = '',
  dotClassName = '',
}) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const total = images.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const resetAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % total);
        setFade(true);
      }, 200);
    }, autoPlayInterval);
  }, [autoPlayInterval, total]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetAutoPlay]);

  // 手势滑动
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const dx = touchEndX.current - touchStartX.current;
      if (Math.abs(dx) > 50) {
        setFade(false);
        setTimeout(() => {
          if (dx > 0) {
            setCurrent((prev) => {
              resetAutoPlay();
              return (prev - 1 + total) % total;
            });
          } else {
            setCurrent((prev) => {
              resetAutoPlay();
              return (prev + 1) % total;
            });
          }
          setFade(true);
        }, 200);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className={`flex items-center justify-center relative min-h-[240px] select-none ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <img
        src={images[current]}
        alt={`carousel-img-${current + 1}`}
        className={`rounded-lg shadow-lg max-h-[340px] w-auto object-cover transition-all duration-500 ${fade ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
        style={{ minWidth: 240 }}
        draggable={false}
      />
      {/* 小圆点指示器 */}
      {total > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrent(i);
                  setFade(true);
                  resetAutoPlay();
                }, 200);
              }}
              className={`inline-block w-2 h-2 rounded-full cursor-pointer ${i === current ? 'bg-[#23231f]' : 'bg-gray-300'} ${dotClassName}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
