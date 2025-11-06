import { Mail, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's Build Your Dream Machine</h2>
            <p className="mt-3 text-gray-600">Tell us about your space and style. We’ll recommend the perfect setup and pricing within one business day.</p>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-600" /> sales@arcadesaustralia.com.au</p>
              <p className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-indigo-600" /> 1300 000 000</p>
            </div>
          </div>

          <form className="rounded-xl border border-black/10 bg-white p-6 shadow-sm grid grid-cols-1 gap-4">
            <input required placeholder="Full name" className="h-11 rounded-md border border-black/10 px-4 outline-none focus:ring-2 ring-indigo-600/20" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required type="email" placeholder="Email" className="h-11 rounded-md border border-black/10 px-4 outline-none focus:ring-2 ring-indigo-600/20" />
              <input placeholder="Phone (optional)" className="h-11 rounded-md border border-black/10 px-4 outline-none focus:ring-2 ring-indigo-600/20" />
            </div>
            <select className="h-11 rounded-md border border-black/10 px-4 outline-none focus:ring-2 ring-indigo-600/20">
              <option>Machine type</option>
              <option>Classic Upright</option>
              <option>Cocktail Table</option>
              <option>Deluxe Bartop</option>
              <option>Custom Build</option>
            </select>
            <textarea rows={4} placeholder="What are you looking for? Room size, theme, must-have games…" className="rounded-md border border-black/10 px-4 py-3 outline-none focus:ring-2 ring-indigo-600/20" />
            <button type="submit" className="h-11 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 active:bg-indigo-700">Request Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
}
