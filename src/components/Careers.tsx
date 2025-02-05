import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Care Professional Job Opportunities
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Home is so much more than an address. It's where we make our memories, find comfort, and age with dignity. Join our team and become part of a family that helps change lives for the better.
            </p>
            <Button className="bg-accent hover:bg-accent/90">
              Search Jobs
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/placeholder.svg"
              alt="Caregiver helping senior"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;