import { useScrollTopVisible } from '../hooks/useScrollTopVisible';

export const BackToTop = () => {
  const isVisible = useScrollTopVisible(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Focus on skip link or first focusable element for accessibility
    setTimeout(() => {
      const skipLink = document.querySelector('a[href="#main-content"]') as HTMLElement;
      if (skipLink) {
        skipLink.focus();
      }
    }, 500);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 bg-accent-600 text-white p-3 rounded-full shadow-lg hover:bg-accent-700 motion-safe:transition-all motion-safe:hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2"
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

