import { graphql } from 'gatsby';

export default [
  {
    name: 'Amy Johnson',
    title: 'Co-Founder & CEO',
    image: 'amyJohnson',
  },
  {
    name: 'Philip Lee',
    title: 'Co-Founder',
    image: 'philipLee',
  },
  {
    name: 'Nick Nemer',
    title: 'Vice President Business Development',
    image: 'nickNemer',
  },
  {
    name: 'Megan King',
    title: 'Vice President of Operations & Customer Success',
    image: 'meganKing',
  },
  {
    name: 'Jason Stevens',
    title: 'Vice President of Strategy & Sales Operations',
    image: 'jasonStevens',
  },
  {
    name: 'Brett Robeson',
    title: 'Sales Manager',
    image: 'brettRobeson',
  },
  {
    name: 'Joey Carney',
    title: 'Sales Manager',
    image: 'joeyCarney',
  },
  {
    name: 'JT Seger',
    title: 'Lead Developer',
    image: 'jtSeger',
  },
  {
    name: 'Mitchel Pigsley',
    title: 'Lead Developer',
    image: 'mitchelPigsley',
  },
  {
    name: 'Andrea Clauson',
    title: 'Marketing Manager',
    image: 'andreaClauson',
  },
  {
    name: 'Natallia Jorgensen',
    title: 'Customer Success Specialist',
    image: 'natalliaJorgensen',
  },
];

export const teamImages = graphql`
  fragment teamImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment teamImages on Query {
    amyJohnson: file(relativePath: { eq: "team/amy.johnson.jpg" }) {
      ...teamImage
    }
    philipLee: file(relativePath: { eq: "team/philip.lee.jpg" }) {
      ...teamImage
    }
    nickNemer: file(relativePath: { eq: "team/nick.nemer.jpg" }) {
      ...teamImage
    }
    meganKing: file(relativePath: { eq: "team/megan.king.jpg" }) {
      ...teamImage
    }
    jasonStevens: file(relativePath: { eq: "team/jason.stevens.jpg" }) {
      ...teamImage
    }
    brettRobeson: file(relativePath: { eq: "team/brett.robeson.jpg" }) {
      ...teamImage
    }
    joeyCarney: file(relativePath: { eq: "team/joey.carney.jpg" }) {
      ...teamImage
    }
    jtSeger: file(relativePath: { eq: "team/jt.seger.jpg" }) {
      ...teamImage
    }
    mitchelPigsley: file(relativePath: { eq: "team/mitchel.pigsley.jpg" }) {
      ...teamImage
    }
    andreaClauson: file(relativePath: { eq: "team/andrea.clauson.jpg" }) {
      ...teamImage
    }
    natalliaJorgensen: file(
      relativePath: { eq: "team/natallia.jorgensen.jpg" }
    ) {
      ...teamImage
    }
  }
`;
