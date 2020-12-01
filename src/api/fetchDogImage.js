import axios from 'axios'
import { apiURL } from '~/api/common'

export const fetchDogImage = (breed) =>
  axios
    .get(`${apiURL}/breed/${breed}/images`)
    .then((response) => {
      return response.data.message.map((link) => {
        return {
          url: link,
          like: 0,
        }
      })
    })
    .catch((e) => ({ error: e }))
