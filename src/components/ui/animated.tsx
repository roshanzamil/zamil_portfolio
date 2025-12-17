"use client";

import { useRef, useEffect, type ReactNode } from 'react';
import { gsap } from 'gsap';

type AnimatedProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  className?: string;
  as?: React.ElementType;
};

export function Animated({
  children,
  delay = 0,
  duration = 0.8,
  y = 50,
  x = 0,
  opacity = 0,
  scale = 1,
  className,
  as = 'div',
}: AnimatedProps) {
  const el = useRef<Element>(null);
  const Component = as;

  useEffect(() => {
    gsap.fromTo(
      el.current,
      { opacity, y, x, scale },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        delay,
        duration,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [delay, duration, y, x, opacity, scale]);

  return (
    <Component ref={el} className={className}>
      {children}
    </Component>
  );
}
