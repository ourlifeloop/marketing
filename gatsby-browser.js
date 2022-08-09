import './src/styles/global.scss';

const EXCLUDED_ROUTES = ['/training-login', '/support'];
const isProduction = process.env.NODE_ENV === 'production';

const _trackPage = ({ location }) => {
  if (!isProduction || !Array.isArray(window._hsq)) {
    return null;
  }

  const DO_NOT_TRACK =
    (window.doNotTrack ||
      navigator.doNotTrack ||
      navigator.msDoNotTrack ||
      'msTrackingProtectionEnabled' in window.external) &&
    (window.doNotTrack === '1' ||
      navigator.doNotTrack === 'yes' ||
      navigator.doNotTrack === '1' ||
      navigator.msDoNotTrack === '1' ||
      window.external.msTrackingProtectionEnabled());

  if (!DO_NOT_TRACK) {
    const path = location
      ? `${location.pathname}${location.search}${location.hash}`
      : undefined;
    if (!EXCLUDED_ROUTES.includes(path)) {
      window._hsq.push(['setPath', path]);
      window._hsq.push(['trackPageView']);
    }
  } else {
    window._hsq.push(['doNotTrack']);
  }
  return null;
};

window._trackPage = _trackPage;

// Called when the user changes routes, including on the initial load of the app
export const onRouteUpdate = _trackPage;
