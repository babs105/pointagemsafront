import axios from '../axios/axios';

export const sortieService = {
 createSortie,
 getAllDepointage,
 getAllDepointageToday
  
};
function createSortie(sortie) {
  
  return axios.post('/depointage/depointer', sortie).then(handleRegisterResponse)
    .then(sortie => sortie);
}
function getAllDepointage() {
    return axios.get('/depointage/getAllDepointage').then(handleRegisterResponse)
      .then(depointages => depointages);
  }
  function getAllDepointageToday() {
    return axios.get('/depointage/getAllDepointageToday').then(handleRegisterResponse)
      .then(depointages => depointages);
  }
  
//   function getCuveByIdCuve(idCuve){
//     return axios.get('/cuve/getCuveByIdCuve/' + idCuve).then(handleRegisterResponse)
//       .then(cuve => cuve);
//   }
//   function getCuveById(cuveId){
//     return axios.get('/cuve/getCuveById/' + cuveId).then(handleRegisterResponse)
//       .then(cuve => cuve);
//   }
//   function getCuveByCuveName(cuveName) {
//     return axios.get('/cuve/getCuveByCuveName/'+ cuveName).then(handleRegisterResponse)
//       .then(cuve => cuve);
//   }
//   function deleteCuveByCuveName(cuveName) {
//     return axios.delete('/cuve/deleteCuveByCuveName/'+ cuveName).then(handleRegisterResponse)
//       .then(cuve => cuve);
//   }

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
