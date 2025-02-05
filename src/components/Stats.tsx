const Stats = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Experience meets innovation
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1+ mil</div>
            <p className="text-gray-600">Hours of care served per week</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100k</div>
            <p className="text-gray-600">Trained care professionals</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">90%</div>
            <p className="text-gray-600">Highly satisfied clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;