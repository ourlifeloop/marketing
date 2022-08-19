import { graphql } from 'gatsby';

const TEAM = [
  {
    name: 'Amy Johnson',
    title: 'Co-Founder & Chief Strategy Officer',
    image: 'amyJohnson',
  },
  {
    name: 'Philip Lee',
    title: 'Co-Founder',
    image: 'philipLee',
  },
  {
    name: 'Nick Nemer',
    title: 'Vice President of Strategic Growth',
    image: 'nickNemer',
  },
  {
    name: 'Megan King',
    title: 'Vice President of Operations',
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
    title: 'Manager, Mid-Market Account Management',
    image: 'joeyCarney',
  },
  {
    name: 'Jess Donahue',
    title: 'Territory Manager',
    image: 'jessDonahue',
  },
  {
    name: 'TJ Butler',
    title: 'Territory Manager',
    image: 'tjButler',
  },
  {
    name: 'Andrea Clauson',
    title: 'Director of Marketing',
    image: 'andreaClauson',
  },
  {
    name: 'Madison Siniard',
    title: 'Marketing Specialist',
    image: 'madisonSiniard',
  },
  {
    name: 'Tara Robeson',
    title: 'Office Finance Manager',
    image: 'taraRobeson',
  },
  {
    name: 'Natallia Jorgensen',
    title: 'Enterprise Customer Relationship Specialist, Team Lead',
    image: 'natalliaJorgensen',
  },
  {
    name: 'Brittany Tran',
    title: 'Customer Relationship Specialist',
    image: 'brittanyTran',
  },
  {
    name: 'Chelsea Blaser',
    title: 'Customer Relationship Specialist',
    image: 'chelseaBlaser',
  },
  {
    name: 'Erin McGill',
    title: 'Onboarding Specialist, Team Lead',
    image: 'erinMcGill',
  },
  {
    name: 'Caroline Ebers',
    title: 'Onboarding Specialist',
    image: 'carolineEbers',
  },
  {
    name: 'Sam Almquist',
    title: 'Customer Support Specialist, Team Lead',
    image: 'samAlmquist',
  },
  {
    name: 'Kim Meschede',
    title: 'Customer Support Specialist',
    image: 'kimMeschede',
  },
  {
    name: 'Mckayla Bruner',
    title: 'Customer Support Specialist',
    image: 'mckaylaBruner',
  },
  {
    name: 'Katie Paul',
    title: 'Implementation Specialist, Team Lead',
    image: 'katiePaul',
  },
  {
    name: 'Hayley Post',
    title: 'Implementation Specialist',
    image: 'hayleyPost',
  },
  {
    name: 'Hanna Hutchens',
    title: 'Implementation Specialist',
    image: 'hanaHutchens',
  },
  {
    name: 'Bailey Ahmady',
    title: 'Onboarding Specialist',
    image: 'baileyAhmady',
  },
  {
    name: 'Joslynn Martin',
    title: 'Onboarding Specialist',
    image: 'joslynnMartin',
  },
  {
    name: 'Ashley Rutan',
    title: 'Customer Success Specialist',
    image: 'ashleyRutan',
  },
  {
    name: 'Dylan Kuzelka',
    title: 'Designer',
    image: 'dylanKuzelka',
  },
  {
    name: 'Erin Reed',
    title: 'Quality Assurance Specialist',
    image: 'erinReed',
  },
  {
    name: 'Jared Herselman',
    title: 'Lead Quality Assurance Specialist',
    image: 'jaredHerselman',
  },
  {
    name: 'JT Seger',
    title: 'Principle Engineer',
    image: 'jtSeger',
  },
  {
    name: 'Levi Liester',
    title: 'Software Engineer',
    image: 'leviLiester',
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
    brittanyTran: file(relativePath: { eq: "team/brittany.tran.jpeg" }) {
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
    kimMeschede: file(relativePath: { eq: "team/kim.meschede.png" }) {
      ...teamImage
    }
    mckaylaBruner: file(relativePath: { eq: "team/mckayla.bruner.png" }) {
      ...teamImage
    }
    erinReed: file(relativePath: { eq: "team/erin.reed.jpg" }) {
      ...teamImage
    }
    jesseHardy: file(relativePath: { eq: "team/jesse.hardy.png" }) {
      ...teamImage
    }
    katiePaul: file(relativePath: { eq: "team/katie.paul.jpg" }) {
      ...teamImage
    }
    madisonSiniard: file(relativePath: { eq: "team/madison.siniard.png" }) {
      ...teamImage
    }
    hanaHutchens: file(relativePath: { eq: "team/hana.hutchens.jpg" }) {
      ...teamImage
    }
    hayleyPost: file(relativePath: { eq: "team/hayley.post.jpg" }) {
      ...teamImage
    }
    tjButler: file(relativePath: { eq: "team/tj.butler.jpg" }) {
      ...teamImage
    }
    baileyAhmady: file(relativePath: { eq: "team/bailey.ahmady.jpeg" }) {
      ...teamImage
    }
    joslynnMartin: file(relativePath: { eq: "team/joslynn.martin.jpeg" }) {
      ...teamImage
    }
    ashleyRutan: file(relativePath: { eq: "team/ashley.rutan.png" }) {
      ...teamImage
    }
  }
`;
