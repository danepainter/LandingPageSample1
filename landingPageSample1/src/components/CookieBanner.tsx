import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookie-consent-accepted';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'dismissed');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              We use cookies to enhance your browsing experience and analyze site traffic. By
              clicking "Accept", you consent to our use of cookies.{' '}
              <a
                href="#privacy"
                className="underline hover:text-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400 rounded"
              >
                Learn more
              </a>
            </p>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleDismiss}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Dismiss
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium bg-accent-600 text-white rounded hover:bg-accent-700 motion-safe:transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

