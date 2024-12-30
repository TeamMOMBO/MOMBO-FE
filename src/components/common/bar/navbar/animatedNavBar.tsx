'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '<prefix>/components/common/bar/navbar/navBar';

export default function AnimatedNavBar() {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0); // 마지막 스크롤 위치

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY; // 현재 스크롤 위치
      const scrollPosition = currentScrollTop + window.innerHeight; // 현재 스크롤 + 화면 높이
      const documentHeight = document.documentElement.scrollHeight; // 문서 전체 높이

      // 스크롤 내릴 때 + 최하단 도달 (currentScrollTop이 lastScrollTop보다 커지면)
      if (
        (currentScrollTop > lastScrollTop && scrollPosition < documentHeight) ||
        scrollPosition >= documentHeight
      ) {
        setShowNav(true);
      } else if (currentScrollTop < lastScrollTop) {
        // 스크롤 올릴 때
        setShowNav(false);
      }

      // 마지막 스크롤 위치 업데이트
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <AnimatePresence>
        {showNav && (
          <motion.div
            style={{ position: 'sticky', bottom: 0, width: '100%' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <NavBar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
