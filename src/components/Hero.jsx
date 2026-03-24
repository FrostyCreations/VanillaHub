import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = ({ data }) => {
  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="glow-orb orb-1">
        {data.heroVideoUrl ? (
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            poster={data.heroImageUrl}
          >
            <source src={data.heroVideoUrl} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={data.heroImageUrl || "/vanilla-robot.png"} 
            alt="Hero" 
            className="hero-video" 
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        )}
      </div>
      
      <div className="hero-container container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hero-badge"
          >
            {data.badge}
          </motion.div>
          
          <h1 className="hero-title">
            {data.title}
          </h1>
          
          <p className="hero-description">
            {data.subtitle}
          </p>
          
          <div className="hero-actions">
            <motion.a 
              href="#summary" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Proposal <ArrowRight size={20} className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);
