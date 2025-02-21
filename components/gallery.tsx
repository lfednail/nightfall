// components/Gallery.tsx

import React from 'react';
import { galleryImages, GalleryImage } from '@/data/gallery';

const Gallery: React.FC = () => {
  return (
    <div className="space-y-12">
        <h2 className="text-3xl font-bold text-center mb-8">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 p-4">
          {galleryImages.events.map((image: GalleryImage, index: number) => (
            <div key={index} className="relative group">
              <img
                src={image.src}
                alt={`Event image ${index + 1}`}
                className="object-cover w-full h-100 transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

    </div>
  );
};

export default Gallery;
