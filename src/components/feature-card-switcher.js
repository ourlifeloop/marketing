import { Link, useStaticQuery, graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Img from 'gatsby-image';

import RelativeContainer from '../primitives/relative-container';
import { useDimensions, useDevice } from '../utils/effects';
import FlexContainer from '../primitives/flex-container';
import { Check, MoreHorizontal } from '../utils/icons';
import NAVIGATION from '../utils/navigation';
import { find, take } from '../utils/lodash';
import Button from '../primitives/button';

import styles from './feature-card-switcher.module.scss';

const FEATURES = [
  {
    key: NAVIGATION.features.subNav.calendar.key,
    name: NAVIGATION.features.subNav.calendar.name,
    Icon: NAVIGATION.features.subNav.calendar.Icon,
    link: NAVIGATION.features.subNav.calendar.link,
    headline: 'Activity calendars simplified',
    image: 'dataInformed',
    body:
      'LifeLoop has helped communities of all sizes effectively develop, communicate and display their activity calendars to residents and family members.',
    bullets: [
      'Save time with reoccurring activity features',
      'Design calendars that stand out',
      'Build robust calendars based on resident likes',
      'Real-time updates on all calendars and digital signage',
    ],
  },
  {
    key: NAVIGATION.features.subNav.displays.key,
    name: NAVIGATION.features.subNav.displays.name,
    Icon: NAVIGATION.features.subNav.displays.Icon,
    link: NAVIGATION.features.subNav.displays.link,
    headline: 'Enhance resident engagement in an affordable way',
    image: 'sync',
    body:
      'Digital signage with LifeLoop is a low cost, easy to deploy solution for your community.  The only hardware you need is an Amazon FireStick making this an impressive, yet affordable digital signage option to implement for your residents.',
    bullets: [
      'A fully customizable solution – incorporate brand colors, logo, etc',
      'Seamlessly syncs with your activity calendar',
      'Compatible with in-room channels',
    ],
  },
  {
    key: NAVIGATION.features.subNav.activityTracking.key,
    name: NAVIGATION.features.subNav.activityTracking.name,
    Icon: NAVIGATION.features.subNav.activityTracking.Icon,
    link: NAVIGATION.features.subNav.activityTracking.link,
    headline: 'Person-centered care',
    image: 'person',
    body:
      'Understanding the residents flow of information is essential to maximizing their level of care and proactively identifying their needs.',
    bullets: [
      'Easily quantify your life enrichment',
      'Metrics can be shared with family and assist in care plans',
      'Create workflow efficiencies and slash documentation time in half',
      'A trusted-HIPPA compliant platform',
    ],
  },
  {
    key: NAVIGATION.features.subNav.communication.key,
    name: NAVIGATION.features.subNav.communication.name,
    Icon: NAVIGATION.features.subNav.communication.Icon,
    link: NAVIGATION.features.subNav.communication.link,
    headline: 'Optimize your communication efforts',
    image: 'inform',
    body:
      'Communication between staff members, family members and residents has never been easier or more efficient. The LifeLoop messaging platform means you can communicate 24/7 from any device.',
    bullets: [
      'Easily broadcast messages to all staff, residents and family members who are connected',
      'Staff can send messages back and forth in LifeLoop',
      'Connected family members can connect with the appropriate staff member',
      'Residents can maintain a sense of independence',
    ],
  },
  {
    key: NAVIGATION.features.subNav.transportation.key,
    name: NAVIGATION.features.subNav.transportation.name,
    Icon: NAVIGATION.features.subNav.transportation.Icon,
    link: NAVIGATION.features.subNav.transportation.link,
    headline: 'Monitor your transportation in one place',
    image: 'customize',
    body:
      'Input and manage transportation requests with one intuitive platform. Easily view the status of each request and sort by driver or vehicle.',
    bullets: [
      'A full transportation management system',
      'Quickly filter requests by resident, driver, or vehicle',
      'Accessible from any Apple or Android device making it easy to use no matter where you are',
      'Compatible with Google Maps',
    ],
  },
  {
    key: NAVIGATION.features.subNav.maintenance.key,
    name: NAVIGATION.features.subNav.maintenance.name,
    Icon: NAVIGATION.features.subNav.maintenance.Icon,
    link: NAVIGATION.features.subNav.maintenance.link,
    headline: 'Monitor your maintenance in one place',
    image: 'management',
    body:
      'Input and manage maintenance requests with live progress updates and a detailed history log. Easily view the status of each request and sort by approved and pending requests.',
    bullets: [
      'A full maintenance management system',
      'Quickly filter requests by crew member, resident, room number or community location',
      'Accessible from any Apple or Android device making it easy to use no matter where you are',
    ],
  },
  {
    key: NAVIGATION.features.subNav.residentPortal.key,
    name: NAVIGATION.features.subNav.residentPortal.name,
    Icon: NAVIGATION.features.subNav.residentPortal.Icon,
    link: NAVIGATION.features.subNav.residentPortal.link,
    headline: 'Maximize their independence',
    image: 'independence',
    body:
      'Engaging residents and their family members with technology can have positive impact on the life of the resident, help alleviate social isolation and give your community a competitive edge.',
    bullets: [
      'Simplistic design and easy to navigate',
      'Can be used on desktops, laptops, tables or mobile phones',
      'Built in reminders to attend events and meals',
    ],
  },
  {
    key: NAVIGATION.features.subNav.familyPortal.key,
    name: NAVIGATION.features.subNav.familyPortal.name,
    Icon: NAVIGATION.features.subNav.familyPortal.Icon,
    link: NAVIGATION.features.subNav.familyPortal.link,
    headline: 'Be in two places at once',
    image: 'transparency',
    body:
      'Family members lean on LifeLoop to keep them up-to-date on the lives and care of their loved ones no matter where they are. The family portal sparks a genuine connection between family members and staff members and helps foster communication between residents and their families.',
    bullets: [
      'Capture and share special moments easily with the LifeLoop family portal and mobile app',
      'Get a real-time view into your loved one’s day',
      'Receive a weekly email with in-depth details on your loved one’s engagement',
      'Make transportation and maintenance requests easily from the portal or mobile app',
    ],
  },
  {
    key: NAVIGATION.features.subNav.photos.key,
    name: NAVIGATION.features.subNav.photos.shortName,
    Icon: NAVIGATION.features.subNav.photos.Icon,
    link: NAVIGATION.features.subNav.photos.link,
    headline: 'Your word-of-mouth marketing tool',
    image: 'organize',
    body:
      'Photo and video sharing through the LifeLoop portals and mobile app ensures that family members have a unique window into the daily lives of their loved ones.',
    bullets: [
      'Easily organize community photos',
      'Tag residents in special moments',
      'Set your community apart from the competition',
    ],
  },
];

export default () => {
  const { width } = useDimensions();
  const { isMobile } = useDevice();
  const [selected, setSelected] = useState(FEATURES[0].key);
  const photos = useStaticQuery(
    graphql`
      query {
        dataInformed: file(relativePath: { eq: "data-informed.png" }) {
          childImageSharp {
            fluid(maxWidth: 637) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        person: file(relativePath: { eq: "person-centered-care.png" }) {
          childImageSharp {
            fluid(maxWidth: 637) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        transparency: file(
          relativePath: { eq: "transparency-with-family.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 637) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        organize: file(relativePath: { eq: "organize-community-photos.png" }) {
          childImageSharp {
            fluid(maxWidth: 637) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        sync: file(relativePath: { eq: "seamlessly-sync.png" }) {
          childImageSharp {
            fluid(maxWidth: 637) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        inform: file(relativePath: { eq: "inform-your-staff.png" }) {
          childImageSharp {
            fluid(maxWidth: 637) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        customize: file(relativePath: { eq: "customize-requests.png" }) {
          childImageSharp {
            fluid(maxWidth: 637) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        management: file(
          relativePath: { eq: "full-maintenance-management-system.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 637) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        independence: file(relativePath: { eq: "maximize-independence.png" }) {
          childImageSharp {
            fluid(maxWidth: 637) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    `,
  );

  const tabWidth = 1310 / FEATURES.length;
  const numTabs =
    width > 1400 ? FEATURES.length : Math.floor((width - 90) / tabWidth) - 1;
  const featureList = take(FEATURES, numTabs);

  useEffect(() => {
    if (
      !find(featureList, { key: selected }) ||
      (numTabs === FEATURES.length && selected === 'more')
    ) {
      setSelected(FEATURES[0].key);
    }
  }, [numTabs]);

  let content;
  const selectedFeature = find(FEATURES, { key: selected });
  if (selectedFeature) {
    const { name, headline, body, bullets, image, link } = selectedFeature;
    content = (
      <>
        <FlexContainer
          flex="1"
          direction="column"
          className={styles.textContainer}
        >
          <h4>{headline}</h4>
          <p>{body}</p>
          {bullets.map(bullet => (
            <FlexContainer
              key={bullet}
              align="center"
              className={styles.bulletContainer}
            >
              <Check className={styles.check} />
              <p className={styles.bullet}>{bullet}</p>
            </FlexContainer>
          ))}
          <Link to={link}>
            <Button>Learn More About {name}</Button>
          </Link>
        </FlexContainer>
        {isMobile ? (
          <div className={styles.mobileImage}>
            <Img fluid={photos[image].childImageSharp.fluid} />
          </div>
        ) : (
          <FlexContainer flex="1">
            <RelativeContainer className={styles.relativeContainer}>
              <div className={styles.imageContainer}>
                <Img fluid={photos[image].childImageSharp.fluid} />
              </div>
            </RelativeContainer>
          </FlexContainer>
        )}
      </>
    );
  } else {
    content = <div />;
  }

  return (
    <FlexContainer direction="column" className={styles.container}>
      <FlexContainer justify="center" className={styles.navContainer}>
        {featureList.map(({ key, name, Icon }) => (
          <FlexContainer
            align="center"
            justify="center"
            key={key}
            direction="column"
            className={classNames(styles.iconContainer, {
              [styles.iconContainerSelected]: key === selected,
            })}
            onClick={() => setSelected(key)}
          >
            <Icon className={styles.icon} />
            <p className={styles.iconTitle}>{name}</p>
          </FlexContainer>
        ))}
        {numTabs < FEATURES.length && (
          <FlexContainer
            align="center"
            justify="center"
            direction="column"
            className={classNames(styles.iconContainer, {
              [styles.iconContainerSelected]: 'more' === selected,
            })}
            onClick={() => setSelected('more')}
          >
            <MoreHorizontal className={styles.icon} />
            <p className={styles.iconTitle}>More</p>
          </FlexContainer>
        )}
      </FlexContainer>
      <FlexContainer
        direction={isMobile ? 'column' : 'row'}
        className={styles.contentContainer}
      >
        {content}
      </FlexContainer>
    </FlexContainer>
  );
};
