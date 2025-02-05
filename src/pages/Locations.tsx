import { useState } from "react";
import LocationHero from "@/components/locations/LocationHero";
import LocationCard from "@/components/locations/LocationCard";
import LocationCTA from "@/components/locations/LocationCTA";

const Locations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const locations = [
    {
      id: 1,
      name: "Manhattan Care Center",
      image: "/images/locations/manhattan.jpg",
      address: "123 Care Street, New York, NY 10001",
      phone: "(212) 555-0123",
      email: "manhattan@caregiving.com",
      hours: "24/7 Available",
      services: [
        "Senior Care",
        "Memory Care",
        "Physical Therapy",
        "Post-Surgery Care"
      ]
    },
    {
      id: 2,
      name: "Brooklyn Heights Center",
      image: "/images/locations/brooklyn.jpg",
      address: "456 Health Avenue, Brooklyn, NY 11201",
      phone: "(718) 555-0123",
      email: "brooklyn@caregiving.com",
      hours: "24/7 Available",
      services: [
        "Home Care",
        "Rehabilitation",
        "Palliative Care",
        "Respite Care"
      ]
    },
    {
      id: 3,
      name: "Queens Village Center",
      image: "/images/locations/queens.jpg",
      address: "789 Wellness Road, Queens, NY 11428",
      phone: "(347) 555-0123",
      email: "queens@caregiving.com",
      hours: "24/7 Available",
      services: [
        "Elder Care",
        "Companion Care",
        "Specialized Care",
        "Dementia Care"
      ]
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
  };

  return (
    <div className="flex-1">
      <LocationHero onSearch={handleSearch} />
      
      {/* Locations Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      <LocationCTA />
    </div>
  );
};

export default Locations; 