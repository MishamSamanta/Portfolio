import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  tag?: React.ElementType;
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const animationCompletedRef = useRef(false);

  useEffect(() => {
    const checkFonts = async () => {
      try {
        await (document as any).fonts.ready;
        setFontsLoaded(true);
      } catch (e) {
        setFontsLoaded(true);
      }
    };
    checkFonts();
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;

      const el = ref.current;
      const targets = el.querySelectorAll('.split-char');

      const startPct = (1 - threshold) * 100;
      const start = `top ${startPct}%`;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onLetterAnimationComplete?.();
          },
        }
      );
    },
    {
      dependencies: [text, fontsLoaded, delay, duration, ease, threshold, rootMargin],
      scope: ref,
    }
  );

  const Tag = tag as any;

  return (
    <Tag
      ref={ref}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'inline-block',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}
      className={`split-parent ${className}`}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="split-char inline-block"
          style={{ 
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            display: 'inline-block',
            willChange: 'transform, opacity'
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
