import { companyProfile } from '../data/content';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-50 to-white pt-20"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {companyProfile.tagline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {companyProfile.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-3 bg-accent-600 text-white font-semibold rounded-lg shadow-lg hover:bg-accent-700 hover:shadow-xl motion-safe:transition-all motion-safe:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2"
            >
              Get Started
            </button>
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-3 bg-white text-accent-600 font-semibold rounded-lg border-2 border-accent-600 hover:bg-accent-50 motion-safe:transition-all focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2"
            >
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by leading businesses</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for trust indicators - will be filled by TrustBar */}
              <div className="text-xs text-gray-400">See our partners below</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

