import React from 'react';
import RoomDetailClient from './RoomDetailClient';

// Export function ini untuk static generation saat build
// Next.js akan memanggil ini untuk generate semua halaman statis
export function generateStaticParams() {
  return [
    { slug: 'kamar-deluxe' },
    { slug: 'suite-keluarga' },
  ];
}

export default async function RoomDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  return <RoomDetailClient slug={slug} />;
}
