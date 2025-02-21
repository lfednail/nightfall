"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown, Diamond, Star } from "lucide-react";
import Link from 'next/link';
import {useToast} from "@/hooks/use-toast";
import Image from "next/image";

const membershipTiers = {
  silver: {
    icon: Star,
    name: "Silver",
    price: 1000,
    period: "month",
    features: [
      "Priority entry",
      "Reserved seating",
      "1 complimentary bottle",
      "Queue Jump",
      "Member-only Events",
      "Member-only VIP Lounge",
      "Membership Card",
    ]
  },
  gold: {
    icon: Crown,
    name: "Gold",
    price: 2500,
    period: "month",
    features: [
      "All Silver Benefits",
      "Personal VIP Host",
      "2 Complimentary Bottles per Month",
      "Valet Parking",
      "Birthday Package",
      "Priority Reservations"
    ]
  },
  platinum: {
    icon: Diamond,
    name: "Platinum",
    price: 5000,
    period: "month",
    features: [
      "All Gold Benefits",
      "Unlimited Guest List",
      "Private Booth Access",
      "Luxury Car Service",
      "Exclusive Events Access",
      "Personalized Experience",
      "Dedicated Concierge"
    ]
  }
};

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState<keyof typeof membershipTiers | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Membership Request Received",
      description: "Our team will contact you shortly to complete your membership.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <Image
          src="/images/party-entry.jpg"
          alt="VIP Experience"
          width={1920} // Remplacez par la largeur de votre image
          height={1080} // Remplacez par la hauteur de votre image
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Become a Member</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Join our exclusive community and elevate your nightlife experience
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Membership Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(membershipTiers).map(([key, tier]) => {
            const Icon = tier.icon;
            return (
              <Card
                key={key}
                className={`relative overflow-hidden transition-all duration-300 ${
                  selectedTier === key ? 'ring-2 ring-primary' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center">
                    <div className="text-2xl font-bold mb-2">{tier.name}</div>
                    <div className="text-3xl font-bold">
                      ${tier.price.toLocaleString()}
                      <span className="text-lg text-muted-foreground">/{tier.period}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={selectedTier === key ? "default" : "outline"}
                    onClick={() => setSelectedTier(key as keyof typeof membershipTiers)}
                  >
                    {selectedTier === key ? 'Selected' : 'Select Plan'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Application Form */}
        {selectedTier && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Complete Your Membership Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" required />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">Submit Application</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our membership team is here to help you choose the perfect tier for your needs
          </p>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}