import { graphql } from 'gatsby';

import calendar from '../assets/icons/calendar.svg';
import displays from '../assets/icons/displays.svg';
import connections from '../assets/icons/connections.svg';
import maintenance from '../assets/icons/maintenance.svg';
import messages from '../assets/icons/messages.svg';
import photos from '../assets/icons/photos.svg';
import residentManagement from '../assets/icons/resident-management.svg';
import residents from '../assets/icons/residents.svg';
import transportation from '../assets/icons/transportation.svg';
import designer from '../assets/icons/designer.svg';

const NAVIGATION = {
  features: {
    key: 'features',
    name: 'Features',
    subNav: {
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
        testimonials: [
          {
            logo: 'fieldstone',
            quote:
              'LifeLoop has enhanced and simplified staff communication for our community through its messaging feature. We are now able to easily message each other, family and residents in one platform. I am always at ease that I never miss a message because of the notification I receive in LifeLoop as well as to my email. Our residents have also enjoyed using the messaging feature to contact staff and appreciate being able to view the calendar activities in their resident portal.',
            author: 'Lucie Flood',
            position: 'Life Enrichment Director',
          },
          {
            logo: 'firstPlace',
            quote:
              'LifeLoop has been a remarkable tool for the residents of First Place-Phoenix and their families. It’s an easy-to-use platform that has helped the transition to moving to a supportive, inclusive apartment living. LifeLoop has brought together our community and has helped residents feel independent with utilization of the calendar feature and maintenance requests, all while the families feeling connected with knowing how engaged their loved one is.',
            author: 'Nina Bernardo',
            position: 'Community Life Coordinator',
          },
          {
            logo: 'dial',
            quote:
              'With Lifeloop, one of the great things is that when a new employee starts, they are able to build relationships with residents even faster because all of the information is at their fingertips.',
            author: 'Reed Davis',
            position: 'Dial Retirement Communities',
          },
        ],
      },
      calendar: {
        key: 'calendar',
        Icon: calendar,
        name: 'Activity Calendar',
        link: '/features/activity-calendar',
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
        testimonials: [
          {
            logo: 'kaplan',
            quote:
              'I love all that LifeLoop has to offer! Two features have quickly become my favorites: the calendar designer and attendance tracking. As any Activities Director knows, planning and creating your calendars can take hours or even days. LifeLoop has simplified and expedited this process. Everyone I have encountered at LifeLoop has been so professional, helpful and patient. I am very happy I decided to give LifeLoop a try and would recommend LifeLoop to any activities professional without hesitation.',
            author: 'Amy Cullen CALA, CDP',
            position: 'Corporate Life Engagement, Kaplan',
          },
          {
            logo: 'countryHouse',
            quote:
              'LifeLoop has been a wonderful tool for our community. It has allowed us to better share activity information with families, insure each resident is offered the opportunity to participate, and grow our activity calendar. Before using LifeLoop many of our families didn’t realize all of the programming opportunities we offer. Now, they can feel included on the activities their loved one participates in, view photos, and have access to another form of communication.',
            author: 'Katie Slade, MS, CTRS',
            position: 'Activity Director',
          },
        ],
      },
      designer: {
        key: 'designer',
        Icon: designer,
        name: 'Designer',
        shortName: 'Designer',
        link: '/features/designer',
        questions: [
          {
            question: 'Can I create branded calendars?',
            answer:
              'Yes! LifeLoop allows you to create professional monthly calendars that are customized with your branded colors, logo etc.',
          },
          {
            question:
              'Does LifeLoop offer more design options than just a monthly layout?',
            answer:
              'Yes! In our Designer you can create designed weekly calendars, two-page monthly calendars and standard one-page monthly calendars.',
          },
          {
            question: 'What types of projects can the designer create?',
            answer:
              'LifeLoop’s Designer can be used for printed monthly calendars, newsletters, marketing flyers, cards, menus and more!',
          },
          {
            question: 'How do my activities get on the designed calendar?',
            answer:
              'The Designer links up with your LifeLoop activity calendar with the click of a button, no duplicate entry is needed! Also add personal touches such as resident birthdays and anniversaries with just one click.',
          },
          {
            question: 'Can I print professional quality calendars?',
            answer:
              'Yes! We offer professional printing through our partnership with Activity Connection. If you print your calendars with Activity Connection, you can also get a discount applied to your subscription.',
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
        testimonials: [
          {
            logo: 'nye',
            quote:
              'The display feature on LifeLoop is convenient and effective when it comes to keeping residents informed.  I’m able to be at my desk and put an announcement up that will be live throughout the building within 5 minutes.  It’s really incredible!  We also just started utilizing the display feature for our break room, so Team Members can stay informed as well.',
            author: 'Hannah Langdon',
            position: 'Director of Life Enrichment',
          },
          {
            logo: 'fieldstone',
            quote:
              'Our new community especially loves the display feature, an efficient and paperless way to inform residents, families and staff in the building about our activities, birthdays, as well as welcoming tours and newly moved in residents and featuring our employee of the month. The slides are easily created by anyone with access to a computer and immediately displayed on our many screens. Efficient, highly visible and definitely paper clutter free!',
            author: 'Lucie Flood',
            position: 'Life Enrichment Director',
          },
        ],
      },
      residentTracking: {
        key: 'residentTracking',
        Icon: residentManagement,
        name: 'Resident Tracking',
        link: '/features/resident-tracking',
        questions: [
          {
            question: 'What devices is LifeLoop compatible on?',
            answer:
              'LifeLoop is hardware agnostic. The platform will function on any desktop, laptop, tablet or mobile device. LifeLoop works with both Apple and Android devices and functions best with the Google Chrome internet browser. There is also a LifeLoop app available for tablet and mobile devices.',
          },
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
        ],
        testimonials: [
          {
            logo: 'vetter',
            quote:
              'By utilizing LifeLoop in my community I have been able to save time, and as a result, added more one-to-ones with our residents, resulting in improved engagement and quality of life. I recommend LifeLoop to all Long Term Care Communities!',
            author: 'Courtney Schmitz',
            position: 'Life Enrichment Coordinator',
          },
          {
            logo: 'countryHouse',
            quote:
              'LifeLoop has helped our staff to keep track of who we extend invitations to for all our activities and increase participation. The LifeLoop employees have been extremely helpful as well and are very responsive to all our questions. They also are open minded in taking our suggestions on how to make LifeLoop the best program possible for communities and families. I am so thankful to have LifeLoop as a part of our activities program and would recommend it to all senior living communities.',
            author: 'Katie Slade, MS, CTRS',
            position: 'Activity Director',
          },
          {
            logo: 'roseBlumkin',
            quote:
              'LifeLoop has given our community a tool that has helped streamline our Life Enrichment program. Due to the easy-to-use features, the Life Enrichment team now has the data to help tell the story of each resident and their needs. In addition, the program has created efficiencies allowing us to spend more one-on-one time with residents — which is priceless.',
            author: 'Director of Activities',
            position: 'Rose Blumkin Jewish Home',
          },
        ],
      },
      connectionPortal: {
        key: 'connectionPortal',
        Icon: connections,
        name: 'Connection Portal',
        link: '/features/connection-portal',
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
        testimonials: [
          {
            logo: 'lifeloop',
            quote:
              'LifeLoop has given my family a tool to open up communication between all of our family members. Having a window in to my mother’s life makes me feel better about her well-being. I know she is in good hands but seeing it every day is even better.',
            author: 'Family Member of a Resident',
          },
          {
            logo: 'avamere',
            quote:
              'LifeLoop’s valuable to us because the present and the future of our industry is to keep family members more and more involved in our residents’ lives. Family members are naturally curious about what’s going on with their loved ones, and LifeLoop is both a proactive and reactive way of helping with that.',
            author: 'Thomas Cloutier',
            position: 'Vice President of Sales & Marketing',
          },
          {
            logo: 'lifeloop',
            quote:
              'LifeLoop has helped our staff to keep track of who we extend invitations to for all our activities and increase participation. The LifeLoop employees have been extremely helpful as well and are very responsive to all our questions. They also are open minded in taking our suggestions on how to make LifeLoop the best program possible for communities and families. I am so thankful to have LifeLoop as a part of our activities program and would recommend it to all senior living communities.',
            author: 'Activity Director',
            position: 'Senior Living Community',
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
        testimonials: [
          {
            logo: 'lifeloop',
            quote:
              'Thank you for posting photos of so many of the activities. My mother seems to really enjoy herself. I live so far away, that these photos really mean a lot to me.',
            author: 'Family Member to Activity Director',
          },
          {
            logo: 'aksarben',
            quote:
              'This past week I was talking with a resident’s brother who travels internationally for work.  He reminded me that one big factor in choosing Aksarben Village Retirement for his sister’s care was the weekly update emails he would receive from LifeLoop!',
            author: 'Danielle Knudson',
            position: 'Marketing Director',
          },
          {
            logo: 'fieldstone',
            quote:
              'I have worked with Life Loop since its beginnings and I continue to be impressed with the continued growth and improvement of the product. Our families enjoy the information and photos they get daily, a kind of a window into their loved one’s day, and our staff relies on the communication and attendance tracking.',
            author: 'Lucie Flood',
            position: 'Life Enrichment Director',
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
        testimonials: [
          {
            logo: 'vetter',
            quote:
              'The LifeLoop transportation feature has made it much easier for our drivers to have addresses available while on transport. Another feature that has benefited us, is the ease it has allowed in scheduling appointments. It’s nice to click on the transportation calendar and see if a driver or vehicle is available on a certain day. It is also nice to see the transportations to be able to know where residents are going at a glance. One of the best features, I think, is how easy it is to operate LifeLoop. It was easy for me to access the transportation and navigate getting residents added with appointments. Everyone has enjoyed the new transportation feature.',
            author: 'Bethany Daniels',
            position: 'Heritage of Red Cloud',
          },
          {
            logo: 'dial',
            quote:
              'In this industry, employee turnover is common, unfortunately, and it can be very difficult to bring new staff up to speed. An easy system like this really helps. And it can even help build a consistent company culture, even as staff rotates.',
            author: 'Lisa Moes',
            position: 'Director of Corporate Initiatives',
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
        testimonials: [
          {
            logo: 'dial',
            quote:
              'I can tell you from personal experience that LifeLoop has been a game changer for me as a Maintenance Director in managing scheduled property preventative maintenance and resident needs in the form of work orders for our property. I worked at another company prior to working at Dial and I wish I would have had a tool like LifeLoop. Not only does LifeLoop streamline communication, but it also eliminates the use of paper work orders and keeps a history of closed out work orders that you can search for if you need to.',
            author: 'Scott Randolph',
            position: 'Maintenance Director',
          },
          {
            logo: 'dial',
            quote:
              'In this industry, employee turnover is common, unfortunately, and it can be very difficult to bring new staff up to speed. An easy system like this really helps. And it can even help build a consistent company culture, even as staff rotates.',
            author: 'Lisa Moes',
            position: 'Director of Corporate Initiatives',
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

export default NAVIGATION;

export const testimonialImages = graphql`
  fragment testimonialImage on File {
    childImageSharp {
      gatsbyImageData(height: 130, layout: CONSTRAINED, quality: 100)
    }
  }

  fragment testimonialImages on Query {
    aksarben: file(relativePath: { eq: "logos/aksarben-logo.jpg" }) {
      ...testimonialImage
    }
    avamere: file(relativePath: { eq: "logos/avamere-logo.png" }) {
      ...testimonialImage
    }
    countryHouse: file(relativePath: { eq: "logos/country-house-logo.jpg" }) {
      ...testimonialImage
    }
    dial: file(relativePath: { eq: "logos/dial-logo.png" }) {
      ...testimonialImage
    }
    fieldstone: file(relativePath: { eq: "logos/fieldstone-logo.jpg" }) {
      ...testimonialImage
    }
    firstPlace: file(relativePath: { eq: "logos/first-place-logo.jpg" }) {
      ...testimonialImage
    }
    kaplan: file(relativePath: { eq: "logos/kaplan-logo.jpg" }) {
      ...testimonialImage
    }
    nye: file(relativePath: { eq: "logos/nye-logo.jpg" }) {
      ...testimonialImage
    }
    roseBlumkin: file(relativePath: { eq: "logos/rose-blumkin-logo.jpg" }) {
      ...testimonialImage
    }
    vetter: file(relativePath: { eq: "logos/vetter-logo.jpg" }) {
      ...testimonialImage
    }
    balfour: file(relativePath: { eq: "logos/balfour-logo.png" }) {
      ...testimonialImage
    }
    jacksonCreek: file(relativePath: { eq: "logos/jackson-creek-logo.png" }) {
      ...testimonialImage
    }
    lifeloop: file(relativePath: { eq: "lifeloop-logo.png" }) {
      ...testimonialImage
    }
  }
`;
