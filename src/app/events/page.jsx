"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import LayoutWrapper from "@/Components/Common/LayoutWrapper"

// Local classnames combiner
const cn = (...classes) => classes.filter(Boolean).join(" ")

function ModernGallery({ images, className }) {
  const [selectedImage, setSelectedImage] = useState(null)

  // Reorder images for better column balance
  const reorderedImages = [...images]
  if (reorderedImages.length > 3) {
    // Move first row's 2nd image to 2nd row
    const firstRowSecond = reorderedImages.splice(1, 1)[0]
    reorderedImages.splice(3, 0, firstRowSecond)
  }
  if (reorderedImages.length > 11) {
    // Move 4th row's last image to 3rd row
    const fourthRowLast = reorderedImages.splice(11, 1)[0]
    reorderedImages.splice(8, 0, fourthRowLast)
  }

  const openPreview = (index) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closePreview = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction) => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return

      if (e.key === "Escape") closePreview()
      if (e.key === "ArrowLeft") navigateImage("prev")
      if (e.key === "ArrowRight") navigateImage("next")
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  return (
    <>
      <div className={cn("w-full", className)}>
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4">
          {reorderedImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl break-inside-avoid mb-4"
              onClick={() => openPreview(images.findIndex(img => img.id === image.id))}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          {/* Blurred backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
            onClick={closePreview}
          />

          <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center p-4 md:p-8 min-h-0">
            {/* Close Button - Mobile optimized */}
            <button
              className="absolute top-4 right-4 z-20 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-200 flex items-center justify-center"
              onClick={closePreview}
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Navigation Buttons - Mobile optimized */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-200 flex items-center justify-center"
                  onClick={() => navigateImage("prev")}
                >
                  <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
                </button>
                <button
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-200 flex items-center justify-center"
                  onClick={() => navigateImage("next")}
                >
                  <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
                </button>
              </>
            )}

            <div className="w-full h-full flex items-center justify-center px-12 md:px-16 py-16 md:py-20">
              <div className="relative max-w-[90vw] max-h-[70vh]">
                <img
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl md:rounded-3xl shadow-2xl"
                />

                {/* Image loading indicator */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl animate-pulse opacity-0" />
              </div>
            </div>

            {/* Image Info - Mobile optimized */}
            <div className="absolute bottom-4 md:bottom-8 left-4 right-4 text-center">
              {images[selectedImage].title && (
                <div className="bg-black/20 backdrop-blur-md rounded-2xl px-4 py-3 md:px-6 md:py-4 mx-auto max-w-md">
                  <p className="text-white text-base md:text-lg font-medium mb-1">{images[selectedImage].title}</p>
                  <p className="text-white/70 text-sm">
                    {selectedImage + 1} of {images.length}
                  </p>
                </div>
              )}

              {/* Image counter dots for mobile */}
              <div className="flex justify-center mt-4 space-x-2 md:hidden">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-200",
                      index === selectedImage ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60",
                    )}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Swipe indicators for mobile */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 md:hidden">
              <div className="flex items-center space-x-2 text-white/60 text-xs">
                <ChevronLeft className="w-3 h-3" />
                <span>Swipe</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function EventsPage() {
  const [images] = useState(() =>
    Array.from({ length: 15 }, (_, i) => {
      const n = i + 1;
      return {
        id: `event-${n}`,
        src: `/EventImages/${n}.jpeg`,
        alt: `Event ${n}`,
        title: ``,
      };
    })
  );

  return (
    <LayoutWrapper>
      <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-10">Events</h1>
        <ModernGallery images={images} />
      </div>
    </LayoutWrapper>
  );
}

export default EventsPage;