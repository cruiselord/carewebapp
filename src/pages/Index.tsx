import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import ComfortSection from "@/components/ComfortSection";
import ServicesGrid from "@/components/ServicesGrid";
import Stats from "@/components/Stats";
import Careers from "@/components/Careers";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <SearchSection />
      <ComfortSection />
      <ServicesGrid />
      <Stats />
      <Careers />
    </div>
  );
};

export default Index;