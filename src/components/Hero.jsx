import banner from '../assets/banner-stack.png'

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>

        <p className="mt-6 text-gray-500 text-lg">
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="rounded-full bg-brand-gradient px-6 py-3 font-medium text-white hover:opacity-90"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={banner} alt="Illustration of a layered development stack" className="w-full max-w-sm" />
      </div>
    </section>
  )
}

export default Hero
