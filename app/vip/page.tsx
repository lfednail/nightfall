import Link from "next/link";
import { Crown, Diamond, GlassWater, Headphones, Key, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs } from "@radix-ui/react-tabs";
import { Button } from "@/components/ui/button"; // Assurez-vous que c'est le bon import
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import FAQ from "@/components/faq";

const vipBenefits = [
  {
    icon: <Key className="h-6 w-6" />,
    title: "Priority Entry",
    description: "Access to the VIP Lounge and exclusive events."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Personal Host",
    description: "Dedicated VIP host for personalized service"
  },
  {
    icon: <Diamond className="w-6 h-6" />,
    title: "Premium Location",
    description: "Best views from elevated VIP areas"
  },
  {
    icon: <GlassWater className="w-6 h-6" />,
    title: "Bottle Service",
    description: "Premium spirits and exclusive cocktails"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Security Detail",
    description: "Enhanced security and privacy"
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Event Access",
    description: "Early access to event tickets"
  }
];

const membershipPackages = {
  silver: {
    name: "Silver",
    price: 1000,
    period: "Month",
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
    name: "Gold",
    price: 2500,
    period: "Month",
    features: [
      "All Silver Benefits",
      "Personal VIP Host",
      "2 Complimentary Bottles",
      "Valet Parking",
      "Birthday Package",
      "Priority Reservations"
    ]
  },
  platinum: {
    name: "Platinum",
    price: 5000,
    period: "Month",
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

export default function VipPage() {
  return (
    <div className="min-h-screen pt- pb-16"> {/* Augmenter l'espace du bas */}
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-20 gap-5"> {/* Augmenter l'espace en bas */}
        <Image
          src="/images/background/VIP-Experience.png"
          alt="VIP Experience"
          width={1920} // Remplacez par la largeur de votre image
          height={1080} // Remplacez par la hauteur de votre image
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"/>
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">VIP Experience</h1> {/* Augmenter l'espace sous le titre */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Elevate your nightlife with exclusive access and premium services
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto px-4 mb-36 gap-8"> {/* Augmenter l'espace en bas et l'écart entre les éléments */}
        <h2 className="text-3xl font-bold text-center mb-16">VIP Benefits</h2> {/* Augmenter l'espace sous le titre */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Augmenter l'écart entre les cartes */}
          {vipBenefits.map((benefit, index) => (
            <Card key={index} className="border-primary/20">
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6"> {/* Augmenter l'espace sous l'icône */}
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3> {/* Augmenter l'espace sous le titre */}
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Membership Tiers */}
      <div className="container mx-auto px-4 mb-36 gap-16"> {/* Augmenter l'espace en bas et l'écart entre les éléments */}
        <h2 className="text-3xl font-bold text-center mb-16">Membership Tiers</h2> {/* Augmenter l'espace sous le titre */}
        <Tabs defaultValue="silver" className="w-full">
          <TabsList
            className="grid w-full grid-cols-3 max-w-[600px] mx-auto mb-16"> {/* Centrer les onglets et augmenter l'écart */}
            <TabsTrigger value="silver">Silver</TabsTrigger>
            <TabsTrigger value="gold">Gold</TabsTrigger>
            <TabsTrigger value="platinum">Platinum</TabsTrigger>
          </TabsList>
          {Object.entries(membershipPackages).map(([key, pack]) => (
            <TabsContent key={key} value={key}>
              <Card className="max-w-2xl mx-auto border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-6"> {/* Augmenter l'espace sous l'icône */}
                      <Crown className="w-6 h-6 text-primary" />
                      <span>{pack.name} Membership</span>
                    </div>
                    <div className="text-4xl font-bold">
                      ${pack.price.toLocaleString()}
                      <span className="text-lg text-muted-foreground ">/{pack.period}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-6 gap-6 mb-8"> {/* Augmenter l'espace entre les fonctionnalités */}
                    {pack.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/membership">Join Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Contact Section */}
      <FAQ/>
      <div className="container mx-auto px-4 text-center mb-24"> {/* Augmenter l'espace en bas */}
        <h2 className="text-2xl font-semibold mb-6">Need More Information?</h2> {/* Augmenter l'espace sous le titre */}
        <p className="text-muted-foreground mb-8">
          Contact our VIP concierge for personalized assistance
        </p>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Contact Concierge</Link>
        </Button>
      </div>
    </div>
  );
}
