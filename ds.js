import newAxios from './axios.js'
import localStorage from './localStorage.js'

let ds = {
  ajax: newAxios,
  ls: localStorage
}

module.exports = ds
