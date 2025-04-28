"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Utilizzare IntersectionObserver per migliori performance
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(!entry.isIntersecting);
      },
      { rootMargin: "-300px 0px 0px 0px" }
    );

    const target = document.getElementById("top-observer");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Elemento osservatore posizionato in cima alla pagina */}
      <div id="top-observer" className="absolute top-0 h-1 w-full pointer-events-none" />
      
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="fixed bottom-6 right-6 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Torna in cima"
            // Aumenta l'area touch con padding senza modificare la dimensione visiva
            style={{
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up" aria-hidden="true">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
