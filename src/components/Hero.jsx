import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
            Proudly Australian • Premium Builds
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 bg-clip-text text-transparent">
              Arcade Machines for Epic Man Caves
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Bring the retro arcade experience home with handcrafted machines, modern internals, and authentic controls. Built to last, tuned for fun, and supported locally.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500 active:bg-indigo-700">
              Browse Machines
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-indigo-700 hover:text-indigo-900">
              Get a custom quote
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[110%] -translate-x-1/2 rounded-[100%] bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-rose-500/10 blur-3xl" />
    </section>
  );
}
