# Panduan Deploy Portofolio & Sistem Proteksi — Dhodhy Rahmaddi

Dokumen ini berisi panduan teknis dan operasional untuk mengonlinekan portofolio ke **Vercel** dan menyambungkannya ke **Google Firebase**, serta cara kerja sistem proteksi 24 jam dan anti-copy.

---

## 1. Cara Deploy ke Vercel (Gratis & Cepat)

Portofolio ini sudah dilengkapi dengan file konfigurasi [\`vercel.json\`](./vercel.json). Anda bisa mendeploynya dengan 2 cara:

### Cara A: Lewat Vercel CLI (Paling Cepat)
1. Buka terminal di folder portofolio:
   \`\`\`bash
   cd "D:\\DHODHY\\APLIKASI BIKINAN CODEX\\PORTOFILIO"
   \`\`\`
2. Jalankan perintah:
   \`\`\`bash
   npx vercel
   \`\`\`
3. Ikuti petunjuk di terminal (Login dengan GitHub/Email, pilih nama project, set default).
4. Dalam 30 detik, portofolio Anda sudah aktif dengan domain gratis seperti: `dhodhy-portfolio.vercel.app` (lengkap dengan HTTPS aman untuk link bio Instagram).

### Cara B: Lewat GitHub & Dashboard Vercel
1. Push folder `PORTOFILIO` ke repositori GitHub pribadi Anda.
2. Buka [vercel.com](https://vercel.com) dan login.
3. Klik **"Add New Project"** &rarr; pilih repositori Anda &rarr; klik **"Deploy"**.

---

## 2. Cara Menghubungkan Google Firebase (Firestore)

File konfigurasi sudah siap di [\`firebase-config.js\`](./firebase-config.js).

1. Buka [Firebase Console Google](https://console.firebase.google.com/).
2. Buat project baru: misal `dhodhy-portfolio`.
3. Di menu sebelah kiri, aktifkan **Firestore Database** (pilih mode produksi atau test mode).
4. Masuk ke **Project Settings** &rarr; **Your Apps** &rarr; pilih **Web (</>)**.
5. Salin objek `firebaseConfig` dan tempelkan ke dalam file `firebase-config.js`.
6. Saat web tayang di Vercel, Firebase akan otomatis mencatat data sesi trial dan analitik klik WhatsApp dari pengunjung Instagram.

---

## 3. Cara Kerja Sistem Pengamanan & Uji Coba 24 Jam

Setiap sample project interaktif di folder `BAHAN/` dilindungi sistem 4 lapis:
1. **Timer Uji Coba 24 Jam:**
   - Dihitung otomatis sejak pertama kali pengunjung membuka demo.
   - Sisa waktu tampil di floating banner atas: `⏱️ Sesi Uji Coba: 23j 59m`.
   - Begitu lewat 24 jam, tombol interaksi terkunci dan muncul ajakan untuk menghubungi Mas Dhodhy via WhatsApp.
2. **Kapasitas Dibatasi (Sandbox Limit):**
   - Kasir dibatasi maksimal 5x cetak transaksi uji coba.
   - Reader rekening koran fokus pada 20 baris mutasi sample.
3. **Watermark Otomatis pada Struk & File:**
   - Hasil struk kasir dan ekspor Excel tertanam tulisan permanen:
     `[ DUMMY TRIAL VERSION • Dhodhy Rahmaddi (0877-0339-7035) ]`
     sehingga tidak bisa disalahgunakan untuk toko asli tanpa izin.
4. **Anti-Inspect & Anti-Theft:**
   - Klik kanan dinonaktifkan.
   - Tombol keyboard `F12`, `Ctrl+U`, `Ctrl+S`, `Ctrl+Shift+I` diblokir.

---

## 4. "Kunci Rahasia" untuk Mas Dhodhy (Bypass & Reset Timer)

Agar Mas Dhodhy tidak pernah terkunci di laptop sendiri saat presentasi:
- **Cara 1:** Tambahkan parameter `?dev=dhodhy` di belakang URL saat membuka demo (contoh: `10. Warung-OS-Kasir-Mandiri.html?dev=dhodhy`).
- **Cara 2:** **Klik 3x pada logo Warung OS** di pojok kiri atas, sistem akan otomatis mereset timer ke 24 jam penuh!

---

*Dibuat khusus untuk ekosistem portofolio lapangan Dhodhy Rahmaddi • Sidoarjo, 2026*
