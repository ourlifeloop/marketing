import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  headerWeight: '700',
  bodyWeight: '400',
  headerFontFamily: ['Amelia Basic', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'Helvetica', 'sans-serif'],
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['300', '400', '700'],
    },
  ],
});

export const { scale, rhythm, options } = typography;
export default typography;
