
import flowbitePlugin from "flowbite/plugin";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports= {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/flowbite/**/*.js",
   
  ],
  theme: {
    container: {
      center: true,
      // padding: '2rem',
     
    },
    extend: {
       fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary:"#2e3238",
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))',
        // },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'faint-green': 'rgba(48,188,49,0.2)',
        'faint-red': 'rgba(203,51,68,0.2)',
        up: '#0dbd0e',
        down: '#d40017',
        // --background-color-faint-green: rgba(48,188,49,0.2);
        // --background-color-faint-red: rgba(203,51,68,0.2);
        txt: 'var(--primary-90)',
        'txt-hocus': 'var(--primary-90)',
        'txt-dim': ' var(--primary-80)',
        'txt-dimmer': ' var(--primary-60)',
        'txt-interactive': ' var(--txt-interactive)',
        'primary-15': 'var(--primary-15)',
        'primary-20': 'var(--primary-20)',
        'primary-40': 'var(--primary-40)',
        'surface-10': 'var(--surface-10)',
        'surface-20': 'var(--surface-20)',
        'party-other': '#801096',
        'party-republican': '#961010',
        'party-democrat': '#186cea',
        // trade and chart colors
        // primary & secondary above ...
        'fire-orange': '#e2ad69',
        buy: '#15ada0',
        exchange: '#cd5a46',
        receive: '#9969fb',
        sell: '#dd962b',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontSize: {
        'size-1': '9px',
        'size-2': '11px',
        'size-3': '13px',
        'size-4': '15px',
        'size-5': '18px',
        'size-6': '21px',
        'size-7': '24px',
        'size-8': '32px',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        3: '3px',
        4: '4px',
        8: '8px',
      },
    },
  },
  darkMode:"class",
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    flowbitePlugin,require('daisyui'),
]
}
