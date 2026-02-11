'use client'

import { useEffect } from 'react';

interface RedirectProps {
  to: string;
}

export const Redirect = ({ to }: RedirectProps) => {  
  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);
  
  return null;
};
