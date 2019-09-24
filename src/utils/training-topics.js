import { graphql } from 'gatsby';

import calendar from '../assets/icons/calendar.svg';
import displays from '../assets/icons/displays.svg';
import family from '../assets/icons/family.svg';
import maintenance from '../assets/icons/maintenance.svg';
import messages from '../assets/icons/messages.svg';
import photos from '../assets/icons/photos.svg';
import reports from '../assets/icons/reports.svg';
import residents from '../assets/icons/residents.svg';
import transportation from '../assets/icons/transportation.svg';

export default [
  {
    key: 'getting-started',
    name: 'Getting Started',
    image: 'gettingStarted',
    Icon: calendar,
  },
  {
    key: 'activity-calendar',
    name: 'Activity Calendar',
    image: 'calendar',
    Icon: calendar,
  },
  {
    key: 'resident-management',
    name: 'Resident Management',
    image: 'reports',
    Icon: reports,
  },
  {
    key: 'photos',
    name: 'Photos',
    image: 'photos',
    Icon: photos,
  },
  {
    key: 'messaging',
    name: 'Messaging',
    image: 'messages',
    Icon: messages,
  },
  {
    key: 'maintenance',
    name: 'Maintenance',
    image: 'maintenance',
    Icon: maintenance,
  },
  {
    key: 'transportation',
    name: 'Transportation',
    image: 'transportation',
    Icon: transportation,
  },
  {
    key: 'displays',
    name: 'Displays',
    image: 'displays',
    Icon: displays,
  },
  {
    key: 'resident-portal',
    name: 'Resident Portal',
    image: 'residents',
    Icon: residents,
  },
  {
    key: 'family-portal',
    name: 'Family Portal',
    image: 'family',
    Icon: family,
  },
  {
    key: 'staff-management',
    name: 'Staff Management',
    image: 'calendar',
    Icon: calendar,
  },
  {
    key: 'reporting',
    name: 'Reporting',
    image: 'calendar',
    Icon: calendar,
  },
  {
    key: 'calendar-designer',
    name: 'Calendar Designer',
    image: 'calendar',
    Icon: calendar,
  },
  {
    key: 'connections',
    name: 'Connections',
    image: 'calendar',
    Icon: calendar,
  },
  {
    key: 'marketing',
    name: 'Marketing',
    image: 'calendar',
    Icon: calendar,
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
