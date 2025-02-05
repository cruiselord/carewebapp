import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Shield, Users, Award } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      id: 1,
      title: "Senior Caregiver",
      location: "Manhattan, NY",
      type: "Full-time",
      experience: "3+ years",
      description: "Looking for experienced caregivers to provide comprehensive care for elderly clients."
    },
    {
      id: 2,
      title: "Physical Therapist",
      location: "Brooklyn, NY",
      type: "Part-time",
      experience: "2+ years",
      description: "Seeking licensed physical therapists to help clients with rehabilitation needs."
    },
    {
      id: 3,
      title: "Care Coordinator",
      location: "Queens, NY",
      type: "Full-time",
      experience: "4+ years",
      description: "Coordinate care services and manage caregiver schedules for optimal client support."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">Join Our Care Team</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Make a difference in people's lives while building a rewarding career in healthcare.
            </p>
            <Button size="lg">
              View Open Positions <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Competitive Pay</h3>
                <p className="text-muted-foreground">Industry-leading compensation and benefits package</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Career Growth</h3>
                <p className="text-muted-foreground">Continuous training and advancement opportunities</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Supportive Team</h3>
                <p className="text-muted-foreground">Work with dedicated professionals who share your passion</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Recognition</h3>
                <p className="text-muted-foreground">Regular recognition and rewards for exceptional service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {positions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex gap-4 text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                  <p className="text-muted-foreground">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 