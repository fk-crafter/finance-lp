import Image from "next/image";
import Link from "next/link";
import { FaStar, FaMoneyBillWave } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full text-white pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Unlock the Power of <br />
          <span className="text-teal-400">AI in Financial Analysis</span> <br />
          for Smarter Decisions{" "}
          <FaMoneyBillWave className="inline-block text-teal-400" />
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
          Access cutting-edge insights, automate expense tracking, and maximize
          your investment performance effortlessly.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="#"
            className="bg-teal-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-teal-600 transition-all duration-300"
          >
            Join The Waitlist
          </Link>
          <a
            href="#learn-more"
            className="border border-white text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            See More
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-16">
          <div className="text-gray-300 flex items-center space-x-1 text-lg">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            <span className="ml-2 text-lg">4.7 / 5 (150+ reviews)</span>
          </div>

          <div className="flex items-center">
            <div className="flex -space-x-3">
              <Image
                src="/img/1.jpg"
                alt="User 1"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/img/2.jpg"
                alt="User 2"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/img/3.jpg"
                alt="User 3"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <span className="text-gray-300 text-lg ml-4">
              Join 150+ satisfied users
            </span>
          </div>
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
