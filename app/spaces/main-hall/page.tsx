"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music2, Speaker, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MainHallPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <Image
          src="/images/lounge/main-hall.png"
          alt="VIP Experience"
          width={1920} // Remplacez par la largeur de votre image
          height={1080} // Remplacez par la hauteur de votre image
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"/>
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4"></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              {/* Features
              Experience world-class sound and lighting in our flagship space */}
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
                  <Speaker className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Premium Sound</h3>
                <p className="text-muted-foreground">
                  State-of-the-art Funktion-One sound system delivering crystal clear audio
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Music2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">DJ Booth</h3>
                <p className="text-muted-foreground">
                  Professional DJ equipment and booth with perfect crowd visibility
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Capacity</h3>
                <p className="text-muted-foreground">
                  Spacious dance floor accommodating up to 1000 people
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">The Heart of L’Echafée</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our main hall is the epicenter of electronic music culture, featuring a massive dance floor,
            state-of-the-art sound and lighting systems, and multiple bars for easy access. The space
            is designed to create an immersive experience that connects DJs with the crowd.
          </p>
          <Button size="lg" asChild>
            <Link href="/book">Book Your Experience</Link>
          </Button>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/images/lounge/main-one.jpg",
            "/images/platine-DJ.jpg",
            "/images/lounge/main-room.jpg"

          ].map((image, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img
                    src={image}
                    alt={`Main Hall View ${index + 1}`}
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