import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Features from './components/Features.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Arcades Australia. All rights reserved.</p>
          <p>Crafted for man caves, offices, and venues across Australia.</p>
        </div>
      </footer>
    </div>
  )
}

export default App