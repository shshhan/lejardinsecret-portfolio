import { NextRequest, NextResponse } from 'next/server';
import { getVenueImages } from '@/lib/venues';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ venueName: string }> }
) {
  const resolvedParams = await params;
  const { venueName } = resolvedParams;

  try {
    const venueData = await getVenueImages(venueName);

    if (!venueData || !venueData.images || venueData.images.length === 0) {
      return NextResponse.json({ error: 'Venue not found or has no images' }, { status: 404 });
    }

    return NextResponse.json(venueData);
  } catch (error) {
    console.error(`Error fetching venue images for ${venueName}:`, error);
    return NextResponse.json({ error: 'Failed to fetch venue images' }, { status: 500 });
  }
}
