import LocationSearch from "./LocationSearch";

interface LocationHeroProps {
  onSearch: (query: string) => void;
}

const LocationHero = ({ onSearch }: LocationHeroProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Our Care Locations
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Professional care services available across New York City. Find the location nearest to you.
            </p>
          </div>
          <LocationSearch onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};

export default LocationHero; 