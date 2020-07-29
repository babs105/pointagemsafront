import axios from '../axios/axios';

export const agentService = {
    createAgent,
    getAllAgent,
};
function createAgent(agent) {
  
  return axios.post('/agent/addAgent', agent).then(handleRegisterResponse)
    .then(agent => agent);
}

function getAllAgent() {
    return axios.get('/agent/getAllAgent').then(handleRegisterResponse)
      .then(agents => agents);
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
