import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react";

interface LocationCardProps {
  location: {
    id: number;
    name: string;
    image: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    services: string[];
  };
}

const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img 
          src={location.image} 
          alt={location.name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold">{location.name}</h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>{location.address}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Phone className="h-4 w-4" />
              <span>{location.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Mail className="h-4 w-4" />
              <span>{location.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="h-4 w-4" />
              <span>{location.hours}</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Available Services:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {location.services.map((service, idx) => (
              <li key={idx} className="flex items-center gap-1 text-sm text-gray-500">
                <CheckCircle className="h-4 w-4 text-primary" />
                {service}
              </li>
            ))}
          </ul>
        </div>
        <Button className="w-full">
          Schedule Visit <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default LocationCard; 