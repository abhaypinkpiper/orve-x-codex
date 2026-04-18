'use client';

import { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="catalog parallax" id="catalog">
      <div className="section-header reveal">
        <p className="section-label">Curated Collection</p>
        <h2 className="gold-heading">Luxury Pieces, Live from Google Sheets</h2>
      </div>
      <div className="products-grid">
        {products.map((product, idx) => (
          <ProductCard key={`${product.name}-${idx}`} product={product} />
        ))}
      </div>
    </section>
  );
}
