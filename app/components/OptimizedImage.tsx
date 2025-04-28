"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

type OptimizedImageProps = Omit<ImageProps, 'onLoadingComplete'> & {
  lowQualitySrc?: string;
};

export default function OptimizedImage({
  src,
  alt,
  className,
  lowQualitySrc,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    // Utilizziamo Intersection Observer per caricare le immagini solo quando sono visibili
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Carica l'immagine quando è a 200px dallo schermo
    );
    
    const currentRef = document.getElementById(`image-${alt?.replace(/\s+/g, '-')}`);
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [alt]);

  return (
    <div 
      className="relative overflow-hidden" 
      id={`image-${alt?.replace(/\s+/g, '-')}`}
    >
      {/* Immagine a bassa qualità o placeholder */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-muted/20 blur-sm ${className}`}
          style={{
            backgroundImage: lowQualitySrc ? `url(${lowQualitySrc})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Carica l'immagine reale solo quando è nel viewport */}
      {isIntersecting && (
        <Image
          src={src}
          alt={alt || ""}
          className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
    </div>
  );
}