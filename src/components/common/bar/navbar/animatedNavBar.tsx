'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '<prefix>/components/common/bar/navbar/navBar';

export default function AnimatedNavBar({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0); // 마지막 스크롤 위치

  useEffect(() => {
    const currentHeight = window.innerHeight; // 현재 스크롤 + 화면 높이
    const scrollHeight = containerRef.current?.scrollHeight || 0; // 부모 컨테이너 전체 높이
    console.log(currentHeight, scrollHeight);
    if (currentHeight === scrollHeight) setIsNavFixed(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (!container) return;

      const scrollTop = container.scrollTop; // 현재 스크롤 위치
      const currentHeight = window.innerHeight; // 화면 높이
      const scrollHeight = container.scrollHeight; // 부모 컨테이너 전체 높이

      const isScrollingDown = scrollTop > lastScrollTop; // 아래로 스크롤 여부
      const isAtBottom = scrollTop + currentHeight >= scrollHeight - 10; // 맨 아래 도달 여부 (오차 포함)
      setShowNav(isAtBottom || isScrollingDown);
      setLastScrollTop(scrollTop); // 마지막 스크롤 위치 업데이트
    };

    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, lastScrollTop]);

  return (
    <AnimatePresence>
      {isNavFixed ? (
        <NavBar />
      ) : (
        showNav && (
          <motion.div
            style={{ position: 'sticky', bottom: 0, width: '100%' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <NavBar />
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
}
