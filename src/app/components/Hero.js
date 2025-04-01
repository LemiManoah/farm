import Image from "next/image";

function Hero() {
  return (
    <section className="relative text-white py-20 px-4 flex items-center justify-center bg-red-500 h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.png" // Ensure this path is correct
          alt="Banner"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Welcome to Our Site
          </h2>
          <p className="text-xl mb-4">
            We offer a range of services to help you achieve your goals.
          </p>
          <button className="bg-white text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
