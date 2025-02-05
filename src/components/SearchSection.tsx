import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchSection = () => {
  return (
    <div className="bg-secondary dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Search for care services..."
              className="dark:bg-gray-700 dark:text-white"
            />
            <Button className="bg-primary hover:bg-primary/90">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;