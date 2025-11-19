"use client";

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Loader2 } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
}

interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

interface GalleryResponse {
  data: GalleryImage[];
  meta: PaginationMeta;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationMeta>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 15
  });

  // Fetch images from API
  const fetchImages = async (page: number = 1) => {
    setLoading(true);
    setError(null);

    try {
      // Replace with your actual API endpoint
      const response = await fetch(`/api/gallery?page=${page}&limit=${pagination.itemsPerPage}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const result: GalleryResponse = await response.json();
      
      setImages(result.data);
      setPagination(result.meta);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching images:', err);
      
      // Fallback to dummy data for demo purposes
      loadDummyData(page);
    } finally {
      setLoading(false);
    }
  };

  // Dummy data fallback (remove this in production)
  const loadDummyData = (page: number) => {
    const dummyImages: GalleryImage[] = [
      { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop', title: 'Mountain Vista' },
      { id: 2, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop', title: 'Forest Lake' },
      { id: 3, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop', title: 'Beach Sunset' },
      { id: 4, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop', title: 'Woodland Path' },
      { id: 5, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop', title: 'Northern Lights' },
      { id: 6, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop', title: 'Mountain Range' },
      { id: 7, url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&h=800&fit=crop', title: 'Tropical Paradise' },
      { id: 8, url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=800&fit=crop', title: 'Canyon View' },
      { id: 9, url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop', title: 'Autumn Colors' },
      { id: 10, url: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb7?w=1200&h=800&fit=crop', title: 'Misty Mountains' },
      { id: 11, url: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&h=800&fit=crop', title: 'Coastal Cliffs' },
      { id: 12, url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&h=800&fit=crop', title: 'Desert Dunes' },
      { id: 13, url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop', title: 'Island Paradise' },
      { id: 14, url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=800&fit=crop', title: 'Cherry Blossoms' },
      { id: 15, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop', title: 'Alpine Meadow' }
    ];

    setImages(dummyImages);
    setPagination({
      currentPage: page,
      totalPages: 3,
      totalItems: 45,
      itemsPerPage: 15
    });
  };

  // Load initial data
  useEffect(() => {
    fetchImages(1);
  }, []);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchImages(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!selectedImage) return;
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeImage();
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const { currentPage, totalPages } = pagination;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-tertiary" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-secondary blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full bg-secondary blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
          <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full bg-secondary blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        </div>
        <div className="relative px-8 py-24 max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 rounded-full border-2 border-secondary">
            <span className="font-semibold text-secondary">Visual Journey</span>
          </div>
          <h1 className="text-7xl font-bold mb-6 tracking-tight text-tertiary">
            Gallery
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed text-tertiary opacity-90">
           Crafting Ideas into Reality for over 10 years
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Error State */}
        {error && !loading && images.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 rounded-2xl mb-4 bg-primary/10">
              <X size={48} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary">
              Failed to Load Images
            </h3>
            <p className="mb-6 text-primary/50">{error}</p>
            <button
              onClick={() => fetchImages(pagination.currentPage)}
              className="px-6 py-3 rounded-lg font-semibold bg-secondary text-primary transition-all hover:scale-105"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 size={48} className="animate-spin text-primary" />
          </div>
        )}

        {/* Gallery Images */}
        {!loading && images.length > 0 && (
          <div className="grid grid-cols-12 gap-4">
            {/* Dynamic layout based on index */}
            {images.map((image, idx) => {
              let colSpan = 'col-span-6 lg:col-span-4';
              let height = 'h-64';

              // Create varied layout
              if (idx === 0) {
                colSpan = 'col-span-12 lg:col-span-8';
                height = 'h-96 lg:h-full';
              } else if (idx === 6) {
                colSpan = 'col-span-12 lg:col-span-7';
                height = 'h-80';
              } else if ([13, 14].includes(idx)) {
                colSpan = 'col-span-12 lg:col-span-6';
                height = 'h-72';
              } else if ([9, 10, 11, 12].includes(idx)) {
                colSpan = 'col-span-6 lg:col-span-3';
                height = 'h-56';
              }

              const overlayColor = idx % 2 === 0 ? 'bg-primary/70' : 'bg-secondary/70';
              const iconBg = idx % 2 === 0 ? 'bg-secondary' : 'bg-primary';
              const iconColor = idx % 2 === 0 ? 'text-primary' : 'text-secondary';

              return (
                <div key={image.id} className={colSpan}>
                  <div 
                    className={`group relative ${height} rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500`}
                    onClick={() => openImage(idx)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 ${overlayColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`p-3 rounded-full ${iconBg}`}>
                          <Maximize2 size={24} className={iconColor} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {!loading && images.length > 0 && pagination.totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
              className="p-3 rounded-lg bg-primary text-tertiary transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, idx) => {
              const isActive = page === pagination.currentPage;
              const isEllipsis = page === '...';
              
              return (
                <button
                  key={idx}
                  onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                  disabled={isEllipsis}
                  className={`min-w-[44px] h-11 rounded-lg font-semibold transition-all hover:scale-105 disabled:cursor-default disabled:hover:scale-100 
                    ${isActive ? 'bg-secondary text-primary' : isEllipsis ? 'bg-transparent text-primary border-none' : 'bg-tertiary text-primary border-2 border-primary/25'}`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.totalPages}
              className="p-3 rounded-lg bg-primary text-tertiary transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Pagination Info */}
        {!loading && images.length > 0 && (
          <div className="mt-6 text-center text-primary/50">
            Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} - {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of {pagination.totalItems} images
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 p-3 rounded-full bg-secondary transition-all hover:scale-110 z-10"
          >
            <X size={28} className="text-primary" />
          </button>

          <div className="absolute top-6 left-6 px-4 py-2 rounded-full font-semibold bg-secondary text-primary z-10">
            {currentIndex + 1} / {images.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-6 p-4 rounded-full bg-secondary transition-all hover:scale-110"
          >
            <ChevronLeft size={32} className="text-primary" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-6 p-4 rounded-full bg-secondary transition-all hover:scale-110"
          >
            <ChevronRight size={32} className="text-primary" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <h3 className="text-3xl font-bold mt-6 text-center text-tertiary">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}