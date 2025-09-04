'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@mantine/core'


export default function Home() {

  return (
    <div>
      <h1>Home Page!</h1>
      <Button component={Link} href="/listings">
        Go to Listings
      </Button>
    </div>
  );
}