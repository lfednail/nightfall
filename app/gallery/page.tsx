"use client";


import Gallery from "@/components/gallery";
import Image from "next/image";

export default function GalleryPage() {


  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-16">
        <Image
          src="/images/gallerys.png"
          alt="Background"
          width={1920} // Remplacez par la largeur de votre image
          height={1200} // Remplacez par la hauteur de votre image
          className="absolute inset-0  w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"/>
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white"></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">

            </p>
          </div>
        </div>
      </div>

      <Gallery/>
    </div>

  );
}
