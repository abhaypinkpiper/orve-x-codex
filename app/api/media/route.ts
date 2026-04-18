import { NextResponse } from 'next/server';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function GET() {
  const region = process.env.AWS_REGION;
  const bucket = process.env.AWS_S3_BUCKET;

  if (!region || !bucket) {
    return NextResponse.json({ error: 'Missing AWS configuration.' }, { status: 500 });
  }

  const client = new S3Client({
    region,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ''
    }
  });

  try {
    const listed = await client.send(new ListObjectsV2Command({ Bucket: bucket, MaxKeys: 20 }));
    const urls = await Promise.all(
      (listed.Contents ?? [])
        .filter((item) => !!item.Key)
        .map(async (item) => {
          const Key = item.Key as string;
          return getSignedUrl(client, new GetObjectCommand({ Bucket: bucket, Key }), { expiresIn: 3600 });
        })
    );

    return NextResponse.json({ urls });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to fetch S3 media links.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
