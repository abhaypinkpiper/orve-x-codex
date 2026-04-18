import { FaGlobeAsia, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="site-footer">
      <p className="gold-heading">ORVÉ Luxury Jewellery</p>
      <p>Elegance You Wear</p>
      <div>
        <a href="https://orve.co.in" target="_blank" rel="noopener noreferrer">
          <FaGlobeAsia /> orve.co.in
        </a>
        <a href="https://instagram.com/ORVE.jewels" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> @ORVE.jewels
        </a>
      </div>
    </footer>
  );
}
