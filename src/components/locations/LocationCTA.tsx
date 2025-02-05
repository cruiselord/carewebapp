import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const LocationCTA = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Need Help Choosing a Location?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
              Our care advisors are here to help you find the perfect location for your needs.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCTA; 