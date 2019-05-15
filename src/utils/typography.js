import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  bodyWeight: '400',
  headerFontFamily: ['Roboto', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'Helvetica', 'sans-serif'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['300', '400', '500', '700'],
    },
  ],
});

export const { scale, rhythm, options } = typography;
export default typography;
