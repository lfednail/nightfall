import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Calendar, Music2, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">

        {/* hero section*/}
        <div className="relative h-screen flex items-center justify-center">
          <Image
            src="/images/background.jpg"
            alt="Background"
            width={1920} // Remplacez par la largeur de votre image
            height={1080} // Remplacez par la hauteur de votre image
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradiant-to-b from-transparent to-background"/>
          <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
            <h1
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
              Welcome to Echafée
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Where Music Meets Luxury
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/book">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/events/">View Events</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="py-20 px-4 container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Neon Dreams",
                date: "Fri, Apr 12",
                dj: "DJ Phantom",
                image: "/images/events/Neon-Dreams.jpg"
              },
              {
                title: "Electric Paradise",
                date: "Sat, Apr 13",
                dj: "Luna Eclipse",
                image: "/images/events/Electric-Paradise.jpg"
              },
              {
                title: "Monday Madness",
                date: "Fri, Apr 19",
                dj: "DJ Singh",
                image: "/images/events/Monday-Madness.jpg"
              }
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-48">
                  <div className="absolute inset-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"/>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2"/>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Music2 className="w-4 h-4 mr-2"/>
                    <span>{event.dj}</span>
                  </div>
                  <Button className="w-full mt-4" variant="secondary">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Music2 className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-xl font-semibold">World-Class Sound</h3>
                <p className="text-muted-foreground">
                  State-of-the-art sound system delivering crystal clear audio
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-xl font-semibold">VIP Experience</h3>
                <p className="text-muted-foreground">
                  Exclusive areas and premium service for our VIP guests
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-xl font-semibold">Elite Atmosphere</h3>
                <p className="text-muted-foreground">
                  Curated crowd and sophisticated ambiance
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
  </>
)

}
