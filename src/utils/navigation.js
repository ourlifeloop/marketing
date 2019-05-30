import calendar from '../assets/icons/calendar.svg';
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
        icon: calendar,
        name: 'Activity Calendar',
        link: '/features/activities',
      },
      residentManagement: {
        key: 'residentManagement',
        icon: reports,
        name: 'Resident Management',
        link: '/features/resident-management',
      },
      messaging: {
        key: 'messaging',
        icon: messages,
        name: 'Messaging',
        link: '/features/messaging',
      },
      transportation: {
        key: 'transportation',
        icon: transportation,
        name: 'Transportation',
        link: '/features/transportation',
      },
      maintenance: {
        key: 'maintenance',
        icon: maintenance,
        name: 'Maintenance',
        link: '/features/maintenance',
      },
      residentPortal: {
        key: 'residentPortal',
        icon: residents,
        name: 'Resident Portal',
        link: '/features/resident-portal',
      },
      familyPortal: {
        key: 'familyPortal',
        icon: family,
        name: 'Family Portal',
        link: '/features/family-portal',
      },
      photos: {
        key: 'photos',
        icon: photos,
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
    link: '/blog',
  },
  contactUs: {
    key: 'contactUs',
    name: 'Contact Us',
    link: '/contact',
  },
};
