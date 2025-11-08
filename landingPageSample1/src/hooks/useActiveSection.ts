import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently visible using IntersectionObserver
 * Used for highlighting active navigation links
 */
export const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Create observers for each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersection, {
          rootMargin: '-20% 0px -70% 0px',
          threshold: 0,
        });

        observer.observe(element);
        observers.push(observer);
      }
    });

    // Cleanup
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};

