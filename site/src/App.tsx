import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import CybersecuritySection from './components/CybersecuritySection';
import ProductsSection from './components/ProductsSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-foreground overflow-hidden selection:bg-saudi-accent selection:text-white">
      {/* Global architectural grid overlay for the ambient "Midnight Cyber" feel */}
      <div className="fixed inset-0 pointer-events-none bg-grid opacity-[0.15] z-0 mix-blend-overlay"></div>

      {/* Navbar overlay could go here, for now it's absolute in Hero or App */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center border-b border-white/5 bg-charcoal-950/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-saudi flex items-center justify-center font-mono font-bold text-xs tracking-wider">AQL</div>
          <span className="font-mono text-sm tracking-widest text-white/80 uppercase">Strategic Systems</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-white/60">
          <a href="#about" className="hover:text-saudi-accent transition-colors">About Us</a>
          <a href="#capabilities" className="hover:text-saudi-accent transition-colors">Capabilities</a>
          <a href="#products" className="hover:text-saudi-accent transition-colors">Products</a>
          <a href="mailto:contact@aql-tech.com" className="border border-white/20 px-4 py-2 hover:bg-white/5 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CybersecuritySection />
        {/* Phase 2: <AISystemsSection /> */}
        <ProductsSection />
        {/* Phase 2: <HiddenSystemsSection /> */}
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
