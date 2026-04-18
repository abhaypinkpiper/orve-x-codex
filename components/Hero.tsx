'use client';

import { motion } from 'framer-motion';
import { GoldDust } from './GoldDust';
import { FaInstagram, FaGem } from 'react-icons/fa';

export function Hero() {
  return (
    <section className="hero" id="home">
      <GoldDust />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="hero-content"
      >
        <p className="tagline">Elegance You Wear</p>
        <h1 className="gold-heading">ORVÉ Luxury Jewellery</h1>
        <p>
          Discover handcrafted pieces designed for timeless sophistication. Luxury storytelling, rare sparkle,
          and unforgettable grace in every collection.
        </p>
        <div className="hero-actions">
          <a href="#catalog" className="btn-primary">
            <FaGem /> Explore Collection
          </a>
          <a href="https://instagram.com/ORVE.jewels" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FaInstagram /> Follow @ORVE.jewels
          </a>
        </div>
      </motion.div>
    </section>
  );
}
