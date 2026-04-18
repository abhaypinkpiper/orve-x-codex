import { NextResponse } from 'next/server';
import { getProductsFromSheet } from '@/lib/products';

export async function GET() {
  try {
    const products = await getProductsFromSheet();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to load products.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
