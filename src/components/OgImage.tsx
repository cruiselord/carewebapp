import React from 'react';

const OgImage = () => {
  return (
    <div className="w-[1200px] h-[630px] bg-white flex flex-col items-center justify-center p-12" style={{ fontFamily: 'system-ui' }}>
      <div className="w-full h-full border-8 border-primary/20 flex flex-col items-center justify-center p-8">
        <div className="text-6xl font-bold text-primary mb-8">
          Glorious Care Inc.
        </div>
        <div className="text-3xl text-gray-600 text-center max-w-3xl mb-12">
          Professional and compassionate senior care services tailored to your loved ones' needs
        </div>
        <div className="flex gap-8 mt-8">
          <div className="text-xl text-secondary font-medium px-6 py-3 border-2 border-secondary rounded-lg">
            Assisted Living
          </div>
          <div className="text-xl text-secondary font-medium px-6 py-3 border-2 border-secondary rounded-lg">
            Memory Care
          </div>
          <div className="text-xl text-secondary font-medium px-6 py-3 border-2 border-secondary rounded-lg">
            Skilled Nursing
          </div>
        </div>
      </div>
    </div>
  );
};

export default OgImage; 