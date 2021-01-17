import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const createPhoneNumber = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const getPhoneNumberPersons = () => {
    return axios.get(baseUrl).then(response =>
     response.data);
};

const updatePhoneNumber = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data).catch(error => {
        console.log(error);
    })
}

const deletePhoneNumber = (id) => {
    return axios
    .delete(`${baseUrl}/${id}`)
    .then(response => response.status);
}
   
export default { createPhoneNumber, getPhoneNumberPersons, deletePhoneNumber, updatePhoneNumber };
