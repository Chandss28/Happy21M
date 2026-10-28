const fs = require('fs');

function runVerification() {
  console.log('=== VERIFIKASI INTEGRITAS WEBSITE (REVISI FLOATING BG & AUDIO AUTO-START) ===');

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

  // 1. Check all required DOM IDs
  const requiredIds = [
    'bgFloatingItems',
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
    'btnScrollTopFooter',
    'btnMusicToggle'
  ];

  console.log('\n--- 1. Memeriksa ID Elemen HTML yang Dibutuhkan JS ---');
  requiredIds.forEach(id => {
    const hasId = html.includes(`id="${id}"`);
    assert(hasId, `ID elemen '#${id}' ditemukan di index.html`);
  });

  // 2. Check removal of "2 years / 2 tahun" outside the letter body
  console.log('\n--- 2. Memeriksa Penghapusan "2 Years / 2 Tahun" di Luar Isi Surat ---');
  const twoYearMatches = html.match(/2\s*(tahun|years)/gi) || [];
  assert(
    twoYearMatches.length === 1 && html.includes('Selamat ulang tahun, ya M sayangku yang udah 2 tahun bareng aku.'),
    `Kata "2 tahun / 2 years" hanya muncul tepat 1 kali di dalam isi surat (ditemukan: ${twoYearMatches.length})`
  );

  // 3. Check Lively Floating Background Elements
  console.log('\n--- 3. Memeriksa Animasi Floating Background Pink & Biru ---');
  assert(html.includes('class="bg-floating-sticker'), 'Stiker melayang di background tersedia di HTML');
  assert(css.includes('@keyframes floatUpAndSway') && css.includes('@keyframes orbDrift1'), 'Animasi keyframes floating & aurora drift tersedia di CSS');
  assert(js.includes('initFloatingBackground'), 'Generator elemen floating (hati, bunga, pita, bubble) aktif di JS');

  // 4. Check Louder Music & Auto-Start on First Interaction + Manual Toggle
  console.log('\n--- 4. Memeriksa Audio Musik (Suara Lebih Keras + Auto-Start + Toggle Manual) ---');
  assert(js.includes('createDynamicsCompressor') && js.includes('0.58'), 'Volume musik sudah diperbesar dengan multi-layer oscillator & compressor');
  assert(js.includes('tryStartMusicOnInteraction') && js.includes('touchstart') && js.includes('mousemove'), 'Deteksi klik/sentuhan/pergerakan pertama untuk auto-play musik aktif');
  assert(js.includes('Musik: ON') && js.includes('Musik: OFF'), 'Tombol manual ON/OFF musik tersedia');

  // 5. Relative paths check for GitHub Pages compatibility
  console.log('\n--- 5. Memeriksa Kompatibilitas Relative Path (GitHub Pages) ---');
  const hasAbsoluteRootPaths = /href="\/|src="\//.test(html);
  assert(!hasAbsoluteRootPaths, 'Tidak ada path absolut root ("/...") yang berisiko rusak di subpath GitHub Pages');

  console.log(`\nHASIL: ${passed} Pengujian Berhasil, ${failed} Gagal.`);
  if (failed > 0) process.exit(1);
}

runVerification();
