const HeroSection = () => {
    return (
      <div
        className="relative bg-cover bg-center h-1/2"
        style={{ backgroundImage: "url('/pBanner.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Text Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Welcome to Our Website
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-4 max-w-lg">
            Discover amazing fragrances and offers, perfumes and ouds
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm md:text-base">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;