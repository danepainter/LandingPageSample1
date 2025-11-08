import { pricingTiers } from '../data/content';

export const Pricing = () => {
  const handleSelectPlan = (tierName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Could also pre-fill form with selected plan
      console.log(`Selected plan: ${tierName}`);
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${
                tier.highlighted
                  ? 'border-2 border-accent-600 transform md:scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {tier.highlighted && (
                <div className="bg-accent-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-accent-600 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => handleSelectPlan(tier.name)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold motion-safe:transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    tier.highlighted
                      ? 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-600 motion-safe:hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

