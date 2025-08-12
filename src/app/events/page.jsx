"use client";

import React, { useEffect, useState } from "react";
import LayoutWrapper from "@/Components/Common/LayoutWrapper";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Local classnames combiner
const cn = (...classes) => classes.filter(Boolean).join(" ");

function page() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images] = useState(() =>
    Array.from({ length: 15 }, (_, i) => {
      const n = i + 1;
      return {
        id: `event-${n}`,
        src: `/EventImages/${n}.jpeg`,
        alt: `Event ${n}`,
        title: `Event ${n}`,
      };
    })
  );

  const openPreview = (index) => {
    setSelectedImage(index);
    if (typeof document !== "undefined") document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setSelectedImage(null);
    if (typeof document !== "undefined") document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (typeof document !== "undefined") document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const getBentoGridClass = (index) => {
    const patterns = [
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <LayoutWrapper>
      <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-10">Events</h1>

        <div className="w-full">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 auto-rows-[120px] md:auto-rows-[160px] lg:auto-rows-[200px]">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl bg-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                  getBentoGridClass(index)
                )}
                onClick={() => openPreview(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium truncate">{image.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300" onClick={closePreview} />

            <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center p-4 md:p-8">
              <button
                className="absolute top-4 right-4 z-20 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-200 inline-flex items-center justify-center"
                onClick={closePreview}
                aria-label="Close preview"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-200 inline-flex items-center justify-center"
                    onClick={() => navigateImage("prev")}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
                  </button>
                  <button
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-200 inline-flex items-center justify-center"
                    onClick={() => navigateImage("next")}
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
                  </button>
                </>
              )}

              <div className="w-full h-full flex items-center justify-center px-12 md:px-16">
                <div className="relative max-w-full max-h-full">
                  <img
                    src={images[selectedImage].src || "/placeholder.svg"}
                    alt={images[selectedImage].alt}
                    className="max-w-full max-h-full object-contain rounded-2xl md:rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl animate-pulse opacity-0" />
                </div>
              </div>

              <div className="absolute bottom-4 md:bottom-8 left-4 right-4 text-center">
                {images[selectedImage].title && (
                  <div className="bg-black/20 backdrop-blur-md rounded-2xl px-4 py-3 md:px-6 md:py-4 mx-auto max-w-md">
                    <p className="text-white text-base md:text-lg font-medium mb-1">{images[selectedImage].title}</p>
                    <p className="text-white/70 text-sm">
                      {selectedImage + 1} of {images.length}
                    </p>
                  </div>
                )}

                <div className="flex justify-center mt-4 space-x-2 md:hidden">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-200",
                        index === selectedImage ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                      )}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 md:hidden">
                  <div className="flex items-center space-x-2 text-white/60 text-xs">
                    <ChevronLeft className="w-3 h-3" />
                    <span>Swipe</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </LayoutWrapper>
  );
}

export default page;