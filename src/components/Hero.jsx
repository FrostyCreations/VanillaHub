import React, { useState, useRef, memo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = ({ data }) => {
  const containerRef = useRef(null);
  
  // Motion Values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid motion
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Map mouse movement to subtle parallax offsets
  const moveX = useTransform(springX, [-500, 500], [-30, 30]); 
  const moveY = useTransform(springY, [-300, 300], [-20, 20]); 
  const rotateY = useTransform(springX, [-500, 500], [-10, 10]); 
  const rotateX = useTransform(springY, [-300, 300], [10, -10]); 

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize to center or specific range
    mouseX.set(x - rect.width / 2);
    mouseY.set(y - rect.height / 2);
  };

  return (
    <section 
      id="home" 
      className="hero-section card-layout"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="container">
        <div className="hero-main-card">
          <div className="hero-card-background">
            <video 
              src="/Hero Scene.mov" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="hero-card-video"
            />
            <div className="hero-card-overlay"></div>
            
            {/* Wavy Wave Accent inside the card */}
            <div className="hero-wave-container">
              <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-wave-svg" preserveAspectRatio="none">
                <path d="M0 80C300 120 600 20 1000 40C1200 50 1350 80 1440 100V120H0V80Z" fill="#FFAA00" />
                <path d="M0 100C300 140 600 40 1000 60C1200 70 1350 100 1440 120H0V100Z" fill="#FF8800" />
              </svg>
            </div>
          </div>

          <div className="hero-robot-container">
            <motion.img 
              src="/robot-new.png" 
              alt="AI Robot" 
              className="hero-robot-img"
              style={{ 
                x: moveX, 
                y: moveY,
                rotateY,
                rotateX,
                perspective: 1000
              }}
              animate={{ 
                translateY: [0, -15, 0] // Bobbing movement
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>

          <div className="hero-card-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: data.title }} />
            </motion.div>
          </div>


        </div>

        <motion.div 
          className="hero-powered-by"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            padding: '1.5rem',
            borderRadius: '16px',
            background: 'linear-gradient(90deg, rgba(255, 170, 0, 0.05) 0%, rgba(255, 170, 0, 0.1) 50%, rgba(255, 170, 0, 0.05) 100%)',
            border: '1px solid rgba(255, 170, 0, 0.2)'
          }}
        >
          <p style={{
            margin: 0,
            fontSize: '1.25rem',
            color: '#ffffff',
            fontWeight: '400',
            letterSpacing: '0.5px'
          }}>
            Powered by <strong style={{ color: '#FFAA00' }}>Intelligent automation</strong> and <strong style={{ color: '#FFAA00' }}>practical business insight</strong>.
          </p>
        </motion.div>

        {/* Quote Section */}
        <motion.div 
          className="hero-quote-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="hero-quote">
            "Business should not be complicated. The right systems make it simple, efficient and built to grow."
          </p>
          <span className="quote-author">— VanillaHub</span>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);
