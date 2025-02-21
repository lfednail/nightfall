"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, DollarSign, Music2, Timer } from "lucide-react";
import Link from "next/link";
import { events } from "@/data/events";
import Image from "next/image"; // Importer les événements

export default function EventsPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesFilter = filter === "all" || event.type === filter;
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.dj.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-muted-foreground">
            Experience the best in electronic music
          </p>
        </div>

        {/* Barre de recherche et filtre */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search events or DJs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="rap-pop">Rap/Pop</SelectItem>
              <SelectItem value="jazz">Jazz</SelectItem>
              <SelectItem value="rock">Rock</SelectItem>
              <SelectItem value="electronic">Electronic</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="techno">Techno</SelectItem>
              <SelectItem value="deep-house">Deep House</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Liste des événements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden group">
              <div className="relative h-48">
                <div className="absolute inset-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>

                  {/* Détails de l'événement */}
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        {event.date === "Every Saturday"
                          ? "Every Saturday"
                          : new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                      </span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Timer className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Music2 className="w-4 h-4 mr-2" />
                      <span>{event.dj}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>{event.price}</span>
                    </div>
                  </div>

                  {/* Bouton de réservation */}
                  <Button className="w-full" asChild>
                    <Link href={`/book?event=${event.id}`}>Book Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
