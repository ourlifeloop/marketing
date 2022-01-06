import { Link, useStaticQuery, graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import RelativeContainer from '../primitives/relative-container';
import { useDimensions, useDevice } from '../utils/effects';
import FlexContainer from '../primitives/flex-container';
import { find, take, takeRight } from '../utils/lodash';
import { Check, MoreHorizontal } from '../utils/icons';
import NAVIGATION from '../utils/navigation';
import Section from '../primitives/section';
import Button from '../primitives/button';

import {
  mobileContainer,
  mobileImageContainer,
  tabletText,
  bulletItem,
  bulletContainer,
  check,
  tabletImage,
  relativeContainer,
  imageContainer,
  container,
  navContainer,
  iconContainer,
  iconContainerSelected,
  icon,
  iconTitle,
  dropdownContainer,
  dropdownContainerOpen,
  dropdown,
  dropdownLink,
  contentContainer,
} from './feature-card-switcher.module.scss';

const FEATURES = [
  {
    key: NAVIGATION.features.subNav.communication.key,
    name: NAVIGATION.features.subNav.communication.name,
    Icon: NAVIGATION.features.subNav.communication.Icon,
    link: NAVIGATION.features.subNav.communication.link,
    headline: 'Optimize your communication efforts',
    image: 'inform',
    body: 'Communication between staff members, family members and residents has never been easier or more efficient. The LifeLoop messaging platform means you can communicate 24/7 from any device.',
    bullets: [
      'Easily broadcast messages to all staff, residents and family members who are connected',
      'Staff can send messages back and forth in LifeLoop',
      'Connected family members can connect with the appropriate staff member',
      'Residents can maintain a sense of independence',
    ],
  },
  {
    key: NAVIGATION.features.subNav.calendar.key,
    name: NAVIGATION.features.subNav.calendar.name,
    Icon: NAVIGATION.features.subNav.calendar.Icon,
    link: NAVIGATION.features.subNav.calendar.link,
    headline: 'Activity calendars simplified',
    image: 'dataInformed',
    body: 'LifeLoop has helped communities of all sizes effectively develop, communicate and display their activity calendars to residents and family members.',
    bullets: [
      'Save time with reoccurring activity features',
      'Build robust calendars based on resident likes',
      'Real-time updates on all calendars and digital signage',
    ],
  },
  {
    key: NAVIGATION.features.subNav.designer.key,
    name: NAVIGATION.features.subNav.designer.name,
    Icon: NAVIGATION.features.subNav.designer.Icon,
    link: NAVIGATION.features.subNav.designer.link,
    headline: 'Enhance your calendars & newsletters',
    image: 'newsletterDesigner',
    body: 'The LifeLoop Designer allows you to create calendars, newsletters, marketing pieces, menus and more all within the existing LifeLoop platform. Meaning you don’t need multiple programs to produce and distribute publications from your community. ',
    bullets: [
      'Easily create branded documents or request templates from our team',
      'Create calendars in monthly, two-week, one-week or daily formats',
      'Documents can be created in a variety of sizes',
      'Customize with images, adjustable text size & more',
    ],
  },
  {
    key: NAVIGATION.features.subNav.displays.key,
    name: NAVIGATION.features.subNav.displays.name,
    Icon: NAVIGATION.features.subNav.displays.Icon,
    link: NAVIGATION.features.subNav.displays.link,
    headline: 'Enhance resident engagement in an affordable way',
    image: 'sync',
    body: 'Digital signage with LifeLoop is a low cost, easy to deploy solution for your community.  The only hardware you need is an Amazon FireStick making this an impressive, yet affordable digital signage option to implement for your residents.',
    bullets: [
      'A fully customizable solution – incorporate brand colors, logo, etc',
      'Seamlessly syncs with your activity calendar',
      'Compatible with in-room channels',
    ],
  },
  {
    key: NAVIGATION.features.subNav.residentTracking.key,
    name: NAVIGATION.features.subNav.residentTracking.name,
    Icon: NAVIGATION.features.subNav.residentTracking.Icon,
    link: NAVIGATION.features.subNav.residentTracking.link,
    headline: 'Person-centered care',
    image: 'person',
    body: 'Understanding the residents flow of information is essential to maximizing their level of care and proactively identifying their needs.',
    bullets: [
      'Easily quantify your life enrichment',
      'Metrics can be shared with family and assist in care plans',
      'Create workflow efficiencies and slash documentation time in half',
      'A trusted-HIPAA compliant platform',
    ],
  },
  {
    key: NAVIGATION.features.subNav.connectionPortal.key,
    name: NAVIGATION.features.subNav.connectionPortal.name,
    Icon: NAVIGATION.features.subNav.connectionPortal.Icon,
    link: NAVIGATION.features.subNav.connectionPortal.link,
    headline: 'Be in two places at once',
    image: 'transparency',
    body: 'Family members lean on LifeLoop to keep them up-to-date on the lives and care of their loved ones no matter where they are. The family portal sparks a genuine connection between family members and staff members and helps foster communication between residents and their families.',
    bullets: [
      'Share special moments with the LifeLoop family portal and mobile app',
      'Get a real-time view into your loved one’s day',
      'Receive a weekly email with in-depth details on your loved one’s engagement',
      'Make transportation and work requests easily from the portal or mobile app',
    ],
  },
  {
    key: NAVIGATION.features.subNav.photos.key,
    name: NAVIGATION.features.subNav.photos.shortName,
    Icon: NAVIGATION.features.subNav.photos.Icon,
    link: NAVIGATION.features.subNav.photos.link,
    headline: 'Your word-of-mouth marketing tool',
    image: 'organize',
    body: 'Photo and video sharing through the LifeLoop portals and mobile app ensures that family members have a unique window into the daily lives of their loved ones.',
    bullets: [
      'Easily organize community photos',
      'Tag residents in special moments',
      'Set your community apart from the competition',
    ],
  },
  {
    key: NAVIGATION.features.subNav.residentPortal.key,
    name: NAVIGATION.features.subNav.residentPortal.name,
    Icon: NAVIGATION.features.subNav.residentPortal.Icon,
    link: NAVIGATION.features.subNav.residentPortal.link,
    headline: 'Maximize their independence',
    image: 'independence',
    body: 'Engaging residents and their family members with technology can have a positive impact on the life of the resident, help alleviate social isolation and give your community a competitive edge.',
    bullets: [
      'Simplistic design and easy to navigate',
      'Can be used on desktops, laptops, tables or mobile phones',
      'Built in reminders to attend events and meals',
    ],
  },
  {
    key: NAVIGATION.features.subNav.transportation.key,
    name: NAVIGATION.features.subNav.transportation.name,
    Icon: NAVIGATION.features.subNav.transportation.Icon,
    link: NAVIGATION.features.subNav.transportation.link,
    headline: 'Monitor your transportation in one place',
    image: 'customize',
    body: 'Input and manage transportation requests with one intuitive platform. Easily view the status of each request and sort by driver or vehicle.',
    bullets: [
      'A full transportation management system',
      'Quickly filter requests by resident, driver, or vehicle',
      'Accessible from any Apple or Android device',
      'Compatible with Google Maps',
    ],
  },
  {
    key: NAVIGATION.features.subNav.workRequests.key,
    name: NAVIGATION.features.subNav.workRequests.name,
    Icon: NAVIGATION.features.subNav.workRequests.Icon,
    link: NAVIGATION.features.subNav.workRequests.link,
    headline: 'Monitor your work requests in one place',
    image: 'management',
    body: 'Input and manage work requests with live progress updates and a detailed history log. Easily view the status of each request and sort by approved and pending requests.',
    bullets: [
      'A full work request management system',
      'Quickly filter requests by staff member, resident, room number or community location',
      'Accessible from any Apple or Android device',
    ],
  },
];

export default function FeatureCardSwitcher() {
  const { width } = useDimensions();
  const { isMobile, isTablet } = useDevice();
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);
  const [selected, setSelected] = useState(FEATURES[0].key);

  const photos = useStaticQuery(
    graphql`
      {
        dataInformed: file(relativePath: { eq: "data-informed.png" }) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED)
          }
        }
        person: file(relativePath: { eq: "person-centered-care.png" }) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED)
          }
        }
        transparency: file(
          relativePath: { eq: "transparency-with-family.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED)
          }
        }
        organize: file(relativePath: { eq: "organize-community-photos.png" }) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED)
          }
        }
        sync: file(relativePath: { eq: "seamlessly-sync.png" }) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED, placeholder: NONE)
          }
        }
        inform: file(relativePath: { eq: "inform-your-staff.png" }) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED)
          }
        }
        customize: file(relativePath: { eq: "customize-requests.png" }) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED)
          }
        }
        management: file(
          relativePath: { eq: "full-work-request-management-system.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED)
          }
        }
        independence: file(relativePath: { eq: "maximize-independence.png" }) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED)
          }
        }
        newsletterDesigner: file(
          relativePath: { eq: "newsletter-designer.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 637, layout: CONSTRAINED)
          }
        }
      }
    `,
  );

  const tabWidth = 1310 / FEATURES.length;
  const numTabs =
    width > 1400 ? FEATURES.length : Math.floor((width - 90) / tabWidth) - 1;
  const featureList = take(FEATURES, numTabs);
  const overflowList = takeRight(FEATURES, FEATURES.length - numTabs);

  useEffect(() => {
    if (isOverflowOpen) {
      setIsOverflowOpen(false);
    }
  }, [numTabs, isOverflowOpen]);

  if (isMobile) {
    const mobileFeatures = take(FEATURES, 3);
    return (
      <Section>
        {mobileFeatures.map(({ name, headline, body, image, link }) => (
          <FlexContainer
            key={name}
            direction="column"
            align="center"
            className={mobileContainer}
          >
            <h4>{headline}</h4>
            <p>{body}</p>
            <Link to={link}>
              <Button>{name}</Button>
            </Link>
            <div className={mobileImageContainer}>
              <GatsbyImage alt={name} image={getImage(photos[image])} />
            </div>
          </FlexContainer>
        ))}
      </Section>
    );
  }

  const selectedFeature = find(FEATURES, { key: selected });
  const { name, headline, body, bullets, image, link } = selectedFeature;
  const content = (
    <>
      <FlexContainer
        flex="1"
        direction="column"
        align={isTablet ? 'center' : 'flexstart'}
        className={classNames({ [tabletText]: isTablet })}
      >
        <h4>{headline}</h4>
        <p>{body}</p>
        {!isTablet &&
          bullets.map((bullet) => (
            <FlexContainer
              key={bullet}
              align="center"
              className={bulletContainer}
            >
              <Check className={check} />
              <p className={bulletItem}>{bullet}</p>
            </FlexContainer>
          ))}
        <Link to={link}>
          <Button>Learn More About {name}</Button>
        </Link>
      </FlexContainer>
      {isTablet ? (
        <div className={tabletImage}>
          <GatsbyImage alt={name} image={getImage(photos[image])} />
        </div>
      ) : (
        <FlexContainer flex="1">
          <RelativeContainer className={relativeContainer}>
            <div className={imageContainer}>
              <GatsbyImage alt={name} image={getImage(photos[image])} />
            </div>
          </RelativeContainer>
        </FlexContainer>
      )}
    </>
  );

  return (
    <Section>
      <FlexContainer direction="column" className={container}>
        <FlexContainer justify="center" className={navContainer}>
          {featureList.map(({ key, name, Icon }) => (
            <FlexContainer
              align="center"
              justify="center"
              key={key}
              direction="column"
              className={classNames(iconContainer, {
                [iconContainerSelected]: key === selected,
              })}
              onClick={() => setSelected(key)}
            >
              <Icon className={icon} />
              <p className={iconTitle}>{name}</p>
            </FlexContainer>
          ))}
          {numTabs < FEATURES.length && (
            <FlexContainer
              align="center"
              justify="center"
              direction="column"
              className={classNames(iconContainer, dropdownContainer, {
                [dropdownContainerOpen]: isOverflowOpen,
                [iconContainerSelected]: find(overflowList, {
                  key: selected,
                }),
              })}
              onClick={() => setIsOverflowOpen(!isOverflowOpen)}
            >
              <MoreHorizontal
                className={icon}
                width="50px"
                height="50px"
                strokeWidth="2"
                stroke="currentColor"
              />
              <p className={iconTitle}>More</p>
              <div className={dropdown}>
                {overflowList.map(({ key, name, Icon }) => (
                  <FlexContainer
                    key={key}
                    align="center"
                    className={dropdownLink}
                    aria-label={name}
                    onClick={() => setSelected(key)}
                  >
                    <Icon />
                    {name}
                  </FlexContainer>
                ))}
              </div>
            </FlexContainer>
          )}
        </FlexContainer>
        <FlexContainer
          direction={isTablet ? 'column' : 'row'}
          className={contentContainer}
        >
          {content}
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
}
