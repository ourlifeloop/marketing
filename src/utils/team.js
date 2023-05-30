import { graphql } from 'gatsby';

const TEAM = [
  {
    name: 'Philip Lee',
    title: 'Co-Founder',
    image: 'philipLee',
  },
  {
    name: 'Nick Nemer',
    title: 'Senior Vice President of Strategic Growth',
    image: 'nickNemer',
  },
  {
    name: 'Joey Carney',
    title: 'Manager, Mid-Market Account Management',
    image: 'joeyCarney',
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
    name: 'Natallia Jorgensen',
    title: 'Associate Manager of Customer Success - Enterprise',
    image: 'natalliaJorgensen',
  },
  {
    name: 'Brittany Tran',
    title: 'Sr. Customer Success Manager',
    image: 'brittanyTran',
  },
  {
    name: 'Chelsea Blaser',
    title: 'Customer Success Manager - MM',
    image: 'chelseaBlaser',
  },
  {
    name: 'Erin McGill',
    title: 'Associate Manager, Education and Enablement',
    image: 'erinMcGill',
  },
  {
    name: 'Caroline Ebers',
    title: 'Customer Success Manager - SMB',
    image: 'carolineEbers',
  },
  {
    name: 'Mckayla Bruner',
    title: 'Customer Support Specialist',
    image: 'mckaylaBruner',
  },
  {
    name: 'Katie Paul',
    title: 'Team Lead - Professional Services',
    image: 'katiePaul',
  },
  {
    name: 'Hayley Post',
    title: 'Customer Success Architect',
    image: 'hayleyPost',
  },
  {
    name: 'Hanna Hutchens',
    title: 'Customer Success Architect',
    image: 'hanaHutchens',
  },
  {
    name: 'Bailey Ahmady',
    title: 'Education Specialist',
    image: 'baileyAhmady',
  },
  {
    name: 'Joslynn Martin',
    title: 'Education Specialist',
    image: 'joslynnMartin',
  },
  {
    name: 'Ashley Rutan',
    title: 'Customer Success Specialist',
    image: 'ashleyRutan',
  },
  {
    name: 'Brett Robeson',
    title: 'Customer Renewals Specialist',
    image: 'brettRobeson',
  },
  {
    name: 'Dylan Kuzelka',
    title: 'Designer',
    image: 'dylanKuzelka',
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
    philipLee: file(relativePath: { eq: "team/philip.lee.jpg" }) {
      ...teamImage
    }
    nickNemer: file(relativePath: { eq: "team/nick.nemer.jpg" }) {
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
    brittanyTran: file(relativePath: { eq: "team/brittany.tran.jpeg" }) {
      ...teamImage
    }
    erinMcGill: file(relativePath: { eq: "team/erin.mcgill.jpg" }) {
      ...teamImage
    }
    leviLiester: file(relativePath: { eq: "team/levi.liester.jpg" }) {
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
    mckaylaBruner: file(relativePath: { eq: "team/mckayla.bruner.png" }) {
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
