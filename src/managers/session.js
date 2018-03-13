import { readCookie } from '../Login/cookie.js';
import { endpoint } from '../constants';

export default class SessionManager {
  static fetchUserSessions(userid) {
    const url = `${endpoint}/session/${userid}`;

    return fetch(url, {
      method: 'GET',
      headers: {
        Authentication: readCookie('ORAI_AUTH'),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.Error) {
          throw new Error(response.Error);
        }
        return response;
      })
      .catch(() => []);
  }

  static fetchSession(sid,uid) {
    const url = `${endpoint}/results/${sid}/${uid}`;

    return fetch(url, {
      method: 'GET',
      headers: {
        Authentication: readCookie('ORAI_AUTH'),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.Error) {
          throw new Error(response.Error);
        }
        return response;
      })
      .catch(() => []);
  }
}
