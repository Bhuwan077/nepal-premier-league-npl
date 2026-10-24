// ═══════════════════════════════════════════════════
// NEPAL PREMIER LEAGUE (NPL) — OFFICIAL FRANCHISE CRESTS
// Scalable Vector Graphics for all 8 Mega Franchises
// ═══════════════════════════════════════════════════

const TEAM_CRESTS = {
  // 1. LUMBINI LIONS (Orange & Gold Lion Shield)
  'LBL': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lbl-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#ff6b00"/>
        <stop offset="100%" stop-color="#b43403"/>
      </linearGradient>
      <linearGradient id="lbl-gold" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#ffd700"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
    </defs>
    <!-- Outer Shield Frame -->
    <path d="M50 4 L88 20 V54 C88 76 50 96 50 96 C50 96 12 76 12 54 V20 Z" fill="url(#lbl-grad)" stroke="#ffedd5" stroke-width="1.5"/>
    <path d="M50 9 L83 23 V52 C83 71 50 89 50 89 C50 89 17 71 17 52 V23 Z" fill="#1c0c04" stroke="url(#lbl-gold)" stroke-width="1.5"/>
    <!-- Lion Mane and Head Motif -->
    <path d="M50 25 C41 25 34 32 34 41 C34 47 38 52 41 55 L37 66 L50 61 L63 66 L59 55 C62 52 66 47 66 41 C66 32 59 25 50 25 Z" fill="url(#lbl-gold)"/>
    <!-- Lion Face Features -->
    <path d="M44 38 L48 44 L44 45 Z" fill="#1c0c04"/>
    <path d="M56 38 L52 44 L56 45 Z" fill="#1c0c04"/>
    <path d="M47 48 L50 51 L53 48 Z" fill="#1c0c04"/>
    <circle cx="45" cy="38" r="2" fill="#fff"/>
    <circle cx="55" cy="38" r="2" fill="#fff"/>
    <!-- Ribbon Text -->
    <rect x="22" y="72" width="56" height="15" rx="3" fill="#ea580c"/>
    <text x="50" y="83" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="10" font-weight="800" fill="#ffffff" letter-spacing="1.5">LIONS</text>
  </svg>`,

  // 2. SUDURPASCHIM ROYALS (Sapphire & Gold Royal Crown)
  'SPR': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="spr-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#4f46e5"/>
        <stop offset="100%" stop-color="#1e1b4b"/>
      </linearGradient>
      <linearGradient id="spr-crown" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#fde047"/>
        <stop offset="100%" stop-color="#eab308"/>
      </linearGradient>
    </defs>
    <!-- Outer Shield Frame -->
    <path d="M50 4 L88 20 V54 C88 76 50 96 50 96 C50 96 12 76 12 54 V20 Z" fill="url(#spr-grad)" stroke="#c7d2fe" stroke-width="1.5"/>
    <path d="M50 9 L83 23 V52 C83 71 50 89 50 89 C50 89 17 71 17 52 V23 Z" fill="#080b21" stroke="#818cf8" stroke-width="1.5"/>
    <!-- Royal Imperial Crown -->
    <path d="M28 56 L33 34 L43 45 L50 28 L57 45 L67 34 L72 56 Z" fill="url(#spr-crown)"/>
    <circle cx="50" cy="26" r="3.5" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
    <circle cx="33" cy="32" r="3" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
    <circle cx="67" cy="32" r="3" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
    <circle cx="42" cy="52" r="2" fill="#4338ca"/>
    <circle cx="50" cy="52" r="2.5" fill="#ef4444"/>
    <circle cx="58" cy="52" r="2" fill="#4338ca"/>
    <!-- Ribbon Text -->
    <rect x="20" y="72" width="60" height="15" rx="3" fill="#4338ca"/>
    <text x="50" y="83" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="10" font-weight="800" fill="#ffffff" letter-spacing="1.5">ROYALS</text>
  </svg>`,

  // 3. BIRATNAGAR KINGS (Imperial Crimson & Gold Monarch Shield)
  'BK': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bk-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#dc2626"/>
        <stop offset="100%" stop-color="#450a0a"/>
      </linearGradient>
      <linearGradient id="bk-gold" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="100%" stop-color="#f59e0b"/>
      </linearGradient>
    </defs>
    <path d="M50 4 L88 20 V54 C88 76 50 96 50 96 C50 96 12 76 12 54 V20 Z" fill="url(#bk-grad)" stroke="#fecaca" stroke-width="1.5"/>
    <path d="M50 9 L83 23 V52 C83 71 50 89 50 89 C50 89 17 71 17 52 V23 Z" fill="#180404" stroke="url(#bk-gold)" stroke-width="1.5"/>
    <!-- Crossed Bats Behind King Crown -->
    <path d="M30 60 L70 28" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
    <path d="M70 60 L30 28" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
    <!-- Kings Crown -->
    <path d="M30 56 L34 37 L44 46 L50 31 L56 46 L66 37 L70 56 Z" fill="url(#bk-gold)"/>
    <circle cx="50" cy="29" r="3" fill="#fff"/>
    <!-- Ribbon Text -->
    <rect x="22" y="72" width="56" height="15" rx="3" fill="#b91c1c"/>
    <text x="50" y="83" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="10" font-weight="800" fill="#ffffff" letter-spacing="1.5">KINGS</text>
  </svg>`,

  // 4. CHITWAN RHINOS (Emerald Horn & Forest Armor)
  'CWR': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cwr-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#064e3b"/>
      </linearGradient>
    </defs>
    <path d="M50 4 L88 20 V54 C88 76 50 96 50 96 C50 96 12 76 12 54 V20 Z" fill="url(#cwr-grad)" stroke="#a7f3d0" stroke-width="1.5"/>
    <path d="M50 9 L83 23 V52 C83 71 50 89 50 89 C50 89 17 71 17 52 V23 Z" fill="#021f14" stroke="#34d399" stroke-width="1.5"/>
    <!-- Rhino Armor Head & Horn -->
    <path d="M54 26 C54 26 62 33 68 43 L56 50 L48 42 Z" fill="#6ee7b7"/>
    <path d="M34 50 C40 40 60 40 68 53 L34 60 Z" fill="#10b981"/>
    <circle cx="45" cy="46" r="2.5" fill="#fff"/>
    <circle cx="45" cy="46" r="1.2" fill="#064e3b"/>
    <!-- Shield Plate Marks -->
    <line x1="36" y1="58" x2="64" y2="58" stroke="#34d399" stroke-width="2"/>
    <!-- Ribbon Text -->
    <rect x="20" y="72" width="60" height="15" rx="3" fill="#047857"/>
    <text x="50" y="83" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="10" font-weight="800" fill="#ffffff" letter-spacing="1.5">RHINOS</text>
  </svg>`,

  // 5. JANAKPUR BOLTS (Solar Gold Thunderbolt)
  'JB': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="jb-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#eab308"/>
        <stop offset="100%" stop-color="#854d0e"/>
      </linearGradient>
    </defs>
    <path d="M50 4 L88 20 V54 C88 76 50 96 50 96 C50 96 12 76 12 54 V20 Z" fill="url(#jb-grad)" stroke="#fef08a" stroke-width="1.5"/>
    <path d="M50 9 L83 23 V52 C83 71 50 89 50 89 C50 89 17 71 17 52 V23 Z" fill="#1a1403" stroke="#facc15" stroke-width="1.5"/>
    <!-- Dynamic Lightning Bolt Motif -->
    <polygon points="56,23 34,48 48,48 40,68 66,41 52,41" fill="#facc15" stroke="#ffffff" stroke-width="1.2"/>
    <!-- Glow rays -->
    <circle cx="50" cy="46" r="18" fill="none" stroke="#fef08a" stroke-width="1" stroke-dasharray="2,3"/>
    <!-- Ribbon Text -->
    <rect x="22" y="72" width="56" height="15" rx="3" fill="#ca8a04"/>
    <text x="50" y="83" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="10" font-weight="800" fill="#ffffff" letter-spacing="1.5">BOLTS</text>
  </svg>`,

  'JKB': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="jkb-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#eab308"/>
        <stop offset="100%" stop-color="#854d0e"/>
      </linearGradient>
    </defs>
    <path d="M50 4 L88 20 V54 C88 76 50 96 50 96 C50 96 12 76 12 54 V20 Z" fill="url(#jkb-grad)" stroke="#fef08a" stroke-width="1.5"/>
    <path d="M50 9 L83 23 V52 C83 71 50 89 50 89 C50 89 17 71 17 52 V23 Z" fill="#1a1403" stroke="#facc15" stroke-width="1.5"/>
    <polygon points="56,23 34,48 48,48 40,68 66,41 52,41" fill="#facc15" stroke="#ffffff" stroke-width="1.2"/>
    <rect x="22" y="72" width="56" height="15" rx="3" fill="#ca8a04"/>
    <text x="50" y="83" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="10" font-weight="800" fill="#ffffff" letter-spacing="1.5">BOLTS</text>
  </svg>`,

  // 6. KARNALI YAKS (Himalayan Peak & Yak Horns)
  'KNY': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kny-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#0284c7"/>
        <stop offset="100%" stop-color="#082f49"/>
      </linearGradient>
    </defs>
    <path d="M50 4 L88 20 V54 C88 76 50 96 50 96 C50 96 12 76 12 54 V20 Z" fill="url(#kny-grad)" stroke="#bae6fd" stroke-width="1.5"/>
    <path d="M50 9 L83 23 V52 C83 71 50 89 50 89 C50 89 17 71 17 52 V23 Z" fill="#031622" stroke="#38bdf8" stroke-width="1.5"/>
    <!-- Yak Horns Curves -->
    <path d="M28 35 C38 30 46 42 46 51 C46 55 36 57 28 47 Z" fill="#38bdf8"/>
    <path d="M72 35 C62 30 54 42 54 51 C54 55 64 57 72 47 Z" fill="#38bdf8"/>
    <!-- Snowy Peak Triangle -->
    <polygon points="50,33 34,60 66,60" fill="#0284c7"/>
    <polygon points="50,33 42,47 58,47" fill="#ffffff"/>
    <!-- Ribbon Text -->
    <rect x="22" y="72" width="56" height="15" rx="3" fill="#0369a1"/>
    <text x="50" y="83" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="10" font-weight="800" fill="#ffffff" letter-spacing="1.5">YAKS</text>
  </svg>`,

  // 7. KATHMANDU GURKHAS (Royal Purple & Crossed Khukuris)
  'KMG': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kmg-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#9333ea"/>
        <stop offset="100%" stop-color="#3b0764"/>
      </linearGradient>
    </defs>
    <path d="M50 4 L88 20 V54 C88 76 50 96 50 96 C50 96 12 76 12 54 V20 Z" fill="url(#kmg-grad)" stroke="#f3e8ff" stroke-width="1.5"/>
    <path d="M50 9 L83 23 V52 C83 71 50 89 50 89 C50 89 17 71 17 52 V23 Z" fill="#180425" stroke="#c084fc" stroke-width="1.5"/>
    <!-- Crossed Khukuri Curved Blades -->
    <path d="M30 35 C42 41 58 55 62 60 L57 65 C53 61 38 47 27 41 Z" fill="#e9d5ff" stroke="#a855f7" stroke-width="0.8"/>
    <path d="M70 35 C58 41 42 55 38 60 L43 65 C47 61 62 47 73 41 Z" fill="#ffffff" stroke="#a855f7" stroke-width="0.8"/>
    <circle cx="50" cy="50" r="4" fill="#ffd700"/>
    <!-- Ribbon Text -->
    <rect x="18" y="72" width="64" height="15" rx="3" fill="#7e22ce"/>
    <text x="50" y="83" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1">GURKHAS</text>
  </svg>`,

  // 8. POKHARA AVENGERS (Teal Machapuchare Fishtail Peak)
  'PKA': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pka-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#0891b2"/>
        <stop offset="100%" stop-color="#164e63"/>
      </linearGradient>
    </defs>
    <path d="M50 4 L88 20 V54 C88 76 50 96 50 96 C50 96 12 76 12 54 V20 Z" fill="url(#pka-grad)" stroke="#cffafe" stroke-width="1.5"/>
    <path d="M50 9 L83 23 V52 C83 71 50 89 50 89 C50 89 17 71 17 52 V23 Z" fill="#041a20" stroke="#22d3ee" stroke-width="1.5"/>
    <!-- Machapuchare Fishtail Mountain -->
    <path d="M50 25 L65 58 L54 58 L50 49 L46 58 L35 58 Z" fill="#22d3ee"/>
    <polygon points="50,25 46,38 54,38" fill="#ffffff"/>
    <line x1="38" y1="47" x2="62" y2="47" stroke="#ffffff" stroke-width="2"/>
    <!-- Ribbon Text -->
    <rect x="18" y="72" width="64" height="15" rx="3" fill="#0e7490"/>
    <text x="50" y="83" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1">AVENGERS</text>
  </svg>`,

  // DEFAULT NPL LEAGUE CREST
  'NPL': `<svg viewBox="0 0 100 100" class="team-svg-crest" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="npl-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stop-color="#dc2626"/>
        <stop offset="100%" stop-color="#1e1b4b"/>
      </linearGradient>
    </defs>
    <polygon points="50,4 92,26 92,74 50,96 8,74 8,26" fill="url(#npl-grad)" stroke="#ffd700" stroke-width="2"/>
    <text x="50" y="44" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="11" font-weight="800" fill="#ffd700" letter-spacing="1">NEPAL</text>
    <text x="50" y="66" text-anchor="middle" font-family="'Oswald', sans-serif" font-size="20" font-weight="900" fill="#ffffff" letter-spacing="1.5">NPL</text>
  </svg>`
};

// Safe helper to obtain crest html with custom class
function getTeamCrest(code, extraClass = '') {
  const crest = TEAM_CRESTS[code] || TEAM_CRESTS['NPL'];
  if (extraClass) {
    return crest.replace('class="team-svg-crest"', `class="team-svg-crest ${extraClass}"`);
  }
  return crest;
}
