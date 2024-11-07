import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full  text-white pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Unlock the Power of <br />
          <span className="text-indigo-400">AI in Financial Analysis</span>{" "}
          <br />
          for Smarter Decisions 💰
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto text-gray-300">
          Access cutting-edge insights, automate expense tracking, and maximize
          your investment performance effortlessly.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#waitlist"
            className="bg-indigo-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-600 transition-all duration-300"
          >
            Join The Waitlist
          </a>
          <a
            href="#learn-more"
            className="border border-white text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 flex justify-center">
          <Image
            src="/img/dashboard.jpg"
            alt="Finance Dashboard"
            width={400}
            height={200}
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
