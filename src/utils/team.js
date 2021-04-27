import { graphql } from 'gatsby';

const TEAM = [
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
    name: 'Brett Robeson',
    title: 'Strategic Programs Manager',
    image: 'brettRobeson',
  },
  {
    name: 'Joey Carney',
    title: 'Territory Manager',
    image: 'joeyCarney',
  },
  {
    name: 'Andrea Clauson',
    title: 'Marketing Manager',
    image: 'andreaClauson',
  },
  {
    name: 'Tara Robeson',
    title: 'Accounting Manager',
    image: 'taraRobeson',
  },
  {
    name: 'Brittany Tran',
    title: 'Customer Success Specialist',
    image: 'brittanyTran',
  },
  {
    name: 'Caroline Ebers',
    title: 'Customer Success Specialist',
    image: 'carolineEbers',
  },
  {
    name: 'Chelsea Blaser',
    title: 'Customer Success Specialist',
    image: 'chelseaBlaser',
  },
  {
    name: 'Erin McGill',
    title: 'Customer Success Specialist',
    image: 'erinMcGill',
  },
  {
    name: 'Jess Donahue',
    title: 'Customer Success Specialist',
    image: 'jessDonahue',
  },
  {
    name: 'Natallia Jorgensen',
    title: 'Customer Success Specialist',
    image: 'natalliaJorgensen',
  },
  {
    name: 'Sam Almquist',
    title: 'Customer Success Specialist',
    image: 'samAlmquist',
  },
  {
    name: 'JT Seger',
    title: 'Lead Software Engineer',
    image: 'jtSeger',
  },
  {
    name: 'Mitchel Pigsley',
    title: 'Lead Software Engineer',
    image: 'mitchelPigsley',
  },
  {
    name: 'Levi Liester',
    title: 'Software Engineer',
    image: 'leviLiester',
  },
  {
    name: 'Dylan Kuzelka',
    title: 'Quality Assurance Specialist',
    image: 'dylanKuzelka',
  },
  {
    name: 'Jared Herselman',
    title: 'Quality Assurance Specialist',
    image: 'jaredHerselman',
  },
  {
    name: 'Paige Eicher',
    title: 'Intern',
    image: 'paigeEicher',
  },
];

export default TEAM;

export const teamImages = graphql`
  fragment teamImage on File {
    childImageSharp {
      gatsbyImageData(width: 500, layout: CONSTRAINED)
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
    dylanKuzelka: file(relativePath: { eq: "team/dylan.kuzelka.jpg" }) {
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
    jessDonahue: file(relativePath: { eq: "team/jess.donahue.jpg" }) {
      ...teamImage
    }
    brittanyTran: file(relativePath: { eq: "team/brittany.tran.jpg" }) {
      ...teamImage
    }
    erinMcGill: file(relativePath: { eq: "team/erin.mcgill.jpg" }) {
      ...teamImage
    }
    leviLiester: file(relativePath: { eq: "team/levi.liester.jpg" }) {
      ...teamImage
    }
    taraRobeson: file(relativePath: { eq: "team/tara.robeson.jpg" }) {
      ...teamImage
    }
    carolineEbers: file(relativePath: { eq: "team/caroline.ebers.jpg" }) {
      ...teamImage
    }
    chelseaBlaser: file(relativePath: { eq: "team/chelsea.blaser.jpg" }) {
      ...teamImage
    }
    jaredHerselman: file(relativePath: { eq: "team/jared.herselman.jpg" }) {
      ...teamImage
    }
    paigeEicher: file(relativePath: { eq: "team/paige.eicher.jpg" }) {
      ...teamImage
    }
    samAlmquist: file(relativePath: { eq: "team/sam.almquist.jpg" }) {
      ...teamImage
    }
  }
`;
