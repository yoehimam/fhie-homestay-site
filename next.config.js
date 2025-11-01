/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mengubah output menjadi statis agar kompatibel dengan GitHub Pages
  output: 'export',

  // WAJIB: Nonaktifkan optimasi gambar bawaan Next.js untuk static export
  images: {
    unoptimized: true,
  },

  // OPSIONAL: Jika Anda deploy ke `username.github.io/nama-repo`,
  // hapus komentar di bawah dan ganti `nama-repo` dengan nama repositori Anda.
  // basePath: '/nama-repo',
  // assetPrefix: '/nama-repo',
};

module.exports = nextConfig;
