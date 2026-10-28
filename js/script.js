/**
 * BIRTHDAY M — 21st Scrapbook Digital Experience (Pink & Blue Theme Edition)
 * Features:
 * - Hero Poster Fullscreen Lightbox Preview
 * - Birthday Letter Foldable Envelope & Stationery Reveal
 * - Pure Web Audio API Gentle Music Box Player (Offline, Zero External Files)
 * - 3D Fluttering Confetti Particle Engine (Hearts, Stars, Ribbons, Circles)
 * - Candle Blowing with Smoke & Harmonious Wish Chime Sound Effect
 * - Floating Heart/Flower Reaction Emojis
 * - Web Share API with Clipboard Fallback & Toast Alert
 * - ScrollSpy & Smooth Back to Top Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Hero Poster Fullscreen Lightbox Preview
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
     2. Birthday Letter Interaction
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
     3. Standalone Pure Canvas Confetti Engine (Ribbons, Hearts, Sparkles)
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
     4. Web Audio API — Soft Music Box & Melodic Chimes (100% Offline)
     ========================================================================== */
  let audioCtx = null;
  let isMusicPlaying = false;
  let musicTimer = null;
  let currentNoteIndex = 0;

  // Romantic music box melody (frequencies in Hz: F major / C major acoustic lullaby)
  const musicBoxMelody = [
    { note: 349.23, dur: 0.4 }, // F4
    { note: 349.23, dur: 0.4 }, // F4
    { note: 392.00, dur: 0.8 }, // G4
    { note: 349.23, dur: 0.8 }, // F4
    { note: 466.16, dur: 0.8 }, // Bb4
    { note: 440.00, dur: 1.4 }, // A4
    { note: 349.23, dur: 0.4 }, // F4
    { note: 349.23, dur: 0.4 }, // F4
    { note: 392.00, dur: 0.8 }, // G4
    { note: 349.23, dur: 0.8 }, // F4
    { note: 523.25, dur: 0.8 }, // C5
    { note: 466.16, dur: 1.4 }, // Bb4
    { note: 349.23, dur: 0.4 }, // F4
    { note: 349.23, dur: 0.4 }, // F4
    { note: 698.46, dur: 0.8 }, // F5
    { note: 587.33, dur: 0.8 }, // D5
    { note: 466.16, dur: 0.8 }, // Bb4
    { note: 440.00, dur: 0.8 }, // A4
    { note: 392.00, dur: 1.2 }, // G4
    { note: 622.25, dur: 0.4 }, // Eb5
    { note: 622.25, dur: 0.4 }, // Eb5
    { note: 587.33, dur: 0.8 }, // D5
    { note: 466.16, dur: 0.8 }, // Bb4
    { note: 523.25, dur: 0.8 }, // C5
    { note: 466.16, dur: 1.8 }  // Bb4
  ];

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Play a soft wooden music box note
  function playMusicBoxNote(freq, duration = 0.6) {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.015);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  }

  // Gentle celebration chime chord
  function playCelebrationChimes() {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        playMusicBoxNote(freq, 1.2);
      }, idx * 120);
    });
  }

  function startMusicLoop() {
    if (!isMusicPlaying) return;
    const current = musicBoxMelody[currentNoteIndex];
    playMusicBoxNote(current.note, current.dur);

    currentNoteIndex = (currentNoteIndex + 1) % musicBoxMelody.length;
    musicTimer = setTimeout(startMusicLoop, current.dur * 850);
  }

  const btnMusicToggle = document.getElementById('btnMusicToggle');
  if (btnMusicToggle) {
    btnMusicToggle.addEventListener('click', () => {
      getAudioContext();
      isMusicPlaying = !isMusicPlaying;

      if (isMusicPlaying) {
        btnMusicToggle.classList.add('playing');
        btnMusicToggle.innerHTML = '<span>🎶</span> <span>Musik</span>';
        currentNoteIndex = 0;
        startMusicLoop();
      } else {
        btnMusicToggle.classList.remove('playing');
        btnMusicToggle.innerHTML = '<span>🎵</span> <span>Musik</span>';
        if (musicTimer) clearTimeout(musicTimer);
      }
    });
  }

  /* ==========================================================================
     5. Make a Wish & Interactive Candle Blow
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
     6. Floating Emoji Reactions
     ========================================================================== */
  const reactionButtons = document.querySelectorAll('.btn-reaction');
  reactionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const emoji = btn.getAttribute('data-emoji') || '🩵';
      spawnFloatingEmoji(e.clientX, e.clientY, emoji);
      playMusicBoxNote(587.33, 0.4);
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
     7. Web Share API & Clipboard Copy Fallback
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
        title: 'Happy 21st Birthday, M 🩵',
        text: 'Scrapbook spesial dan surat ulang tahun ke-21 untuk M tersayang 🩵🌸',
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
     8. ScrollSpy & Floating Back to Top Button
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
