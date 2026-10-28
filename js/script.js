/**
 * BIRTHDAY M — 21st Scrapbook Digital Experience (Lively Animated Pink & Blue)
 * Features:
 * - Continuous Floating Background Layer (Hearts, Blossoms, Ribbons, Sparkles & Pink/Blue Bubbles)
 * - Hero Poster Fullscreen Lightbox Preview
 * - Birthday Letter Foldable Envelope & Stationery Reveal
 * - Loud & Rich Web Audio API Music Box (Auto-Start on First Interaction/Movement + Manual ON/OFF Toggle)
 * - 3D Fluttering Confetti Particle Engine (Hearts, Stars, Ribbons, Circles)
 * - Candle Blowing with Smoke & Harmonious Wish Chime Sound Effect
 * - Floating Heart/Flower Reaction Emojis
 * - Web Share API with Clipboard Fallback & Toast Alert
 * - ScrollSpy & Smooth Back to Top Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     0. Custom Address Bar Slug (#Happy21M!!🩵♡)
     ========================================================================== */
  if (!window.location.hash || window.location.hash === '#') {
    try {
      window.history.replaceState(null, '', '#Happy21M!!🩵♡');
    } catch (_) {
      // Ignore if file:// protocol restricts replaceState
    }
  }

  /* ==========================================================================
     1. Continuous Floating Background Layer (Large Clean Vector Assets & Hearts)
     ========================================================================== */
  const bgFloatingItems = document.getElementById('bgFloatingItems');

  function initFloatingBackground() {
    if (!bgFloatingItems) return;

    const svgAssets = [
      './assets/float-bow-pink.svg',
      './assets/float-bow-blue.svg',
      './assets/float-balloon-duo.svg',
      './assets/float-sakura-bloom.svg',
      './assets/float-cloud-love.svg',
      './assets/float-gift-box.svg'
    ];
    const symbols = ['🩵', '🩷', '🌸', '🎀', '✨', '♡'];
    const isMobile = window.innerWidth < 600;
    const totalItems = isMobile ? 22 : 32;

    for (let i = 0; i < totalItems; i++) {
      const el = document.createElement('div');
      el.classList.add('bg-floater');

      if (i % 2 === 0) {
        // Large Clean Vector Illustration Asset
        const img = document.createElement('img');
        img.src = svgAssets[i % svgAssets.length];
        img.alt = '';
        img.classList.add('bg-floater-img');
        const imgSize = isMobile
          ? Math.floor(Math.random() * 28) + 52
          : Math.floor(Math.random() * 42) + 68;
        img.style.width = `${imgSize}px`;
        img.style.height = `${imgSize}px`;
        el.appendChild(img);
      } else if (i % 4 === 1) {
        // Large Glowing Pastel Bubble
        el.classList.add('bg-floater-bubble');
        el.classList.add(i % 3 === 0 ? 'bubble-pink' : 'bubble-blue');
        const size = isMobile
          ? Math.floor(Math.random() * 26) + 28
          : Math.floor(Math.random() * 36) + 36;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
      } else {
        // Large Floating Heart / Blossom / Ribbon Symbol
        el.textContent = symbols[i % symbols.length];
        const fontSize = isMobile
          ? (Math.random() * 0.9 + 1.65).toFixed(2)
          : (Math.random() * 1.2 + 2.0).toFixed(2);
        el.style.fontSize = `${fontSize}rem`;
        el.style.filter = 'drop-shadow(0 5px 10px rgba(74, 124, 157, 0.22))';
      }

      const leftPos = (Math.random() * 94 + 2).toFixed(2);
      const duration = (Math.random() * 11 + 13).toFixed(2);
      const delay = -(Math.random() * 24).toFixed(2);
      const swayX = `${(Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 48) + 24)}px`;
      const maxOpacity = (Math.random() * 0.28 + 0.58).toFixed(2);

      el.style.left = `${leftPos}%`;
      el.style.animationDuration = `${duration}s`;
      el.style.animationDelay = `${delay}s`;
      el.style.setProperty('--sway-x', swayX);
      el.style.setProperty('--floater-opacity', maxOpacity);

      bgFloatingItems.appendChild(el);
    }
  }

  initFloatingBackground();

  /* ==========================================================================
     2. Hero Poster Fullscreen Lightbox Preview
     ========================================================================== */
  const heroPosterCard = document.getElementById('heroPosterCard');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  function openPosterModal() {
    if (!lightboxModal) return;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (lightboxCloseBtn) lightboxCloseBtn.focus();
  }

  function closePosterModal() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (heroPosterCard) {
    heroPosterCard.addEventListener('click', openPosterModal);
    heroPosterCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPosterModal();
      }
    });
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closePosterModal);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closePosterModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closePosterModal();
    }
  });

  /* ==========================================================================
     3. Birthday Letter Interaction
     ========================================================================== */
  const btnOpenLetter = document.getElementById('btnOpenLetter');
  const btnCloseLetter = document.getElementById('btnCloseLetter');
  const letterPaperWrapper = document.getElementById('letterPaperWrapper');
  const envelopeBox = document.getElementById('envelopeBox');

  if (btnOpenLetter && letterPaperWrapper) {
    btnOpenLetter.addEventListener('click', () => {
      letterPaperWrapper.classList.add('visible');
      if (envelopeBox) envelopeBox.style.display = 'none';
      letterPaperWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (btnCloseLetter && letterPaperWrapper && envelopeBox) {
    btnCloseLetter.addEventListener('click', () => {
      letterPaperWrapper.classList.remove('visible');
      envelopeBox.style.display = 'block';
      envelopeBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  const heroLetterBtn = document.getElementById('heroLetterBtn');
  if (heroLetterBtn && btnOpenLetter) {
    heroLetterBtn.addEventListener('click', () => {
      btnOpenLetter.click();
    });
  }

  /* ==========================================================================
     4. Standalone Pure Canvas Confetti Engine (Ribbons, Hearts, Sparkles)
     ========================================================================== */
  const confettiCanvas = document.getElementById('confettiCanvas');
  let confettiCtx = null;
  let confettiParticles = [];
  let confettiAnimationId = null;

  if (confettiCanvas) {
    confettiCtx = confettiCanvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  function resizeCanvas() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }

  const confettiColors = [
    '#4A7C9D', // Denim primary
    '#6E9BB9', // Denim light
    '#D98B98', // Dusty pink
    '#E8A8B3', // Soft pink
    '#B56775', // Deep rose pink
    '#D4A359', // Warm gold
    '#FFFFFF'  // White
  ];

  class ConfettiParticle {
    constructor(x, y) {
      this.x = x || Math.random() * window.innerWidth;
      this.y = y || Math.random() * window.innerHeight * 0.2;
      this.size = Math.random() * 8 + 6;
      this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      this.speedX = (Math.random() - 0.5) * 8;
      this.speedY = Math.random() * 4 + 3;
      this.gravity = 0.12;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 10;
      this.opacity = 1;
      
      const rand = Math.random();
      if (rand < 0.45) this.shape = 'rect';
      else if (rand < 0.78) this.shape = 'heart';
      else if (rand < 0.92) this.shape = 'star';
      else this.shape = 'circle';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.speedY += this.gravity;
      this.speedX *= 0.98;
      this.rotation += this.rotationSpeed;

      if (this.y > window.innerHeight * 0.8) {
        this.opacity -= 0.02;
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;

      if (this.shape === 'rect') {
        ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
      } else if (this.shape === 'heart') {
        ctx.font = `${Math.floor(this.size * 1.2)}px sans-serif`;
        ctx.fillText('♥', -this.size / 2, this.size / 2);
      } else if (this.shape === 'star') {
        ctx.font = `${Math.floor(this.size * 1.1)}px sans-serif`;
        ctx.fillText('★', -this.size / 2, this.size / 2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function launchConfetti(originX, originY, count = 95) {
    if (!confettiCtx) return;

    const startX = originX !== undefined ? originX : window.innerWidth / 2;
    const startY = originY !== undefined ? originY : window.innerHeight * 0.3;

    for (let i = 0; i < count; i++) {
      const p = new ConfettiParticle(startX, startY);
      p.speedX = (Math.random() - 0.5) * 15;
      p.speedY = (Math.random() - 0.7) * 13;
      confettiParticles.push(p);
    }

    if (!confettiAnimationId) {
      animateConfetti();
    }
  }

  function animateConfetti() {
    if (!confettiCtx) return;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.update();
      p.draw(confettiCtx);

      if (p.y > confettiCanvas.height || p.opacity <= 0) {
        confettiParticles.splice(i, 1);
      }
    }

    if (confettiParticles.length > 0) {
      confettiAnimationId = requestAnimationFrame(animateConfetti);
    } else {
      confettiAnimationId = null;
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  const confettiButtons = document.querySelectorAll('.trigger-confetti');
  confettiButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const rect = btn.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;
      launchConfetti(originX, originY, 110);
    });
  });

  /* ==========================================================================
     5. Web Audio API — Loud & Clear Music Box (Auto-Start + Manual ON/OFF)
     ========================================================================== */
  let audioCtx = null;
  let masterCompressor = null;
  let isMusicPlaying = false;
  let isMusicWanted = true; // Default ON from initial load
  let musicTimer = null;
  let currentNoteIndex = 0;
  const btnMusicToggle = document.getElementById('btnMusicToggle');

  // Rich Happy Birthday Music Box Melody with Harmony (F Major)
  const musicBoxMelody = [
    { note: 349.23, bass: 174.61, dur: 0.42 }, // F4
    { note: 349.23, bass: 0,      dur: 0.38 }, // F4
    { note: 392.00, bass: 174.61, dur: 0.78 }, // G4
    { note: 349.23, bass: 220.00, dur: 0.78 }, // F4
    { note: 466.16, bass: 261.63, dur: 0.78 }, // Bb4
    { note: 440.00, bass: 196.00, dur: 1.35 }, // A4

    { note: 349.23, bass: 196.00, dur: 0.42 }, // F4
    { note: 349.23, bass: 0,      dur: 0.38 }, // F4
    { note: 392.00, bass: 196.00, dur: 0.78 }, // G4
    { note: 349.23, bass: 261.63, dur: 0.78 }, // F4
    { note: 523.25, bass: 174.61, dur: 0.78 }, // C5
    { note: 466.16, bass: 233.08, dur: 1.35 }, // Bb4

    { note: 349.23, bass: 174.61, dur: 0.42 }, // F4
    { note: 349.23, bass: 0,      dur: 0.38 }, // F4
    { note: 698.46, bass: 174.61, dur: 0.82 }, // F5
    { note: 587.33, bass: 220.00, dur: 0.78 }, // D5
    { note: 466.16, bass: 233.08, dur: 0.78 }, // Bb4
    { note: 440.00, bass: 261.63, dur: 0.78 }, // A4
    { note: 392.00, bass: 196.00, dur: 1.25 }, // G4

    { note: 622.25, bass: 233.08, dur: 0.42 }, // Eb5
    { note: 622.25, bass: 0,      dur: 0.38 }, // Eb5
    { note: 587.33, bass: 233.08, dur: 0.78 }, // D5
    { note: 466.16, bass: 174.61, dur: 0.78 }, // Bb4
    { note: 523.25, bass: 196.00, dur: 0.82 }, // C5
    { note: 466.16, bass: 174.61, dur: 1.65 }  // Bb4
  ];

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
        // Add dynamics compressor so louder volume stays crystal clear without distortion
        masterCompressor = audioCtx.createDynamicsCompressor();
        masterCompressor.threshold.setValueAtTime(-14, audioCtx.currentTime);
        masterCompressor.knee.setValueAtTime(20, audioCtx.currentTime);
        masterCompressor.ratio.setValueAtTime(4, audioCtx.currentTime);
        masterCompressor.attack.setValueAtTime(0.005, audioCtx.currentTime);
        masterCompressor.release.setValueAtTime(0.2, audioCtx.currentTime);
        masterCompressor.connect(audioCtx.destination);
      }
    }
    return audioCtx;
  }

  // Play a loud, rich multi-layered music box note (clearly audible on phone & laptop speakers)
  function playMusicBoxNote(freq, duration = 0.75, bassFreq = 0) {
    const ctx = getAudioContext();
    if (!ctx || ctx.state !== 'running') return;

    const now = ctx.currentTime;
    const outputDest = masterCompressor || ctx.destination;

    // 1. Main warm bell tone (triangle + sine blend for strong speaker presence)
    const oscMain = ctx.createOscillator();
    const gainMain = ctx.createGain();
    oscMain.type = 'triangle';
    oscMain.frequency.setValueAtTime(freq, now);

    gainMain.gain.setValueAtTime(0.001, now);
    gainMain.gain.linearRampToValueAtTime(0.58, now + 0.018);
    gainMain.gain.exponentialRampToValueAtTime(0.001, now + duration * 1.15);

    oscMain.connect(gainMain);
    gainMain.connect(outputDest);
    oscMain.start(now);
    oscMain.stop(now + duration * 1.2);

    // 2. Music-box metallic chime overtone (2x frequency)
    const oscChime = ctx.createOscillator();
    const gainChime = ctx.createGain();
    oscChime.type = 'sine';
    oscChime.frequency.setValueAtTime(freq * 2, now);

    gainChime.gain.setValueAtTime(0.001, now);
    gainChime.gain.linearRampToValueAtTime(0.24, now + 0.01);
    gainChime.gain.exponentialRampToValueAtTime(0.0008, now + duration * 0.75);

    oscChime.connect(gainChime);
    gainChime.connect(outputDest);
    oscChime.start(now);
    oscChime.stop(now + duration * 0.8);

    // 3. Warm accompaniment bass note
    if (bassFreq > 0) {
      const oscBass = ctx.createOscillator();
      const gainBass = ctx.createGain();
      oscBass.type = 'sine';
      oscBass.frequency.setValueAtTime(bassFreq, now);

      gainBass.gain.setValueAtTime(0.001, now);
      gainBass.gain.linearRampToValueAtTime(0.32, now + 0.025);
      gainBass.gain.exponentialRampToValueAtTime(0.001, now + duration * 1.25);

      oscBass.connect(gainBass);
      gainBass.connect(outputDest);
      oscBass.start(now);
      oscBass.stop(now + duration * 1.3);
    }
  }

  // Gentle celebration chime chord
  function playCelebrationChimes() {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        playMusicBoxNote(freq, 1.1, idx === 0 ? 261.63 : 0);
      }, idx * 115);
    });
  }

  function updateMusicButtonUI() {
    if (!btnMusicToggle) return;
    if (isMusicWanted) {
      btnMusicToggle.classList.add('playing');
      btnMusicToggle.setAttribute('aria-pressed', 'true');
      btnMusicToggle.innerHTML = '<span>🎶</span> <span>Musik: ON</span>';
    } else {
      btnMusicToggle.classList.remove('playing');
      btnMusicToggle.setAttribute('aria-pressed', 'false');
      btnMusicToggle.innerHTML = '<span>🔇</span> <span>Musik: OFF</span>';
    }
  }

  function startMusicLoop() {
    if (!isMusicPlaying || !isMusicWanted) return;
    const current = musicBoxMelody[currentNoteIndex];
    playMusicBoxNote(current.note, current.dur, current.bass);

    currentNoteIndex = (currentNoteIndex + 1) % musicBoxMelody.length;
    musicTimer = setTimeout(startMusicLoop, current.dur * 820);
  }

  function stopMusicLoop() {
    isMusicPlaying = false;
    if (musicTimer) {
      clearTimeout(musicTimer);
      musicTimer = null;
    }
  }

  function tryStartMusicOnInteraction(e) {
    // If the user clicked the music toggle button itself, let the button handler manage it
    if (e && btnMusicToggle && (e.target === btnMusicToggle || btnMusicToggle.contains(e.target))) {
      return;
    }

    if (!isMusicWanted || isMusicPlaying) {
      removeAutoStartListeners();
      return;
    }

    const ctx = getAudioContext();
    if (!ctx) return;

    const startPlayback = () => {
      if (ctx.state === 'running' && isMusicWanted && !isMusicPlaying) {
        isMusicPlaying = true;
        updateMusicButtonUI();
        startMusicLoop();
        removeAutoStartListeners();
      }
    };

    if (ctx.state === 'suspended') {
      ctx.resume().then(startPlayback).catch(() => {
        // Still waiting for a direct click/touch gesture if passive move was blocked
      });
    } else if (ctx.state === 'running') {
      startPlayback();
    }
  }

  const interactionEvents = ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown', 'scroll', 'mousemove'];

  function addAutoStartListeners() {
    interactionEvents.forEach(evt => {
      window.addEventListener(evt, tryStartMusicOnInteraction, { passive: true });
    });
  }

  function removeAutoStartListeners() {
    interactionEvents.forEach(evt => {
      window.removeEventListener(evt, tryStartMusicOnInteraction);
    });
  }

  // Activate auto-start detection on page load
  addAutoStartListeners();
  // Also attempt immediate start in case browser allows autoplay right away
  tryStartMusicOnInteraction();

  // Manual ON / OFF Toggle Button
  if (btnMusicToggle) {
    btnMusicToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const ctx = getAudioContext();
      isMusicWanted = !isMusicWanted;
      updateMusicButtonUI();

      if (isMusicWanted) {
        if (ctx && ctx.state === 'suspended') {
          ctx.resume().then(() => {
            if (!isMusicPlaying) {
              isMusicPlaying = true;
              startMusicLoop();
            }
          });
        } else {
          if (!isMusicPlaying) {
            isMusicPlaying = true;
            startMusicLoop();
          }
        }
        removeAutoStartListeners();
      } else {
        stopMusicLoop();
        removeAutoStartListeners();
      }
    });
  }

  /* ==========================================================================
     6. Make a Wish & Interactive Candle Blow
     ========================================================================== */
  const btnBlowCandle = document.getElementById('btnBlowCandle');
  const candleFlame = document.getElementById('candleFlame');
  const cakeSmoke = document.getElementById('cakeSmoke');
  const wishRevealBox = document.getElementById('wishRevealBox');

  if (btnBlowCandle && candleFlame) {
    btnBlowCandle.addEventListener('click', () => {
      candleFlame.classList.add('blown-out');
      if (cakeSmoke) cakeSmoke.classList.add('active');

      // Magical Chime sound
      playCelebrationChimes();

      // Trigger Confetti Celebration
      const rect = btnBlowCandle.getBoundingClientRect();
      launchConfetti(rect.left + rect.width / 2, rect.top, 130);

      // Show wish reveal box
      if (wishRevealBox) {
        setTimeout(() => {
          wishRevealBox.classList.add('active');
          wishRevealBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
      }

      btnBlowCandle.innerHTML = '<span>Lilin Sudah Ditiup! ✨ Doa Terkabul 🤍</span>';
      btnBlowCandle.disabled = true;
      btnBlowCandle.style.opacity = '0.85';
      btnBlowCandle.style.cursor = 'default';

      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
      }
    });
  }

  /* ==========================================================================
     7. Floating Emoji Reactions
     ========================================================================== */
  const reactionButtons = document.querySelectorAll('.btn-reaction');
  reactionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const emoji = btn.getAttribute('data-emoji') || '🩵';
      spawnFloatingEmoji(e.clientX, e.clientY, emoji);
      playMusicBoxNote(587.33, 0.45);
    });
  });

  function spawnFloatingEmoji(x, y, emoji) {
    for (let i = 0; i < 5; i++) {
      const span = document.createElement('span');
      span.textContent = emoji;
      span.style.position = 'fixed';
      span.style.left = `${x + (Math.random() - 0.5) * 40}px`;
      span.style.top = `${y + (Math.random() - 0.5) * 20}px`;
      span.style.fontSize = `${Math.random() * 1.2 + 1.4}rem`;
      span.style.pointerEvents = 'none';
      span.style.zIndex = '9999';
      span.style.transition = 'transform 1.4s cubic-bezier(0.1, 0.8, 0.2, 1), opacity 1.4s ease';
      span.style.transform = 'translateY(0) scale(0.6)';
      span.style.opacity = '1';

      document.body.appendChild(span);

      requestAnimationFrame(() => {
        span.style.transform = `translateY(-${Math.random() * 120 + 80}px) translateX(${(Math.random() - 0.5) * 70}px) scale(1.3)`;
        span.style.opacity = '0';
      });

      setTimeout(() => {
        span.remove();
      }, 1500);
    }
  }

  /* ==========================================================================
     8. Web Share API & Clipboard Copy Fallback
     ========================================================================== */
  const btnShare = document.getElementById('btnShare');
  const toastAlert = document.getElementById('toastAlert');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(message) {
    if (!toastAlert) return;
    toastMessage.textContent = message;
    toastAlert.classList.add('show');
    setTimeout(() => {
      toastAlert.classList.remove('show');
    }, 3200);
  }

  if (btnShare) {
    btnShare.addEventListener('click', async () => {
      const shareData = {
        title: 'Happy21M!! 🩵♡',
        text: 'Happy21M!! 🩵♡ Scrapbook spesial dan surat ulang tahun ke-21 untuk M tersayang 🌸',
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== 'AbortError') {
            copyUrlToClipboard();
          }
        }
      } else {
        copyUrlToClipboard();
      }
    });
  }

  function copyUrlToClipboard() {
    const url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url)
        .then(() => {
          showToast('Tautan website berhasil disalin! 📋 Siap dibagikan.');
        })
        .catch(() => {
          fallbackClipboardCopy(url);
        });
    } else {
      fallbackClipboardCopy(url);
    }
  }

  function fallbackClipboardCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Tautan website berhasil disalin! 📋');
    } catch (err) {
      showToast('Silakan salin tautan dari bilah alamat browser.');
    }
    document.body.removeChild(textArea);
  }

  /* ==========================================================================
     9. ScrollSpy & Floating Back to Top Button
     ========================================================================== */
  const floatingTopBtn = document.getElementById('floatingTopBtn');
  const btnScrollTopFooter = document.getElementById('btnScrollTopFooter');
  const navLinks = document.querySelectorAll('.site-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    if (floatingTopBtn) {
      if (window.scrollY > 350) {
        floatingTopBtn.classList.add('visible');
      } else {
        floatingTopBtn.classList.remove('visible');
      }
    }

    let currentSectionId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 160;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (floatingTopBtn) {
    floatingTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (btnScrollTopFooter) {
    btnScrollTopFooter.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
