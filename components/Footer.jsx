const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} LaunchBlast. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
