import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-25 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-purple-700 font-extrabold sm:text-5xl">
        AI Course Generator
        <strong className="font-extrabold text-black w-40vw "><br/>Custom Learning &nbsp; Paths, Powered by AI</strong>
      </h1>

      <p className="mt-4 sm:text-black">
        Unlock personalized education with AI-driven course creation. Tailor your learning
        journey to your unique goals and pace!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-purple-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-black sm:w-auto"
          href="#"
        >
          Get Started
        </a>

      </div>
    </div>
  </div>
</section>
  )
}

export default Hero