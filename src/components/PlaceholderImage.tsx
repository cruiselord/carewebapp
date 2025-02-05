import { User } from "lucide-react";

interface PlaceholderImageProps {
  name: string;
  className?: string;
}

const PlaceholderImage = ({ name, className = "" }: PlaceholderImageProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
      {initials ? (
        <span className="text-2xl font-semibold text-gray-600">{initials}</span>
      ) : (
        <User className="w-12 h-12 text-gray-400" />
      )}
    </div>
  );
};

export default PlaceholderImage; 