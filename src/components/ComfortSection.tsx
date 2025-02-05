import { Shield, Heart, Link as LinkIcon } from "lucide-react";

const ComfortSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-8">
          Comfort. Security. Connection.
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We all need these as we age, and that's where Home Instead can help. Our high-quality, trained Care Professionals offer the guidance and support you deserve, all in the comfort of home.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comfort</h3>
            <p className="text-gray-600">Professional care in the comfort of home</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-600">Peace of mind for you and your loved ones</p>
          </div>
          <div className="flex flex-col items-center">
            <LinkIcon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connection</h3>
            <p className="text-gray-600">Maintaining social bonds and relationships</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComfortSection;