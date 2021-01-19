import { graphql } from 'gatsby';

import designer from '../assets/icons/designer.svg';
import calendar from '../assets/icons/calendar.svg';
import connectionManagement from '../assets/icons/connection-management.svg';
import displays from '../assets/icons/displays.svg';
import connections from '../assets/icons/connections.svg';
import gettingStarted from '../assets/icons/getting-started.svg';
import maintenance from '../assets/icons/maintenance.svg';
import marketing from '../assets/icons/marketing.svg';
import messages from '../assets/icons/messages.svg';
import photos from '../assets/icons/photos.svg';
import reporting from '../assets/icons/reporting.svg';
import residentManagement from '../assets/icons/resident-management.svg';
import residents from '../assets/icons/residents.svg';
import staffManagement from '../assets/icons/staff-management.svg';
import transportation from '../assets/icons/transportation.svg';
import residentEngagementTools from '../assets/icons/resident-engagement-tools.svg';

export default [
  {
    key: 'getting-started',
    name: 'Getting Started',
    image: 'gettingStarted',
    Icon: gettingStarted,
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
    image: 'residentManagement',
    Icon: residentManagement,
  },
  {
    key: 'photos',
    name: 'Photos',
    image: 'photos',
    Icon: photos,
  },
  {
    key: 'messaging',
    name: 'Communication',
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
    key: 'connection-portal',
    name: 'Connection Portal',
    image: 'connections',
    Icon: connections,
  },
  {
    key: 'staff-management',
    name: 'Staff Management',
    image: 'staffManagement',
    Icon: staffManagement,
  },
  {
    key: 'reporting',
    name: 'Reporting',
    image: 'reporting',
    Icon: reporting,
  },
  {
    key: 'designer',
    name: 'Designer',
    image: 'designer',
    Icon: designer,
  },
  {
    key: 'connection-management',
    name: 'Connection Management',
    image: 'connectionManagement',
    Icon: connectionManagement,
  },
  {
    key: 'marketing',
    name: 'Marketing',
    image: 'marketing',
    Icon: marketing,
  },
  {
    key: 'resident-engagement',
    name: 'Resident Engagement Tools',
    image: 'residentEngagementTools',
    Icon: residentEngagementTools,
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
    designer: file(relativePath: { eq: "features/designer.png" }) {
      ...featureImage
    }
    connectionManagement: file(
      relativePath: { eq: "features/connection-management.png" }
    ) {
      ...featureImage
    }
    displays: file(relativePath: { eq: "features/displays.png" }) {
      ...featureImage
    }
    connections: file(relativePath: { eq: "features/connections.png" }) {
      ...featureImage
    }
    gettingStarted: file(relativePath: { eq: "features/getting-started.png" }) {
      ...featureImage
    }
    maintenance: file(relativePath: { eq: "features/maintenance.png" }) {
      ...featureImage
    }
    marketing: file(relativePath: { eq: "features/marketing.png" }) {
      ...featureImage
    }
    messages: file(relativePath: { eq: "features/messages.png" }) {
      ...featureImage
    }
    photos: file(relativePath: { eq: "features/photos.png" }) {
      ...featureImage
    }
    reporting: file(relativePath: { eq: "features/reporting.png" }) {
      ...featureImage
    }
    residentManagement: file(
      relativePath: { eq: "features/resident-management.png" }
    ) {
      ...featureImage
    }
    residents: file(relativePath: { eq: "features/residents.png" }) {
      ...featureImage
    }
    staffManagement: file(
      relativePath: { eq: "features/staff-management.png" }
    ) {
      ...featureImage
    }
    transportation: file(relativePath: { eq: "features/transportation.png" }) {
      ...featureImage
    }
    residentEngagementTools: file(
      relativePath: { eq: "features/resident-engagement-tools.png" }
    ) {
      ...featureImage
    }
  }
`;
