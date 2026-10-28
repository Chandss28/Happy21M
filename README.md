# Happy 21st Birthday, M 🩵 — Digital Scrapbook Website

Website ucapan ulang tahun ke-21 yang personal, romantis, interaktif, dan estetik untuk **M**, dirancang dengan konsep **digital scrapbook & memory album**. 

Website ini dibangun menggunakan **Vanilla HTML5, CSS3, dan Modern JavaScript** tanpa ketergantungan framework berat atau library eksternal berbayar, sehingga sangat cepat, ringan, responsif di HP (khususnya untuk dibagikan via WhatsApp), dan kompatibel penuh dengan **GitHub Pages**.

---

## 🎨 Identitas Desain & Karakter Visual

Desain website ini mengacu secara langsung pada poster kolase ulang tahun `M’s Birthday`:
- **Tema Utama:** Digital scrapbook & album kenangan vintage.
- **Palet Warna:**
  - Kertas Vintage: Ivory (`#FAF7F2`), Cream (`#F4EFE6`), Beige (`#EADCCB`).
  - Warna Aksen Utama: Biru Denim (`#4A7C9D`, `#2A4C66`, `#D8E6F1`).
  - Warna Aksen Pendamping: Dusty Pink (`#D98B98`, `#B56775`, `#F8E7EA`).
  - Tinta Teks: Charcoal Brown (`#34302E`) & Deep Navy (`#233544`) agar menyerupai tinta pulpen klasik.
- **Elemen Scrapbook:**
  - Bingkai foto Polaroid dengan rotasi alami (-3° hingga +2.5°), bayangan realistis (*drop shadows*), dan *washi tape* bertekstur (*gingham & striped tape*).
  - Stempel lilin (*wax seal*), pita, bunga kecil (*baby's breath*), stempel milestone 21st, dan kue ulang tahun interaktif.
- **Tipografi:**
  - Font Judul/Aksen: `Caveat` (Google Fonts) untuk nuansa tulisan tangan scrapbook asli.
  - Font Konten: `Plus Jakarta Sans` untuk keterbacaan optimal di layar ponsel tanpa membuat mata lelah.

---

## 📂 Struktur File Project

```text
.
├── index.html                  # Dokumen utama website (struktur semantik & konten)
├── css/
│   └── style.css               # Desain sistem, tata letak responsif, & efek scrapbook
├── js/
│   └── script.js               # Logika interaktif: galeri lightbox, swipe, surat, confetti, tiup lilin
├── assets/
│   ├── birthday-poster.png     # Poster kolase referensi asli M’s Birthday
│   ├── memory-1-hamster-couple.png
│   ├── memory-2-photostrip-top.png
│   ├── memory-3-bottles-peace.png
│   ├── memory-4-cream-hijab-smile.png
│   ├── memory-5-bunny-hood-couple.png
│   ├── memory-6-photostrip-bottom.png
│   ├── memory-7-cowboy-mirror.png
│   ├── memory-8-sage-hijab-sweet.png
│   ├── memory-9-blue-crewneck-mirror.png
│   ├── sticker-cake.png        # Potongan ilustrasi kue ulang tahun ke-21
│   ├── sticker-title.png       # Potongan tipografi doodle judul poster
│   ├── og-image.png            # Gambar pratinjau saat link dibagikan di WA/Medsos (1200x630)
│   └── favicon.png             # Ikon website untuk tab browser
├── scripts/                    # Skrip utilitas lokal (ekstraksi & persiapan aset)
│   ├── crop_assets.py
│   └── generate_meta_assets.py
└── README.md                   # Dokumentasi lengkap proyek
```

---

## ✨ Fitur-Fitur Interaktif

1. **Kotak Musik Akustik Lembut (100% Offline via Web Audio API):**
   - Tombol `🎵 Musik` pada navigasi atas yang memainkan melodi instrumen kotak musik kayu (*music box*) yang menenangkan tanpa perlu file MP3 eksternal.
   - Menggunakan sintesis nada alami dengan gelombang sinusoidal hangat, decay lembut, dan arpeggio yang romantis.

2. **Birthday Hero Section (Kombinasi Tema Pink & Biru):**
   - Latar belakang berlapis kombinasi warna **Dusty Pink** (`#D98B98`, `#F7DCE2`) dan **Denim Blue** (`#4A7C9D`, `#CFE3F2`) lengkap dengan ornamen pita gingham, grid polkadot scrapbook, dan pendaran aura lembut.
   - Sambutan hangat pembuka dengan judul besar `Happy 21st Birthday, M 🩵` dan badge perayaan 2 tahun bersama.
   - Bingkai polaroid besar menampilkan poster kolase asli dengan ornamen washi tape denim & pink, stiker pita biru, balon hati, buket bunga, dan stempel *Turning 21* (dapat diklik untuk diperbesar layar penuh).
   - Tombol aksi cepat: *Baca Surat Ulang Tahun*, *Tiup Lilin & Doa*, dan *Hujani Confetti*.

3. **Surat Ulang Tahun Pribadi (Foldable Letter):**
   - Tampil dalam bentuk amplop tertutup dengan stempel segel lilin (*wax seal*) `🩵`.
   - Surat hanya terbuka ketika tombol ditekan, sehingga tidak menutupi layar saat pertama kali dibuka.
   - Menggunakan kertas vintage dengan garis halus dan prangko pos.
   - Dilengkapi tombol *Lipat Kembali Surat* untuk menutupnya kembali dengan anggun.

4. **Tiup Lilin & Panjatkan Doa (Make a Wish):**
   - Ilustrasi kue ulang tahun dengan nyala api lilin beranimasi kedip (*flicker*).
   - Saat tombol *Tiup Lilin* ditekan:
     - Api lilin padam dengan animasi asap kecil.
     - Hujan confetti otomatis merayakan momen tersebut.
     - Kartu doa dan harapan ulang tahun ke-21 terbuka.
     - Getaran haptik halus (*vibrate*) di ponsel yang mendukung.

5. **Tombol Reaksi Terapung (Floating Emojis):**
   - Tombol reaksi cepat: *Kirim Cinta 🩵*, *Tabur Bunga 🌸*, *Pelukan Hangat 🤗*, dan *Beri Doa ✨*.
   - Menghasilkan animasi emoji terbang ke atas yang halus dan ceria.

6. **Fitur Berbagi Tautan (Web Share API & Fallback):**
   - Menggunakan `navigator.share` bawaan untuk berbagi langsung ke WhatsApp, Telegram, atau Instagram Story di HP.
   - Fallback otomatis ke `navigator.clipboard` dengan notifikasi *toast* manis jika dibuka di laptop/browser biasa.

7. **Tombol Navigasi Cepat & Back to Top:**
   - *Floating action button* panah atas yang muncul otomatis saat halaman di-scroll ke bawah.
   - Navigasi atas yang menempel lembut di layar (*sticky navbar*).

8. **Optimasi Aksesibilitas & Performa:**
   - Mendukung preferensi pengurangan animasi perangkat (`prefers-reduced-motion`).
   - Relative paths (`./assets/...`) yang aman digunakan di root domain maupun subpath GitHub Pages.

---

## 🚀 Cara Menjalankan Website Secara Lokal

Anda dapat menjalankan website ini di komputer lokal dengan salah satu cara berikut:

### Opsi 1: Menggunakan Python (Sangat Mudah & Bawaan)
Buka terminal di folder project, lalu jalankan:
```bash
python3 -m http.server 8000
```
Buka browser dan akses alamat:
```
http://localhost:8000
```

### Opsi 2: Menggunakan Node.js / npx
```bash
npx -y serve .
```

### Opsi 3: Buka Langsung File `index.html`
Cukup klik ganda file `index.html` di file manager Anda untuk membukanya langsung di browser (Chrome, Safari, Firefox, Edge).

---

## ✏️ Panduan Mengedit Teks Surat Ulang Tahun

Jika Anda ingin mengubah kata-kata dalam surat agar lebih personal, Anda dapat mengeditnya langsung di file `index.html`:

1. Buka file `index.html` menggunakan teks editor (misalnya Antigravity IDE atau VS Code).
2. Cari bagian komentar berikut:
   ```html
   <!-- ====================================================================
        CATATAN PENGGUNA: Teks di bawah ini dapat Anda edit secara langsung
        untuk menyesuaikan isi ucapan dan tanda tangan sesuai keinginan.
        ==================================================================== -->
   ```
3. Ubah teks di dalam tag `<div class="letter-body">` dan tanda tangan di `<div class="letter-signature">`.
4. Simpan file (`Ctrl+S` / `Cmd+S`) dan refresh browser Anda.

---

## 🌐 Panduan Publikasi ke GitHub Pages

Project ini sudah disiapkan dengan path relatif (`./assets/...`, `./css/...`, `./js/...`) sehingga siap dipublikasikan ke GitHub Pages pada repository bernama `birthday-m`:

1. Buat repository baru di GitHub dengan nama `birthday-m`.
2. Lakukan push seluruh file di folder ini ke repository tersebut:
   ```bash
   git init
   git add .
   git commit -m "feat: complete 21st birthday scrapbook website for M"
   git branch -M main
   git remote add origin https://github.com/<username-anda>/birthday-m.git
   git push -u origin main
   ```
3. Di halaman repository GitHub Anda:
   - Masuk ke tab **Settings** > **Pages**.
   - Pada bagian **Build and deployment** > **Source**, pilih **Deploy from a branch**.
   - Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
4. Website akan aktif dalam beberapa menit pada URL:
   `https://<username-anda>.github.io/birthday-m/`
