const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg h-full">
      <div className="text-4xl text-blue-600 mb-4" role="img" aria-hidden="true">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};
export default FeatureCard;
