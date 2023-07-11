const { fontFamily } = require('tailwindcss/defaultTheme')
const { responsiveRegex } = require('./plugins/lib/responsiveRegex')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  //important: true,
  //safelist: responsiveRegex,
  content:{ 
    files: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
      { raw: '' },
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ...fontFamily.sans],
        'display': ['Oswald', 'sans-serif'],
        'old-english': ['var(--old-english-font)'],
        'roboto-serif': ['var(--roboto-serif-font)', ...fontFamily.serif],
        'philosopher': ['var(--philisopher-font)'],
        'volcorn': ['var(--volcorn-font)'],
        'playfair': ['var(--playfair-display-font)'],
        'overpass': ['var(--overpass-font)'],
        'inter-tight': ['var(--inter-tight-font)'], 
        'rubik-fade': ['var(--rubik-80s-fade-font)'],  
        'rubik-glitch': ['var(--rubik-glitch-font)'],  
        'jetbrains': ['var(--jetbrains-mono-font)'],
        'pt-mono': ['var(--pt-mono-font)']  
      },
    },
  },
  // corePlugins: [
  //   // "animation",
  //   // "backgroundColor",
  //   // "backgroundImage",
  //   // "backgroundOpacity",
  //   // "backdropOpacity",
  //   // "borderColor",
  //   // "borderOpacity",
  //   // "divideColor",
  //   // "divideOpacity",
  //   // "gradientColorStops",
  //   // "opacity",
  //   // "placeholderColor",
  //   // "preflight",
  //   // "ringColor",
  //   // "ringOffsetColor",
  //   // "ringOffsetWidth",
  //   // "ringOpacity",
  //   // "ringWidth",
  //   // "textColor",
  //   // "textOpacity",
  //   // "transitionProperty",
  // ],
  techies: {
    inbuilt: true
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('./plugins/techies-ui'),
  ],
}
