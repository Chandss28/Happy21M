const fs = require('fs');

function runVerification() {
  console.log('=== VERIFIKASI INTEGRITAS WEBSITE (REVISI PINK & BIRU) ===');

  const html = fs.readFileSync('index.html', 'utf8');
  const css = fs.readFileSync('css/style.css', 'utf8');
  const js = fs.readFileSync('js/script.js', 'utf8');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`[PASS] ${message}`);
      passed++;
    } else {
      console.error(`[FAIL] ${message}`);
      failed++;
    }
  }

  // 1. Check all required DOM IDs in script.js against index.html
  const requiredIds = [
    'heroPosterCard',
    'lightboxModal',
    'lightboxImg',
    'lightboxTitle',
    'lightboxCaption',
    'lightboxCloseBtn',
    'btnOpenLetter',
    'btnCloseLetter',
    'letterPaperWrapper',
    'envelopeBox',
    'heroLetterBtn',
    'confettiCanvas',
    'btnBlowCandle',
    'candleFlame',
    'cakeSmoke',
    'wishRevealBox',
    'btnShare',
    'toastAlert',
    'toastMessage',
    'floatingTopBtn',
    'btnScrollTopFooter'
  ];

  console.log('\n--- 1. Memeriksa ID Elemen HTML yang Dibutuhkan JS ---');
  requiredIds.forEach(id => {
    const hasId = html.includes(`id="${id}"`);
    assert(hasId, `ID elemen '#${id}' ditemukan di index.html`);
  });

  // 2. Check Gallery Removal
  console.log('\n--- 2. Memeriksa Penghapusan Bagian Galeri Kenangan ---');
  assert(!html.includes('id="gallery"'), 'Bagian #gallery sudah dihapus dari index.html');
  assert(!html.includes('href="#gallery"'), 'Tautan navigasi #gallery sudah dihapus');
  assert(!html.includes('Galeri Kenangan Manis'), 'Judul Galeri Kenangan sudah dihapus');

  // 3. Check Updated Letter Content
  console.log('\n--- 3. Memeriksa Isi Surat Ulang Tahun Baru ---');
  assert(
    html.includes('Selamat ulang tahun, ya M sayangku yang udah 2 tahun bareng aku.'),
    'Paragraf 1 surat sesuai revisi pengguna'
  );
  assert(
    html.includes('Kalau nanti ada hari yang terasa berat, mungkin selama ini aku ga banyak membantu'),
    'Paragraf 2 surat sesuai revisi pengguna'
  );
  assert(
    html.includes('Terima kasih sudah menjadi pribadi yang positif.'),
    'Paragraf 3 surat sesuai revisi pengguna'
  );
  assert(
    html.includes('Selamat 21 sekali lagi. Semoga selalu sayang aku. Kamu selalu dikelilingi hal-hal yang membuatmu merasa disayangi, dihargai, dan cukup menjadi dirimu sendiri, at your own best, ayy. ♡'),
    'Paragraf 4 surat sesuai revisi pengguna'
  );

  // 4. CSS Verification (Pink & Blue Background Theme)
  console.log('\n--- 4. Memeriksa CSS & Kombinasi Background Pink + Biru ---');
  assert(css.includes('--denim-primary: #4a7c9d;'), 'Token warna Biru Denim terdefinisi di CSS');
  assert(css.includes('--pink-primary: #d98b98;'), 'Token warna Dusty Pink terdefinisi di CSS');
  assert(css.includes('.bg-decor-layer') && css.includes('.bg-orb-pink-1') && css.includes('.bg-orb-blue-1'), 'Layer dekorasi background kombinasi Pink & Biru aktif');
  assert(css.includes('prefers-reduced-motion'), 'Dukungan prefers-reduced-motion tersedia');
  assert(css.includes('@media (max-width: 600px)'), 'Media query responsif ponsel tersedia');

  // 5. Relative paths check for GitHub Pages compatibility
  console.log('\n--- 5. Memeriksa Kompatibilitas Relative Path (GitHub Pages) ---');
  const hasAbsoluteRootPaths = /href="\/|src="\//.test(html);
  assert(!hasAbsoluteRootPaths, 'Tidak ada path absolut root ("/...") yang berisiko rusak di subpath GitHub Pages');

  console.log(`\nHASIL: ${passed} Pengujian Berhasil, ${failed} Gagal.`);
  if (failed > 0) process.exit(1);
}

runVerification();
