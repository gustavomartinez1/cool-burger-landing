'use client';
import { useEffect } from 'react';
import { initGSAP } from '@/shared/lib/gsap';

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initGSAP();
  }, []);
  
  return <>{children}</>;
}
