import { graphql } from 'gatsby';

import designer from '../assets/icons/designer.svg';
import calendar from '../assets/icons/calendar.svg';
import connectionManagement from '../assets/icons/connection-management.svg';
import displays from '../assets/icons/displays.svg';
import connections from '../assets/icons/connections.svg';
import gettingStarted from '../assets/icons/getting-started.svg';
import workRequests from '../assets/icons/work-requests.svg';
import marketing from '../assets/icons/marketing.svg';
import messages from '../assets/icons/messages.svg';
import photos from '../assets/icons/photos.svg';
import reporting from '../assets/icons/reporting.svg';
import residentManagement from '../assets/icons/resident-management.svg';
import residents from '../assets/icons/residents.svg';
import staffManagement from '../assets/icons/staff-management.svg';
import transportation from '../assets/icons/transportation.svg';
import residentEngagementTools from '../assets/icons/resident-engagement-tools.svg';
import activityFeed from '../assets/icons/activity-feed.svg';
import learningCourses from '../assets/icons/learning-courses.svg';

const TRAINING_TOPICS = [
  {
    key: 'getting-started',
    name: 'Getting Started',
    image: 'gettingStarted',
    Icon: gettingStarted,
  },
  {
    key: 'marketing',
    name: 'Marketing',
    image: 'marketing',
    Icon: marketing,
  },
  {
    key: 'activity-calendar',
    name: 'Activity Calendar',
    image: 'calendar',
    Icon: calendar,
  },
  {
    key: 'activity-feed',
    name: 'Activity Feed',
    image: 'activityFeed',
    Icon: activityFeed,
  },
  {
    key: 'messaging',
    name: 'Communication',
    image: 'messages',
    Icon: messages,
  },
  {
    key: 'connection-management',
    name: 'Connection Management',
    image: 'connectionManagement',
    Icon: connectionManagement,
  },
  {
    key: 'connection-portal',
    name: 'Connection Portal',
    image: 'connections',
    Icon: connections,
  },
  {
    key: 'designer',
    name: 'Designer',
    image: 'designer',
    Icon: designer,
  },
  {
    key: 'displays',
    name: 'Displays',
    image: 'displays',
    Icon: displays,
  },
  {
    key: 'learning-courses',
    name: 'LifeLoop Learning Courses',
    image: 'learningCourses',
    Icon: learningCourses,
  },
  {
    key: 'work-requests',
    name: 'Work Requests',
    image: 'workRequests',
    Icon: workRequests,
  },
  {
    key: 'photos',
    name: 'Photos',
    image: 'photos',
    Icon: photos,
  },
  {
    key: 'reporting',
    name: 'Reporting',
    image: 'reporting',
    Icon: reporting,
  },
  {
    key: 'resident-engagement',
    name: 'Resident Engagement Tools',
    image: 'residentEngagementTools',
    Icon: residentEngagementTools,
  },
  {
    key: 'resident-management',
    name: 'Resident Management',
    image: 'residentManagement',
    Icon: residentManagement,
  },
  {
    key: 'resident-portal',
    name: 'Resident Portal',
    image: 'residents',
    Icon: residents,
  },
  {
    key: 'staff-management',
    name: 'Staff Management',
    image: 'staffManagement',
    Icon: staffManagement,
  },
  {
    key: 'transportation',
    name: 'Transportation',
    image: 'transportation',
    Icon: transportation,
  },
];

export default TRAINING_TOPICS;

export const trainingImages = graphql`
  fragment featureImage on File {
    childImageSharp {
      gatsbyImageData(width: 186, layout: CONSTRAINED)
    }
  }

  fragment trainingImages on Query {
    activityFeed: file(relativePath: { eq: "features/activity-feed.png" }) {
      ...featureImage
    }
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
    learningCourses: file(
      relativePath: { eq: "features/learning-courses.png" }
    ) {
      ...featureImage
    }
    workRequests: file(relativePath: { eq: "features/work-requests.png" }) {
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
