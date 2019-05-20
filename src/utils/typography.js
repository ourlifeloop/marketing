import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  headerWeight: '700',
  bodyWeight: '400',
  headerFontFamily: ['PT Sans', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['PT Sans', 'Helvetica', 'sans-serif'],
  googleFonts: [
    {
      name: 'PT Sans',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
});

export const { scale, rhythm, options } = typography;
export default typography;
