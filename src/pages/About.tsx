import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">Transforming Lives Through Compassionate Care</h1>
            <p className="text-xl text-muted-foreground mb-8">
              With over 20 years of experience, we've been dedicated to providing exceptional care services that enhance the quality of life for our clients and their families.
            </p>
            <Button size="lg" className="gap-2">
              Learn Our Story <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Heart className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Compassionate Care</h3>
                    <p className="text-muted-foreground">Every interaction is guided by empathy and understanding.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Safety First</h3>
                    <p className="text-muted-foreground">Rigorous safety protocols and continuous training ensure the highest standards of care.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Family-Centered</h3>
                    <p className="text-muted-foreground">We involve families in care decisions and provide ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/about-image.jpg" 
                alt="Caregiving team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Care Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 