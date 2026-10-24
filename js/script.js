/* ---------------------------------------------------------------------
   0. BILINGUAL I18N DICTIONARY (ES / EN) & REEL SCROLL SENSITIVITY
   --------------------------------------------------------------------- */
const REEL_SCROLL_STEP = 0.68; // 68vh per video transition (32% less scroll needed)
let currentLang = localStorage.getItem('site_lang') || 'es';

const I18N = {
  es: {
    navHome: 'INICIO',
    navWork: 'PROYECTOS',
    navAbout: 'ARCHIVO',
    navContact: 'CONTACTO',
    letsRaiseTitle1: 'Puro<br/>arte<br/>en cada',
    letsRaiseTitle2: 'frame.',
    letsRaiseBody: 'CURADURÍA VISUAL DEDICADA A LA ANIMACIÓN. PRECISA. FLUIDA. LO OPUESTO AL CAOS.',
    letsRaiseBtn: 'Archivo',
    workHeading: 'PROYECTOS',
    whyUsHeading: 'POR QUÉ',
    whyUsSignoffSub: 'Puro Arte en Cada Frame.',
    aboutHeading: 'ARCHIVO',
    aboutBioSubtitle: 'SOBRE EL ARCHIVO',
    aboutBioP1: 'Archive & Vault es una colección estética. La diferencia está en cómo se experimenta cada frame.',
    aboutBioP2: 'Marcelo Orozco diseñó este espacio digital en 2026, curando secuencias de animación y estéticas de personajes icónicos. Un tributo dedicado desde el primer momento. Reunimos cortes visuales y estudios de movimiento de todo el mundo, preservando joyas visuales desde el boceto original hasta el render final. Algunas piezas son intensas. Otras son sutiles. Todas reciben la misma devoción por el detalle. Nos apasiona el dibujo, y del mismo modo cuidamos cómo fluye cada secuencia en pantalla. Organizado. Preciso en cada intervalo de tiempo. Estable cuando el ritmo visual se acelera. Creamos este archivo y estas transiciones para que el impacto visual respire, permitiendo que quien lo visite simplemente disfrute del arte. Conectados desde Buenos Aires hasta La Paz, celebrando a los mejores animadores del mundo. El archivo continúa creciendo siempre de la misma forma: cuadro por cuadro, detalle por detalle.',
    sustHeading: 'PRESERVACIÓN',
    sustText1: 'Amamos la animación, y aunque descubrir nuevas obras nos impulsa, nuestra misión principal es asegurar que cada secuencia icónica se conserve con la máxima fidelidad visual posible. Con un compromiso absoluto hacia la preservación digital, seleccionamos cuidadosamente cada corte y aplicamos estándares de archivo en alta definición para proteger el trazo original.',
    sustText2: 'Honramos el esfuerzo detrás de cada producción rescatando keyframes, estudiando la fluidez del sakuga y manteniendo vivo el legado de los animadores y directores que transformaron cada escena en una obra maestra atemporal.',
    hueHeading: 'CREATIVIDAD',
    hueText: 'Creemos que cada estilo visual merece admiración y espacio propio, desde el trazo experimental e independiente hasta las grandes producciones de estudio. La diversidad estética impulsa la innovación, enriquece el lenguaje del movimiento y eleva la experiencia visual. Buscamos activamente perspectivas audaces, diseños de personajes únicos y secuencias vibrantes, porque celebrar la libertad artística es la esencia misma de este archivo.',
    contactHeading: 'CONTACTO',
    cityNY: 'Nueva York',
    footerContactLabel: 'Contacto:',
    footerFounderLabel: 'Creador, Curador:',
    footerPrivacy: 'Política de Privacidad',
    footerTerms: 'Términos de Uso',
    services: [
      'Diseño de Personajes',
      'Keyframes y Animación',
      'Composición de Escena',
      'Selección de Seiyuu',
      'Arte Conceptual',
      'Sakuga y Acción',
      'Ilustración',
      'Sistemas de Archivo',
      'Composición Digital',
      'Guion de Color',
      'Masterizado y Render'
    ],
    whyUsLines: [
      ['Más material por', ' ver que nunca.'],
      ['Menos tiempo', ' que nunca.'],
      ['Todo se mueve r', 'ápido y se nota.'],
      ['La animación ac', 'tual suele sentirse'],
      ['justo as', 'í.'],
      ['Apurada, ca', 'ótica, regular.'],
      ['Nosotros v', 'emos el arte distinto.'],
      ['Calma, cuid', 'ado, estructura y'],
      ['siempre en', ' el frame justo.'],
      ['Antes de que b', 'usques el detalle,'],
      ['ya está resg', 'uardado aquí.'],
      ['Siempre verás ', 'la fluidez brillar.'],
      ['Nada cambia s', 'alvo que tú avances.'],
      ['El trazo sutil q', 'ue se perdería en el'],
      ['caos, capturado', ' desde el primer'],
      ['instante para q', 'ue admires lo'],
      ['que realme', 'nte importa.'],
      ['spacer', 'spacer'],
      ['A eso nos refe', 'rimos al decir que'],
      ['cuidamos cada', ' obra como tú.'],
      ['No como un', 'a moda,'],
      ['sino como u', 'na curaduría.'],
      ['Por eso las sec', 'uencias intensas se'],
      ['sienten únicas', ', y la gente'],
      ['siempre vu', 'elve a mirarlas.'],
      ['Cuando quie', 'ras volver, aquí estamos.']
    ]
  },
  en: {
    navHome: 'HOME',
    navWork: 'WORK',
    navAbout: 'ABOUT',
    navContact: 'CONTACT',
    letsRaiseTitle1: 'Pure<br/>visual<br/>art',
    letsRaiseTitle2: 'frame.',
    letsRaiseBody: 'CURATED VISUAL ARCHIVE FOR ANIME AND ARTWORKS. THOUGHTFUL. PRECISE. THE OPPOSITE OF CHAOTIC.',
    letsRaiseBtn: 'About',
    workHeading: 'WORK',
    whyUsHeading: 'WHY US',
    whyUsSignoffSub: 'Pure Visual Art in Every Frame.',
    aboutHeading: 'ABOUT',
    aboutBioSubtitle: 'ABOUT THE ARCHIVE',
    aboutBioP1: 'Archive & Vault is an aesthetic collection. The difference is in how each frame is experienced.',
    aboutBioP2: 'Marcelo Orozco created this digital space in 2026, curating animation sequences and character aesthetics. A dedicated tribute from the start. We gather iconic frames and motion studies worldwide, preserving visual gems from storyboard to the final render. Some of it is intense. Some of it is subtle. All of it receives the exact same focus. We care deeply about the art, and just as much about how each motion sequence feels. Organized. Precise with every frame. Fluid when choreography gets fast. We built this archive and custom layouts to let the visual power breathe, so anyone visiting can just appreciate the art itself. Connected from Buenos Aires to La Paz, and celebrating artists everywhere else. The archive keeps growing the exact same way. Frame by frame, detail by detail.',
    sustHeading: 'PRESERVATION',
    sustText1: 'We love animation, and while discovering new works drives us, our primary goal is to ensure that every iconic sequence is preserved with the highest possible visual fidelity. With a strong commitment to digital preservation, we thoroughly curate each cut and apply high-definition archival standards to protect the original linework.',
    sustText2: 'We honor the craft behind every production by rescuing keyframes, studying sakuga fluidity, and keeping alive the legacy of the animators and directors who turned every scene into a timeless visual masterpiece.',
    hueHeading: 'CREATIVITY',
    hueText: "It's our belief that every visual style deserves admiration and space of its own, from experimental indie linework to landmark studio productions. Aesthetic diversity fuels innovation, enriches the language of motion, and elevates our visual archive. We actively seek out bold perspectives, unique character designs, and vibrant sequences, because celebrating artistic freedom is essential to everything we curate.",
    contactHeading: 'CONTACT',
    cityNY: 'New York',
    footerContactLabel: 'Work with us:',
    footerFounderLabel: 'Creator, Curator:',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
    services: [
      'Character Design',
      'Keyframes & Motion',
      'Layout Architecture',
      'Voice & Seiyuu Curation',
      'Concept Art',
      'Sakuga',
      'Illustration',
      'Archive Systems',
      'Digital Compositing',
      'Color Scripting',
      'Mastering & Renders'
    ],
    whyUsLines: [
      ['More art to wa', 'tch than ever.'],
      ['Less time t', 'han ever.'],
      ["Everyone's movin", 'g fast and it shows.'],
      ['Most animation ', 'today feels exactly'],
      ['like t', 'hat.'],
      ['Rushed, fr', 'antic, fine.'],
      ['We curate t', 'he other way.'],
      ['Calm, considere', 'd, structured and'],
      ['always on ', 'the right frame.'],
      ['By the time you ', 'look for the detail,'],
      ['we already ', 'have it archived.'],
      ["You'll always se", 'e the motion shine.'],
      ['It never moves u', 'nless you move it.'],
      ['The keyframe tha', 't would vanish in'],
      ['motion, captured', ' quietly on frame one,'],
      ['while you focus ', 'on appreciating'],
      ['something mo', 're important.'],
      ['spacer', 'spacer'],
      ["That's what we m", 'ean when we say we'],
      ['care about the a', 'rt the way you do.'],
      ['Not as a f', 'eeling,'],
      ['but as a wa', 'y of curating.'],
      ["It's why intense", ' cuts still feel like'],
      ['pure art, a', 'nd why people'],
      ['keep comin', 'g back to watch.'],
      ["When you're re", 'ady, so are we.']
    ]
  }
};

/* ---------------------------------------------------------------------
   1. CAMPAIGN REEL DATA (CLOUDINARY DIRECT MP4 STREAMS)
   --------------------------------------------------------------------- */
const REEL_CAMPAIGNS = [
  {
    brand: 'NEFFER',
    video: 'https://res.cloudinary.com/yr21kkmn/video/upload/v1792806846/home_reel_1.mp4'
  },
  {
    brand: 'MARINE',
    video: 'https://res.cloudinary.com/yr21kkmn/video/upload/v1792806846/home_reel_2.mp4'
  },
  {
    brand: 'ME!ME!ME!',
    video: 'https://res.cloudinary.com/yr21kkmn/video/upload/v1792806846/home_reel_3.mp4'
  },
  {
    brand: 'PANTY & STOCKING',
    video: 'https://res.cloudinary.com/yr21kkmn/video/upload/v1792806849/home_reel_4.mp4'
  },
  {
    brand: 'MEGUMIN',
    video: 'https://res.cloudinary.com/yr21kkmn/video/upload/v1792806844/home_reel_5.mp4'
  },
  {
    brand: 'DANDADAN',
    video: 'https://res.cloudinary.com/yr21kkmn/video/upload/v1792806843/home_reel_6.mp4'
  },
  {
    brand: 'ZERO TWO',
    video: 'https://res.cloudinary.com/yr21kkmn/video/upload/v1792806843/home_reel_7.mp4'
  }
];

/* ---------------------------------------------------------------------
   2. SERVICES LIST (11 LINES - INITIALIZED FROM ACTIVE LANGUAGE)
   --------------------------------------------------------------------- */
let SERVICES_LIST = [...I18N[currentLang].services];

/* ---------------------------------------------------------------------
   3. STUDIO & PUBLISHER ROSTER (17 PAIRED ROWS)
   --------------------------------------------------------------------- */
const CLIENT_ROSTER_PAIRS = [
  { left: 'Kyoto Animation', leftStyle: 'grotesque', right: 'Trigger', rightStyle: 'thin-sans' },
  { left: 'MAPPA', leftStyle: 'didone-caps', right: 'CloverWorks', rightStyle: 'grotesque' },
  { left: 'Wit Studio', leftStyle: 'grotesque', right: 'BONES', rightStyle: 'zara-didone' },
  { left: 'UFOTABLE', leftStyle: 'serif-caps', right: 'Production I.G', rightStyle: 'grotesque' },
  { left: 'STUDIO GHIBLI', leftStyle: 'italic-serif', right: 'Madhouse', rightStyle: 'grotesque' },
  { left: 'Shaft', leftStyle: 'grotesque', right: 'GAINAX', rightStyle: 'serif-caps-large' },
  { left: 'KHARA', leftStyle: 'didone-light', right: 'A-1 Pictures', rightStyle: 'grotesque' },
  { left: 'CoMix Wave', leftStyle: 'grotesque', right: 'ADIDAS_ICON', rightStyle: 'adidas-icon' },
  { left: 'Pierrot', leftStyle: 'grotesque', right: 'Silver Link', rightStyle: 'grotesque' },
  { left: 'David Production', leftStyle: 'grotesque', right: 'Toei Animation', rightStyle: 'grotesque' },
  { left: 'KODANSHA', leftStyle: 'mac-wide', right: 'Shueisha Jump', rightStyle: 'grotesque' },
  { left: 'Doga Kobo', leftStyle: 'grotesque', right: 'PA WORKS', rightStyle: 'tbwa-bold' },
  { left: 'KADOKAWA', leftStyle: 'clinique-caps', right: 'Shogakukan', rightStyle: 'grotesque' },
  { left: 'Crunchyroll', leftStyle: 'grotesque', right: 'Good Smile', rightStyle: 'grotesque' },
  { left: 'Bandai Namco', leftStyle: 'grotesque', right: 'INSTAGRAM_ICON', rightStyle: 'insta-icon' },
  { left: 'K Y O T O', leftStyle: 'graff-spaced', right: 'Mappa', rightStyle: 'grotesque' },
  { left: 'Trigger', leftStyle: 'grotesque', right: 'Bones', rightStyle: 'grotesque' }
];

/* ---------------------------------------------------------------------
   4. WORK GRID ITEMS (001 - 008, STRICTLY LOCAL PATHS)
   --------------------------------------------------------------------- */
const WORK_PROJECTS = [
  { code: '001', title: 'DARLING IN THE FRANXX', aspect: 'aspect-[16/10]', offset: 'lg:mt-20', badge: 'ZERO TWO', img: 'img/1.jpg' },
  { code: '002', title: 'HOLOLIVE FANTASY', aspect: 'aspect-[3/4]', offset: 'lg:mt-0', badge: 'MARINE', img: 'img/2.jpg' },
  { code: '003', title: 'KONOSUBA ARCHIVE', aspect: 'aspect-[4/3]', offset: 'lg:mt-4', badge: '', img: 'img/3.jpg' },
  { code: '004', title: 'DANDADAN SPIRIT', aspect: 'aspect-[16/10]', offset: 'lg:mt-20', badge: '', img: 'img/1.jpg' },
  { code: '005', title: 'ME!ME!ME! SHOWCASE', aspect: 'aspect-[3/4]', offset: 'lg:mt-0', badge: 'ME!ME!ME!', img: 'img/2.jpg' },
  { code: '006', title: 'PANTY & STOCKING', aspect: 'aspect-[4/4]', offset: 'lg:mt-8', badge: '', img: 'img/3.jpg' },
  { code: '007', title: 'TRIGGER ANTHOLOGY', aspect: 'aspect-[16/10]', offset: 'lg:mt-16', badge: '', img: 'img/1.jpg' },
  { code: '008', title: 'EXPLOSION ARCHIVE', aspect: 'aspect-[3/4]', offset: 'lg:mt-0', badge: 'MEGUMIN', img: 'img/2.jpg' }
];

/* ---------------------------------------------------------------------
   5. WHY US MANIFESTO LINES (PRE-CALIBRATED EXACT 50% SPLITS)
   --------------------------------------------------------------------- */
let WHY_US_LINES = [...I18N[currentLang].whyUsLines];

/* ---------------------------------------------------------------------
   GLOBAL STATE & ENGINE VARIABLES
   --------------------------------------------------------------------- */
let currentView = 'home';
let contactOpen = false;
let isViewTransitioning = false;
let contactCloseTimer = null;

let preloaderCurrent = 0;
let preloaderStartTime = null;
const PRELOADER_HOLD_MS = 650;
const PRELOADER_MOVE_MS = 2350;

let smoothScrollY = 0;
let reelSmoothScrollY = 0;
let aboutSmoothP = 0;
let lastRawScrollY = 0;
let lastScrollDirection = 1;
let reelIdleTimer = null;
let isAutoSnapping = false;
let autoSnapRafId = null;

let axisBaseWidths = { left: 455, center: 68, right: 288 };

let hudTopWords = [];
let hudRightWords = [];
let reelSlideEls = [];
let reelSlideInners = [];
let reelVideos = [];
let reelDimmers = [];
let letsRaiseSlideEl = null;
let srvBlackLeft = [], srvBlackRight = [];
let srvOrangeLeft = [], srvOrangeRight = [];
let srvRowStates = [];
let rosterRowsCache = [];
let whyUsRowsCache = [];

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function smootherstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutQuint(t) {
  return 1 - Math.pow(1 - t, 5);
}

function easeOutBackGraceful(t) {
  const c1 = 0.28;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

/* ---------------------------------------------------------------------
   SMART VIDEO PLAYBACK MANAGER (SOLO 1 DECODIFICADOR ACTIVO A LA VEZ)
   --------------------------------------------------------------------- */
function safePlayVideo(vid) {
  if (!vid) return;
  if (vid.preload === 'none') {
    vid.preload = 'metadata';
  }
  if (vid.paused) {
    vid.muted = true;
    const p = vid.play();
    if (p !== undefined) {
      p.catch(() => {});
    }
  }
}

function safePauseVideo(vid) {
  if (vid && !vid.paused) {
    vid.pause();
  }
}

function pauseAllVideos() {
  document.querySelectorAll('video').forEach(vid => {
    if (!vid.paused) vid.pause();
  });
}

function manageHomeReelVideos(f) {
  const total = REEL_CAMPAIGNS.length;

  // Si ya bajamos más allá del Reel o el menú móvil está abierto, pausamos todos los del reel
  if (currentView !== 'home' || contactOpen || f > total - 0.15) {
    for (let i = 0; i < total; i++) {
      safePauseVideo(reelVideos[i]);
    }
    return;
  }

  const primaryIdx = clamp(Math.round(f), 0, total - 1);
  const nextWarmupIdx = clamp(Math.floor(f) + 1, 0, total - 1);

  for (let i = 0; i < total; i++) {
    const vid = reelVideos[i];
    if (!vid) continue;

    if (i === primaryIdx) {
      safePlayVideo(vid);
    } else {
      safePauseVideo(vid);
      // Pre-cargamos metadatos solo del próximo video inmediato para evitar tirones al scrollear
      if (i === nextWarmupIdx && vid.preload === 'none') {
        vid.preload = 'metadata';
      }
    }
  }
}

/* ---------------------------------------------------------------------
   MEASURE AXIS WORD BASE WIDTHS AT 100PX
   --------------------------------------------------------------------- */
function measureAxisWidths() {
  const elL = document.getElementById('axisLeft');
  const elC = document.getElementById('axisCenter');
  const elR = document.getElementById('axisRight');
  if (!elL || !elC || !elR) return;

  const prevL = elL.style.transform;
  const prevC = elC.style.transform;
  const prevR = elR.style.transform;
  const prevClipL = elL.style.clipPath;
  const prevClipR = elR.style.clipPath;

  elL.style.transform = 'scale(1)';
  elC.style.transform = 'scale(1)';
  elR.style.transform = 'scale(1)';
  elL.style.clipPath = 'none';
  elR.style.clipPath = 'none';

  axisBaseWidths.left = elL.getBoundingClientRect().width || 455;
  axisBaseWidths.center = elC.getBoundingClientRect().width || 68;
  axisBaseWidths.right = elR.getBoundingClientRect().width || 288;

  elL.style.transform = prevL;
  elC.style.transform = prevC;
  elR.style.transform = prevR;
  elL.style.clipPath = prevClipL;
  elR.style.clipPath = prevClipR;
}

/* ---------------------------------------------------------------------
   BUILD HOME REEL STICKY WIPE SLIDES WITH CLOUDINARY VIDEOS + HUD WORDS
   --------------------------------------------------------------------- */
function buildHomeStickyWipeReel() {
  const stackContainer = document.getElementById('homeStickyWipeStack');
  const topTrack = document.getElementById('reelTopTitlesTrack');
  const rightTrack = document.getElementById('reelBottomRightTrack');
  const dict = I18N[currentLang];

  let slidesHtml = '';

  REEL_CAMPAIGNS.forEach((item, idx) => {
    const preloadMode = idx === 0 ? 'auto' : (idx === 1 ? 'metadata' : 'none');
    slidesHtml += `
      <div class="reel-sticky-slide campaign-sticky-slide" id="reelStickySlide-${idx}" data-slide-idx="${idx}" style="z-index: ${idx + 1};">
        <div class="reel-slide-media-inner" id="reelMediaInner-${idx}">
          <video
            id="reelVideo-${idx}"
            src="${item.video}"
            loop
            muted
            playsinline
            preload="${preloadMode}"
            class="reel-shot-frame active-frame"
          ></video>
          <div id="reelDimmer-${idx}" class="reel-dimmer-layer"></div>
        </div>
      </div>
    `;
  });

  slidesHtml += `
    <div id="letsRaiseStickySlide" class="relative w-full min-h-[198vh] bg-white text-black px-3 sm:px-6 pt-2 pb-36 will-change-transform" style="z-index: 10; box-shadow: 0 -24px 50px rgba(0,0,0,0.22);">
      <div class="w-full">
        <h2 id="letsRaiseTitle1" class="lets-raise-heading grotesque-display tracking-tighter text-black select-none">
          ${dict.letsRaiseTitle1}
        </h2>
      </div>

      <div class="w-full flex justify-end mt-[6vh] sm:mt-[11vh] pr-2 sm:pr-4">
        <h2 id="letsRaiseTitle2" class="lets-raise-heading grotesque-display tracking-tighter text-black text-right select-none">
          ${dict.letsRaiseTitle2}
        </h2>
      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-12 mt-[10vh] sm:mt-[17vh]">
        <div class="lg:col-span-6"></div>
        <div class="lg:col-span-6 pl-0 lg:pl-[4.5vw] max-w-[500px]">
          <p id="letsRaiseBody" data-i18n="letsRaiseBody" class="grotesque-tight uppercase text-[23px] sm:text-[36px] leading-[0.92] tracking-[-0.038em] text-black mb-8">
            ${dict.letsRaiseBody}
          </p>
          <button
            id="letsRaiseBtn"
            data-i18n="letsRaiseBtn"
            onclick="switchView('about')"
            class="inline-flex items-center justify-center px-8 py-2.5 rounded-full border border-black text-[15px] sm:text-[16px] font-bold tracking-tight text-black hover:bg-black hover:text-white transition-colors"
          >
            ${dict.letsRaiseBtn}
          </button>
        </div>
      </div>
    </div>
  `;

  stackContainer.innerHTML = slidesHtml;

  topTrack.innerHTML = REEL_CAMPAIGNS.map((item, idx) => `
    <div id="hudTopWord-${idx}" class="reel-hud-word-left">${item.brand}</div>
  `).join('');

  rightTrack.innerHTML = REEL_CAMPAIGNS.map((item, idx) => `
    <div id="hudRightWord-${idx}" class="reel-hud-word-right ${idx === 0 ? 'hidden' : ''}">${item.brand}</div>
  `).join('');

  hudTopWords = REEL_CAMPAIGNS.map((_, idx) => document.getElementById(`hudTopWord-${idx}`));
  hudRightWords = REEL_CAMPAIGNS.map((_, idx) => document.getElementById(`hudRightWord-${idx}`));
  reelSlideEls = REEL_CAMPAIGNS.map((_, idx) => document.getElementById(`reelStickySlide-${idx}`));
  reelSlideInners = REEL_CAMPAIGNS.map((_, idx) => document.getElementById(`reelMediaInner-${idx}`));
  reelVideos = REEL_CAMPAIGNS.map((_, idx) => document.getElementById(`reelVideo-${idx}`));
  reelDimmers = REEL_CAMPAIGNS.map((_, idx) => document.getElementById(`reelDimmer-${idx}`));
  letsRaiseSlideEl = document.getElementById('letsRaiseStickySlide');
}

/* ---------------------------------------------------------------------
   ENSURE ONLY VISIBLE VIEW VIDEOS PLAY
   --------------------------------------------------------------------- */
function ensureLocalVideosPlaying() {
  if (currentView === 'home') {
    const vh = window.innerHeight || 1;
    const stepVh = vh * REEL_SCROLL_STEP;
    const f = (window.scrollY || 0) / stepVh;
    manageHomeReelVideos(f);
  } else {
    pauseAllVideos();
  }
}

/* ---------------------------------------------------------------------
   BUILD SERVICES DUAL-COLOR LAYERS
   --------------------------------------------------------------------- */
function buildServicesLayers() {
  const blackLayer = document.getElementById('servicesBlackLayer');
  const orangeLayer = document.getElementById('servicesOrangeInner');

  const rowsMarkup = (prefix) => SERVICES_LIST.map((srv, idx) => `
    <div class="service-row-line" data-srv-idx="${idx}">
      <span id="${prefix}-left-${idx}" class="srv-left-word">${srv}</span>
      <span id="${prefix}-right-${idx}" class="srv-right-word">${srv}</span>
    </div>
  `).join('');

  blackLayer.innerHTML = rowsMarkup('srvB');
  orangeLayer.innerHTML = rowsMarkup('srvO');

  srvBlackLeft = SERVICES_LIST.map((_, i) => document.getElementById(`srvB-left-${i}`));
  srvBlackRight = SERVICES_LIST.map((_, i) => document.getElementById(`srvB-right-${i}`));
  srvOrangeLeft = SERVICES_LIST.map((_, i) => document.getElementById(`srvO-left-${i}`));
  srvOrangeRight = SERVICES_LIST.map((_, i) => document.getElementById(`srvO-right-${i}`));
  srvRowStates = SERVICES_LIST.map(() => ({ smoothP: 0 }));
}

/* ---------------------------------------------------------------------
   BUILD CLIENT & PARTNER ROSTER
   --------------------------------------------------------------------- */
function formatRosterCellContent(text, styleType) {
  if (text === 'ADIDAS_ICON') {
    return `<span class="inline-flex items-center align-middle" title="Adidas">
      <svg class="h-[32px] sm:h-[44px] md:h-[50px] w-auto fill-current" viewBox="0 0 60 40">
        <polygon points="10,38 18,38 28,22 20,22"/>
        <polygon points="23,38 31,38 44,14 36,14"/>
        <polygon points="36,38 44,38 60,6 52,6"/>
      </svg>
    </span>`;
  }
  if (text === 'INSTAGRAM_ICON') {
    return `<span class="inline-flex items-center gap-2 font-normal text-[23px] sm:text-[34px] md:text-[38px]" style="font-family: var(--font-serif); font-style: italic;">
      <svg class="h-[24px] sm:h-[33px] md:h-[36px] w-auto stroke-current fill-none" stroke-width="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
      <span>Instagram</span>
    </span>`;
  }

  switch (styleType) {
    case 'thin-sans':
      return `<span class="font-light tracking-[-0.02em] text-[24px] sm:text-[38px] md:text-[43px]">${text}</span>`;
    case 'didone-caps':
      return `<span style="font-family: var(--font-didone);" class="font-bold tracking-[0.06em] text-[26px] sm:text-[42px] md:text-[48px]">${text}</span>`;
    case 'zara-didone':
      return `<span style="font-family: var(--font-didone);" class="font-bold tracking-[-0.11em] text-[27px] sm:text-[44px] md:text-[50px]">${text}</span>`;
    case 'serif-caps':
      return `<span style="font-family: var(--font-serif);" class="font-semibold tracking-[0.05em] text-[24px] sm:text-[37px] md:text-[42px]">${text}</span>`;
    case 'italic-serif':
      return `<span style="font-family: var(--font-didone);" class="italic font-semibold tracking-[0.04em] text-[24px] sm:text-[37px] md:text-[42px]">${text}</span>`;
    case 'serif-caps-large':
      return `<span style="font-family: var(--font-serif);" class="font-normal tracking-[0.04em] text-[28px] sm:text-[46px] md:text-[52px]">${text}</span>`;
    case 'didone-light':
      return `<span style="font-family: var(--font-didone);" class="font-normal tracking-[0.08em] text-[26px] sm:text-[43px] md:text-[49px]">${text}</span>`;
    case 'mac-wide':
      return `<span class="font-light tracking-[0.28em] text-[22px] sm:text-[35px] md:text-[40px]">${text}</span>`;
    case 'tbwa-bold':
      return `<span class="font-black tracking-[-0.04em] text-[27px] sm:text-[44px] md:text-[50px]">${text}</span>`;
    case 'clinique-caps':
      return `<span style="font-family: var(--font-didone);" class="font-normal tracking-[0.08em] text-[22px] sm:text-[35px] md:text-[40px] underline decoration-1 underline-offset-4">${text}</span>`;
    case 'graff-spaced':
      return `<span style="font-family: var(--font-serif);" class="font-normal tracking-[0.14em] text-[20px] sm:text-[31px] md:text-[35px]">${text}</span>`;
    default:
      return `<span class="grotesque-tight text-[28px] sm:text-[48px] md:text-[54px]">${text}</span>`;
  }
}

function buildClientRoster() {
  const container = document.getElementById('clientRosterContainer');
  if (!container) return;

  container.innerHTML = CLIENT_ROSTER_PAIRS.map((pair, idx) => `
    <div class="roster-row" data-roster-idx="${idx}">
      <div class="roster-left-cell">${formatRosterCellContent(pair.left, pair.leftStyle)}</div>
      <div class="roster-right-cell">${formatRosterCellContent(pair.right, pair.rightStyle)}</div>
    </div>
  `).join('');

  rosterRowsCache = Array.from(container.querySelectorAll('.roster-row')).map(row => ({
    row,
    left: row.querySelector('.roster-left-cell'),
    right: row.querySelector('.roster-right-cell'),
    currentGap: 0
  }));
}

/* ---------------------------------------------------------------------
   BUILD WORK GRID (LOCAL IMAGES ONLY)
   --------------------------------------------------------------------- */
function buildWorkGrid() {
  const grid = document.getElementById('workGridWrapper');
  const defaultHeading = document.getElementById('workDefaultHeading');
  const hoverHeading = document.getElementById('workHoverHeading');
  if (!grid) return;

  grid.innerHTML = WORK_PROJECTS.map((proj, idx) => `
    <article class="work-card flex flex-col ${proj.offset}" data-work-idx="${idx}">
      <div class="relative w-full ${proj.aspect} overflow-hidden bg-zinc-100">
        <img
          src="${proj.img}"
          alt="${proj.title}"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        ${proj.badge ? `
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span class="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase drop-shadow">${proj.badge}</span>
          </div>
        ` : ''}
      </div>
      <div class="flex items-baseline justify-between pt-2 text-[10px] sm:text-[11px] font-extrabold tracking-tight uppercase text-black">
        <span>${proj.code}</span>
        <span class="text-right">${proj.title}</span>
      </div>
    </article>
  `).join('');

  const cards = grid.querySelectorAll('.work-card');
  cards.forEach((card, idx) => {
    card.addEventListener('mouseenter', () => {
      grid.classList.add('is-hovering');
      cards.forEach(c => c.classList.remove('hovered-card'));
      card.classList.add('hovered-card');

      if (defaultHeading && hoverHeading) {
        defaultHeading.classList.add('hidden');
        hoverHeading.textContent = WORK_PROJECTS[idx].title;
        hoverHeading.classList.remove('hidden');
      }
    });

    card.addEventListener('mouseleave', () => {
      grid.classList.remove('is-hovering');
      card.classList.remove('hovered-card');

      if (defaultHeading && hoverHeading) {
        hoverHeading.classList.add('hidden');
        defaultHeading.classList.remove('hidden');
      }
    });
  });
}

/* ---------------------------------------------------------------------
   BUILD WHY US MANIFESTO LINES
   --------------------------------------------------------------------- */
function buildWhyUsManifesto() {
  const container = document.getElementById('whyUsManifestoContainer');
  if (!container) return;

  container.innerHTML = WHY_US_LINES.map(([leftTxt, rightTxt], idx) => {
    if (leftTxt === 'spacer') {
      return `<div class="h-9 sm:h-12 w-full" data-spacer="${idx}"></div>`;
    }
    return `
      <div class="why-us-row flex items-baseline justify-center w-full grotesque-tight text-[22px] sm:text-[42px] md:text-[49px] leading-[0.98] tracking-[-0.038em]">
        <span class="why-left text-right will-change-transform">${leftTxt}</span>
        <span class="why-right text-left will-change-transform">${rightTxt}</span>
      </div>
    `;
  }).join('');

  whyUsRowsCache = Array.from(container.querySelectorAll('.why-us-row')).map(row => ({
    row,
    left: row.querySelector('.why-left'),
    right: row.querySelector('.why-right'),
    currentGap: 0
  }));
}

/* ---------------------------------------------------------------------
   NAVIGATION UNDERLINE, VIEW SWITCHING, MOBILE BURGER & CONTACT OVERLAY
   --------------------------------------------------------------------- */
function updateMobileBurgerState(vw, vh, scrollY) {
  const burgerBtn = document.getElementById('mobileMenuBtn');
  if (!burgerBtn) return;

  burgerBtn.classList.toggle('is-active', contactOpen);
  burgerBtn.setAttribute('aria-expanded', contactOpen ? 'true' : 'false');

  // Solid white while over the 7 Home Reel videos; optical difference blend elsewhere
  const stepVh = vh * REEL_SCROLL_STEP;
  const f = scrollY / stepVh;
  const isOverReelVideos = (currentView === 'home') && !contactOpen && (f < 6.45);

  burgerBtn.classList.toggle('is-reel-solid', isOverReelVideos);
}

function updateNavUnderline(activeKey) {
  const container = document.getElementById('navContainer');
  const underline = document.getElementById('navUnderline');
  if (!container || !underline) return;

  const links = container.querySelectorAll('.nav-link');
  let targetBtn = null;

  links.forEach(btn => {
    const isMatch = btn.getAttribute('data-nav') === activeKey;
    btn.classList.toggle('active', isMatch);
    if (isMatch) targetBtn = btn;
  });

  if (targetBtn) {
    const cRect = container.getBoundingClientRect();
    const bRect = targetBtn.getBoundingClientRect();
    const offsetX = bRect.left - cRect.left;
    underline.style.width = `${bRect.width.toFixed(1)}px`;
    underline.style.transform = `translate3d(${offsetX.toFixed(1)}px, 0, 0)`;
  }
}

function switchView(targetView) {
  if (isViewTransitioning) return;

  if (contactOpen) {
    toggleContactOverlay(false);
    if (targetView === currentView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  }

  if (targetView === currentView) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  cancelReelAutoSnap();
  isViewTransitioning = true;
  updateNavUnderline(targetView);

  // Pausamos todos los videos antes de aplicar blur(30px) a la vista para que la transición sea 60fps en móvil
  pauseAllVideos();

  const stage = document.getElementById('mainViewStage');
  const reelHud = document.getElementById('reelHudFixed');

  if (stage) stage.classList.add('stage-blurred');
  if (reelHud && currentView === 'home') {
    reelHud.classList.add('hud-fade-out');
  }

  setTimeout(() => {
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.add('hidden');
      sec.classList.remove('block');
    });

    const nextSec = document.getElementById(`view-${targetView}`);
    if (nextSec) {
      nextSec.classList.remove('hidden');
      nextSec.classList.add('block');
    }

    currentView = targetView;

    if (reelHud) {
      if (targetView === 'home') {
        reelHud.style.display = 'block';
        reelHud.classList.remove('hud-fade-out');
      } else {
        reelHud.style.display = 'none';
      }
    }

    window.scrollTo(0, 0);
    smoothScrollY = 0;
    reelSmoothScrollY = 0;
    aboutSmoothP = 0;
    lastRawScrollY = 0;

    updateMobileBurgerState(window.innerWidth, window.innerHeight, 0);
    ensureLocalVideosPlaying();

    if (targetView === 'about' && whyUsRowsCache.length) {
      whyUsRowsCache.forEach(item => {
        item.currentGap = 0;
        item.left.style.transform = 'translate3d(0, 0, 0)';
        item.right.style.transform = 'translate3d(0, 0, 0)';
      });
    }

    requestAnimationFrame(() => {
      if (stage) stage.classList.remove('stage-blurred');
      setTimeout(() => {
        isViewTransitioning = false;
      }, 380);
    });
  }, 360);
}

function toggleContactOverlay(forceState) {
  const overlay = document.getElementById('contactOverlay');
  if (!overlay) return;

  const nextState = typeof forceState === 'boolean' ? forceState : !contactOpen;
  if (nextState === contactOpen) return;

  cancelReelAutoSnap();
  if (contactCloseTimer) {
    clearTimeout(contactCloseTimer);
    contactCloseTimer = null;
  }

  if (nextState) {
    contactOpen = true;
    pauseAllVideos();
    overlay.classList.remove('is-closing');
    overlay.classList.add('is-open');
    updateNavUnderline('contact');
    updateMobileBurgerState(window.innerWidth, window.innerHeight, window.scrollY || 0);
  } else {
    contactOpen = false;
    overlay.classList.remove('is-open');
    overlay.classList.add('is-closing');
    updateNavUnderline(currentView);
    updateMobileBurgerState(window.innerWidth, window.innerHeight, window.scrollY || 0);
    ensureLocalVideosPlaying();

    contactCloseTimer = setTimeout(() => {
      overlay.classList.remove('is-closing');
      contactCloseTimer = null;
    }, 580);
  }
}

function handleContactBackdropClick(event) {
  if (event.target && event.target.id === 'contactOverlay') {
    toggleContactOverlay(false);
  }
}

/* ---------------------------------------------------------------------
   AUTO-SCROLL SNAP FOR HOME REEL (SMOOTHER GLIDE)
   --------------------------------------------------------------------- */
function cancelReelAutoSnap() {
  if (reelIdleTimer) {
    clearTimeout(reelIdleTimer);
    reelIdleTimer = null;
  }
  if (isAutoSnapping && autoSnapRafId) {
    cancelAnimationFrame(autoSnapRafId);
    autoSnapRafId = null;
    isAutoSnapping = false;
  }
}

function scheduleReelAutoSnap() {
  if (currentView !== 'home' || contactOpen || isViewTransitioning) return;

  if (reelIdleTimer) clearTimeout(reelIdleTimer);

  reelIdleTimer = setTimeout(() => {
    if (currentView !== 'home' || contactOpen || isViewTransitioning || isAutoSnapping) return;

    const vh = window.innerHeight;
    const stepVh = vh * REEL_SCROLL_STEP;
    const sy = window.scrollY || window.pageYOffset || 0;
    const f = sy / stepVh;

    if (f <= 0.02 || f >= 6.98) return;

    const slideIdx = Math.floor(f);
    const incomingShare = f - slideIdx;

    if (incomingShare < 0.04 || incomingShare > 0.96) return;

    let targetSlide;
    if (incomingShare > 0.52) {
      targetSlide = slideIdx + 1;
    } else if (incomingShare < 0.48) {
      targetSlide = slideIdx;
    } else {
      targetSlide = lastScrollDirection >= 0 ? slideIdx + 1 : slideIdx;
    }

    const targetY = clamp(targetSlide, 0, 7) * stepVh;
    animateSmoothAutoScrollTo(targetY, 820);
  }, 1000);
}

function animateSmoothAutoScrollTo(targetY, durationMs) {
  isAutoSnapping = true;
  const startY = window.scrollY || window.pageYOffset || 0;
  const deltaY = targetY - startY;
  if (Math.abs(deltaY) < 2) {
    isAutoSnapping = false;
    return;
  }

  const startTime = performance.now();

  function step(now) {
    if (!isAutoSnapping) return;
    const elapsed = now - startTime;
    const t = clamp(elapsed / durationMs, 0, 1);
    const eased = smootherstep(0, 1, t);
    const nextY = startY + deltaY * eased;

    window.scrollTo(0, nextY);

    if (t < 1) {
      autoSnapRafId = requestAnimationFrame(step);
    } else {
      isAutoSnapping = false;
      autoSnapRafId = null;
    }
  }

  autoSnapRafId = requestAnimationFrame(step);
}

/* ---------------------------------------------------------------------
   MASTER 60FPS ANIMATION LOOP
   --------------------------------------------------------------------- */
function tickMasterChoreography(now) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const rawScrollY = window.scrollY || window.pageYOffset || 0;

  smoothScrollY = lerp(smoothScrollY, rawScrollY, 0.14);
  if (Math.abs(rawScrollY - smoothScrollY) < 0.1) {
    smoothScrollY = rawScrollY;
  }

  reelSmoothScrollY = lerp(reelSmoothScrollY, rawScrollY, 0.085);
  if (Math.abs(rawScrollY - reelSmoothScrollY) < 0.08) {
    reelSmoothScrollY = rawScrollY;
  }

  if (preloaderStartTime === null) preloaderStartTime = now || performance.now();
  const elapsedPreload = (now || performance.now()) - preloaderStartTime;
  if (elapsedPreload <= PRELOADER_HOLD_MS) {
    preloaderCurrent = 0;
  } else {
    const moveT = clamp((elapsedPreload - PRELOADER_HOLD_MS) / PRELOADER_MOVE_MS, 0, 1);
    preloaderCurrent = easeInOutCubic(moveT);
  }

  // Update mobile hamburger button blend state
  updateMobileBurgerState(vw, vh, reelSmoothScrollY);

  // 1. Update Unified GPU Axis (Scroll Collapse A ... & ... T ONLY on mobile)
  const footerProgress = updateUnifiedAxisGPU(vw, vh, rawScrollY);
  const partingActiveMultiplier = 1 - smoothstep(0.05, 0.35, footerProgress);

  // 2. View-specific animations
  if (currentView === 'home') {
    const homeGapPx = Math.max(56, vw * 0.068);
    updateHomeReelHUD(vw, vh, reelSmoothScrollY);
    updateHomeServicesSplit(vw, vh);
    updateSmoothPartingAroundAmpersand(rosterRowsCache, vh, homeGapPx, 135, partingActiveMultiplier);
  } else if (currentView === 'about') {
    updateWhyUsCircularParting(vw, vh, partingActiveMultiplier);
    updateAboutSynchronizedScroll(vw, vh);
  }

  requestAnimationFrame(tickMasterChoreography);
}

/* ---------------------------------------------------------------------
   1. UNIFIED GPU AXIS: ARCHIVE — & — VAULT + MOBILE-ONLY SCROLL COLLAPSE
   --------------------------------------------------------------------- */
function updateUnifiedAxisGPU(vw, vh, rawScrollY) {
  const elL = document.getElementById('axisLeft');
  const elC = document.getElementById('axisCenter');
  const elR = document.getElementById('axisRight');
  const axisLayer = document.getElementById('unifiedAxisLayer');
  if (!elL || !elC || !elR || !axisLayer) return 0;

  const leftPad  = vw < 640 ? 14 : 18;
  const rightPad = vw < 640 ? 22 : clamp(vw * 0.026, 28, 44);

  const scaleWordsSmall = clamp(vw * 0.0148, 17.5, 24.0) / 100;
  const scaleAmpSmall   = clamp(vw * 0.0168, 19.5, 26.5) / 100;

  const totalBaseWidth = axisBaseWidths.left + axisBaseWidths.center + axisBaseWidths.right;
  const gapUnitAt100 = 11.5;
  const availableWidth = vw - leftPad - rightPad;
  const scaleGiant = availableWidth / (totalBaseWidth + gapUnitAt100 * 2);

  const xLeftSmall   = leftPad;
  const xCenterSmall = (vw * 0.5) - (axisBaseWidths.center * scaleAmpSmall * 0.5);
  const xRightSmall  = vw - rightPad - (axisBaseWidths.right * scaleWordsSmall);

  const wLeftGiant   = axisBaseWidths.left * scaleGiant;
  const wCenterGiant = axisBaseWidths.center * scaleGiant;
  const gapGiant     = gapUnitAt100 * scaleGiant;

  const xLeftGiantJoined   = leftPad;
  const xCenterGiantJoined = leftPad + wLeftGiant + gapGiant;
  const xRightGiantJoined  = xCenterGiantJoined + wCenterGiant + gapGiant;

  // When Contact Overlay is open on mobile, position the axis in the middle third (37vh)
  const yMidBaseline = (contactOpen && vw <= 768)
    ? (vh * 0.37) + (40 * scaleWordsSmall)
    : (vh * 0.5) + (40 * scaleWordsSmall);

  let footerProgress = 0;
  if ((currentView === 'home' || currentView === 'about') && !contactOpen) {
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    const maxScroll = Math.max(0, docHeight - vh);
    const distToBottom = maxScroll - smoothScrollY;
    const activationWindow = Math.min(280, vh * 0.36);

    if (maxScroll > 100 && distToBottom < activationWindow) {
      footerProgress = clamp(1 - (distToBottom / activationWindow), 0, 1);
    }
  }

  let xL, xC, xR, yBaseline, sWords, sAmp;

  if (preloaderCurrent < 0.999) {
    const p = preloaderCurrent;
    const yPreloadBaseline = (vh * 0.5) + (40 * scaleGiant);

    sWords = lerp(scaleGiant, scaleWordsSmall, p);
    sAmp   = lerp(scaleGiant, scaleAmpSmall, p);
    yBaseline = lerp(yPreloadBaseline, yMidBaseline, p);

    xL = lerp(xLeftGiantJoined, xLeftSmall, p);
    xC = lerp(xCenterGiantJoined, xCenterSmall, p);
    xR = lerp(xRightGiantJoined, xRightSmall, p);

    axisLayer.classList.toggle('blend-normal', p < 0.55);
    axisLayer.classList.remove('blend-overlay-white');
  } else if (contactOpen) {
    sWords = scaleWordsSmall;
    sAmp   = scaleAmpSmall;
    yBaseline = yMidBaseline;
    xL = xLeftSmall;
    xC = xCenterSmall;
    xR = xRightSmall;

    axisLayer.classList.remove('blend-normal');
    axisLayer.classList.add('blend-overlay-white');
  } else if (footerProgress > 0.001) {
    const phase1 = smoothstep(0.0, 0.44, footerProgress);
    const phase2 = smoothstep(0.44, 0.99, footerProgress);

    const yBottomEdge = vh - 5;

    yBaseline = lerp(yMidBaseline, yBottomEdge, phase1);
    sWords = lerp(scaleWordsSmall, scaleGiant, phase2);
    sAmp   = lerp(scaleAmpSmall, scaleGiant, phase2);

    const xRightAtSmallEdge = vw - rightPad - (axisBaseWidths.right * sWords);
    const xCenterAtMid      = (vw * 0.5) - (axisBaseWidths.center * sAmp * 0.5);
    const joinProgress      = smoothstep(0.46, 0.99, footerProgress);

    xL = leftPad;
    xC = lerp(xCenterAtMid, xCenterGiantJoined, joinProgress);
    xR = lerp(xRightAtSmallEdge, xRightGiantJoined, joinProgress);

    axisLayer.classList.toggle('blend-normal', footerProgress > 0.25);
    axisLayer.classList.remove('blend-overlay-white');
  } else {
    sWords = scaleWordsSmall;
    sAmp   = scaleAmpSmall;
    yBaseline = yMidBaseline;
    xL = xLeftSmall;
    xC = xCenterSmall;
    xR = xRightSmall;
    axisLayer.classList.remove('blend-normal');
    axisLayer.classList.remove('blend-overlay-white');
  }

  // 4. Scroll Collapse Animation (EXCLUSIVO PARA MÓVILES: vw <= 768):
  // En PC (vw > 768), collapseFactor se mantiene en 0 para que "ARCHIVE" y "VAULT" siempre se vean completas.
  let collapseFactor = 0;
  if (vw <= 768 && preloaderCurrent >= 0.999 && !contactOpen) {
    const scrollProgress = smoothScrollY / Math.max(1, vh);
    const collapseIn = smoothstep(0.02, 0.15, scrollProgress);
    const collapseOutFooter = 1 - smoothstep(0.02, 0.22, footerProgress);
    collapseFactor = collapseIn * collapseOutFooter;
  }

  const rightClipPct = (collapseFactor * 83.8).toFixed(2);
  const leftClipPct  = (collapseFactor * 79.5).toFixed(2);

  elL.style.clipPath = collapseFactor > 0.001
    ? `inset(-15% ${rightClipPct}% -15% 0%)`
    : 'inset(-15% 0% -15% 0%)';
  elR.style.clipPath = collapseFactor > 0.001
    ? `inset(-15% 0% -15% ${leftClipPct}%)`
    : 'inset(-15% 0% -15% 0%)';

  const baseHeightOffset = 80;
  elL.style.transform = `translate3d(${xL.toFixed(2)}px, ${(yBaseline - baseHeightOffset).toFixed(2)}px, 0) scale(${sWords.toFixed(4)})`;
  elC.style.transform = `translate3d(${xC.toFixed(2)}px, ${(yBaseline - baseHeightOffset).toFixed(2)}px, 0) scale(${sAmp.toFixed(4)})`;
  elR.style.transform = `translate3d(${xR.toFixed(2)}px, ${(yBaseline - baseHeightOffset).toFixed(2)}px, 0) scale(${sWords.toFixed(4)})`;

  return footerProgress;
}

/* ---------------------------------------------------------------------
   2. HOME REEL HUD & FLUID OVERLAP PARALLAX BETWEEN VIDEOS
   --------------------------------------------------------------------- */
function updateHomeReelHUD(vw, vh, scrollY) {
  const reelHud = document.getElementById('reelHudFixed');
  if (!reelHud) return;

  const totalCampaigns = REEL_CAMPAIGNS.length; // 7 (indices 0..6)
  const stepVh = vh * REEL_SCROLL_STEP;
  const stepRemainderPx = vh - stepVh;
  const f = clamp(scrollY / stepVh, 0, totalCampaigns + 0.5);

  // Activa únicamente el decodificador de video del slide visible
  manageHomeReelVideos(f);

  for (let idx = 0; idx < totalCampaigns; idx++) {
    const slideEl = reelSlideEls[idx];
    const mediaInner = reelSlideInners[idx];
    const dimmer = reelDimmers[idx];

    if (slideEl && idx > 0) {
      const unstickOffset = Math.max(0, idx - f) * stepRemainderPx;
      slideEl.style.transform = unstickOffset > 0.1
        ? `translate3d(0, ${unstickOffset.toFixed(2)}px, 0)`
        : 'translate3d(0, 0, 0)';
    }

    if (!mediaInner) continue;
    const rel = f - idx;
    if (rel < -1.2 || rel > 1.3) continue;

    if (rel < 0) {
      const wipeInP = clamp(1 + rel, 0, 1);
      const easedIn = smootherstep(0, 1, wipeInP);
      const sc = lerp(1.12, 1.0, easedIn);
      const yShift = lerp(-vh * 0.14, 0, easedIn);
      const dimOp = lerp(0.32, 0.15, easedIn);
      mediaInner.style.transform = `translate3d(0, ${yShift.toFixed(2)}px, 0) scale(${sc.toFixed(4)})`;
      if (dimmer) dimmer.style.opacity = dimOp.toFixed(3);
    } else {
      const coverP = clamp(rel, 0, 1);
      const easedCover = smootherstep(0, 1, coverP);
      const sc = lerp(1.0, 0.94, easedCover);
      const yShift = lerp(0, -vh * 0.12, easedCover);
      const dimOp = lerp(0.15, 0.52, easedCover);
      mediaInner.style.transform = `translate3d(0, ${yShift.toFixed(2)}px, 0) scale(${sc.toFixed(4)})`;
      if (dimmer) dimmer.style.opacity = dimOp.toFixed(3);
    }
  }

  if (letsRaiseSlideEl) {
    const raiseOffset = Math.max(0, totalCampaigns - f) * stepRemainderPx;
    letsRaiseSlideEl.style.transform = raiseOffset > 0.1
      ? `translate3d(0, ${raiseOffset.toFixed(2)}px, 0)`
      : 'translate3d(0, 0, 0)';
  }

  if (f > 6) {
    const wipeProgress = clamp(f - 6, 0, 1);
    const wipeY = -wipeProgress * vh;
    reelHud.style.transform = `translate3d(0, ${wipeY.toFixed(1)}px, 0)`;
    reelHud.style.opacity = wipeProgress >= 0.99 ? '0' : '1';
  } else {
    reelHud.style.transform = 'translate3d(0, 0, 0)';
    reelHud.style.opacity = '1';
  }

  const topGiantScale   = clamp(vw * 0.104, 58, 182) / 100;
  const subSmallScale   = clamp(vw * 0.022, 16, 34) / 100;
  const rightGiantScale = clamp(vw * 0.090, 50, 156) / 100;

  const topGiantLineH   = 100 * topGiantScale * 0.85;
  const rightGiantLineH = 100 * rightGiantScale * 0.85;
  const subSmallLineH   = 100 * subSmallScale * 0.95;

  const activeIdx = Math.min(totalCampaigns - 1, Math.floor(clamp(f, 0, totalCampaigns - 0.0001)));
  const p = clamp(f - activeIdx, 0, 1);
  const pSmooth = smootherstep(0, 1, p);

  for (let i = 0; i < totalCampaigns; i++) {
    const el = hudTopWords[i];
    if (!el) continue;

    if (i === activeIdx) {
      const yPos = 8 - (pSmooth * (topGiantLineH + 14));
      el.style.opacity = '1';
      el.style.transform = `translate3d(0, ${yPos.toFixed(2)}px, 0) scale(${topGiantScale.toFixed(4)})`;
    } else if (i === activeIdx + 1) {
      const startY = 8 + topGiantLineH + 4;
      const yPos = lerp(startY, 8, pSmooth);
      const sc = lerp(subSmallScale, topGiantScale, pSmooth);
      el.style.opacity = '1';
      el.style.transform = `translate3d(0, ${yPos.toFixed(2)}px, 0) scale(${sc.toFixed(4)})`;
    } else if (i === activeIdx + 2 && p > 0.52) {
      const appearP = smoothstep(0.52, 1.0, p);
      const targetY = 8 + topGiantLineH + 4;
      const yPos = lerp(targetY + 18, targetY, appearP);
      el.style.opacity = appearP.toFixed(3);
      el.style.transform = `translate3d(0, ${yPos.toFixed(2)}px, 0) scale(${subSmallScale.toFixed(4)})`;
    } else {
      el.style.opacity = '0';
      el.style.transform = `translate3d(0, -300px, 0) scale(${subSmallScale.toFixed(4)})`;
    }
  }

  const topShrinkingHeight = lerp(rightGiantLineH, subSmallLineH + 4, pSmooth);

  for (let j = 1; j < totalCampaigns; j++) {
    const el = hudRightWords[j];
    if (!el) continue;

    if (j <= activeIdx) {
      el.style.opacity = '0';
      el.style.transform = `translate3d(0, -200px, 0) scale(${subSmallScale.toFixed(4)})`;
    } else if (j === activeIdx + 1) {
      const sc = lerp(rightGiantScale, subSmallScale, pSmooth);
      const fadeEnd = p > 0.92 ? (1 - smoothstep(0.92, 1.0, p)) : 1;
      el.style.opacity = fadeEnd.toFixed(3);
      el.style.transform = `translate3d(0, 4px, 0) scale(${sc.toFixed(4)})`;
    } else {
      const stackOffsetIndex = j - (activeIdx + 2);
      const yPos = 4 + topShrinkingHeight + (stackOffsetIndex * rightGiantLineH);
      el.style.opacity = '1';
      el.style.transform = `translate3d(0, ${yPos.toFixed(2)}px, 0) scale(${rightGiantScale.toFixed(4)})`;
    }
  }
}

/* ---------------------------------------------------------------------
   3. HOME SERVICES DUAL-COLOR SPLIT
   --------------------------------------------------------------------- */
function updateHomeServicesSplit(vw, vh) {
  const section = document.getElementById('servicesSplitSection');
  const trackWrapper = document.getElementById('servicesTrackWrapper');
  const photoBox = document.getElementById('servicesPhotoBox');
  const blackLayer = document.getElementById('servicesBlackLayer');
  const orangeLayer = document.getElementById('servicesOrangeInner');
  const srvVid = document.getElementById('servicesVideo');
  if (!section || !trackWrapper || !photoBox || !blackLayer || !orangeLayer) return;

  const rows = blackLayer.querySelectorAll('.service-row-line');
  if (!rows.length) return;

  const halfVh = vh * 0.5;
  const boxH = photoBox.offsetHeight || vh * 1.28;

  const textStartOffsetPx = vh * 0.28;
  const lastRow = rows[rows.length - 1];
  const lastRowCenterInLayer = lastRow.offsetTop + lastRow.offsetHeight * 0.5;
  const lastRowOffsetFromTrackTop = textStartOffsetPx + lastRowCenterInLayer;

  const maxPinTravel = Math.max(0, lastRowOffsetFromTrackTop - boxH * 0.5);
  trackWrapper.style.paddingBottom = `${maxPinTravel.toFixed(1)}px`;

  const trackRect = trackWrapper.getBoundingClientRect();
  const isSrvVisible = trackRect.bottom >= -200 && trackRect.top <= vh + 200;

  if (!isSrvVisible || contactOpen) {
    safePauseVideo(srvVid);
    return;
  }

  safePlayVideo(srvVid);

  const unpinnedBoxCenterY = trackRect.top + boxH * 0.5;
  const scrollPastCenter = halfVh - unpinnedBoxCenterY;
  const pinY = clamp(scrollPastCenter, 0, maxPinTravel);

  photoBox.style.transform = `translate3d(0, ${pinY.toFixed(2)}px, 0)`;
  blackLayer.style.transform = `translate3d(0, ${textStartOffsetPx.toFixed(2)}px, 0)`;
  orangeLayer.style.transform = `translate3d(0, ${(textStartOffsetPx - pinY).toFixed(2)}px, 0)`;

  rows.forEach((row, idx) => {
    const rRect = row.getBoundingClientRect();
    const rowCenterY = rRect.top + rRect.height * 0.5;
    const distFromMid = rowCenterY - halfVh;

    const targetP = clamp((135 - distFromMid) / 270, 0, 1);
    const state = srvRowStates[idx];
    state.smoothP = lerp(state.smoothP, targetP, 0.11);
    const p = state.smoothP;

    let rightScale = 1;
    let rightY = 0;
    let rightOpacity = 1;

    let leftScale = 0;
    let leftY = 0;
    let leftOpacity = 0;

    if (p <= 0.48) {
      const shrinkT = clamp(p / 0.48, 0, 1);
      const easedShrink = easeInOutCubic(shrinkT);
      rightScale = lerp(1.0, 0.0, easedShrink);
      rightY = lerp(0, -5, easedShrink);
      rightOpacity = rightScale < 0.025 ? 0 : 1;
      leftScale = 0;
      leftOpacity = 0;
    } else if (p < 0.52) {
      rightScale = 0;
      rightOpacity = 0;
      leftScale = 0;
      leftOpacity = 0;
    } else {
      rightScale = 0;
      rightOpacity = 0;
      const growT = clamp((p - 0.52) / 0.48, 0, 1);
      leftScale = Math.max(0, easeOutBackGraceful(growT));
      leftY = lerp(6, 0, easeInOutCubic(growT));
      leftOpacity = growT < 0.02 ? 0 : 1;
    }

    const rightTransform = `translate3d(0, ${rightY.toFixed(1)}px, 0) scale(${rightScale.toFixed(4)})`;
    const leftTransform  = `translate3d(0, ${leftY.toFixed(1)}px, 0) scale(${leftScale.toFixed(4)})`;

    if (srvBlackRight[idx]) {
      srvBlackRight[idx].style.transform = rightTransform;
      srvBlackRight[idx].style.opacity = rightOpacity;
    }
    if (srvOrangeRight[idx]) {
      srvOrangeRight[idx].style.transform = rightTransform;
      srvOrangeRight[idx].style.opacity = rightOpacity;
    }
    if (srvBlackLeft[idx]) {
      srvBlackLeft[idx].style.transform = leftTransform;
      srvBlackLeft[idx].style.opacity = leftOpacity;
    }
    if (srvOrangeLeft[idx]) {
      srvOrangeLeft[idx].style.transform = leftTransform;
      srvOrangeLeft[idx].style.opacity = leftOpacity;
    }
  });
}

/* ---------------------------------------------------------------------
   4A. GENERAL COSINE PARTING FOR CLIENT ROSTER
   --------------------------------------------------------------------- */
function updateSmoothPartingAroundAmpersand(rowsCache, vh, maxGapPx, radiusPx, activationMultiplier = 1) {
  if (!rowsCache || !rowsCache.length) return;
  const halfVh = vh * 0.5;

  for (let i = 0; i < rowsCache.length; i++) {
    const item = rowsCache[i];
    const rRect = item.row.getBoundingClientRect();

    if (rRect.bottom < -120 || rRect.top > vh + 120) continue;

    const rowCenterY = rRect.top + rRect.height * 0.5;
    const dy = Math.abs(rowCenterY - halfVh);

    let targetGap = 0;
    if (dy < radiusPx) {
      const norm = dy / radiusPx;
      const cosineBell = 0.5 * (1 + Math.cos(Math.PI * norm));
      targetGap = maxGapPx * cosineBell * activationMultiplier;
    }

    item.currentGap = lerp(item.currentGap, targetGap, 0.085);

    if (item.currentGap > 0.15) {
      item.left.style.transform = `translate3d(${(-item.currentGap).toFixed(2)}px, 0, 0)`;
      item.right.style.transform = `translate3d(${(item.currentGap).toFixed(2)}px, 0, 0)`;
    } else {
      item.left.style.transform = 'translate3d(0, 0, 0)';
      item.right.style.transform = 'translate3d(0, 0, 0)';
    }
  }
}

/* ---------------------------------------------------------------------
   4B. WHY US: CIRCULAR BUBBLE AROUND 50VH '&' (CALIBRATED FOR MOBILE < 640PX)
   --------------------------------------------------------------------- */
function updateWhyUsCircularParting(vw, vh, activationMultiplier = 1) {
  if (!whyUsRowsCache || !whyUsRowsCache.length) return;
  const halfVh = vh * 0.5;

  const isSmallMobile = vw < 640;
  const maxGapPx = isSmallMobile ? clamp(vw * 0.18, 52, 86) : clamp(vw * 0.44, 45, 95);

  for (let i = 0; i < whyUsRowsCache.length; i++) {
    const item = whyUsRowsCache[i];
    const rRect = item.row.getBoundingClientRect();

    if (rRect.bottom < -120 || rRect.top > vh + 120) continue;

    const rowH = rRect.height || (isSmallMobile ? 28 : 48);
    const radiusPx = isSmallMobile ? Math.max(68, rowH * 2.15) : rowH * 1.55;
    const rowCenterY = rRect.top + rowH * 0.5;
    const dy = Math.abs(rowCenterY - halfVh);

    let targetGap = 0;
    if (dy < radiusPx) {
      const norm = dy / radiusPx;
      const cosineBell = 0.5 * (1 + Math.cos(Math.PI * norm));
      targetGap = maxGapPx * cosineBell * activationMultiplier;
    }

    item.currentGap = lerp(item.currentGap, targetGap, 0.35);

    if (item.currentGap > 0.2) {
      item.left.style.transform = `translate3d(${(-item.currentGap).toFixed(2)}px, 0, 0)`;
      item.right.style.transform = `translate3d(${(item.currentGap).toFixed(2)}px, 0, 0)`;
    } else {
      item.currentGap = 0;
      item.left.style.transform = 'translate3d(0, 0, 0)';
      item.right.style.transform = 'translate3d(0, 0, 0)';
    }
  }
}

/* ---------------------------------------------------------------------
   5. ABOUT VIEW 3-STAGE SYNCHRONIZED SCROLL CHOREOGRAPHY
   --------------------------------------------------------------------- */
function updateAboutSynchronizedScroll(vw, vh) {
  const stickyTrack = document.getElementById('aboutStickyTrack');
  const aboutStageVid = document.getElementById('aboutStageVideo');
  const aboutBioVid = document.getElementById('aboutBioVideo');

  if (stickyTrack) {
    const tRect = stickyTrack.getBoundingClientRect();
    const isTrackInView = tRect.bottom >= -150 && tRect.top <= vh + 150;
    const scrollable = Math.max(1, tRect.height - vh);
    const rawP = clamp(-tRect.top / scrollable, 0, 1);

    aboutSmoothP = lerp(aboutSmoothP, rawP, 0.12);
    if (Math.abs(rawP - aboutSmoothP) < 0.0005) {
      aboutSmoothP = rawP;
    }
    const p = aboutSmoothP;

    // Gestión de reproducción bajo demanda de los 2 videos en About
    if (!isTrackInView || contactOpen) {
      safePauseVideo(aboutStageVid);
      safePauseVideo(aboutBioVid);
    } else {
      if (p > 0.001 && p < 0.65) {
        safePlayVideo(aboutStageVid);
      } else {
        safePauseVideo(aboutStageVid);
      }

      if (p > 0.52) {
        safePlayVideo(aboutBioVid);
      } else {
        safePauseVideo(aboutBioVid);
      }
    }

    const phase1Heading = document.getElementById('aboutPhase1Heading');
    const marqueeWall = document.getElementById('aboutMarqueeWall');
    const expandingCard = document.getElementById('aboutExpandingCard');
    const bioWhitePanel = document.getElementById('aboutBioWhitePanel');
    const bioTextScroll = document.getElementById('aboutBioTextScroll');

    const thumb0 = document.getElementById('aboutThumb0');
    const thumb1 = document.getElementById('aboutThumb1');
    const thumb2 = document.getElementById('aboutThumb2');
    const thumb3 = document.getElementById('aboutThumb3');
    const thumbs = [thumb0, thumb1, thumb2, thumb3];

    const isMobile = vw <= 768;

    const aboutGrowP = smootherstep(0.005, 0.16, p);
    const aboutExitP = smootherstep(0.44, 0.54, p);

    if (phase1Heading) {
      const growScale = lerp(0.16, 1.0, aboutGrowP);
      const op = smoothstep(0.005, 0.04, p) * (1 - aboutExitP);
      phase1Heading.style.transform = `translate3d(0, 0, 0) scale(${growScale.toFixed(4)})`;
      phase1Heading.style.opacity = op.toFixed(3);
    }

    const revealRanges = isMobile
      ? [
          [0.06, 0.15],
          [0.02, 0.11],
          [0.10, 0.19],
          [0.14, 0.23]
        ]
      : [
          [0.02, 0.11],
          [0.06, 0.15],
          [0.10, 0.19],
          [0.14, 0.23]
        ];

    const pHalfJoin = smootherstep(0.24, 0.34, p);
    const pFullJoin = smootherstep(0.34, 0.44, p);

    const pVideoGrow = smootherstep(0.44, 0.58, p);
    const pBioFadeIn = smootherstep(0.56, 0.65, p);
    const pFullScreenExpand = smootherstep(0.84, 0.96, p);

    const cardW = isMobile ? clamp(vw * 0.44, 148, 205) : clamp(vw * 0.155, 136, 240);
    const cardH = cardW * 0.625;

    let xSpread, xHalf, ySpread, yHalf;

    if (isMobile) {
      const vGap = clamp(vh * 0.02, 10, 18);
      const slotY = [
        -(1.5 * cardH + 1.5 * vGap),
        -(0.5 * cardH + 0.5 * vGap),
        +(0.5 * cardH + 0.5 * vGap),
        +(1.5 * cardH + 1.5 * vGap)
      ];
      const slotYHalf = [
        -0.75 * cardH,
        -0.25 * cardH,
        +0.25 * cardH,
        +0.75 * cardH
      ];

      xSpread = [0, 0, 0, 0];
      xHalf   = [0, 0, 0, 0];
      ySpread = [slotY[1], slotY[0], slotY[2], slotY[3]];
      yHalf   = [slotYHalf[1], slotYHalf[0], slotYHalf[2], slotYHalf[3]];
    } else {
      const sideGap = clamp(vw * 0.024, 14, 38);
      const centerGap = clamp(vw * 0.055, 36, 84);

      xSpread = [
        -(centerGap * 0.5 + cardW * 1.5 + sideGap),
        -(centerGap * 0.5 + cardW * 0.5),
        +(centerGap * 0.5 + cardW * 0.5),
        +(centerGap * 0.5 + cardW * 1.5 + sideGap)
      ];
      xHalf = [
        -0.75 * cardW,
        -0.25 * cardW,
        +0.25 * cardW,
        +0.75 * cardW
      ];
      ySpread = [0, 0, 0, 0];
      yHalf   = [0, 0, 0, 0];
    }

    const bioTargetW = vw * 0.84;
    const bioTargetH = vh * 0.77;

    thumbs.forEach((el, idx) => {
      if (!el) return;

      const [rStart, rEnd] = revealRanges[idx];
      const revealP = smootherstep(rStart, rEnd, p);
      const topInset = (1 - revealP) * 100;
      el.style.clipPath = `inset(${topInset.toFixed(2)}% 0% 0% 0%)`;

      const xAfterHalf = lerp(xSpread[idx], xHalf[idx], pHalfJoin);
      const currentX = lerp(xAfterHalf, 0, pFullJoin);

      const yAfterHalf = lerp(ySpread[idx], yHalf[idx], pHalfJoin);
      const currentY = lerp(yAfterHalf, 0, pFullJoin);

      if (idx === 0) {
        const curW = lerp(cardW, bioTargetW, pVideoGrow);
        const curH = lerp(cardH, bioTargetH, pVideoGrow);
        const vidOp = (revealP > 0.001 ? 1 : 0) * (1 - pBioFadeIn);

        el.style.width = `${curW.toFixed(2)}px`;
        el.style.height = `${curH.toFixed(2)}px`;
        el.style.transform = `translate3d(${(currentX - curW * 0.5).toFixed(2)}px, ${(currentY - curH * 0.5).toFixed(2)}px, 0)`;
        el.style.opacity = vidOp.toFixed(3);
      } else {
        const hideBehindVideo = 1 - smoothstep(0.40, 0.44, p);
        const imgScale = lerp(1.0, 0.96, pFullJoin);
        const imgOp = (revealP > 0.001 ? 1 : 0) * hideBehindVideo;

        el.style.width = `${cardW.toFixed(2)}px`;
        el.style.height = `${cardH.toFixed(2)}px`;
        el.style.transform = `translate3d(${(currentX - cardW * 0.5).toFixed(2)}px, ${(currentY - cardH * 0.5).toFixed(2)}px, 0) scale(${imgScale.toFixed(4)})`;
        el.style.opacity = imgOp.toFixed(3);
      }
    });

    if (marqueeWall) {
      const wallEnter = smoothstep(0.44, 0.54, p);
      const wallOp = wallEnter * (1 - smoothstep(0.92, 0.98, p));
      marqueeWall.style.opacity = wallOp.toFixed(3);
    }

    if (expandingCard) {
      const boxW = lerp(84, 100, pFullScreenExpand);
      const boxH = lerp(77, 100, pFullScreenExpand);

      expandingCard.style.width = `${boxW.toFixed(2)}vw`;
      expandingCard.style.height = `${boxH.toFixed(2)}vh`;
      expandingCard.style.opacity = pBioFadeIn.toFixed(3);
      expandingCard.style.transform = 'scale(1)';
      expandingCard.style.boxShadow = (pBioFadeIn > 0.05 && pFullScreenExpand <= 0.85)
        ? '0 25px 50px -12px rgba(0,0,0,0.22)'
        : 'none';
    }

    if (bioWhitePanel) {
      bioWhitePanel.style.opacity = pBioFadeIn.toFixed(3);
      bioWhitePanel.style.pointerEvents = pBioFadeIn > 0.5 ? 'auto' : 'none';
    }

    if (bioTextScroll) {
      const bioScrollP = smoothstep(0.64, 0.85, p);
      const textH = bioTextScroll.offsetHeight || 650;
      const maxUpShift = Math.max(220, textH - (vh * 0.52));
      const yBio = lerp(0, -maxUpShift, bioScrollP);
      bioTextScroll.style.transform = `translate3d(0, ${yBio.toFixed(1)}px, 0)`;
    }
  }

  // PRESERVATION Sticky Lock & Handoff to CREATIVITY
  const sustSec = document.getElementById('sustainabilitySection');
  const sustHeading = document.getElementById('sustainabilityHeading');
  const sustTextEnd = document.getElementById('sustainabilityTextEndRef');
  const hueSec = document.getElementById('huemansSection');
  const hueHeading = document.getElementById('huemansHeading');

  if (sustSec && sustHeading) {
    const sRect = sustSec.getBoundingClientRect();
    const sGrowProg = smoothstep(vh * 0.92, vh * 0.12, sRect.top);
    const sScale = lerp(0.14, 1.0, sGrowProg);
    sustHeading.style.transform = `scale(${sScale.toFixed(4)})`;
  }

  // CREATIVITY Title Growth & 3 Aura Cards Rising
  if (hueSec && hueHeading) {
    const sustH = (sustHeading && sustHeading.offsetHeight) ? sustHeading.offsetHeight : 120;
    const sustBottomTrigger = sustH + 40;

    let hueGrowProg = 0;
    if (sustTextEnd) {
      const endRect = sustTextEnd.getBoundingClientRect();
      hueGrowProg = smoothstep(sustBottomTrigger + 140, -vh * 0.05, endRect.bottom);
    } else {
      const hRect = hueSec.getBoundingClientRect();
      hueGrowProg = smoothstep(vh * 0.65, vh * 0.08, hRect.top);
    }

    const hScale = lerp(0.14, 1.0, hueGrowProg);
    const hOp = smoothstep(0.0, 0.12, hueGrowProg);
    hueHeading.style.transform = `scale(${hScale.toFixed(4)})`;
    hueHeading.style.opacity = hOp.toFixed(3);

    const hRect = hueSec.getBoundingClientRect();
    const c0 = document.getElementById('auraCard0');
    const c1 = document.getElementById('auraCard1');
    const c2 = document.getElementById('auraCard2');
    const cProg = smoothstep(vh * 0.95, vh * 0.10, hRect.top);
    if (c0) c0.style.transform = `translate3d(0, ${(1 - cProg) * 40}px, 0)`;
    if (c1) c1.style.transform = `translate3d(0, ${(1 - cProg) * 95}px, 0)`;
    if (c2) c2.style.transform = `translate3d(0, ${(1 - cProg) * 150}px, 0)`;
  }
}

/* ---------------------------------------------------------------------
   LIVE WORLD CLOCKS (BUENOS AIRES, LA PAZ, NEW YORK)
   --------------------------------------------------------------------- */
function updateWorldClocks() {
  const now = new Date();
  const fmt = (tz) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
    } catch (e) {
      return '22:12';
    }
  };

  const ba = fmt('America/Argentina/Buenos_Aires');
  const lp = fmt('America/La_Paz');
  const ny = fmt('America/New_York');

  document.querySelectorAll('.clock-ba').forEach(el => el.textContent = ba);
  document.querySelectorAll('.clock-lp').forEach(el => el.textContent = lp);
  document.querySelectorAll('.clock-ny-us').forEach(el => el.textContent = ny);
}

/* ---------------------------------------------------------------------
   NON-DESTRUCTIVE BILINGUAL SWITCHER (ES / EN)
   --------------------------------------------------------------------- */
function setLanguage(lang) {
  const targetLang = I18N[lang] ? lang : 'es';
  currentLang = targetLang;
  localStorage.setItem('site_lang', targetLang);
  document.documentElement.lang = targetLang;

  const dict = I18N[targetLang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  const title1El = document.getElementById('letsRaiseTitle1');
  const title2El = document.getElementById('letsRaiseTitle2');
  if (title1El) title1El.innerHTML = dict.letsRaiseTitle1;
  if (title2El) title2El.innerHTML = dict.letsRaiseTitle2;

  SERVICES_LIST = [...dict.services];
  for (let i = 0; i < SERVICES_LIST.length; i++) {
    const txt = SERVICES_LIST[i];
    if (srvBlackLeft[i]) srvBlackLeft[i].textContent = txt;
    if (srvBlackRight[i]) srvBlackRight[i].textContent = txt;
    if (srvOrangeLeft[i]) srvOrangeLeft[i].textContent = txt;
    if (srvOrangeRight[i]) srvOrangeRight[i].textContent = txt;
  }

  WHY_US_LINES = [...dict.whyUsLines];
  const nonSpacerPairs = WHY_US_LINES.filter(([l]) => l !== 'spacer');
  for (let i = 0; i < whyUsRowsCache.length; i++) {
    if (nonSpacerPairs[i]) {
      whyUsRowsCache[i].left.textContent = nonSpacerPairs[i][0];
      whyUsRowsCache[i].right.textContent = nonSpacerPairs[i][1];
    }
  }

  document.querySelectorAll('.lang-switch-pill').forEach(btn => {
    btn.classList.toggle('is-en', targetLang === 'en');
  });

  updateNavUnderline(contactOpen ? 'contact' : currentView);
}

function toggleLanguage() {
  setLanguage(currentLang === 'es' ? 'en' : 'es');
}

/* ---------------------------------------------------------------------
   INITIALIZATION
   --------------------------------------------------------------------- */
window.addEventListener('DOMContentLoaded', () => {
  buildHomeStickyWipeReel();
  buildServicesLayers();
  buildClientRoster();
  buildWorkGrid();
  buildWhyUsManifesto();
  setLanguage(currentLang);
  updateWorldClocks();
  setInterval(updateWorldClocks, 15000);

  measureAxisWidths();
  updateNavUnderline('home');
  updateMobileBurgerState(window.innerWidth, window.innerHeight, window.scrollY || 0);
  ensureLocalVideosPlaying();

  window.addEventListener('scroll', () => {
    const sy = window.scrollY || window.pageYOffset || 0;
    const delta = sy - lastRawScrollY;
    if (Math.abs(delta) > 0.5) {
      lastScrollDirection = delta > 0 ? 1 : -1;
    }
    lastRawScrollY = sy;

    if (!isAutoSnapping) {
      scheduleReelAutoSnap();
    }
  }, { passive: true });

  ['wheel', 'touchstart', 'touchmove', 'mousedown', 'keydown'].forEach(evt => {
    window.addEventListener(evt, () => {
      if (isAutoSnapping) {
        cancelReelAutoSnap();
      }
      scheduleReelAutoSnap();
    }, { passive: true });
  });

  requestAnimationFrame(tickMasterChoreography);

  setTimeout(() => {
    const backdrop = document.getElementById('preloaderBackdrop');
    if (backdrop) backdrop.classList.add('is-hidden');
  }, 1550);
});

window.addEventListener('resize', () => {
  measureAxisWidths();
  updateNavUnderline(contactOpen ? 'contact' : currentView);
  updateMobileBurgerState(window.innerWidth, window.innerHeight, window.scrollY || 0);
});