import { Shield, Wrench, Truck, Hammer } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "2-Year Warranty",
    desc: "Comprehensive coverage on hardware and craftsmanship.",
  },
  {
    icon: Wrench,
    title: "Hand-Built Locally",
    desc: "CNC-cut cabinetry, premium materials, assembled in Australia.",
  },
  {
    icon: Truck,
    title: "White-Glove Delivery",
    desc: "We deliver, install, and set up so you're playing in minutes.",
  },
  {
    icon: Hammer,
    title: "Custom Artwork",
    desc: "From retro classics to your brand, we design and apply it all.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Why Choose Arcades Australia</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">We obsess over the details so every button press feels right and every cabinet looks incredible in your space.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
