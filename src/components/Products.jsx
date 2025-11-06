import { MonitorPlay, Joystick, Zap } from "lucide-react";

const products = [
  {
    name: "Classic Upright",
    price: "From $2,499",
    desc: "Timeless design with 2-player controls and 2000+ games.",
    features: ['24" HD monitor', "Sanwa-style controls", "LED backlit marquee"],
  },
  {
    name: "Cocktail Table",
    price: "From $2,199",
    desc: "Perfect for lounges and offices, glass-top two-sided play.",
    features: ["Tempered glass", "Rotating screen", "Space-saving"],
  },
  {
    name: "Deluxe Bartop",
    price: "From $1,499",
    desc: "Compact powerhouse for desks and bars, plug-and-play.",
    features: ['18" display', "Compact footprint", "Plug & play"],
  },
];

function FeaturePill({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
      <Icon className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Machines</h2>
          <p className="text-gray-600 max-w-xl">Choose from our most popular builds or ask for a custom cabinet, graphics, and game list tailored to your space.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border border-black/10 bg-white shadow-sm overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-rose-200" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <FeaturePill icon={MonitorPlay}>HD Display</FeaturePill>
                  <FeaturePill icon={Joystick}>Authentic Controls</FeaturePill>
                  <FeaturePill icon={Zap}>LED Lighting</FeaturePill>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-indigo-700 font-semibold">{p.price}</span>
                  <a href="#contact" className="text-sm font-semibold text-indigo-700 hover:text-indigo-900">Enquire</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
