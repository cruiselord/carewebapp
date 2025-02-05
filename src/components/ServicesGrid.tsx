import { Utensils, Car, Pill, Heart, Home, Activity, Clock, Stethoscope } from "lucide-react";

const services = [
  { icon: Utensils, title: "Meal prep" },
  { icon: Car, title: "Transportation" },
  { icon: Pill, title: "Medication reminders" },
  { icon: Heart, title: "Personal care" },
  { icon: Home, title: "Housekeeping" },
  { icon: Activity, title: "Health assistance" },
  { icon: Clock, title: "24/7 care" },
  { icon: Stethoscope, title: "Medical services" },
];

const ServicesGrid = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          What personalized care can look like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;