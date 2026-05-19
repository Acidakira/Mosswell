/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      /* ::: CHANGE COLORS :::
      *   You can change the colors of this template. Just uncomment a color below and comment the default color.
      *   If you want to create your own color palette, go to https://colorffy.com/dark-theme-generator and create your own color palette.
      */ 
     /* :: Color Palette: Purple and Dark Blue */
  'primary' : {
        100 : '#22301A' , // Active menu underlines, "Get in Touch" button background, hover states
        200 : '#5A5E45' , // Secondary accent lines, border focus states
        300 : '#4F5C3E' , // Main branding highlight, active page names, primary text accents
        400 : '#968E73' , // Mid-tone fallback for interactive states
        500 : '#5A5E45' , // Secondary buttons, auxiliary interactive links
        600 : '#22301A'   // High-contrast variant for dark toggles/borders
      } , 
      
      'surface' : {
        100 : '#F1EDDD' , // Main site background
        200 : '#968E73' , // Cards, containers, project grid panels
        300 : '#e9e3d3' , // Component borders, structural divider lines
        400 : '#968E73' , // Secondary outlines, disabled states
        500 : '#bfb79e' , // Subtitle descriptions, metadata labels
        600 : '#9f926d'   // Timeline dates and sidebar years (e.g., "2025 - NOW")
      } , 
      
      'on-background' : '#2c3625' , // Main readable body text, primary headers, active global text
      /* */
      /* :: Color Palette: Yellow and Dark Grey
      'primary': {
        100: '#ffc107',
        200: '#ffc83b',
        300: '#ffce58',
        400: '#ffd572',
        500: '#ffdc8a',
        600: '#ffe3a2'
      },
      'surface': {
        100: '#121212',
        200: '#282828',
        300: '#3f3f3f',
        400: '#575757',
        500: '#717171',
        600: '#8b8b8b'
      },
      'on-background': '#ffffff',
      */  
      /* :: Color Palette: Orange and Dark Blue
      'primary': {
        100: '#ff6b35',
        200: '#ff7d4b',
        300: '#ff8f61',
        400: '#ff9f77',
        500: '#ffb08c',
        600: '#ffc0a3'
      },
      'surface': {
        100: '#07022e',
        200: '#1f1e42',
        300: '#393658',
        400: '#524f6e',
        500: '#6d6a84',
        600: '#89869c'
      },
      'on-background': '#ffffff',
      */
      /* :: Color Palette: Green and Dark Blue
      'primary': {
        100: '#0b7a75',
        200: '#378883',
        300: '#549792',
        400: '#6da5a1',
        500: '#86b4b0',
        600: '#9ec3bf'
      },
      'surface': {
        100: '#07022e',
        200: '#1f1e42',
        300: '#393658',
        400: '#524f6e',
        500: '#6d6a84',
        600: '#89869c'
      },
      'on-background': '#ffffff',
      */
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'body': ['"Inter"', 'Helvetica', 'sans-serif']
    }
  },
  plugins: [],
}
