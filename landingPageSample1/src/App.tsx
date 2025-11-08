import { lazy, Suspense } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { BackToTop } from './components/BackToTop';
import { CookieBanner } from './components/CookieBanner';
import { FloatingCallButton } from './components/FloatingCallButton';

// Lazy load below-the-fold components for better performance
const Services = lazy(() =>
  import('./components/Services').then((module) => ({ default: module.Services }))
);
const About = lazy(() =>
  import('./components/About').then((module) => ({ default: module.About }))
);
const Testimonials = lazy(() =>
  import('./components/Testimonials').then((module) => ({ default: module.Testimonials }))
);
const Pricing = lazy(() =>
  import('./components/Pricing').then((module) => ({ default: module.Pricing }))
);
const FAQ = lazy(() => import('./components/FAQ').then((module) => ({ default: module.FAQ })));
const Contact = lazy(() =>
  import('./components/Contact').then((module) => ({ default: module.Contact }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((module) => ({ default: module.Footer }))
);

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600"></div>
  </div>
);

const sectionIds = ['hero', 'services', 'about', 'testimonials', 'pricing', 'faq', 'contact'];

function App() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with navigation */}
      <Header activeSection={activeSection} />

      {/* Main content */}
      <main id="main-content">
        {/* Hero Section - Loaded immediately */}
        <Hero />

        {/* Trust Bar */}
        <TrustBar />

        {/* Lazy-loaded sections below the fold */}
        <Suspense fallback={<LoadingFallback />}>
          <Services />
          <About />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
          <Footer />
        </Suspense>
      </main>

      {/* Floating UI Elements */}
      <BackToTop />
      <FloatingCallButton />
      <CookieBanner />
    </div>
  );
}

export default App;
