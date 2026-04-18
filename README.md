# ORVÉ Luxury Jewellery — Next.js Storefront

Ultra-luxury animated ecommerce website for **ORVÉ Luxury Jewellery** (tagline: *Elegance You Wear*).

## Stack
- Next.js (App Router)
- Google Sheets API (live product source)
- AWS S3 API (media URL endpoint)
- Framer Motion + CSS animations
- React Icons

## Product source format
Each Google Sheet row should follow this order:

`name, description, price, offerprice, offerenabled, imgurl(comma separated), videourl(comma separated)`

## Setup
Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SHEET_RANGE=Sheet1!A:G
GOOGLE_SERVICE_ACCOUNT_EMAIL=service_account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

AWS_REGION=ap-south-1
AWS_S3_BUCKET=your_bucket
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
```

## Run
```bash
npm install
npm run dev
```

## Endpoints
- `GET /api/products` → live products from Google Sheets
- `GET /api/media` → signed URLs of S3 objects

## WhatsApp order flow
Every product card generates a link like:

`https://api.whatsapp.com/send/?phone=917977459392&text=<product_details>`
