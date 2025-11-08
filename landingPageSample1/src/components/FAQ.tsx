import { useState, useRef, useEffect } from 'react';
import { faqItems } from '../data/content';

export const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const toggleItem = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    // Cleanup refs on unmount
    return () => {
      itemRefs.current.clear();
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, _currentId: string, currentIndex: number) => {
    const itemCount = faqItems.length;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % itemCount;
      const nextId = faqItems[nextIndex].id;
      const nextButton = document.getElementById(`faq-button-${nextId}`);
      nextButton?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + itemCount) % itemCount;
      const prevId = faqItems[prevIndex].id;
      const prevButton = document.getElementById(`faq-button-${prevId}`);
      prevButton?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      const firstId = faqItems[0].id;
      const firstButton = document.getElementById(`faq-button-${firstId}`);
      firstButton?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastId = faqItems[itemCount - 1].id;
      const lastButton = document.getElementById(`faq-button-${lastId}`);
      lastButton?.focus();
    }
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and how we can help you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
                ref={(el) => {
                  if (el) {
                    itemRefs.current.set(item.id, el);
                  }
                }}
              >
                <button
                  id={`faq-button-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id, index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {item.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-accent-600 flex-shrink-0 motion-safe:transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  id={`faq-content-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block text-accent-600 hover:text-accent-700 font-semibold focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 rounded"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact us for more information →
          </a>
        </div>
      </div>
    </section>
  );
};

