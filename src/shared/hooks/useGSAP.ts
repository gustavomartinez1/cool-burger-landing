'use client';
import { useEffect } from 'react';
import { initGSAP } from '@/shared/lib/gsap';

export const useGSAP = () => {
  useEffect(() => {
    initGSAP();
  }, []);
};