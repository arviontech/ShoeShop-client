import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface HeroContent {
  tagline: string;
  description: string;
  ctaText: string;
}

const contentList: HeroContent[] = [

  
 
  {
    tagline: 'Step into Style',
    description: 'PREMIUM SHOE COLLECTION',
    ctaText: 'SHOP NOW',
  },
  {
    tagline: 'Comfort in Every Step',
    description: 'WALK WITH CONFIDENCE',
    ctaText: 'DISCOVER MORE',
  },
  {
    tagline: 'Unleash Your Sole',
    description: 'LIMITED EDITION FOOTWEAR',
    ctaText: 'BUY NOW',
  },
  {
    tagline: 'Where Fashion Meets Function',
    description: 'SNEAKERS FOR EVERY OCCASION',
    ctaText: 'EXPLORE',
  },
];


const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const { tagline, description, ctaText } = contentList[currentIndex];

  const animateIn = () => {
    if (taglineRef.current && descriptionRef.current && ctaRef.current) {
      gsap.fromTo(taglineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      gsap.fromTo(descriptionRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 });
      gsap.fromTo(ctaRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)", delay: 0.4 });
    }
  };

  const animateOut = async () => {
    return new Promise<void>((resolve) => {
      const tl = gsap.timeline({ onComplete: () => resolve() });

      tl.to([taglineRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.inOut',
      });
    });
  };

  // Auto rotate with animation
  useEffect(() => {
    const interval = setInterval(async () => {
      if (animating) return;

      setAnimating(true);
      await animateOut();
      setCurrentIndex((prev) => (prev + 1) % contentList.length);
      setTimeout(() => {
        animateIn();
        setAnimating(false);
      }, 100); // tiny delay for smoother switch
    }, 6000); // every 6 seconds

    return () => clearInterval(interval);
  }, [animating]);

  // Initial mount animation
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
    animateIn();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative  mx-auto max-w-7xl h-[30vw] overflow-hidden bg-gray-900 flex flex-col items-center justify-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Video background */}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dufs2ywc7/video/upload/v1744191531/853958-hd_1920_1080_30fps_zvigak.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2
          ref={taglineRef}
          className="text-white text-4xl md:text-5xl italic font-light mb-4"
        >
          {tagline}
        </h2>

        <h1
          ref={descriptionRef}
          className="text-white text-5xl md:text-7xl font-bold mb-8"
        >
          {description}
        </h1>

        

        <button
          ref={ctaRef}
          onClick={() => console.log('CTA clicked')}
          className="px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
        >
          {ctaText}
        </button>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-10 left-10 z-10">
        <button className="w-10 h-10 border border-white text-white flex items-center justify-center mr-2">
          &lt;
        </button>
      </div>
      <div className="absolute bottom-10 right-10 z-10">
        <button className="w-10 h-10 border border-white text-white flex items-center justify-center">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
