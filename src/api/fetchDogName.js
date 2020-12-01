import axios from 'axios'
import { apiURL } from '~/api/common'

export const fetchDogName = axios
  .get(`${apiURL}/breeds/list/all`)
  .then((response) => response.data.message)
