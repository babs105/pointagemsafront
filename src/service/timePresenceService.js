import axios from '../axios/axios';

export const timePresenceService = {
    getAllTimePresence,
};


function getAllTimePresence() {
    return axios.get('/timePresence/getAllTimePresence').then(handleRegisterResponse)
      .then(presences => presences);
  }

function handleRegisterResponse(response) {
  const { data } = response;
  if (response.status === 401) {
    const error = (data && data.message) || response.statusText;
    console.log('handleRegisterResponse => error');
    console.log(error);
    return Promise.reject(error);
  }

  return data;
}
