import { companyProfile } from '../data/content';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About {companyProfile.name}
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                {/* TODO: Expand about section content */}
                We are dedicated to providing exceptional services that help businesses achieve
                their goals. With years of experience and a team of passionate professionals, we've
                helped hundreds of clients transform their operations and reach new heights.
              </p>
              <p>
                Our mission is to deliver innovative solutions that combine cutting-edge technology
                with personalized service. We believe in building long-term partnerships based on
                trust, transparency, and measurable results.
              </p>
              <p>
                Whether you're a small startup or an established enterprise, we have the expertise
                and resources to help you succeed in today's competitive landscape.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-accent-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600">98%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600">10+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cream-300 to-accent-100 rounded-lg shadow-xl flex items-center justify-center">
              {/* Placeholder SVG */}
              <svg
                className="w-32 h-32 text-accent-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            {/* TODO: Replace with actual image */}
            <img
              src=""
              alt=""
              className="hidden"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-600 rounded-lg opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

