import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react';

const ScrollBackground: React.FC = ({data}) => {
  // Hook to track the scroll progress
  const { scrollYProgress } = useScroll();

  // Interpolating scroll progress for color and image opacity
  const firstImageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // First image fades out
  const grayBackgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]); // Gray fades in
  const secondImageOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]); // Second image fades in


  console.log(data.backgroundImages)

  return (
    <div style={{ position: 'fixed', height: '100vh', width: '100%' }}>
      {/* First image layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100%',
          backgroundImage: `url(${data?.backgroundImages[0]})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: firstImageOpacity, // Animate opacity for the first image
          transition: 'opacity 0.5s ease-in-out',
        }}
      />

      {/* Gray background layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#131313',
          opacity: grayBackgroundOpacity, // Animate opacity for the gray background
          transition: 'opacity 0.5s ease-in-out',
        }}
      />

      {/* Second image layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${data?.backgroundImages[1]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: secondImageOpacity, // Animate opacity for the second image
          transition: 'opacity 0.5s ease-in-out',
        }}
      />

      <h1 style={{ textAlign: 'center', color: 'transparent', paddingTop: '50vh' }}>
        S
      </h1>
    </div>
  );
};

export default ScrollBackground;
