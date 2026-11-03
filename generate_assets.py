#!/usr/bin/env python3
"""
Generate elegant, high-fidelity SVG graphic assets for:
- Avatar
- Lavender Beauty Brand Logo
- 3 Instagram Feed Designs (1080x1350 aspect)
- 3 Instagram Story Designs (1080x1920 aspect)
- 1 Product Catalog Showcase
- Video Reels Poster
"""

import os

os.makedirs('public/assets', exist_ok=True)

# 1. Avatar Placeholder
avatar_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E9DFF7" />
      <stop offset="50%" stop-color="#D5C2F2" />
      <stop offset="100%" stop-color="#9B74DF" />
    </linearGradient>
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D1A54" />
      <stop offset="100%" stop-color="#1B0E36" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#2D1A54" flood-opacity="0.15" />
    </filter>
  </defs>

  <!-- Background Circle -->
  <circle cx="200" cy="200" r="190" fill="url(#bgGrad)" />
  <circle cx="200" cy="200" r="175" fill="#FAF7FD" />

  <!-- Abstract Studio Background Decor -->
  <circle cx="90" cy="110" r="45" fill="#F3EDFB" opacity="0.8" />
  <circle cx="310" cy="90" r="35" fill="#E9DFF7" opacity="0.6" />
  <path d="M 60,320 Q 200,280 340,320" stroke="#D5C2F2" stroke-width="2" fill="none" stroke-dasharray="6,6" />

  <!-- Shoulders & Torso -->
  <path d="M 90,380 C 100,280 140,250 200,250 C 260,250 300,280 310,380 Z" fill="url(#suitGrad)" filter="url(#shadow)" />
  <!-- Shirt Collar -->
  <polygon points="175,250 200,295 225,250" fill="#FFFFFF" />
  <polygon points="190,250 200,290 210,250" fill="#9B74DF" />

  <!-- Neck -->
  <rect x="180" y="195" width="40" height="60" rx="8" fill="#F4D3BE" />
  <path d="M 180,225 C 190,235 210,235 220,225 Z" fill="#E8BFA6" opacity="0.5" />

  <!-- Head -->
  <ellipse cx="200" cy="165" rx="52" ry="62" fill="#F9DDC7" />
  <!-- Ears -->
  <ellipse cx="145" cy="165" rx="10" ry="16" fill="#F4D3BE" />
  <ellipse cx="255" cy="165" rx="10" ry="16" fill="#F4D3BE" />

  <!-- Modern Haircut -->
  <path d="M 148,150 C 145,100 170,85 200,85 C 235,85 255,100 252,150 C 248,120 230,110 200,110 C 170,110 152,120 148,150 Z" fill="#241B35" />
  <path d="M 152,130 C 170,95 230,95 248,130 C 235,115 175,115 152,130 Z" fill="#3D2B59" />

  <!-- Glasses / Modern Frame -->
  <rect x="160" y="145" width="32" height="24" rx="6" fill="none" stroke="#241B35" stroke-width="3.5" />
  <rect x="208" y="145" width="32" height="24" rx="6" fill="none" stroke="#241B35" stroke-width="3.5" />
  <line x1="192" y1="155" x2="208" y2="155" stroke="#241B35" stroke-width="3.5" />

  <!-- Eyes & Smile -->
  <circle cx="176" cy="157" r="3.5" fill="#241B35" />
  <circle cx="224" cy="157" r="3.5" fill="#241B35" />
  <path d="M 185,195 Q 200,208 215,195" stroke="#B87355" stroke-width="3.5" stroke-linecap="round" fill="none" />

  <!-- Professional Badge Tag -->
  <g transform="translate(110, 325)">
    <rect x="0" y="0" width="180" height="38" rx="19" fill="#FFFFFF" filter="url(#shadow)" />
    <circle cx="20" cy="19" r="10" fill="#8354CE" />
    <path d="M 16,19 L 19,22 L 25,16" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <text x="38" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#3D1E6D">CONTENT EDITOR</text>
  </g>
</svg>'''

with open('public/assets/avatar.svg', 'w') as f:
    f.write(avatar_svg)

# 2. Brand Logo (Lavender Beauty)
logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="100%" height="100%">
  <defs>
    <linearGradient id="lavGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8354CE" />
      <stop offset="100%" stop-color="#542E93" />
    </linearGradient>
  </defs>
  <!-- Botanical Lavender Icon -->
  <g transform="translate(20, 15)">
    <circle cx="25" cy="25" r="24" fill="#F4EEFC" />
    <!-- Lavender Stem -->
    <path d="M 25,44 Q 24,25 25,10" stroke="#6C3DB8" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <!-- Buds -->
    <ellipse cx="21" cy="15" rx="3.5" ry="5" fill="#9B74DF" transform="rotate(-25 21 15)" />
    <ellipse cx="29" cy="15" rx="3.5" ry="5" fill="#9B74DF" transform="rotate(25 29 15)" />
    <ellipse cx="20" cy="22" rx="4" ry="6" fill="#8354CE" transform="rotate(-30 20 22)" />
    <ellipse cx="30" cy="22" rx="4" ry="6" fill="#8354CE" transform="rotate(30 30 22)" />
    <ellipse cx="19" cy="30" rx="4.5" ry="6.5" fill="#6C3DB8" transform="rotate(-35 19 30)" />
    <ellipse cx="31" cy="30" rx="4.5" ry="6.5" fill="#6C3DB8" transform="rotate(35 31 30)" />
    <ellipse cx="25" cy="9" rx="3" ry="4.5" fill="#B89DE9" />
  </g>
  <!-- Brand Text -->
  <text x="82" y="38" font-family="'Plus Jakarta Sans', 'Playfair Display', Georgia, serif" font-size="22" font-weight="800" letter-spacing="3" fill="#241044">LAVENDER</text>
  <text x="84" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" letter-spacing="5" fill="#8354CE">BEAUTY &amp; SKINCARE</text>
</svg>'''

with open('public/assets/brand-logo.svg', 'w') as f:
    f.write(logo_svg)

# 3. Feed 1: Product Introduction (1080 x 1350)
feed_1_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="1080" height="1350">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FBF9FE" />
      <stop offset="50%" stop-color="#F4EEFC" />
      <stop offset="100%" stop-color="#E8DCF8" />
    </linearGradient>
    <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B89DE9" />
      <stop offset="40%" stop-color="#E7DCF8" />
      <stop offset="80%" stop-color="#9B74DF" />
      <stop offset="100%" stop-color="#6C3DB8" />
    </linearGradient>
    <filter id="fShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#3D1E6D" flood-opacity="0.22" />
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1080" height="1350" fill="url(#bg1)" />

  <!-- Editorial Grid & Subtle Ornaments -->
  <rect x="50" y="50" width="980" height="1250" fill="none" stroke="#D5C2F2" stroke-width="1.5" stroke-dasharray="8,8" opacity="0.6" />
  <circle cx="540" cy="720" r="380" fill="#FFFFFF" opacity="0.6" />
  <circle cx="540" cy="720" r="300" fill="#F4EEFC" opacity="0.7" />

  <!-- Header Section -->
  <g transform="translate(100, 110)">
    <rect x="0" y="0" width="190" height="36" rx="18" fill="#8354CE" />
    <text x="95" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#FFFFFF" text-anchor="middle">NEW LAUNCH</text>
    <text x="0" y="90" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="600" letter-spacing="4" fill="#6C3DB8">LAVENDER BEAUTY</text>
    <text x="0" y="160" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="58" font-weight="800" fill="#241044" line-height="1.2">The Gentle Hydration</text>
    <text x="0" y="215" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="400" fill="#542E93">Hydrating Facial Serum • 30ml</text>
  </g>

  <!-- Skincare Serum Bottle Illustration (Product Mockup) -->
  <g transform="translate(540, 720)" filter="url(#fShadow)">
    <!-- Shadow beneath bottle -->
    <ellipse cx="0" cy="260" rx="130" ry="22" fill="#3D1E6D" opacity="0.2" />

    <!-- Dropper Cap -->
    <rect x="-35" y="-220" width="70" height="50" rx="12" fill="#FFFFFF" stroke="#E7DCF8" stroke-width="3" />
    <rect x="-50" y="-170" width="100" height="24" rx="4" fill="#D4AF37" />
    <rect x="-42" y="-146" width="84" height="20" fill="#241044" />

    <!-- Glass Bottle Body -->
    <rect x="-100" y="-126" width="200" height="360" rx="36" fill="url(#bottleGrad)" stroke="#FFFFFF" stroke-width="4" />
    <!-- Glass Reflections -->
    <rect x="-85" y="-110" width="25" height="320" rx="12" fill="#FFFFFF" opacity="0.45" />

    <!-- Product Label -->
    <rect x="-80" y="-40" width="160" height="210" rx="12" fill="#FFFFFF" />
    <!-- Label Detail -->
    <circle cx="0" cy="-10" r="14" fill="#F4EEFC" />
    <path d="M 0,2 L 0,-18" stroke="#8354CE" stroke-width="2" />
    <circle cx="-3" cy="-12" r="2.5" fill="#8354CE" />
    <circle cx="3" cy="-8" r="2.5" fill="#8354CE" />
    <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" letter-spacing="2" fill="#241044" text-anchor="middle">LAVENDER</text>
    <text x="0" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" letter-spacing="1.5" fill="#8354CE" text-anchor="middle">BEAUTY</text>
    <line x1="-50" y1="56" x2="50" y2="56" stroke="#E7DCF8" stroke-width="1.5" />
    <text x="0" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#241044" text-anchor="middle">HYDRATING</text>
    <text x="0" y="96" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="500" fill="#6C3DB8" text-anchor="middle">FACIAL SERUM</text>
    <text x="0" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="#8354CE" text-anchor="middle">100% ORGANIC EXTRACT</text>
    <text x="0" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="400" fill="#542E93" text-anchor="middle">HYALURONIC ACID 2%</text>
    <text x="0" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="500" fill="#8354CE" text-anchor="middle">30 ml / 1.0 fl.oz</text>
  </g>

  <!-- Benefit Tags / Floating Cards -->
  <!-- Tag 1 -->
  <g transform="translate(100, 580)" filter="url(#fShadow)">
    <rect width="260" height="90" rx="16" fill="#FFFFFF" opacity="0.95" />
    <circle cx="45" cy="45" r="22" fill="#F4EEFC" />
    <text x="45" y="52" font-family="sans-serif" font-size="20" text-anchor="middle">💧</text>
    <text x="82" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#241044">12H Moisture Lock</text>
    <text x="82" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="400" fill="#542E93">Hidrasi mendalam</text>
  </g>

  <!-- Tag 2 -->
  <g transform="translate(720, 580)" filter="url(#fShadow)">
    <rect width="260" height="90" rx="16" fill="#FFFFFF" opacity="0.95" />
    <circle cx="45" cy="45" r="22" fill="#F4EEFC" />
    <text x="45" y="52" font-family="sans-serif" font-size="20" text-anchor="middle">🌿</text>
    <text x="82" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#241044">Calming Scent</text>
    <text x="82" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="400" fill="#542E93">Menenangkan kulit</text>
  </g>

  <!-- Tag 3 -->
  <g transform="translate(720, 780)" filter="url(#fShadow)">
    <rect width="260" height="90" rx="16" fill="#FFFFFF" opacity="0.95" />
    <circle cx="45" cy="45" r="22" fill="#F4EEFC" />
    <text x="45" y="52" font-family="sans-serif" font-size="20" text-anchor="middle">✨</text>
    <text x="82" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#241044">Non-Sticky Feel</text>
    <text x="82" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="400" fill="#542E93">Cepat meresap</text>
  </g>

  <!-- Bottom CTA Bar -->
  <g transform="translate(100, 1140)">
    <rect width="880" height="110" rx="24" fill="#241044" />
    <text x="50" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#FFFFFF">Kembalikan Segarnya Kulitmu</text>
    <text x="50" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="400" fill="#D5C2F2">Diformulasikan khusus untuk menjaga kelembapan kulit aktif</text>

    <!-- Button -->
    <rect x="620" y="25" width="220" height="60" rx="30" fill="#8354CE" />
    <text x="730" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">Cek di Bio ➔</text>
  </g>
</svg>'''

with open('public/assets/feed-1.svg', 'w') as f:
    f.write(feed_1_svg)

# 4. Feed 2: Product Promotion (1080 x 1350)
feed_2_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="1080" height="1350">
  <defs>
    <linearGradient id="bgPromo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3D1E6D" />
      <stop offset="60%" stop-color="#241044" />
      <stop offset="100%" stop-color="#180A2E" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
    <filter id="pShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1350" fill="url(#bgPromo)" />

  <!-- Background Glow & Shapes -->
  <circle cx="540" cy="580" r="420" fill="#6C3DB8" opacity="0.25" filter="blur(60px)" />
  <circle cx="850" cy="200" r="260" fill="#8354CE" opacity="0.15" />
  <circle cx="150" cy="950" r="300" fill="#9B74DF" opacity="0.15" />

  <!-- Top Brand Tag -->
  <g transform="translate(0, 110)">
    <text x="540" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" letter-spacing="5" fill="#D5C2F2" text-anchor="middle">LAVENDER BEAUTY EXCLUSIVE</text>
    <text x="540" y="65" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="56" font-weight="800" fill="#FFFFFF" text-anchor="middle">WEEKEND GLOW DEALS</text>
    <text x="540" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="400" fill="#E7DCF8" text-anchor="middle">Paket Duo Glowing (Serum + Moisturizer Gel)</text>
  </g>

  <!-- Discount Hero Badge -->
  <g transform="translate(540, 360)">
    <!-- Big Badge Circle -->
    <circle cx="0" cy="0" r="105" fill="url(#goldGrad)" filter="url(#pShadow)" />
    <circle cx="0" cy="0" r="95" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="6,4" />
    <text x="0" y="-20" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#78350F" text-anchor="middle">HEMAT</text>
    <text x="0" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="56" font-weight="900" fill="#78350F" text-anchor="middle">20%</text>
    <text x="0" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#92400E" text-anchor="middle">OFF ALL BUNDLE</text>
  </g>

  <!-- Product Bundle Showcase Cards -->
  <g transform="translate(180, 540)" filter="url(#pShadow)">
    <!-- Product 1: Serum Box -->
    <rect x="0" y="40" width="320" height="420" rx="24" fill="#FBF9FE" />
    <rect x="20" y="60" width="280" height="230" rx="16" fill="#F4EEFC" />
    <!-- Mini bottle graphic -->
    <rect x="130" y="110" width="60" height="130" rx="14" fill="#8354CE" />
    <rect x="145" y="80" width="30" height="30" rx="6" fill="#D4AF37" />
    <text x="160" y="330" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#241044" text-anchor="middle">Hydrating Serum</text>
    <text x="160" y="358" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="500" fill="#6C3DB8" text-anchor="middle">Volume: 30ml</text>
    <text x="160" y="405" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#8354CE" text-anchor="middle">Rp 119.000</text>
  </g>

  <g transform="translate(580, 540)" filter="url(#pShadow)">
    <!-- Product 2: Gel Jar -->
    <rect x="0" y="40" width="320" height="420" rx="24" fill="#FBF9FE" />
    <rect x="20" y="60" width="280" height="230" rx="16" fill="#F4EEFC" />
    <!-- Mini Jar graphic -->
    <rect x="105" y="130" width="110" height="90" rx="18" fill="#B89DE9" />
    <rect x="95" y="105" width="130" height="25" rx="8" fill="#D4AF37" />
    <text x="160" y="330" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#241044" text-anchor="middle">Brightening Gel</text>
    <text x="160" y="358" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="500" fill="#6C3DB8" text-anchor="middle">Netto: 50gr</text>
    <text x="160" y="405" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#8354CE" text-anchor="middle">Rp 99.000</text>
  </g>

  <!-- Bundle Price Tag Tag -->
  <g transform="translate(540, 1040)">
    <rect x="-260" y="0" width="520" height="75" rx="37" fill="#FFFFFF" opacity="0.12" stroke="#FFFFFF" stroke-width="2" />
    <text x="-80" y="46" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="500" fill="#D5C2F2" text-decoration="line-through">Rp 218.000</text>
    <text x="100" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="900" fill="#FCD34D">Rp 174.400</text>
  </g>

  <!-- Bottom CTA & Limit Notice -->
  <g transform="translate(100, 1150)">
    <rect width="880" height="110" rx="24" fill="#8354CE" filter="url(#pShadow)" />
    <text x="60" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="#FFFFFF">🎁 GRATIS Exclusive Lavender Hair Band</text>
    <text x="60" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="500" fill="#E7DCF8">Khusus 50 Pembeli Pertama di Official Store!</text>
    <!-- CTA Button -->
    <rect x="620" y="25" width="210" height="60" rx="30" fill="#FCD34D" />
    <text x="725" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="900" fill="#78350F" text-anchor="middle">Klaim Promo ➔</text>
  </g>
</svg>'''

with open('public/assets/feed-2.svg', 'w') as f:
    f.write(feed_2_svg)

# 5. Feed 3: Brand Awareness / Educational (1080 x 1350)
feed_3_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="1080" height="1350">
  <defs>
    <linearGradient id="bgAware" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FDFBFE" />
      <stop offset="100%" stop-color="#F4EEFC" />
    </linearGradient>
    <filter id="cShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#542E93" flood-opacity="0.08" />
    </filter>
  </defs>

  <rect width="1080" height="1350" fill="url(#bgAware)" />

  <!-- Outer frame -->
  <rect x="40" y="40" width="1000" height="1270" rx="28" fill="none" stroke="#E7DCF8" stroke-width="2" />

  <!-- Category & Brand Header -->
  <g transform="translate(100, 110)">
    <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" letter-spacing="4" fill="#8354CE">SKINCARE EDUCATION #01</text>
    <text x="0" y="80" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="52" font-weight="800" fill="#241044">3 Langkah Sederhana</text>
    <text x="0" y="135" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="52" font-weight="800" fill="#6C3DB8">Skin Barrier Tetap Kuat</text>
    <text x="0" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="400" fill="#542E93">Rawat kelembutan kulit setiap hari tanpa tahapan yang rumit.</text>
  </g>

  <!-- Step 1 Card -->
  <g transform="translate(100, 360)" filter="url(#cShadow)">
    <rect width="880" height="210" rx="20" fill="#FFFFFF" />
    <rect x="30" y="30" width="70" height="70" rx="16" fill="#F4EEFC" />
    <text x="65" y="76" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="900" fill="#8354CE" text-anchor="middle">01</text>
    <text x="130" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#241044">Pembersihan yang Gentle (Mild Cleanser)</text>
    <text x="130" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="400" fill="#542E93" width="700">
      Gunakan pembersih wajah dengan pH seimbang tanpa rasa kesat agar lapisan minyak alami kulit tidak terkikis habis.
    </text>
    <path d="M 130,140 L 320,140" stroke="#8354CE" stroke-width="2" stroke-linecap="round" />
    <text x="130" y="168" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#8354CE">TIPS: Hindari scrub fisik berbutir tajam</text>
  </g>

  <!-- Step 2 Card -->
  <g transform="translate(100, 610)" filter="url(#cShadow)">
    <rect width="880" height="210" rx="20" fill="#FFFFFF" />
    <rect x="30" y="30" width="70" height="70" rx="16" fill="#F4EEFC" />
    <text x="65" y="76" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="900" fill="#8354CE" text-anchor="middle">02</text>
    <text x="130" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#241044">Hidrasi &amp; Calming dengan Ekstrak Alami</text>
    <text x="130" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="400" fill="#542E93">
      Aplikasikan Lavender Hydrating Serum saat kulit masih lembap untuk mengunci kelembapan hingga lapisan epidermis terdalam.
    </text>
    <path d="M 130,140 L 320,140" stroke="#8354CE" stroke-width="2" stroke-linecap="round" />
    <text x="130" y="168" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#8354CE">TIPS: Cukup 2-3 tetes, tepuk perlahan</text>
  </g>

  <!-- Step 3 Card -->
  <g transform="translate(100, 860)" filter="url(#cShadow)">
    <rect width="880" height="210" rx="20" fill="#FFFFFF" />
    <rect x="30" y="30" width="70" height="70" rx="16" fill="#F4EEFC" />
    <text x="65" y="76" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="900" fill="#8354CE" text-anchor="middle">03</text>
    <text x="130" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#241044">Kunci Kelembapan dengan Ceramide &amp; Gel</text>
    <text x="130" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="400" fill="#542E93">
      Gunakan pelembap bertekstur gel ringan untuk membentuk perisai proteksi dari polusi harian dan udara kering AC.
    </text>
    <path d="M 130,140 L 320,140" stroke="#8354CE" stroke-width="2" stroke-linecap="round" />
    <text x="130" y="168" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#8354CE">TIPS: Gunakan pagi dan malam hari</text>
  </g>

  <!-- Footer Banner / Save for later -->
  <g transform="translate(100, 1120)">
    <rect width="880" height="110" rx="20" fill="#F4EEFC" stroke="#D5C2F2" stroke-width="1.5" />
    <text x="50" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="800" fill="#241044">📌 Simpan postingan ini untuk panduan skincare harianmu!</text>
    <text x="50" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="500" fill="#6C3DB8">Follow @lavenderbeauty.id untuk tips kesehatan kulit lainnya.</text>

    <!-- Save Icon Mockup -->
    <rect x="740" y="25" width="100" height="60" rx="14" fill="#FFFFFF" />
    <path d="M 780,40 L 800,40 L 800,70 L 790,62 L 780,70 Z" fill="#8354CE" />
  </g>
</svg>'''

with open('public/assets/feed-3.svg', 'w') as f:
    f.write(feed_3_svg)

# 6. Story 1: Story Pengenalan Produk (1080 x 1920)
story_1_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="st1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FAF7FD" />
      <stop offset="60%" stop-color="#F4EEFC" />
      <stop offset="100%" stop-color="#E3D5F5" />
    </linearGradient>
    <filter id="stShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="#3D1E6D" flood-opacity="0.18" />
    </filter>
  </defs>

  <rect width="1080" height="1920" fill="url(#st1Grad)" />

  <!-- Story Top Progress Bars -->
  <g transform="translate(60, 45)">
    <rect x="0" y="0" width="300" height="6" rx="3" fill="#8354CE" />
    <rect x="320" y="0" width="300" height="6" rx="3" fill="#D5C2F2" opacity="0.6" />
    <rect x="640" y="0" width="300" height="6" rx="3" fill="#D5C2F2" opacity="0.6" />
  </g>

  <!-- Story Instagram Header -->
  <g transform="translate(60, 80)">
    <circle cx="35" cy="35" r="32" fill="#8354CE" />
    <circle cx="35" cy="35" r="28" fill="#FFFFFF" />
    <!-- Mini lavender icon -->
    <circle cx="35" cy="35" r="22" fill="#F4EEFC" />
    <text x="35" y="42" font-family="sans-serif" font-size="18" text-anchor="middle">🌸</text>
    <text x="85" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#241044">lavenderbeauty.id</text>
    <text x="85" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="500" fill="#8354CE">Sponsored • Official Launch</text>
  </g>

  <!-- Main Headline -->
  <g transform="translate(80, 260)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#8354CE" />
    <text x="110" y="27" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" letter-spacing="3" fill="#FFFFFF" text-anchor="middle">MEET OUR HERO</text>
    <text x="0" y="110" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="64" font-weight="800" fill="#241044">Say Hello to</text>
    <text x="0" y="180" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="64" font-weight="800" fill="#6C3DB8">Plump, Calmed Skin</text>
    <text x="0" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="400" fill="#542E93">Rahasia kulit segar dan kenyal sepanjang hari.</text>
  </g>

  <!-- Big Central Product Illustration -->
  <g transform="translate(540, 960)" filter="url(#stShadow)">
    <circle cx="0" cy="0" r="320" fill="#FFFFFF" opacity="0.7" />
    <circle cx="0" cy="0" r="260" fill="#F4EEFC" />
    <!-- Serum Dropper Bottle -->
    <rect x="-85" y="-190" width="170" height="360" rx="36" fill="#8354CE" />
    <rect x="-70" y="-170" width="25" height="320" rx="10" fill="#B89DE9" opacity="0.6" />
    <rect x="-40" y="-270" width="80" height="60" rx="16" fill="#FFFFFF" />
    <rect x="-55" y="-210" width="110" height="24" fill="#D4AF37" rx="6" />

    <!-- Bottle Label -->
    <rect x="-65" y="-100" width="130" height="190" rx="12" fill="#FFFFFF" />
    <text x="0" y="-50" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" letter-spacing="2" fill="#241044" text-anchor="middle">LAVENDER</text>
    <text x="0" y="-35" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" letter-spacing="1" fill="#8354CE" text-anchor="middle">HYDRATING SERUM</text>
    <line x1="-40" y1="-20" x2="40" y2="-20" stroke="#E7DCF8" stroke-width="2" />
    <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="900" fill="#8354CE" text-anchor="middle">100%</text>
    <text x="0" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#542E93" text-anchor="middle">PURE EXTRACT</text>
  </g>

  <!-- Interactive Sticker Mockup -->
  <g transform="translate(540, 1420)">
    <rect x="-240" y="0" width="480" height="85" rx="42" fill="#FFFFFF" filter="url(#stShadow)" />
    <text x="0" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="#241044" text-anchor="middle">Kulit kamu tipe kering / berminyak?</text>
    <text x="0" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600" fill="#8354CE" text-anchor="middle">Tap to vote &amp; dapatkan rekomendasi 👆</text>
  </g>

  <!-- Swipe Up / Link CTA -->
  <g transform="translate(540, 1680)">
    <circle cx="0" cy="0" r="45" fill="#8354CE" filter="url(#stShadow)" />
    <path d="M -12,5 L 0,-10 L 12,5" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <text x="0" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#241044" text-anchor="middle">SWIPE UP UNTUK INFO LENGKAP</text>
    <text x="0" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="500" fill="#6C3DB8" text-anchor="middle">lavenderbeauty.id/product</text>
  </g>
</svg>'''

with open('public/assets/story-1.svg', 'w') as f:
    f.write(story_1_svg)

# 7. Story 2: Story Promosi Produk (1080 x 1920)
story_2_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="st2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2D1A54" />
      <stop offset="50%" stop-color="#3D1E6D" />
      <stop offset="100%" stop-color="#1B0E36" />
    </linearGradient>
    <filter id="p2Shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <rect width="1080" height="1920" fill="url(#st2Grad)" />

  <!-- Progress Bar (Story 2 active) -->
  <g transform="translate(60, 45)">
    <rect x="0" y="0" width="300" height="6" rx="3" fill="#D5C2F2" opacity="0.6" />
    <rect x="320" y="0" width="300" height="6" rx="3" fill="#8354CE" />
    <rect x="640" y="0" width="300" height="6" rx="3" fill="#D5C2F2" opacity="0.6" />
  </g>

  <!-- Story Header -->
  <g transform="translate(60, 80)">
    <circle cx="35" cy="35" r="30" fill="#FFFFFF" />
    <text x="35" y="42" font-family="sans-serif" font-size="18" text-anchor="middle">🌸</text>
    <text x="85" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#FFFFFF">lavenderbeauty.id</text>
    <text x="85" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="500" fill="#D5C2F2">Flash Sale Alert 🔥</text>
  </g>

  <!-- Flash Sale Tag -->
  <g transform="translate(540, 260)">
    <rect x="-180" y="0" width="360" height="52" rx="26" fill="#EF4444" filter="url(#p2Shadow)" />
    <text x="0" y="35" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" letter-spacing="3" fill="#FFFFFF" text-anchor="middle">⚡ FLASH SALE 24 JAM</text>
  </g>

  <!-- Big Offer Text -->
  <g transform="translate(540, 420)">
    <text x="0" y="0" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="70" font-weight="900" fill="#FFFFFF" text-anchor="middle">DISKON 20%</text>
    <text x="0" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="700" fill="#FCD34D" text-anchor="middle">+ FREE GIFT SPESIAL</text>
    <text x="0" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="400" fill="#E7DCF8" text-anchor="middle">Glowing Duo Pack (Serum + Moisturizer Gel)</text>
  </g>

  <!-- Countdown Sticker Mockup -->
  <g transform="translate(540, 640)" filter="url(#p2Shadow)">
    <rect x="-320" y="0" width="640" height="150" rx="24" fill="#FFFFFF" />
    <text x="0" y="40" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="2" fill="#241044" text-anchor="middle">PROMO BERAKHIR DALAM</text>
    <!-- Time Boxes -->
    <g transform="translate(0, 55)">
      <!-- Hours -->
      <rect x="-240" y="0" width="130" height="65" rx="12" fill="#F4EEFC" />
      <text x="-175" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="900" fill="#8354CE" text-anchor="middle">08</text>
      <text x="-175" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#542E93" text-anchor="middle">JAM</text>

      <!-- Minutes -->
      <rect x="-65" y="0" width="130" height="65" rx="12" fill="#F4EEFC" />
      <text x="0" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="900" fill="#8354CE" text-anchor="middle">42</text>
      <text x="0" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#542E93" text-anchor="middle">MENIT</text>

      <!-- Seconds -->
      <rect x="110" y="0" width="130" height="65" rx="12" fill="#F4EEFC" />
      <text x="175" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="900" fill="#8354CE" text-anchor="middle">19</text>
      <text x="175" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#542E93" text-anchor="middle">DETIK</text>
    </g>
  </g>

  <!-- Product Bundle Visual Box -->
  <g transform="translate(540, 1020)" filter="url(#p2Shadow)">
    <rect x="-300" y="0" width="600" height="340" rx="28" fill="#FAF7FD" />
    <rect x="-260" y="30" width="220" height="280" rx="18" fill="#F4EEFC" />
    <rect x="40" y="30" width="220" height="280" rx="18" fill="#F4EEFC" />

    <!-- Serum bottle mockup -->
    <rect x="-170" y="90" width="50" height="130" rx="12" fill="#8354CE" />
    <rect x="-160" y="65" width="30" height="26" rx="6" fill="#D4AF37" />

    <!-- Gel Jar mockup -->
    <rect x="90" y="110" width="120" height="90" rx="16" fill="#B89DE9" />
    <rect x="80" y="85" width="140" height="24" rx="8" fill="#D4AF37" />

    <!-- Price Sticker -->
    <g transform="translate(0, 260)">
      <rect x="-160" y="0" width="320" height="50" rx="25" fill="#241044" />
      <text x="0" y="33" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#FCD34D" text-anchor="middle">Rp 174.400 (Hemat 43k)</text>
    </g>
  </g>

  <!-- Interactive Link Sticker -->
  <g transform="translate(540, 1530)" filter="url(#p2Shadow)">
    <rect x="-260" y="0" width="520" height="90" rx="45" fill="#8354CE" />
    <circle cx="-190" cy="45" r="28" fill="#FFFFFF" />
    <text x="-190" y="53" font-family="sans-serif" font-size="20" text-anchor="middle">🔗</text>
    <text x="20" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#FFFFFF">KLAIM VOUCHER 20%</text>
    <text x="20" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="500" fill="#F4EEFC">shopee.co.id/lavenderbeauty.id</text>
  </g>

  <!-- Bottom Message -->
  <g transform="translate(540, 1720)">
    <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="600" fill="#D5C2F2" text-anchor="middle">⚡ Sisa 14 paket untuk promo bundling ini!</text>
  </g>
</svg>'''

with open('public/assets/story-2.svg', 'w') as f:
    f.write(story_2_svg)

# 8. Story 3: Story Kunjungi Marketplace (1080 x 1920)
story_3_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="st3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FBF9FE" />
      <stop offset="50%" stop-color="#F4EEFC" />
      <stop offset="100%" stop-color="#E8DCF8" />
    </linearGradient>
    <filter id="mShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="#3D1E6D" flood-opacity="0.15" />
    </filter>
  </defs>

  <rect width="1080" height="1920" fill="url(#st3Grad)" />

  <!-- Progress Bar (Story 3 active) -->
  <g transform="translate(60, 45)">
    <rect x="0" y="0" width="300" height="6" rx="3" fill="#D5C2F2" opacity="0.6" />
    <rect x="320" y="0" width="300" height="6" rx="3" fill="#D5C2F2" opacity="0.6" />
    <rect x="640" y="0" width="300" height="6" rx="3" fill="#8354CE" />
  </g>

  <!-- Story Header -->
  <g transform="translate(60, 80)">
    <circle cx="35" cy="35" r="30" fill="#8354CE" />
    <text x="35" y="42" font-family="sans-serif" font-size="18" text-anchor="middle">🌸</text>
    <text x="85" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#241044">lavenderbeauty.id</text>
    <text x="85" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="500" fill="#8354CE">Marketplace Availability</text>
  </g>

  <!-- Central Message -->
  <g transform="translate(540, 320)">
    <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" letter-spacing="4" fill="#8354CE" text-anchor="middle">OFFICIAL ONLINE STORE</text>
    <text x="0" y="70" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="60" font-weight="900" fill="#241044" text-anchor="middle">Bisa Kamu Dapatkan di</text>
    <text x="0" y="140" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="60" font-weight="900" fill="#6C3DB8" text-anchor="middle">Marketplace Favoritmu!</text>
    <text x="0" y="200" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="400" fill="#542E93" text-anchor="middle">Gratis Ongkir Se-Indonesia + Garansi Produk 100% Original</text>
  </g>

  <!-- Marketplace Cards -->
  <!-- Shopee Card -->
  <g transform="translate(540, 680)" filter="url(#mShadow)">
    <rect x="-380" y="0" width="760" height="150" rx="24" fill="#FFFFFF" />
    <circle cx="-290" cy="75" r="45" fill="#EE4D2D" />
    <text x="-290" y="87" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="900" fill="#FFFFFF" text-anchor="middle">S</text>
    <text x="-210" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="800" fill="#241044">Shopee Mall Official</text>
    <text x="-210" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="500" fill="#6B7280">Voucher Cashback s/d 50rb &amp; Gratis Ongkir XTRA</text>
    <rect x="200" y="45" width="140" height="60" rx="30" fill="#EE4D2D" />
    <text x="270" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Kunjungi ➔</text>
  </g>

  <!-- Tokopedia Card -->
  <g transform="translate(540, 880)" filter="url(#mShadow)">
    <rect x="-380" y="0" width="760" height="150" rx="24" fill="#FFFFFF" />
    <circle cx="-290" cy="75" r="45" fill="#03AC0E" />
    <text x="-290" y="87" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">🛍️</text>
    <text x="-210" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="800" fill="#241044">Tokopedia Official Store</text>
    <text x="-210" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="500" fill="#6B7280">Bebas Ongkir ke Seluruh Kota &amp; Same-day Delivery</text>
    <rect x="200" y="45" width="140" height="60" rx="30" fill="#03AC0E" />
    <text x="270" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Kunjungi ➔</text>
  </g>

  <!-- TikTok Shop Card -->
  <g transform="translate(540, 1080)" filter="url(#mShadow)">
    <rect x="-380" y="0" width="760" height="150" rx="24" fill="#FFFFFF" />
    <circle cx="-290" cy="75" r="45" fill="#000000" />
    <text x="-290" y="87" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">🎵</text>
    <text x="-210" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="800" fill="#241044">TikTok Shop Live</text>
    <text x="-210" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="500" fill="#6B7280">Live Shopping diskon kilat setiap hari jam 19.00 WIB</text>
    <rect x="200" y="45" width="140" height="60" rx="30" fill="#000000" />
    <text x="270" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Tonton ➔</text>
  </g>

  <!-- Interactive Sticker "TAP DISINI" -->
  <g transform="translate(540, 1420)" filter="url(#mShadow)">
    <rect x="-260" y="0" width="520" height="100" rx="50" fill="#8354CE" />
    <circle cx="-190" cy="50" r="32" fill="#FFFFFF" />
    <text x="-190" y="58" font-family="sans-serif" font-size="24" text-anchor="middle">👆</text>
    <text x="20" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#FFFFFF">KLIK LINK DI BIO KAMI</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="500" fill="#F4EEFC">Pilih marketplace favoritmu sekarang!</text>
  </g>

  <!-- Bottom Instagram Safe Area -->
  <g transform="translate(540, 1720)">
    <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#6C3DB8" text-anchor="middle">@lavenderbeauty.id • Dummy Project Portofolio</text>
  </g>
</svg>'''

with open('public/assets/story-3.svg', 'w') as f:
    f.write(story_3_svg)

# 9. Product Catalog Visual
catalog_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="100%" height="100%">
  <defs>
    <linearGradient id="catBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F8F6FC" />
    </linearGradient>
    <filter id="cCardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#3D1E6D" flood-opacity="0.08" />
    </filter>
  </defs>

  <rect width="1200" height="900" fill="url(#catBg)" />
  <rect x="30" y="30" width="1140" height="840" rx="20" fill="none" stroke="#E8DCF8" stroke-width="2" />

  <!-- Catalog Header -->
  <g transform="translate(70, 75)">
    <rect x="0" y="0" width="150" height="32" rx="16" fill="#8354CE" />
    <text x="75" y="21" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle">KATALOG RESMI</text>
    <text x="0" y="75" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="38" font-weight="800" fill="#241044">LAVENDER BEAUTY PRODUCT LINE</text>
    <text x="0" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="500" fill="#6C3DB8">Koleksi Perawatan Lembut &amp; Menenangkan untuk Kulit Sehat Alami</text>
  </g>

  <!-- 4 Items Grid -->
  <!-- Item 1: Toner Mist -->
  <g transform="translate(70, 230)" filter="url(#cCardShadow)">
    <rect width="250" height="420" rx="18" fill="#FFFFFF" stroke="#F4EEFC" stroke-width="2" />
    <rect x="15" y="15" width="220" height="180" rx="12" fill="#FAF7FD" />
    <!-- Bottle illustration -->
    <rect x="105" y="60" width="40" height="100" rx="10" fill="#B89DE9" />
    <rect x="115" y="45" width="20" height="20" rx="4" fill="#D4AF37" />
    <text x="125" y="230" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#241044" text-anchor="middle">Calming Toner Mist</text>
    <text x="125" y="255" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#8354CE" text-anchor="middle">Ukuran: 100 ml</text>
    <text x="125" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="400" fill="#6B7280" text-anchor="middle">Menyegarkan &amp; menyeimbangkan pH</text>
    <text x="125" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#8354CE" text-anchor="middle">Rp 79.000</text>
    <!-- Order tag -->
    <rect x="35" y="365" width="180" height="36" rx="18" fill="#F4EEFC" />
    <text x="125" y="388" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#6C3DB8" text-anchor="middle">Pesan Produk ➔</text>
  </g>

  <!-- Item 2: Hydrating Serum (Hero) -->
  <g transform="translate(355, 215)" filter="url(#cCardShadow)">
    <rect width="260" height="450" rx="18" fill="#FFFFFF" stroke="#8354CE" stroke-width="2.5" />
    <!-- Best Seller Badge -->
    <rect x="75" y="-12" width="110" height="24" rx="12" fill="#8354CE" />
    <text x="130" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">BEST SELLER</text>
    <rect x="20" y="25" width="220" height="190" rx="12" fill="#F4EEFC" />
    <rect x="110" y="70" width="40" height="105" rx="10" fill="#8354CE" />
    <rect x="120" y="50" width="20" height="25" rx="5" fill="#D4AF37" />
    <text x="130" y="250" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="800" fill="#241044" text-anchor="middle">Hydrating Facial Serum</text>
    <text x="130" y="275" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#8354CE" text-anchor="middle">Ukuran: 30 ml</text>
    <text x="130" y="305" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="400" fill="#6B7280" text-anchor="middle">12H Moisture Lock + Hyaluronic Acid</text>
    <text x="130" y="360" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#8354CE" text-anchor="middle">Rp 119.000</text>
    <rect x="35" y="385" width="190" height="40" rx="20" fill="#8354CE" />
    <text x="130" y="410" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Pesan Produk ➔</text>
  </g>

  <!-- Item 3: Barrier Brightening Gel -->
  <g transform="translate(650, 230)" filter="url(#cCardShadow)">
    <rect width="250" height="420" rx="18" fill="#FFFFFF" stroke="#F4EEFC" stroke-width="2" />
    <rect x="15" y="15" width="220" height="180" rx="12" fill="#FAF7FD" />
    <rect x="95" y="85" width="60" height="55" rx="14" fill="#9B74DF" />
    <rect x="90" y="70" width="70" height="18" rx="6" fill="#D4AF37" />
    <text x="125" y="230" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#241044" text-anchor="middle">Barrier Brightening Gel</text>
    <text x="125" y="255" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#8354CE" text-anchor="middle">Netto: 50 gram</text>
    <text x="125" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="400" fill="#6B7280" text-anchor="middle">Ceramide &amp; Niacinamide formula</text>
    <text x="125" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#8354CE" text-anchor="middle">Rp 99.000</text>
    <rect x="35" y="365" width="180" height="36" rx="18" fill="#F4EEFC" />
    <text x="125" y="388" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#6C3DB8" text-anchor="middle">Pesan Produk ➔</text>
  </g>

  <!-- Item 4: Glow Complete Bundle -->
  <g transform="translate(930, 230)" filter="url(#cCardShadow)">
    <rect width="200" height="420" rx="18" fill="#FAF7FD" stroke="#E8DCF8" stroke-width="2" />
    <!-- Promo Tag -->
    <rect x="45" y="-10" width="110" height="22" rx="11" fill="#F59E0B" />
    <text x="100" y="5" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">SPECIAL BUNDLE</text>
    <rect x="15" y="20" width="170" height="175" rx="12" fill="#FFFFFF" />
    <text x="100" y="115" font-family="sans-serif" font-size="34" text-anchor="middle">🎁</text>
    <text x="100" y="230" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#241044" text-anchor="middle">Glow Complete Box</text>
    <text x="100" y="255" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#8354CE" text-anchor="middle">Isi 3 Produk + Bonus</text>
    <text x="100" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="#6B7280" text-anchor="middle">Toner + Serum + Gel Jar</text>
    <text x="100" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#8354CE" text-anchor="middle">Rp 259.000</text>
    <rect x="20" y="365" width="160" height="36" rx="18" fill="#8354CE" />
    <text x="100" y="388" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Ambil Paket ➔</text>
  </g>

  <!-- Bottom Catalog Note -->
  <g transform="translate(70, 770)">
    <rect width="1060" height="60" rx="14" fill="#F4EEFC" />
    <text x="30" y="35" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600" fill="#542E93">📌 Informasi Pemesanan: WhatsApp 628xxxxxxxx • Pengiriman Cepat Se-Indonesia • Terdaftar BPOM &amp; Halal</text>
  </g>
</svg>'''

with open('public/assets/catalog.svg', 'w') as f:
    f.write(catalog_svg)

# 10. Reels Video Poster
reels_poster_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 1280" width="720" height="1280">
  <defs>
    <linearGradient id="rGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E1430" />
      <stop offset="50%" stop-color="#3D1E6D" />
      <stop offset="100%" stop-color="#140D22" />
    </linearGradient>
  </defs>

  <rect width="720" height="1280" fill="url(#rGrad)" />

  <!-- CapCut Watermark/Badge Mockup -->
  <g transform="translate(40, 50)">
    <rect width="180" height="38" rx="19" fill="#000000" opacity="0.6" stroke="#FFFFFF" stroke-width="1.5" />
    <text x="90" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">✂️ Edited on CapCut</text>
  </g>

  <!-- Duration Badge -->
  <g transform="translate(560, 50)">
    <rect width="120" height="38" rx="19" fill="#8354CE" />
    <text x="60" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#FFFFFF" text-anchor="middle">00:18</text>
  </g>

  <!-- Video Hook Title Overlay -->
  <g transform="translate(360, 220)">
    <rect x="-240" y="-10" width="480" height="40" rx="8" fill="#FCD34D" />
    <text x="0" y="18" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="900" fill="#78350F" text-anchor="middle">STOP SCROLLING! ✋</text>
    <text x="0" y="80" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="36" font-weight="900" fill="#FFFFFF" text-anchor="middle">"Kulit Sering Kusam &amp;</text>
    <text x="0" y="125" font-family="'Plus Jakarta Sans', 'Playfair Display', serif" font-size="36" font-weight="900" fill="#E7DCF8" text-anchor="middle">Kering Pas Sore?"</text>
  </g>

  <!-- Central Serum Application Showcase Art -->
  <g transform="translate(360, 620)">
    <circle cx="0" cy="0" r="190" fill="#6C3DB8" opacity="0.3" />
    <circle cx="0" cy="0" r="140" fill="#8354CE" opacity="0.4" />
    <!-- Serum Droplet falling -->
    <path d="M 0,-60 C -25,-20 -25,20 0,40 C 25,20 25,-20 0,-60 Z" fill="#E7DCF8" opacity="0.9" />
    <circle cx="-5" cy="10" r="8" fill="#FFFFFF" />

    <!-- Big Play Icon -->
    <circle cx="0" cy="0" r="50" fill="#8354CE" stroke="#FFFFFF" stroke-width="4" />
    <polygon points="-12,-20 22,0 -12,20" fill="#FFFFFF" />
  </g>

  <!-- Subtitle Text Overlay Simulation -->
  <g transform="translate(360, 940)">
    <rect x="-280" y="0" width="560" height="70" rx="16" fill="#000000" opacity="0.75" />
    <text x="0" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#FFFFFF" text-anchor="middle">"Cukup 2 tetes ekstrak lavender alami,</text>
    <text x="0" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="500" fill="#FCD34D" text-anchor="middle">kulit langsung adem &amp; glowing seketika!"</text>
  </g>

  <!-- Audio Track Tag -->
  <g transform="translate(40, 1080)">
    <rect width="320" height="42" rx="21" fill="#000000" opacity="0.6" />
    <text x="35" y="26" font-family="sans-serif" font-size="16">🎵</text>
    <text x="65" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Original Sound - Calming Aesthetic Beat</text>
  </g>

  <!-- Closing CTA Tag -->
  <g transform="translate(360, 1180)">
    <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#D5C2F2" text-anchor="middle">Klik Video untuk Memutar Animasi Simulasi Reels 👆</text>
  </g>
</svg>'''

with open('public/assets/reels-poster.svg', 'w') as f:
    f.write(reels_poster_svg)

print("All 10 assets generated successfully!")

