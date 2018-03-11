export const production = (window.location.hostname === 'orai.pro' || window.location.hostname === 'orai.prod');
export const baseEndpoint = production
  ? 'https://oraiappv2.tryoratio.com' : 'https://v2beta.tryoratio.com';
export const devMode = ['127.0.0.1', 'localhost'].includes(window.location.hostname);
export const endpoint = `${baseEndpoint}/mobileapp/v2`;

// export const teamId = 1;
export const SSOURL = production
? 'https://sso.orai.pro' : 'http://sso.orai.devl:8000';
export const SSO_CREATE_URL = `${SSOURL}/signup`;
export const lessonsDashboardUri = 'https://lessons.orai.pro';

