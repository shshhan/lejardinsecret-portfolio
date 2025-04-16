import { NextRequest, NextResponse } from 'next/server';
import { getVenueImages } from '@/lib/venues';

export async function GET(
  request: NextRequest,
  { params }: { params: { venueName: string } | Promise<{ venueName: string }> }
) {
  // Next.js 15.3.0에서는 params가 Promise일 수 있으므로 await 처리
  const resolvedParams = await Promise.resolve(params);
  const { venueName } = resolvedParams;

  try {
    const images = await getVenueImages(venueName);

    if (!images || images.length === 0) {
      return NextResponse.json({ error: 'Venue not found or has no images' }, { status: 404 });
    }

    return NextResponse.json(images);
  } catch (error) {
    console.error(`Error fetching venue images for ${venueName}:`, error);
    return NextResponse.json({ error: 'Failed to fetch venue images' }, { status: 500 });
  }
}
