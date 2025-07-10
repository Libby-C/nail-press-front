import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://localhost:5181/');
    const data = await response.text();
    return NextResponse.json({message: data});
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}