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
    name: 'Jesse Hardy',
    title: 'Sales Support Specialist',
    image: 'jesseHardy',
  },
  {
    name: 'Joey Carney',
    title: 'Territory Manager',
    image: 'joeyCarney',
  },
  {
    name: 'Jess Donahue',
    title: 'Territory Manager',
    image: 'jessDonahue',
  },
  {
    name: 'Ellen Osborne',
    title: 'Territory Manager',
    image: 'ellenOsborne',
  },
  {
    name: 'Andrea Clauson',
    title: 'Marketing Manager',
    image: 'andreaClauson',
  },
  {
    name: 'Madison Siniard',
    title: 'Marketing Specialist',
    image: 'madisonSiniard',
  },
  {
    name: 'Tara Robeson',
    title: 'Accounting Manager',
    image: 'taraRobeson',
  },
  {
    name: 'Carlee Jordan',
    title: 'Recruiter',
    image: 'carleeJordan',
  },
  {
    name: 'Natallia Jorgensen',
    title: 'Senior Customer Success Specialist',
    image: 'natalliaJorgensen',
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
    name: 'Sam Almquist',
    title: 'Customer Success Specialist',
    image: 'samAlmquist',
  },
  {
    name: 'Katie Paul',
    title: 'Customer Success Assistant',
    image: 'katiePaul',
  },
  {
    name: 'Dylan Kuzelka',
    title: 'Designer',
    image: 'dylanKuzelka',
  },
  {
    name: 'Jared Herselman',
    title: 'Quality Assurance Specialist',
    image: 'jaredHerselman',
  },
  {
    name: 'Erin Reed',
    title: 'Quality Assurance Specialist',
    image: 'erinReed',
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
    name: 'Jedd Patterson',
    title: 'Software Engineer',
    image: 'jeddPatterson',
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
    samAlmquist: file(relativePath: { eq: "team/sam.almquist.jpg" }) {
      ...teamImage
    }
    carleeJordan: file(relativePath: { eq: "team/carlee.jordan.png" }) {
      ...teamImage
    }
    ellenOsborne: file(relativePath: { eq: "team/ellen.osborne.png" }) {
      ...teamImage
    }
    erinReed: file(relativePath: { eq: "team/erin.reed.png" }) {
      ...teamImage
    }
    jeddPatterson: file(relativePath: { eq: "team/jedd.patterson.png" }) {
      ...teamImage
    }
    jesseHardy: file(relativePath: { eq: "team/jesse.hardy.png" }) {
      ...teamImage
    }
    katiePaul: file(relativePath: { eq: "team/katie.paul.png" }) {
      ...teamImage
    }
    madisonSiniard: file(relativePath: { eq: "team/madison.siniard.png" }) {
      ...teamImage
    }
  }
`;
