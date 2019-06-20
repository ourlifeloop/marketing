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
            answer:
              'Absolutely! Simple, clean daily activity sheets can be printed with one or multiple calendars selected.',
          },
          {
            question: 'How many users/staff can have access to LifeLoop?',
            answer:
              'There is no limit to the number of users and customers don’t get charged by the user either.',
          },
          {
            question:
              'What does the LifeLoop implementation process look like?',
            answer:
              'Once the contract has been signed the LifeLoop Sales Manager will arrange a discovery call with you and your assigned Customer Success Manager (CSM). The CSM will gain insight about your community and decide the best setup and implementation process for you and your team’s needs. Your CSM will let you know what further information is needed in order to get your site setup and catered to your community prior to training and will have your site available immediately following your training.  A thorough training of LifeLoop will be provided to your team along with a comprehensive training site that can be reference post training. Your CSM will continue to touch base with you and your team and check on progress to ensure your community successfully launches LifeLoop!',
          },
          {
            question: 'Can I print professional quality calendars?',
            answer:
              'Yes! We offer professional printing through our partnership with Activity Connection.  If you print your calendars with Activity Connection, you can also get a discount applied to your subscription.',
          },
          {
            question:
              'Is professional printing with Activity Connection an additional cost outside of LifeLoop?',
            answer:
              'Professional printing options are available with Activity Connection for a minimal fee.',
          },
          {
            question: 'Can we customize our activity types?',
            answer:
              'Yes you can!  You can categorize activities to match your existing activity/wellness program or you can use our dimensions of wellness to categorize and track activity data.',
          },
          {
            question: 'Can I create branded calendars and displays?',
            answer:
              'Yes! We have a display option that is easy to design and set-up.  You can have a branded calendar embedded on your marketing site for families and potential residents/families to view. You can also easily brand your display with customized colors, your logo, etc.',
          },
        ],
      },
      displays: {
        key: 'displays',
        Icon: displays,
        name: 'Digital Signage',
        link: '/features/displays',
        questions: [
          {
            question: 'What hardware is required to use LifeLoop displays?',
            answer:
              'All you need is an Amazon Fire Stick and any TV or monitor with an HDMI port.',
          },
          {
            question: 'What devices can displays run on?',
            answer:
              'Displays with LifeLoop can be viewed on any television or monitor with an HDMI port.',
          },
          {
            question:
              'What if I want my lobby display to be different than the display in the dining room?',
            answer:
              'That’s no problem, we designed our display management system and Amazon app with this situation in mind.  Each unique display will require its own Amazon Fire Stick.',
          },
          {
            question: 'How may displays can I build?',
            answer:
              'There is no limit to the number of displays you can have with LifeLoop.',
          },
          {
            question: 'Can I customize display content?',
            answer:
              'Absolutely!  You can customize which calendars you want to generate the agenda, and you can customize the style of the agenda.  The daily agenda on the display is synced with the calendar(s) selected, so any changes in those activity or meal calendars will be displayed automatically. The other element to the display is a slideshow which can be customized with activity photos, birthdays, anniversaries, etc.  We can provide a template upon request.',
          },
          {
            question: 'Can I brand my display?',
            answer:
              'Yes you can! The LifeLoop display feature allows you to upload your community logo, colors and photos.',
          },
        ],
      },
      residentTracking: {
        key: 'residentTracking',
        Icon: reports,
        name: 'Resident Tracking',
        link: '/features/resident-tracking',
        questions: [
          {
            question: 'How often can I run reports?',
            answer:
              'You can run reports as frequently as you would like. There is no limit to the number of reports you can run.',
          },
          {
            question: 'Is their an additional cost for the reporting feature?',
            answer: 'There is no additional cost for this feature.',
          },
          {
            question:
              'Do family members automatically see their loved ones reports and data?',
            answer:
              'Family members will see their loved one’s activity feed and receive weekly emails with the activities attended. Family members will not see the reporting feature which is only available at the community level. If families would like to see reports, they can request these from staff members.',
          },
          {
            question: 'Can you run a personalized report for a care plan?',
            answer:
              'Yes, you can create a customized report based on activities and/or meals. You can create a report on any timeframe you wish. You can export this report to a PDF and share with family members, other staff, etc.',
          },
          {
            question: 'How many users can you have in LifeLoop?',
            answer:
              'There is no limit to the number of users and customers don’t get charged by the user either.',
          },
          {
            question: 'What devices is LifeLoop compatible on?',
            answer:
              'LifeLoop is hardware agnostic. The platform will function on any desktop, laptop, tablet or mobile device. LifeLoop works with both Apple and Android devices and functions best with the Google Chrome internet browser. There is also a LifeLoop app available for tablet and mobile devices.',
          },
        ],
      },
      communication: {
        key: 'communication',
        Icon: messages,
        name: 'Communication',
        link: '/features/communication',
        questions: [
          {
            question:
              'Can we turn off the messaging feature for family and/or residents if desired?',
            answer:
              'Family and Residents messaging cannot be turned off, however if you would not like staff to be able to message family or residents you are able to turn off their permission to do so. Family and residents would then still be able to communicate with each other through LifeLoop and keep that line of communication.',
          },
          {
            question: 'Can I control who can send messages to family members?',
            answer:
              'Yes! The LifeLoop platform is customizable and is set up so that each user can have their own set of permissions.  Administrators can dictate who has the ability to grant user permissions and that person can control which staff members have the ability to communicate with family and residents.  Not only is this the most secure set-up, but it actually helps facilitate good communication between your community and family members of your residents by clearly defining lines of communication.',
          },
          {
            question:
              'Will I be notified if someone sends a message? If so, how?',
            answer:
              'You can be texted, e-mailed, and/or notified within the application.',
          },
          {
            question: 'Can I add attachments to messages?',
            answer:
              'You can send any kind of attachment you want, including videos. Currently our maximum file size allowed for attachments is 50mb, but if you think sending larger files would benefit you, contact us to discuss customizing this feature for you.',
          },
        ],
      },
      transportation: {
        key: 'transportation',
        Icon: transportation,
        name: 'Transportation',
        link: '/features/transportation',
        questions: [
          {
            question: 'What devices is LifeLoop compatible on?',
            answer:
              'LifeLoop is hardware agnostic. The platform will function on any desktop, laptop, tablet or mobile device. LifeLoop works with both Apple and Android devices and functions best with the Google Chrome internet browser. There is also a LifeLoop app available for tablet and mobile devices.',
          },
          {
            question:
              'Can I turn off this feature for my communities’ residents and family members if desired?',
            answer:
              'Yes, the community has the ability to choose whether or not they would like this feature to be available to residents and their family members.',
          },
          {
            question: 'How many drivers can have access to LifeLoop?',
            answer:
              'A community can have an unlimited number of drivers entered in LifeLoop.',
          },
          {
            question: 'Can anyone enter transportation requests?',
            answer:
              'Along with drivers entering requests, family members and residents can also submit maintenance requests if the community offers this feature. It is a staff permission to enter transportation requests, so the administrator can manage what staff members have this permission.',
          },
          {
            question:
              'Who has the capability to manage transportation requests?',
            answer:
              'The ability to manage transportation requests is a permission that can be turned on or off for various staff members. Administrators can determine which staff members have the ability to enter requests.',
          },
          {
            question: 'Do drivers get notified of new requests?',
            answer:
              'Staff members will get notified if they have the appropriate permission. The driver assigned to the request will also get a notification.',
          },
        ],
      },
      maintenance: {
        key: 'maintenance',
        Icon: maintenance,
        name: 'Maintenance',
        link: '/features/maintenance',
        questions: [
          {
            question: 'What devices is LifeLoop compatible on?',
            answer:
              'LifeLoop is hardware agnostic. The platform will function on any desktop, laptop, tablet or mobile device. LifeLoop works with both Apple and Android devices and functions best with the Google Chrome internet browser. There is also a LifeLoop app available for tablet and mobile devices.',
          },
          {
            question:
              'Can I attached photos or other documents to maintenance requests?',
            answer: 'Yes, many users find this extremely valuable.',
          },
          {
            question:
              'Can I turn off this feature for my communities’ residents and family members if desired?',
            answer:
              'Yes, the community has the ability to choose whether or not they would like this feature to be available to residents and their family members.',
          },
          {
            question:
              'How many maintenance crew members can have access to LifeLoop?',
            answer:
              'A community can have an unlimited number of crew members with access to LifeLoop.',
          },
          {
            question: 'Can anyone enter maintenance requests?',
            answer:
              'Along with maintenance crew members entering requests, family members and residents can also submit maintenance requests if the community offers this feature. It is a staff permission to enter maintenance requests, so the administrator can manage what staff members have this permission.',
          },
          {
            question: 'Who has the capability to manage maintenance requests?',
            answer:
              'The ability to manage maintenance requests is a permission that can be turned on or off for various staff members. Administrators can determine which staff members have the ability to enter requests.',
          },
          {
            question: 'Does maintenance get notified of new requests?',
            answer:
              'Staff members will get notified if they have the appropriate permission. The crew member assigned to the request will get a notification and the creator of the request will get notified when there is any status change to the request.',
          },
          {
            question: 'Can preventative maintenance be inputted?',
            answer:
              'Yes! Preventative maintenance and future maintenance requests can be easily inputted.',
          },
        ],
      },
      residentPortal: {
        key: 'residentPortal',
        Icon: residents,
        name: 'Resident Portal',
        link: '/features/resident-portal',
        questions: [
          {
            question: 'What devices is LifeLoop compatible on?',
            answer:
              'LifeLoop is hardware agnostic. The platform will function on any desktop, laptop, tablet or mobile device. LifeLoop works with both Apple and Android devices and functions best with the Google Chrome internet browser. There is also a LifeLoop app available for tablet and mobile devices.',
          },
          {
            question:
              'Does LifeLoop have a limit to the number of photos/videos that can be uploaded?',
            answer:
              'There is no storage limit. Many customers have thousands of photos & videos within LifeLoop.',
          },
          {
            question:
              'Can I turn off this feature for my community if desired?',
            answer:
              'Yes, the community has the ability to choose whether or not they would like this feature to be available to residents and their family members.',
          },
          {
            question: 'Is the LifeLoop resident portal an additional cost?',
            answer:
              'The LifeLoop Resident Portal is included in your monthly LifeLoop fee. It is not an additional cost.',
          },
          {
            question: 'What can residents see/not see?',
            answer:
              'If the resident portal is offered by the community, residents can see the daily agenda and all activities on the activity and/or meal calendars.  They can also see all activities that they are registered for, any messages/announcements they are recipients of, and any maintenance or transportation requests that they or family members have submitted. They can also view any photos that have been uploaded by family or staff into their gallery or that they have been tagged in.',
          },
        ],
      },
      familyPortal: {
        key: 'familyPortal',
        Icon: family,
        name: 'Family Portal',
        link: '/features/family-portal',
        questions: [
          {
            question: 'What devices is LifeLoop compatible on?',
            answer:
              'LifeLoop is hardware agnostic. The platform will function on any desktop, laptop, tablet or mobile device. LifeLoop works with both Apple and Android devices and functions best with the Google Chrome internet browser. There is also a LifeLoop app available for tablet and mobile devices.',
          },
          {
            question:
              'Does LifeLoop have a limit to the number of photos/videos I can share with my loved one?',
            answer:
              'Nope. You can upload as many photos as you’d like into the Resident Gallery and send as many videos as you’d like through our messaging feature.',
          },
          {
            question:
              'Can I get LifeLoop for my loved one without a specific community having it?',
            answer:
              'Unfortunately, as a resident care-focused application we need community engagement for LifeLoop to be useful. Contact us with the name of the community and we will work with them to make LifeLoop available for your loved one.',
          },
          {
            question: 'How do I find a community using LifeLoop today?',
            answer:
              'Contact us and let us know where your home base is and we will be happy to direct you to communities with LifeLoop in your area!',
          },
          {
            question: 'What can family see/not see?',
            answer:
              'Each community uses LifeLoop differently which means the family view is going to vary. However, some of the main features in LifeLoop that will always be viewable by family are the Activity Calendar, Messages and Announcements and their loved one’s photo library. Another feature family often will have access to is their loved one’s activity feed, highlighting all the activities they have attended or declined as well as photos from these activities. Other optional features the community may have are maintenance and transportation, which would include that user’s inputted requests and the status or any comments from staff that have been published to the family member’s view.',
          },
          {
            question:
              'Does LifeLoop notify me when a new photo of my loved one has been uploaded?',
            answer:
              'While this is currently not a notification the LifeLoop team is constantly updating and making improvements to the application. This notification is one of those improvements that they are working towards!',
          },
          {
            question:
              'How many family members can be connected to LifeLoop per resident?',
            answer:
              'There is no limit to the number of family members that can be connected to LifeLoop. Family members connected must be approved by the resident.',
          },
        ],
      },
      photos: {
        key: 'photos',
        Icon: photos,
        name: 'Photo & Video Sharing',
        shortName: 'Photos',
        link: '/features/photos',
        questions: [
          {
            question: 'What devices is LifeLoop compatible on?',
            answer:
              'LifeLoop is hardware agnostic. The platform will function on any desktop, laptop, tablet or mobile device. LifeLoop works with both Apple and Android devices and functions best with the Google Chrome internet browser. There is also a LifeLoop app available for tablet and mobile devices.',
          },
          {
            question: 'What is the storage limit for photos within LifeLoop?',
            answer:
              'There is no storage limit. Many customers have thousands of photos within LifeLoop.',
          },
          {
            question: 'Can you upload videos to LifeLoop?',
            answer:
              'You can upload videos as an attachment in a message, or you can upload videos in the Resident’s “About Me” section.',
          },
          {
            question:
              'Does LifeLoop notify family members when a new photo/video of their loved one has been uploaded?',
            answer:
              'We send an email to family members every Friday with a summary of your resident’s activities this last week. We find that most people log in through the email every week to view newly added photos. If the picture or video is sent as an attachment to a message, we do offer text and/or email notifications to the family member. Also, when family logs in through the web or the app all activity photos will be viewable and highlighted on the resident’s activity feed.',
          },
          {
            question:
              'How many family members can be connected to LifeLoop per resident?',
            answer:
              'There is no limit to the number of family members that can be connected to LifeLoop. Family members connected must be approved by the resident and/or community.',
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
