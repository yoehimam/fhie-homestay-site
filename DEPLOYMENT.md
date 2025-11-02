# Panduan Deployment ke GitHub Pages

Panduan lengkap untuk mendeploy website FHie Homestay ke GitHub Pages.

## 📋 Prasyarat

1. Akun GitHub (gratis)
2. Repository GitHub (sudah dibuat atau akan dibuat)
3. Git terinstall di komputer Anda

## 🚀 Langkah-langkah Deployment

### 1. Siapkan Repository GitHub

**Jika repository belum ada:**

1. Buka [GitHub.com](https://github.com) dan login
2. Klik tombol **"New"** atau **"+"** di pojok kanan atas
3. Isi nama repository (misalnya: `fhie-homestay-site`)
4. Pilih **Public** (gratis untuk GitHub Pages)
5. **JANGAN** centang "Add a README file" (karena sudah ada)
6. Klik **"Create repository"**

### 2. Konfigurasi Repository Lokal

Buka terminal/PowerShell di folder project Anda (`D:\deploy`) dan jalankan:

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file ke staging
git add .

# Commit perubahan pertama
git commit -m "Initial commit: FHie Homestay website"

# Tambahkan remote repository (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push ke GitHub (untuk pertama kali)
git branch -M main
git push -u origin main
```

**⚠️ PENTING:** Ganti `USERNAME` dengan username GitHub Anda dan `REPO_NAME` dengan nama repository Anda.

### 3. Update next.config.js

Buka file `next.config.js` dan pastikan `basePath` dan `assetPrefix` sesuai dengan nama repository Anda:

```javascript
basePath: '/nama-repository-anda',  // Ganti dengan nama repo Anda
assetPrefix: '/nama-repository-anda',  // Ganti dengan nama repo Anda
```

**Contoh:**
- Jika repository Anda: `fhie-homestay-site`
- Maka gunakan: `basePath: '/fhie-homestay-site'`

**Jika deploy ke domain utama** (username.github.io):
- Hapus atau comment baris `basePath` dan `assetPrefix`

### 4. Aktifkan GitHub Pages

1. Buka repository Anda di GitHub
2. Klik tab **"Settings"** di bagian atas
3. Scroll ke bawah ke bagian **"Pages"** di sidebar kiri
4. Di bagian **"Source"**, pilih:
   - **Source:** `GitHub Actions`
5. Klik **"Save"**

### 5. Push Kode ke GitHub

Setelah membuat perubahan di `next.config.js`, commit dan push:

```bash
git add next.config.js
git commit -m "Update basePath untuk GitHub Pages"
git push origin main
```

### 6. Tunggu Deployment

1. Klik tab **"Actions"** di repository GitHub Anda
2. Anda akan melihat workflow **"Deploy Next.js site to Pages"** berjalan
3. Tunggu sampai selesai (sekitar 2-5 menit)
4. Setelah selesai, ada icon hijau ✓

### 7. Akses Website

Setelah deployment selesai:

- **Jika repository:** `username/nama-repo`
  - URL: `https://username.github.io/nama-repo/`

- **Jika repository:** `username/username.github.io`
  - URL: `https://username.github.io/`

## 🔄 Update Website (Setelah Setup Pertama)

Setiap kali Anda ingin update website:

```bash
# 1. Buat perubahan di kode
# ... edit file ...

# 2. Commit perubahan
git add .
git commit -m "Update: deskripsi perubahan"

# 3. Push ke GitHub
git push origin main
```

GitHub Actions akan otomatis:
- Build website
- Deploy ke GitHub Pages

Anda bisa melihat progress di tab **"Actions"** di repository.

## 🐛 Troubleshooting

### Website tidak muncul

1. **Cek GitHub Actions:**
   - Buka tab "Actions"
   - Lihat apakah ada error (icon merah ❌)
   - Klik workflow yang gagal untuk melihat detail error

2. **Cek basePath:**
   - Pastikan `basePath` di `next.config.js` sesuai nama repository
   - Cek juga URL yang benar

3. **Tunggu beberapa menit:**
   - GitHub Pages butuh waktu untuk update
   - Refresh browser setelah 2-3 menit

### Build Error

Jika build gagal:
1. Cek error di tab "Actions"
2. Pastikan semua dependencies terinstall dengan benar
3. Pastikan `package.json` dan `package-lock.json` sudah di-commit

### Gambar tidak muncul

1. Pastikan semua gambar ada di folder `public/images/`
2. Pastikan path gambar dimulai dengan `/images/` (bukan `images/`)
3. Cek console browser untuk error 404

## 📝 Checklist Deployment

- [ ] Repository GitHub sudah dibuat
- [ ] Git initialized dan kode sudah di-push
- [ ] `basePath` di `next.config.js` sudah disesuaikan
- [ ] GitHub Pages sudah diaktifkan (Settings > Pages > Source: GitHub Actions)
- [ ] Workflow berhasil di Actions tab
- [ ] Website bisa diakses di URL GitHub Pages

## 🎉 Selesai!

Website Anda sekarang sudah online di GitHub Pages!

Untuk pertanyaan lebih lanjut, silakan buka [dokumentasi GitHub Pages](https://docs.github.com/en/pages).

