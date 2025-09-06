import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.95);

  useEffect(() => {
    // Fade in animation
    const fadeInTimer = setTimeout(() => {
      setOpacity(1);
      setScale(1);
    }, 200);

    // Hold the logo visible
    const holdTimer = setTimeout(() => {
      // Start fade out
      setOpacity(0);
      setScale(1.05);
    }, 3500);

    // Complete the splash screen
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(holdTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      {/* Logo Container */}
      <div 
        className="transition-all duration-1000 ease-out"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div className="bg-black px-12 py-6 rounded-lg shadow-2xl">
          <h1 className="text-white font-bold text-4xl md:text-5xl tracking-wider">
            ZERO FLAMES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;