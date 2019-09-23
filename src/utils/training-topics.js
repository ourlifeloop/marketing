import { graphql } from 'gatsby';

export default [
  {
    key: 'getting-started',
    name: 'Getting Started',
    image: 'gettingStarted',
  },
  {
    key: 'activity-calendar',
    name: 'Activity Calendar',
    image: 'calendar',
  },
  {
    key: 'resident-management',
    name: 'Resident Management',
    image: 'reports',
  },
  {
    key: 'photos',
    name: 'Photos',
    image: 'photos',
  },
  {
    key: 'messaging',
    name: 'Messaging',
    image: 'messages',
  },
  {
    key: 'maintenance',
    name: 'Maintenance',
    image: 'maintenance',
  },
  {
    key: 'transportation',
    name: 'Transportation',
    image: 'transportation',
  },
  {
    key: 'displays',
    name: 'Displays',
    image: 'displays',
  },
  {
    key: 'resident-portal',
    name: 'Resident Portal',
    image: 'residents',
  },
  {
    key: 'family-portal',
    name: 'Family Portal',
    image: 'family',
  },
  {
    key: 'staff-management',
    name: 'Staff Management',
    image: 'calendar',
  },
  {
    key: 'reporting',
    name: 'Reporting',
    image: 'calendar',
  },
  {
    key: 'calendar-designer',
    name: 'Calendar Designer',
    image: 'calendar',
  },
  {
    key: 'connections',
    name: 'Connections',
    image: 'calendar',
  },
];

export const trainingImages = graphql`
  fragment featureImage on File {
    childImageSharp {
      fluid(maxWidth: 186) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment trainingImages on Query {
    calendar: file(relativePath: { eq: "features/calendar.png" }) {
      ...featureImage
    }
    displays: file(relativePath: { eq: "features/displays.png" }) {
      ...featureImage
    }
    family: file(relativePath: { eq: "features/family.png" }) {
      ...featureImage
    }
    gettingStarted: file(relativePath: { eq: "features/getting-started.png" }) {
      ...featureImage
    }
    maintenance: file(relativePath: { eq: "features/maintenance.png" }) {
      ...featureImage
    }
    messages: file(relativePath: { eq: "features/messages.png" }) {
      ...featureImage
    }
    photos: file(relativePath: { eq: "features/photos.png" }) {
      ...featureImage
    }
    reports: file(relativePath: { eq: "features/reports.png" }) {
      ...featureImage
    }
    residents: file(relativePath: { eq: "features/residents.png" }) {
      ...featureImage
    }
    transportation: file(relativePath: { eq: "features/transportation.png" }) {
      ...featureImage
    }
  }
`;
