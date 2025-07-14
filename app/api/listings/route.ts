import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    const data = await response.text();
    return NextResponse.json({message: data});
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}