import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Search, Filter, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const Caregivers = () => {
  const caregivers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Care Specialist",
      experience: "8 years",
      specialties: ["Elder Care", "Dementia Care", "Physical Therapy"],
      rating: 4.9,
      image: "https://i.pravatar.cc/300?img=1",
      availability: "Full-time"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Rehabilitation Specialist",
      experience: "6 years",
      specialties: ["Rehabilitation", "Post-Surgery Care", "Physical Therapy"],
      rating: 4.8,
      image: "https://i.pravatar.cc/300?img=2",
      availability: "Part-time"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Memory Care Expert",
      experience: "10 years",
      specialties: ["Memory Care", "Elder Care", "Companion Care"],
      rating: 5.0,
      image: "https://i.pravatar.cc/300?img=3",
      availability: "Full-time"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">Meet Our Care Professionals</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experienced, compassionate, and dedicated caregivers ready to provide exceptional care.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input placeholder="Search caregivers..." />
              <Button>
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Caregivers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caregivers.map((caregiver) => (
              <Card key={caregiver.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={caregiver.image} 
                      alt={caregiver.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        {caregiver.rating}
                      </Badge>
                    </div>

                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-1">{caregiver.name}</h2>
                    <p className="text-primary mb-2">{caregiver.title}</p>
                    <p className="text-muted-foreground mb-4">{caregiver.experience} experience</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caregiver.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full">
                      Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team of Caregivers</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you passionate about providing exceptional care? We're always looking for dedicated professionals to join our team.
          </p>
          <Button size="lg">
            Apply Now <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Caregivers; export default Caregivers; 
