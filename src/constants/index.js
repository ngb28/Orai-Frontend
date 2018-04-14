export const production = (window.location.hostname === 'orai.pro' || window.location.hostname === 'orai.prod');
export const baseEndpoint = production
  ? 'https://sdesign.tryoratio.com' : 'https://sdesign.tryoratio.com';
export const devMode = ['127.0.0.1', 'localhost'].includes(window.location.hostname);
export const endpoint = `${baseEndpoint}/v1`;

// export const teamId = 1;
export const SSOURL = production
? 'https://sso.orai.pro' : 'http://sso.orai.devl:8000';
export const SSO_CREATE_URL = `${SSOURL}/signup`;
// export const lessonsDashboardUri = 'https://lessons.orai.pro';

export const API_URL = 'https://sdesign.tryoratio.com';
