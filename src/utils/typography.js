import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  headerWeight: '500',
  bodyWeight: '400',
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['300', '400', '700'],
    },
    {
      name: 'Montserrat',
      styles: ['500'],
    },
  ],
});

export const { scale, rhythm, options } = typography;
export default typography;
