import axios from 'axios'

export const fetchDog = () =>
  axios
    .get('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.data.message)
