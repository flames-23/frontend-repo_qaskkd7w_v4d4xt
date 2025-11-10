import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeeTime from './components/TeeTime';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <TeeTime />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
