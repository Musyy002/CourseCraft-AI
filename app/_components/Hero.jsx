"use client";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { FaBrain, FaBookOpen, FaChalkboardTeacher, FaRocket } from "react-icons/fa";

function Hero() {
  const [text] = useTypewriter({
    words: ["CourseCraft AI"],
    loop: false,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  return (
    <section className="relative bg-transparent overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/techie.png')] opacity-60 bg-cover bg-center"></div>
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-screen-xl px-4 py-25 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-purple-700 font-extrabold sm:text-6xl leading-tight">
            <span>{text}</span>
            <strong className="block font-extrabold text-black sm:text-4xl mt-2">
              Custom Learning Paths, Powered by AI
            </strong>
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Unlock personalized education with AI-driven course creation. Tailor your learning
            journey to your unique goals and pace!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-purple-700 px-12 py-3 text-sm font-medium text-white shadow-lg hover:bg-black hover:scale-105 focus:outline-none focus:ring active:bg-black transition sm:w-auto"
              href="/sign-in"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the benefits of AI-powered learning with our cutting-edge platform.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <FaBrain className="text-purple-700 text-5xl mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800">AI-Powered Insights</h3>
              <p className="mt-2 text-sm text-gray-600">
                Leverage cutting-edge AI to tailor your learning experience.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <FaBookOpen className="text-purple-700 text-5xl mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800">Customizable Courses</h3>
              <p className="mt-2 text-sm text-gray-600">
                Design your own learning path to meet your goals and pace.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <FaChalkboardTeacher className="text-purple-700 text-5xl mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800">Expert Guidance</h3>
              <p className="mt-2 text-sm text-gray-600">
                Access curated content and insights from top industry experts.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <FaRocket className="text-purple-700 text-5xl mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800">Accelerated Learning</h3>
              <p className="mt-2 text-sm text-gray-600">
                Learn faster and smarter with AI-enhanced resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
