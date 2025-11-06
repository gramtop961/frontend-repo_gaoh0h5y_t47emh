import { Gamepad2, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" aria-label="Arcades Australia" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white grid place-items-center shadow-sm">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">Arcades Australia</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#products" className="hover:text-indigo-600 transition-colors">Machines</a>
          <a href="#features" className="hover:text-indigo-600 transition-colors">Why Us</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </nav>

        <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-indigo-500 active:bg-indigo-700">
          <Phone className="h-4 w-4" />
          Get a Quote
        </a>
      </div>
    </header>
  );
}
