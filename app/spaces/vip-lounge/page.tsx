"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, GlassWater, Sofa } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function VIPLoungePage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <Image
          src="/images/VIP-Experience.png"
          alt="VIP Experience"
          width={1920} // Remplacez par la largeur de votre image
          height={1080} // Remplacez par la hauteur de votre image
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"/>
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">VIP Lounge</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Exclusive luxury and premium service in a private setting
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
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">VIP Service</h3>
                <p className="text-muted-foreground">
                  Dedicated hostess and personalized attention throughout your night
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <GlassWater className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Premium Drinks</h3>
                <p className="text-muted-foreground">
                  Exclusive selection of spirits and champagne with bottle service
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Sofa className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Private Booths</h3>
                <p className="text-muted-foreground">
                  Luxurious seating areas with the best views of the venue
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Elevated Experience</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our VIP lounge offers an exclusive escape with premium amenities and service.
            Enjoy private booths, dedicated hostess service, and a curated selection of
            premium spirits and champagne. Perfect for special celebrations or those
            seeking a more refined nightlife experience.
          </p>
          <Button size="lg" asChild>
            <Link href="/vip">Learn About VIP Membership</Link>
          </Button>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/images/lounge/luxury-lounge.jpg",
            "/images/bottles-box.jpg",
            "/images/lounge/VVIP-lounge.jpg"
          ].map((image, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img
                    src={image}
                    alt={`VIP Lounge View ${index + 1}`}
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