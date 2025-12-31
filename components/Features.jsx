import FeatureCard from './FeatureCard';

const featuresData = [
  {
    icon: '✨',
    title: 'Effortless Waitlist Creation',
    description: 'Set up a beautiful, high-converting waitlist page in minutes, no coding or design skills required.',
  },
  {
    icon: '✉️',
    title: 'Simple Email Collection',
    description: 'Securely gather interested users\' emails, building a list of early adopters ready for your announcement.',
  },
  {
    icon: '🚀',
    title: 'One-Time Launch Notifications',
    description: 'Send a direct, impactful launch notification to your entire waitlist with just one click, when you\'re ready.',
  },
  {
    icon: '📈',
    title: 'Focus on What Matters',
    description: 'Designed for founders who want to launch without the overhead of complex marketing tools and endless features.',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Your Path to a Successful Launch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
