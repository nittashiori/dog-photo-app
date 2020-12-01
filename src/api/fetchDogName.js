import axios from 'axios'

export const fetchDogName = axios
  .get('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.data.message)
