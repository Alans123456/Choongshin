"use client";

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const posters = [
  {
    id: 1,
    title: "poster1",
    imageUrl: "/poster1.png",
  },
  {
    id: 2,
    title: "poster2",
    imageUrl: "/poster2.png",
  },
  {
    id: 3,
    title: "poster3",
    imageUrl: "/poster3.png",
  }
];

export default function PosterOffers() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = sessionStorage.getItem('hasSeenPosterOffer');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isOpen || isPaused || posters.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posters.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, isPaused]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPosterOffer', 'true');
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posters.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  if (!isOpen || posters.length === 0) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100 transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-101 flex items-center justify-center p-4">
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Poster Container */}
          <div className="relative aspect-16/10 md:aspect-video w-full overflow-hidden">
            {posters.map((poster, index) => (
              <div
                key={poster.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <img
                  src={poster.imageUrl}
                  alt={poster.title}
                  className="w-full h-full "
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/1200x600/e11d48/white?text=${encodeURIComponent(poster.title)}`;
                  }}
                />
                
                {/* Gradient overlay for better visibility */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Only show if more than 1 poster */}
          {posters.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots Indicator - Only show if more than 1 poster */}
          {posters.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {posters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 8000);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-white'
                      : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}