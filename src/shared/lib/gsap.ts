import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initGSAP = () => {
  // GSAP is already initialized by registration above
  // This function exists for consistency and potential future configuration
};

export const animateFrom = (element: HTMLElement, animationProps: any, duration = 1, delay = 0) => {
  gsap.from(element, {
    ...animationProps,
    duration,
    delay,
    ease: 'power3.out',
  });
};

export const animateTo = (element: HTMLElement, animationProps: any, duration = 1, delay = 0) => {
  gsap.to(element, {
    ...animationProps,
    duration,
    delay,
    ease: 'power3.out',
  });
};

export const animateSectionOnScroll = (selector: string, animationProps: any, duration = 1) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom+=100',
        toggleActions: 'play none none reverse',
      },
      ...animationProps,
      duration,
      ease: 'power3.out',
    });
  });
};

export const staggerChildrenOnScroll = (
  parentSelector: string,
  childSelector: string,
  animationProps: any,
  duration = 0.5,
  staggerAmount = 0.2
) => {
  gsap.utils.toArray<HTMLElement>(parentSelector).forEach((parent) => {
    gsap.from(parent.querySelectorAll(childSelector), {
      scrollTrigger: {
        trigger: parent,
        start: 'top bottom+=100',
        toggleActions: 'play none none reverse',
      },
      ...animationProps,
      duration,
      stagger: staggerAmount,
      ease: 'power3.out',
    });
  });
};

export default {
  initGSAP,
  animateFrom,
  animateTo,
  animateSectionOnScroll,
  staggerChildrenOnScroll,
};