'use client';

import Image from 'next/image';
import { Product } from '@/lib/types';
import { FaWhatsapp, FaTag, FaRupeeSign, FaVideo } from 'react-icons/fa';

const PHONE = '917977459392';

function buildWhatsappMessage(product: Product): string {
  const activePrice = product.offerEnabled && product.offerPrice ? product.offerPrice : product.price;
  const images = product.imgUrls.join(', ');
  return [
    'Hello ORVÉ Team, I would like to order this product:',
    `Product: ${product.name}`,
    `Description: ${product.description}`,
    `Price: ₹${activePrice}`,
    images ? `Images: ${images}` : ''
  ]
    .filter(Boolean)
    .join('\n');
}

export function ProductCard({ product }: { product: Product }) {
  const activePrice = product.offerEnabled && product.offerPrice ? product.offerPrice : product.price;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${PHONE}&text=${encodeURIComponent(buildWhatsappMessage(product))}`;

  return (
    <article className="product-card reveal">
      <div className="media-wrap">
        <Image
          src={product.imgUrls[0] || 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=80'}
          alt={product.name}
          width={800}
          height={960}
          className="product-image"
        />
      </div>
      <div className="product-content">
        <h3 className="gold-heading">{product.name}</h3>
        <p>{product.description}</p>
        <div className="price-row">
          {product.offerEnabled && product.offerPrice ? (
            <>
              <span className="old-price"><FaTag /> ₹{product.price}</span>
              <span className="new-price"><FaRupeeSign /> {product.offerPrice}</span>
            </>
          ) : (
            <span className="new-price"><FaRupeeSign /> {activePrice}</span>
          )}
        </div>
        {product.videoUrls.length > 0 && (
          <a href={product.videoUrls[0]} target="_blank" rel="noopener noreferrer" className="video-link">
            <FaVideo /> View Product Video
          </a>
        )}
        <a className="whatsapp-btn" href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> Order via WhatsApp
        </a>
      </div>
    </article>
  );
}
