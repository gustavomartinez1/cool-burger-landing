'use client';
import { useEffect } from 'react';
import { initGSAP } from '@/shared/lib/gsap';
import { useScrollReveal } from '@/shared/hooks/useScrollReveal';

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initGSAP();
  }, []);
  
  useScrollReveal();
  
  return <>{children}</>;
}
