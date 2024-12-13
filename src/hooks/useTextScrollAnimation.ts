import { useState, useEffect, useRef } from 'react';

export default function useTextScrollAnimation(text: string) {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setShouldScroll(textWidth > containerWidth);
    }
  }, [text]);

  const getScrollDistance = () => {
    if (textRef.current && containerRef.current) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      return textWidth - containerWidth + 32;
    }
    return 0;
  };
  return {
    textRef,
    containerRef,
    shouldScroll,
    getScrollDistance,
    isHovered,
    setIsHovered,
  };
}
