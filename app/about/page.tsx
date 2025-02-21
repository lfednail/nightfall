"use client"

import { Card, CardContent } from "@/components/ui/card";
import {Music2, Users, Clock, MapPin, HandPlatter} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-16">
        <Image
          src="/images/background.jpg"
          alt="Background"
          width={1920} // Remplacez par la largeur de votre image
          height={1200} // Remplacez par la hauteur de votre image
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Redefining nightlife since 2018
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            At L&#39;Echafee, we believe in creating unforgettable experiences that transcend
            traditional nightlife. Our mission is to provide a premium entertainment
            venue where music, luxury, and exceptional service come together to create
            magical moments and lasting memories.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "5+", label: "Years of Excellence" },
            { number: "500+", label: "Events Hosted" },
            { number: "250K+", label: "Happy Guests" },
            { number: "50+", label: "International DJs" }
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Music2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">World-Class Sound</h3>
                <p className="text-muted-foreground">
                  Featuring a state-of-the-art Funktion-One sound system for the ultimate audio experience
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <HandPlatter className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Premium Service</h3>
                <p className="text-muted-foreground">
                  Dedicated staff ensuring an exceptional experience for every guest
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
                <h3 className="text-xl font-semibold">Curated Experience</h3>
                <p className="text-muted-foreground">
                  Carefully curated events and atmosphere for an elite nightlife experience
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="space-y-8">
            {[
              {
                year: "2018",
                title: "The Beginning",
                description: "Echafee opens its doors, introducing a new standard in nightlife"
              },
              {
                year: "2021",
                title: "Expansion",
                description: "Launch of our VIP program and rooftop garden"
              },
              {
                year: "2023",
                title: "International Recognition",
                description: "Named one of the top nightclubs in the region"
              },
              {
                year: "2024",
                title: "Innovation",
                description: "Introduction of state-of-the-art sound and lighting systems"
              }
            ].map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-24 flex-shrink-0 text-right">
                  <div className="font-bold">{milestone.year}</div>
                </div>
                <div className="w-px bg-border relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-grow pt-0">
                  <h3 className="font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                123 Nightclub Street<br />
                Downtown, City 12345
              </p>
              <p className="text-muted-foreground">
                Located in the heart of the entertainment district,
                easily accessible by public transport and with
                secure parking facilities nearby.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-6 h-6 text-primary"/>
                <h3 className="text-xl font-semibold">Opening Hours</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span className="text-muted-foreground">11:30 PM - 07:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="text-muted-foreground">11:00 PM - 07:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">11:00 PM - 07:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">11:00 PM - 07:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span className="text-muted-foreground">10:00 PM - 00:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span className="text-muted-foreground">11:30 PM - 07:00 AM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}