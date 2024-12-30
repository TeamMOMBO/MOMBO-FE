'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '<prefix>/components/common/bar/navbar/navBar';

export default function AnimatedNavBar() {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (endRef.current) {
        const { bottom } = endRef.current.getBoundingClientRect();
        const isAtBottom = bottom <= window.innerHeight;

        // 페이지 끝에 도달하거나 아래로 스크롤 시 Nav 표시
        if (isAtBottom) {
          setShowNav(true);
        } else if (currentScrollTop > lastScrollTop) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      } else if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
      ) {
        // 모바일 환경에서 높이가 작을 경우 페이지 끝 감지
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <div ref={endRef} style={{ height: '1px' }} /> {/* 페이지 끝 감지용 */}
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
