import { useEffect } from 'react';
import { animateFrom } from '@/shared/lib/gsap';

export const useHeroAnimations = () => {
  useEffect(() => {
    // Animate hero title
    const titleElement = document.querySelector('.hero-title') as HTMLElement | null;
    if (titleElement) {
      animateFrom(titleElement, { opacity: 0, y: 50 }, 1, 0);
    }
    
    // Animate burger illustration
    const burgerElement = document.querySelector('.burger-illustration') as HTMLElement | null;
    if (burgerElement) {
      animateFrom(burgerElement, { opacity: 0, scale: 0.8 }, 1, 0.3);
    }
    
    // Animate CTA button
    const ctaElement = document.querySelector('.hero-cta') as HTMLElement | null;
    if (ctaElement) {
      animateFrom(ctaElement, { opacity: 0, y: 30 }, 1, 0.6);
    }
  }, []);
};