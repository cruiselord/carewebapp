import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface LocationSearchProps {
  onSearch: (query: string) => void;
}

const LocationSearch = ({ onSearch }: LocationSearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-2">
      <div className="flex space-x-2">
        <Input 
          name="search"
          type="text" 
          placeholder="Enter your zip code" 
          className="flex-1" 
        />
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </form>
  );
};

export default LocationSearch; 