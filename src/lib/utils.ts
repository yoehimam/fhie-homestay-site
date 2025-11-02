/**
 * Helper untuk mendapatkan path gambar yang benar dengan basePath
 * Untuk static export dengan basePath di GitHub Pages
 */
const basePath = '/fhie-homestay-site';

export function getImagePath(path: string): string {
  // Pastikan path dimulai dengan /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Tambahkan basePath untuk production
  return `${basePath}${cleanPath}`;
}

