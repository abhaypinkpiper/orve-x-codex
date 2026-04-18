import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { ScrollEffects } from '@/components/ScrollEffects';
import { CursorTrail } from '@/components/CursorTrail';
import { Product } from '@/lib/types';

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/products`, {
      cache: 'no-store'
    });

    if (!res.ok) return [];
    const data = (await res.json()) as { products: Product[] };
    return data.products;
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <CursorTrail />
      <ScrollEffects />
      <Hero />
      <ProductGrid products={products} />
      <Footer />
    </main>
  );
}
