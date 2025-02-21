"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Sunset, Wine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RooftopPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <Image
          src="/images/lounge/Rooftop-Garden.jpg"
          alt="VIP Experience"
          width={1920} // Remplacez par la largeur de votre image
          height={1080} // Remplacez par la hauteur de votre image
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"/>
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Rooftop Garden</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              An urban oasis with panoramic city views
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Sunset className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Scenic Views</h3>
                <p className="text-muted-foreground">
                  Breathtaking panoramic views of the city skyline
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Wine className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Cocktail Bar</h3>
                <p className="text-muted-foreground">
                  Signature cocktails and premium spirits under the stars
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Open Air</h3>
                <p className="text-muted-foreground">
                  Fresh air and comfortable seating in a garden setting
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Urban Paradise</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our rooftop garden offers a perfect escape from the main dance floor,
            featuring comfortable seating areas, a dedicated bar, and stunning views
            of the city skyline. It&#39;s the perfect spot for sunset cocktails or a
            breath of fresh air under the stars.
          </p>
          <Button size="lg" asChild>
            <Link href="/book">Reserve Your Spot</Link>
          </Button>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/images/Scenic-Views.jpg",
            "/images/Cocktail-bar.jpg",
            "/images/lounge/Rooftop-Garden.jpg"

          ].map((image, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={image}
                    alt={`Rooftop View ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}