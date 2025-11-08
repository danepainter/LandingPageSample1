import { trustPartners } from '../data/content';

// Simple placeholder SVG logos
const LogoPlaceholder = ({ name }: { name: string }) => (
  <svg
    className="h-8 w-auto text-gray-400"
    viewBox="0 0 120 40"
    fill="currentColor"
    aria-label={name}
  >
    <rect x="10" y="10" width="20" height="20" rx="4" />
    <rect x="35" y="12" width="70" height="4" rx="2" />
    <rect x="35" y="20" width="50" height="4" rx="2" />
  </svg>
);

export const TrustBar = () => {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">
          Trusted By Leading Companies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {trustPartners.map((partner) => (
            <div
              key={partner.id}
              className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 motion-safe:transition-all"
            >
              <LogoPlaceholder name={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

