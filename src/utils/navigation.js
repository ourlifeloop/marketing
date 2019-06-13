import calendar from '../assets/icons/calendar.svg';
import displays from '../assets/icons/displays.svg';
import family from '../assets/icons/family.svg';
import maintenance from '../assets/icons/maintenance.svg';
import messages from '../assets/icons/messages.svg';
import photos from '../assets/icons/photos.svg';
import reports from '../assets/icons/reports.svg';
import residents from '../assets/icons/residents.svg';
import transportation from '../assets/icons/transportation.svg';

export default {
  features: {
    key: 'features',
    name: 'Features',
    subNav: {
      calendar: {
        key: 'calendar',
        Icon: calendar,
        name: 'Activity Calendar',
        link: '/features/activities',
      },
      displays: {
        key: 'displays',
        Icon: displays,
        name: 'Displays',
        link: '/features/displays',
      },
      residentManagement: {
        key: 'residentManagement',
        Icon: reports,
        name: 'Resident Management',
        shortName: 'Resident Mgmt',
        link: '/features/resident-management',
      },
      messaging: {
        key: 'messaging',
        Icon: messages,
        name: 'Messaging',
        link: '/features/messaging',
      },
      transportation: {
        key: 'transportation',
        Icon: transportation,
        name: 'Transportation',
        link: '/features/transportation',
      },
      maintenance: {
        key: 'maintenance',
        Icon: maintenance,
        name: 'Maintenance',
        link: '/features/maintenance',
      },
      residentPortal: {
        key: 'residentPortal',
        Icon: residents,
        name: 'Resident Portal',
        link: '/features/resident-portal',
      },
      familyPortal: {
        key: 'familyPortal',
        Icon: family,
        name: 'Family Portal',
        link: '/features/family-portal',
      },
      photos: {
        key: 'photos',
        Icon: photos,
        name: 'Photos',
        link: '/features/photos',
      },
    },
  },
  benefits: {
    key: 'benefits',
    name: 'Benefits',
    link: '/benefits',
  },
  ourStory: {
    key: 'ourStory',
    name: 'Our Story',
    link: '/our-story',
  },
  blog: {
    key: 'blog',
    name: 'Blog',
    link: '/blog/latest',
  },
  contactUs: {
    key: 'contactUs',
    name: 'Contact Us',
    link: '/contact',
  },
};
