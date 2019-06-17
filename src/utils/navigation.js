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
        questions: [
          {
            question:
              'Can I just print today’s activities rather than printing the entire calendar?',
            answer: '',
          },
          {
            question: 'How many users/staff can have access to LifeLoop?',
            answer: '',
          },
          {
            question:
              'What does the LifeLoop implementation process look like?',
            answer: '',
          },
          {
            question:
              'Is professional printing with Activity Connection an additional cost outside of LifeLoop?',
            answer: '',
          },
          { question: 'Can we customize our activity types?', answer: '' },
          {
            question: 'Can I create branded calendars and displays?',
            answer: '',
          },
          {
            question: 'Can I print professional quality calendars?',
            answer: '',
          },
        ],
      },
      displays: {
        key: 'displays',
        Icon: displays,
        name: 'Displays',
        link: '/features/displays',
        questions: [
          {
            question: 'What hardware is required to use LifeLoop displays?',
            answer: '',
          },
          {
            question: 'What devices can displays run on?',
            answer: 'Any television with an HDMI port.',
          },
          {
            question:
              'What if I want my lobby display to be different than the display in the dining room?',
            answer: '',
          },
          { question: 'How may displays can I build?', answer: '' },
          { question: 'Is each display an additional cost?', answer: '' },
          { question: 'Can I customize display content?', answer: '' },
          { question: 'Can I brand my display?', answer: '' },
        ],
      },
      residentManagement: {
        key: 'residentManagement',
        Icon: reports,
        name: 'Resident Management',
        shortName: 'Resident Mgmt',
        link: '/features/resident-management',
        questions: [
          { question: 'How often can I run reports?', answer: '' },
          {
            question: 'Is their an additional cost for the reporting feature?',
            answer: '',
          },
          {
            question:
              'Do family members automatically see their loved ones reports and data?',
            answer: '',
          },
          {
            question: 'Can you run a personalized report for a care plan?',
            answer: '',
          },
          { question: 'How many users can you have in LifeLoop?', answer: '' },
          { question: 'What devices is LifeLoop compatible on?', answer: '' },
        ],
      },
      messaging: {
        key: 'messaging',
        Icon: messages,
        name: 'Messaging',
        link: '/features/messaging',
        questions: [
          {
            question:
              'Can we turn off the messaging feature for family and/or residents if desired?',
            answer: '',
          },
          {
            question: 'Can I control who can send messages to family members?',
            answer: '',
          },
          {
            question:
              'Will I be notified if someone sends a message? If so, how?',
            answer: '',
          },
          { question: 'Can I add attachments to messages?', answer: '' },
        ],
      },
      transportation: {
        key: 'transportation',
        Icon: transportation,
        name: 'Transportation',
        link: '/features/transportation',
        questions: [
          { question: 'What devices is LifeLoop compatible on?', answer: '' },
          {
            question:
              'Can I turn off this feature for my communities’ residents and family members if desired?',
            answer: '',
          },
          {
            question: 'How many drivers can have access to LifeLoop?',
            answer: '',
          },
        ],
      },
      maintenance: {
        key: 'maintenance',
        Icon: maintenance,
        name: 'Maintenance',
        link: '/features/maintenance',
        questions: [
          { question: 'What devices is LifeLoop compatible on?', answer: '' },
          {
            question:
              'Can I attached photos or other documents to maintenance requests?',
            answer: '',
          },
          {
            question:
              'Can I turn off this feature for my communities’ residents and family members if desired?',
            answer: '',
          },
          {
            question:
              'How many maintenance crew members can have access to LifeLoop?',
            answer: '',
          },
        ],
      },
      residentPortal: {
        key: 'residentPortal',
        Icon: residents,
        name: 'Resident Portal',
        link: '/features/resident-portal',
        questions: [
          { question: 'What devices is LifeLoop compatible on?', answer: '' },
          {
            question:
              'Does LifeLoop have a limit to the number of photos/videos that can be uploaded?',
            answer: '',
          },
          {
            question:
              'Can I turn off this feature for my community if desired?',
            answer: '',
          },
          {
            question: 'Is the LifeLoop resident portal an additional cost?',
            answer: '',
          },
          { question: 'What can residents see/not see?', answer: '' },
        ],
      },
      familyPortal: {
        key: 'familyPortal',
        Icon: family,
        name: 'Family Portal',
        link: '/features/family-portal',
        questions: [
          { question: 'What devices is LifeLoop compatible on?', answer: '' },
          {
            question:
              'Does LifeLoop have a limit to the number of photos/videos I can share with my loved one?',
            answer: '',
          },
          {
            question:
              'Can I get LifeLoop for my loved one without a specific community having it?',
            answer: '',
          },
          {
            question: 'How do I find a community using LifeLoop today?',
            answer: '',
          },
          { question: 'What can family see/not see?', answer: '' },
          {
            question:
              'Does LifeLoop notify me when a new photo of my loved one has been uploaded?',
            answer: '',
          },
          {
            question:
              'How many family members can be connected to LifeLoop per resident?',
            answer: '',
          },
        ],
      },
      photos: {
        key: 'photos',
        Icon: photos,
        name: 'Photos',
        link: '/features/photos',
        questions: [
          { question: 'What devices is LifeLoop compatible on?', answer: '' },
          {
            question: 'What is the storage limit for photos within LifeLoop?',
            answer: '',
          },
          { question: 'Can you upload videos to LifeLoop?', answer: '' },
          {
            question:
              'Does LifeLoop notify family members when a new photo/video of their loved one has been uploaded?',
            answer: '',
          },
          {
            question:
              'How many family members can be connected to LifeLoop per resident?',
            answer: '',
          },
        ],
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
