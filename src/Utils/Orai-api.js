import axios from 'axios';
import {API_URL} from '../constants/index'
import {readCookie, getCurrentUser} from '../Login/cookie'

export {postVideo, getSessionData};

const USER_ID = getCurrentUser().uid;
const TOKEN = readCookie('ORAI_AUTH');

function postVideo(video) {
  //console.log(video.data);
  const url = API_URL + '/v1/upload/' + USER_ID;
  return axios({
    method: 'put',
    url: url,
    headers: {
      'Content-Type': 'video/webm',
      'Authentication': TOKEN
    },
    params: {
      title: video.title,
      duration: 5
    },
    data: JSON.stringify(video.data)
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}

function getSessionData() {
  const url = API_URL + '/v1/session/' + USER_ID;
  return axios({
    method: 'get',
    url: url,
    headers: {'Authentication': TOKEN}
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}
