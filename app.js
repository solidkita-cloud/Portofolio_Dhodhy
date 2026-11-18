// Dhodhy Rahmaddi Portfolio Script
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Project Data Dictionary for Case Study Modal
  const projectDatabase = {
    'rekening-koran': {
      tag: 'FINANCE AUTOMATION • OFFLINE ENGINE',
      title: 'Pembaca & Ekstraktor Rekening Koran Instan',
      stat1: '2 Jam → 5 Detik',
      stat2: '100% Offline (Zero Data Leak)',
      problem: 'Staf keuangan perusahaan menghabiskan 2–3 jam setiap hari hanya untuk menyalin dan mencocokkan mutasi bank dari PDF ke Excel secara manual. File ribuan baris rentan salah ketik angka, dan mengunggah dokumen rekening koran ke website converter online gratis sangat berisiko membocorkan rahasia saldo serta arus kas perusahaan.',
      solution: 'Dibuatkan aplikasi web offline-first yang membaca langsung berkas PDF rekening koran (BCA, Mandiri, dll) 100% di browser lokal tanpa server perantara. Mutasi ribuan baris langsung dikonversi ke format Excel/CSV yang rapi dan siap audit dalam hitungan 5 detik.',
      features: [
        'Ekstraksi tabel mutasi bank presisi tinggi dari format PDF BCA dan bank nasional lainnya.',
        'Engine berjalan 100% offline (Client-side execution via Web APIs), tidak ada data yang terkirim ke internet.',
        'Ekspor otomatis ke format Excel (.xlsx) dan CSV dengan format kolom tanggal, deskripsi, debit, kredit, dan saldo akhir.',
        'Pendeteksi otomatis duplikasi transaksi dan ringkasan total uang masuk vs uang keluar.'
      ],
      tech: ['JavaScript Engine', 'PDF.js Parsing Core', 'SheetJS Excel Exporter', 'Offline Web Architecture'],
      demoUrl: './BAHAN/5. Rekening-Koran-Reader-Offline.html',
      waMessage: 'Halo Mas Dhodhy, saya tertarik dengan sistem Pembaca Rekening Koran untuk otomatisasi keuangan kantor saya.'
    },

    'mja-erp': {
      tag: 'ENTERPRISE ERP • AKUNTANSI STANDAR ID',
      title: 'MJA ERP v3.3 (Akuntansi Muara & Otorisasi Hardgate)',
      stat1: 'Real-time Laba Rugi',
      stat2: 'Hardgate Otorisasi Anti-Bocor',
      problem: 'Operasional perusahaan skala berkembang sering mengalami kebocoran dana karena pencatatan kasbon, pengeluaran harian, dan mutasi bank terpisah-pisah di spreadsheet berbeda. Owner kesulitan memantau posisi kas riil dan laporan keuangan sering terlambat berminggu-minggu.',
      solution: 'Dibangun sistem ERP terpadu dengan standar Akuntansi Muara Indonesia (BKK: Bukti Kas Keluar, BKM: Bukti Kas Masuk, BBK: Bukti Bank Keluar, BBM: Bukti Bank Masuk). Menggunakan sistem penguncian otorisasi berjenjang (Hardgate Lock) sehingga tidak ada transaksi yang bisa diedit atau dihapus tanpa persetujuan bertingkat.',
      features: [
        '4 Pilar Buku Muara: BKK, BKM, BBK, BBM dengan auto-numbering dan pencocokan rekening koran.',
        'Arsitektur Hardgate: Transaksi yang sudah ditutup otomatis terkunci untuk mencegah manipulasi angka.',
        'Dashboard eksekutif real-time: Posisi kas/bank, piutang jatuh tempo, dan estimasi Laba Rugi.',
        'Pemisahan hak akses ketat (Multi-Role: Kasir, Finance Supervisor, Akuntan, dan Direktur/Owner).'
      ],
      tech: ['Next.js (App Router)', 'TypeScript', 'Prisma ORM', 'PostgreSQL / Supabase', 'Tailwind CSS'],
      demoUrl: 'https://wa.me/6287703397035?text=Halo%20Mas%20Dhodhy,%20mau%20konsultasi%20sistem%20MJA%20ERP...',
      waMessage: 'Halo Mas Dhodhy, saya ingin konsultasi sistem ERP / Akuntansi terintegrasi seperti MJA ERP.'
    },

    'dulang': {
      tag: 'UMKM RETENTION • SMART QR SYSTEM',
      title: 'Dulang Indonesia — Smart QR Kemasan & Retensi Pelanggan',
      stat1: '1x Isi Alamat Seumur Hidup',
      stat2: 'Dual-Engine Anti-Mati',
      problem: 'Owner bisnis kuliner (Dulang Indonesia) setiap hari kerepotan membalas chat WhatsApp pelanggan: harus menanyakan alamat kos, nama, dan patokan berkali-kali. Tidak ada catatan siapa pelanggan yang paling sering beli (loyal), dan repeat order sering batal karena pembeli malas mengetik ulang.',
      solution: 'Diciptakan sistem Smart QR Dus & Gantungan Kunci. Pelanggan cukup mengisi alamat 1 kali saat pertama order. Di pesanan selanjutnya, saat stiker dus di-scan, sistem langsung menyapa nama mereka, menampilkan menu favorit, dan mengirim orderan langsung ke WhatsApp dalam 1 klik tanpa tanya alamat lagi.',
      features: [
        'Smart QR Stiker Dus: Auto-detect pelanggan lama, sapa nama personal, dan ingat alamat pengiriman.',
        'Tiering Pelanggan Otomatis: Klasifikasi pelanggan menjadi Tier Baru, Setia, hingga "Sultan Dulang".',
        'Batch Stiker Generator A4: Fitur internal dapur untuk generate & cetak 20 QR acak per lembar A4 vinyl.',
        'Dual-Engine Anti-Mati: Aplikasi tetap berfungsi penuh dengan LocalStorage cerdas saat sinyal internet dapur mati, dan sinkronisasi cloud saat online.'
      ],
      tech: ['React + Vite', 'Tailwind CSS', 'Supabase Cloud Engine', 'LocalStorage Smart Backup', 'Nanoid & HMAC Security'],
      demoUrl: './BAHAN/dulang_preview/index.html',
      waMessage: 'Halo Mas Dhodhy, saya tertarik dengan sistem Smart QR Kemasan & Retensi Pelanggan seperti Dulang.'
    },

    'cetta-umroh': {
      tag: 'TRAVEL MANAGEMENT • NATIVE DESKTOP',
      title: 'Cetta Umroh Management System (Tauri Desktop)',
      stat1: 'Zero Lag Desktop Native',
      stat2: 'CTO Audit Review Passed',
      problem: 'Pengelolaan biro travel umroh melibatkan ratusan data sensitif: masa berlaku paspor, riwayat suntik meningitis, manifest kamar hotel Mekkah/Madinah, dan status pembayaran cicilan. Mengandalkan Excel sering membuat staf salah kirim data dan bingung mengecek dokumen yang belum lengkap.',
      solution: 'Dibuatkan aplikasi desktop Windows native berbasis framework Tauri. Sangat ringan (memori hemat), aman secara lokal dengan database SQLite terenkripsi, dan memiliki checklist otomatis kelayakan terbang jamaah (paspor minimal 7 bulan, visa terbit, paket lunas).',
      features: [
        'Manajemen berkas jamaah terpusat: Scan paspor, masa berlaku visa, dan status kesehatan.',
        'Manifes Kamar & Penerbangan: Pengelompokan kamar (Quad, Triple, Double) dengan drag-and-drop sederhana.',
        'Pelacakan invoice & cicilan: Notifikasi otomatis jamaah yang mendekati tenggat pelunasan.',
        'Arsitektur Desktop Native (.exe): Sangat cepat, tidak tergantung koneksi browser, dan data tersimpan lokal.'
      ],
      tech: ['Tauri (Rust Core)', 'React', 'TypeScript', 'SQLite', 'Prisma ORM'],
      waMessage: 'Halo Mas Dhodhy, saya ingin tahu lebih banyak tentang aplikasi desktop travel / manajemen seperti Cetta Umroh.'
    },

    'akuntansi-umkm': {
      tag: 'RETAIL POS • ZERO TRAINING REQUIRED',
      title: 'Aplikasi Akuntansi & POS Kasir UMKM Praktis',
      stat1: '0 Jam Pelatihan Karyawan',
      stat2: 'Tanpa Biaya Langganan Bulanan',
      problem: 'Pemilik toko retail dan UMKM sering enggan memakai aplikasi kasir berbayar karena biaya langganan bulanan mahal, serta sistemnya terlalu rumit sehingga karyawan toko yang bukan lulusan akuntansi bingung menggunakannya.',
      solution: 'Sistem POS kasir dan pembukuan instan berbasis Web PWA yang bisa langsung dibuka dari HP Android, tablet, maupun laptop kasir. Kasir menginput penjualan seperti kalkulator biasa, sementara jurnal debit-kredit, laporan laba rugi, dan neraca seimbang langsung terbit secara otomatis di belakang layar.',
      features: [
        'Input penjualan & cetak struk nota cepat dengan dukungan printer Bluetooth thermal.',
        'Stok opname instan: Mode filter khusus untuk hanya menampilkan produk yang mengalami selisih fisik.',
        'Laporan Posisi Keuangan & Laba Rugi otomatis tanpa perlu tahu ilmu jurnal akuntansi.',
        'Mode PWA offline: Tetap bisa melayani transaksi saat jaringan internet toko terputus.'
      ],
      tech: ['Web PWA (HTML5, JS, CSS)', 'IndexedDB / LocalStorage', 'Offline First Architecture'],
      waMessage: 'Halo Mas Dhodhy, saya tertarik dengan aplikasi kasir & akuntansi praktis untuk UMKM saya.'
    },

    'bintang-sholeh': {
      tag: 'MOBILE FLUTTER & PYTHON AUTOMATION',
      title: 'Bintang Sholeh by Cetta Kecil & Suite Automasi Kantor',
      stat1: '100% Kid Safe & Fast',
      stat2: 'Proteksi Anti Zip-Slip',
      problem: 'Orang tua kesulitan menemukan aplikasi mobile edukasi Islami anak usia 5–7 tahun yang interaktif namun bebas dari paparan iklan game dewasa. Di sisi lain, staf kantor sering butuh utility pengarsipan data yang ringan tanpa harus membeli lisensi software berbayar.',
      solution: 'Dikembangkan aplikasi mobile multiplatform (Flutter & Dart) bertema petualangan Islami ramah anak dengan audio interaktif dan database lokal Hive. Dilengkapi juga dengan utility automasi desktop Python (Cetta Extractor) untuk kebutuhan pengarsipan data berkecepatan tinggi.',
      features: [
        'Aplikasi mobile petualangan interaktif dengan Riverpod State Management dan Hive local storage.',
        'Audio responsif dengan kontrol ramah sentuhan anak usia 5–7 tahun.',
        'Utility desktop Python (portable .exe) dengan proteksi Zip-Slip untuk keamanan ekstraksi dokumen kantor.',
        'Background threading: Kompresi dan ekstraksi data ribuan file tanpa membuat komputer freeze/lag.'
      ],
      tech: ['Flutter / Dart', 'Riverpod', 'Hive DB', 'Python 3', 'Tkinter / PyInstaller'],
      demoUrl: 'https://wa.me/6287703397035?text=Halo%20Mas%20Dhodhy,%20mau%20lihat%20demo%20Bintang%20Sholeh...',
      waMessage: 'Halo Mas Dhodhy, saya tertarik dengan portofolio aplikasi mobile Flutter dan tools automasi Python Anda.'
    },

    'teh-ngebul': {
      tag: 'UMKM • F&B ENGINE',
      title: 'Teh Ngebul Es Teh (Jam Haus & QR Sleeve)',
      stat1: 'Peak: 14:00 - 16:00',
      stat2: 'Loyalty Sultan Haus',
      problem: 'Warung es teh 5.000-an sering tidak tahu jam sibuk harian dan menu rasa paling laku, serta kehilangan pelanggan karena antrean panjang.',
      solution: 'Dibuatkan sistem QR di sleeve cup minuman. Pelanggan scan untuk cap digital otomatis, dan owner langsung bisa memantau grafik jam haus di HP.',
      features: [
        'QR di cup sleeve minuman untuk kartu cap loyalty digital.',
        'Dashboard jam haus (peak hour) otomatis untuk persiapan stok es dan seduhan.',
        'Tracking menu best seller tanpa sistem kasir mahal.'
      ],
      tech: ['Next.js', 'Tailwind CSS', 'Chunky Neo-Brutalist', 'Local Storage'],
      demoUrl: './BAHAN/2. Teh-Ngebul-Es-Teh.html',
      waMessage: 'Halo Mas Dhodhy, saya tertarik dengan konsep web seperti Teh Ngebul untuk usaha F&B saya.'
    },

    'londry-kinclong': {
      tag: 'JASA • LAUNDRY SYSTEM',
      title: 'Londry Kinclong (QR Nota & Tracking Kg/Hari)',
      stat1: '0 Nota Hilang',
      stat2: 'WA Jemput 1-Klik',
      problem: 'Usaha laundry sering bermasalah nota kertas hilang, rekap kiloan per hari tidak tercatat, dan lupa menagih pelanggan yang belum lunas.',
      solution: 'Setiap nota otomatis memiliki kode QR. Pelanggan cukup scan untuk minta jemput pakaian via WhatsApp, dan owner bisa melihat grafik kg cucian harian.',
      features: [
        'QR di nota kertas untuk request jemput cucian 1-klik via WhatsApp.',
        'Tracking kiloan cucian per hari dan rekap omset harian.',
        'Status nota lunas vs belum lunas terpantau rapi.'
      ],
      tech: ['Next.js', 'Prisma', 'Tailwind CSS', 'Fresh Bubble Theme'],
      demoUrl: './BAHAN/3. Londry-Kinclong-Laundry-Landing.html',
      waMessage: 'Halo Mas Dhodhy, saya tertarik dengan sistem seperti Londry Kinclong untuk usaha jasa laundry saya.'
    },

    'pangkas-keren': {
      tag: 'JASA • BARBERSHOP BOOKING',
      title: 'Pangkas Keren Barbershop (Booking Cermin)',
      stat1: '0 Antrean Numpuk',
      stat2: 'Komisi Kapster Auto',
      problem: 'Booking via chat WhatsApp sering tabrakan jam, kapster rebutan giliran, dan komisi harian salah hitung.',
      solution: 'Stiker QR ditempel di cermin dan meja tunggu. Pelanggan scan untuk pilih kapster & jam tanpa antre, dan komisi kapster otomatis terhitung.',
      features: [
        'Scan QR di cermin barbershop untuk booking antrean & pilih kapster.',
        'Perhitungan otomatis bagi hasil / komisi kapster tiap cukur selesai.',
        'Analisis hari & jam paling ramai (peak hour Jumat-Minggu).'
      ],
      tech: ['Next.js', 'Tailwind CSS', 'Bebas Neue Vintage Barber'],
      demoUrl: './BAHAN/4. Pangkas-Keren-Barbershop-Landing.html',
      waMessage: 'Halo Mas Dhodhy, saya tertarik dengan sistem booking seperti Pangkas Keren untuk barbershop/salon saya.'
    }
  };

  // 3. Modal / Dialog Control Logic
  const modal = document.getElementById('case-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const openButtons = document.querySelectorAll('.open-case-btn');

  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalStat1 = document.getElementById('modal-stat-1');
  const modalStat2 = document.getElementById('modal-stat-2');
  const modalProblem = document.getElementById('modal-problem');
  const modalSolution = document.getElementById('modal-solution');
  const modalFeatures = document.getElementById('modal-features');
  const modalTech = document.getElementById('modal-tech');
  const modalWaLink = document.getElementById('modal-wa-link');
  const modalDemoLink = document.getElementById('modal-demo-link');

  function openProjectModal(key) {
    const data = projectDatabase[key];
    if (!data || !modal) return;

    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalStat1.textContent = data.stat1;
    modalStat2.textContent = data.stat2;
    modalProblem.textContent = data.problem;
    modalSolution.textContent = data.solution;

    // Render features
    modalFeatures.innerHTML = '';
    data.features.forEach(item => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2';
      li.innerHTML = `<span class="text-brand-400 mt-0.5">•</span><span>${item}</span>`;
      modalFeatures.appendChild(li);
    });

    // Render tech badges
    modalTech.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'px-2.5 py-1 rounded bg-surface-800 border border-surface-700 text-slate-300 text-xs';
      span.textContent = t;
      modalTech.appendChild(span);
    });

    // WhatsApp link prefilled
    const encodedMsg = encodeURIComponent(data.waMessage);
    modalWaLink.href = `https://wa.me/6287703397035?text=${encodedMsg}`;

    // Demo Link
    if (modalDemoLink) {
      if (data.demoUrl) {
        modalDemoLink.href = data.demoUrl;
        modalDemoLink.style.display = 'inline-flex';
      } else {
        modalDemoLink.style.display = 'none';
      }
    }

    // Open native dialog
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }

    // Refresh icons inside modal if needed
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeProjectModal() {
    if (!modal) return;
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectKey = btn.getAttribute('data-project');
      openProjectModal(projectKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Light dismiss on backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeProjectModal();
      }
    });
  }

  // 4. Project Filter Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-brand-500', 'text-white');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('active', 'bg-brand-500', 'text-white');
      btn.classList.remove('text-slate-400');

      const cat = btn.getAttribute('data-category');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Interactive Simulator Logic
  const btnRunSim = document.getElementById('btn-run-sim');
  const btnResetSim = document.getElementById('btn-reset-sim');
  const simTableBody = document.getElementById('sim-table-body');
  const simStatusBadge = document.getElementById('sim-status-badge');
  const simTimeCounter = document.getElementById('sim-time-counter');

  const sampleTransactions = [
    { date: '18/09/26', desc: 'TRSF CR 00488219 PT MAJU JAYA ABADI', debit: '-', credit: 'Rp 45.000.000' },
    { date: '18/09/26', desc: 'TRSF DB 991823 KASBON LAPANGAN TIM A', debit: 'Rp 3.500.000', credit: '-' },
    { date: '19/09/26', desc: 'BIAYA ADM REK & PAJAK BUNGA', debit: 'Rp 25.000', credit: '-' },
    { date: '19/09/26', desc: 'TRSF CR 412001 TOKO RISOL & REMPAH', debit: 'Rp 1.250.000', credit: 'Rp 1.250.000' },
    { date: '20/09/26', desc: 'QRIS SETTLEMENT MERCHANT DULANG ID', debit: '-', credit: 'Rp 8.940.000' },
    { date: '20/09/26', desc: 'TRSF DB VENDOR BAHAN VINYL A4', debit: 'Rp 1.800.000', credit: '-' }
  ];

  let isRunningSim = false;

  if (btnRunSim && simTableBody) {
    btnRunSim.addEventListener('click', () => {
      if (isRunningSim) return;
      isRunningSim = true;

      // Status update
      simStatusBadge.className = 'px-2 py-0.5 rounded bg-amber-500/20 text-accent-gold text-[10px] font-mono animate-pulse';
      simStatusBadge.textContent = 'Mengekstrak PDF Lokal...';
      simTimeCounter.innerHTML = `<span>Status: <strong class="text-amber-400">Sedang membaca 1.842 baris...</strong></span><span class="font-mono text-brand-400">Waktu: memproses</span>`;

      simTableBody.innerHTML = `
        <tr>
          <td colspan="4" class="p-4 text-center text-slate-400 animate-pulse">
            <div class="flex items-center justify-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
              <span>Memproses struktur tabel mutasi offline...</span>
            </div>
          </td>
        </tr>
      `;

      // Quick realistic simulation delay (450ms)
      setTimeout(() => {
        simTableBody.innerHTML = '';
        sampleTransactions.forEach(trx => {
          const row = document.createElement('tr');
          row.className = 'hover:bg-surface-850/50 transition-colors';
          row.innerHTML = `
            <td class="p-2.5 text-slate-300">${trx.date}</td>
            <td class="p-2.5 text-slate-200 font-sans text-xs">${trx.desc}</td>
            <td class="p-2.5 text-right font-mono text-rose-400">${trx.debit}</td>
            <td class="p-2.5 text-right font-mono text-emerald-400 font-semibold">${trx.credit}</td>
          `;
          simTableBody.appendChild(row);
        });

        simStatusBadge.className = 'px-2 py-0.5 rounded bg-brand-500/20 text-brand-400 text-[10px] font-mono font-bold';
        simStatusBadge.textContent = 'Selesai 100% (Excel Ready)';

        simTimeCounter.innerHTML = `
          <span>Status: <strong class="text-emerald-400 font-semibold">1.842 Baris Berhasil Diekstrak!</strong></span>
          <span class="font-mono text-brand-400 font-bold bg-brand-500/10 px-2 py-0.5 rounded">Kecepatan: 0.18 Detik</span>
        `;

        isRunningSim = false;
      }, 450);
    });

    btnResetSim.addEventListener('click', () => {
      isRunningSim = false;
      simStatusBadge.className = 'px-2 py-0.5 rounded bg-surface-800 text-slate-400 text-[10px] font-mono';
      simStatusBadge.textContent = 'Siap Dieksekusi';

      simTimeCounter.innerHTML = `
        <span>Status: <strong class="text-slate-300 font-medium">Menunggu perintah</strong></span>
        <span class="font-mono text-brand-400">Kecepatan: 0.00s</span>
      `;

      simTableBody.innerHTML = `
        <tr class="text-slate-500 italic">
          <td colspan="4" class="p-4 text-center">Klik tombol "Mulai Ekstraksi Otomatis" di atas untuk melihat proses kilat 5 detik.</td>
        </tr>
      `;
    });
  }
});
