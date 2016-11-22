import Axios from './axios.js'
import localStorage from './localStorage.js'

let ajax = new Axios({host: 'http://localhost:3000'})

let ds = {
  ajax: ajax,
  ls: localStorage
}

module.exports = ds
