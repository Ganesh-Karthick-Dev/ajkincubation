'use client';

import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

function getLayout(index) {
  const pattern = [
    { col: 3, rows: 40 },
    { col: 2, rows: 26 },
    { col: 1, rows: 26 },
    { col: 2, rows: 34 },
    { col: 2, rows: 22 },
    { col: 3, rows: 30 },
    { col: 2, rows: 26 },
    { col: 1, rows: 26 },
    { col: 2, rows: 22 },
    { col: 3, rows: 30 },
    { col: 2, rows: 26 },
    { col: 1, rows: 26 },
  ];
  return pattern[index % pattern.length];
}

const BentoGallery = ({ images = [], onOpen }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 auto-rows-[8px] sm:auto-rows-[10px] gap-3 sm:gap-4 grid-flow-dense">
        {images.map((image, index) => {
          const { col, rows } = getLayout(index);
          return (
            <button
              key={image.id || index}
              type="button"
              onClick={() => onOpen?.(index)}
              className={cn(
                'group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400',
                'hover:shadow-xl',
                // Use explicit classes to keep Tailwind from purging
                col === 1 && 'lg:col-span-1',
                col === 2 && 'lg:col-span-2',
                col === 3 && 'lg:col-span-3'
              )}
              style={{ gridRow: `span ${rows}` }}
              aria-label={image.alt || image.title || 'Event image'}
            >
              <img
                src={image.src || '/placeholder.svg'}
                alt={image.alt || image.title || 'Event'}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {(image.title || image.alt) && (
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <div className="inline-flex max-w-[90%] items-center rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <span className="truncate">{image.title || image.alt}</span>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BentoGallery;


