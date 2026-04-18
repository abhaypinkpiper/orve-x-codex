import { google } from 'googleapis';
import { Product } from './types';

const parseCsvLinks = (value: string | null | undefined): string[] => {
  if (!value) return [];
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
};

const asNumber = (value: string | null | undefined): number => {
  const parsed = Number(value ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
};

const asBool = (value: string | null | undefined): boolean => {
  if (!value) return false;
  const v = value.toLowerCase().trim();
  return v === 'true' || v === '1' || v === 'yes';
};

const mapRowToProduct = (row: string[]): Product => {
  const [name, description, price, offerPrice, offerEnabled, imgUrls, videoUrls] = row;

  return {
    name: name?.trim() ?? 'Unnamed Product',
    description: description?.trim() ?? '',
    price: asNumber(price),
    offerPrice: offerPrice ? asNumber(offerPrice) : undefined,
    offerEnabled: asBool(offerEnabled),
    imgUrls: parseCsvLinks(imgUrls),
    videoUrls: parseCsvLinks(videoUrls)
  };
};

export async function getProductsFromSheet(): Promise<Product[]> {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:G';
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error('Missing Google Sheets environment configuration.');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
  const rows = (response.data.values || []) as string[][];

  if (rows.length <= 1) return [];

  return rows.slice(1).map(mapRowToProduct);
}
