import axios from 'axios'
import _ from 'lodash'

let config = {
  host: 'http://localhost:3000'
}

var newAxios = function (){

}

newAxios.prototype.get = function(url, params, cb){
  if (_.isFunction(params)) {
    this.send(url, 'get', {}, {}, params)
  }else{
    this.send(url, 'get', {}, params, cb)
  }
}

newAxios.prototype.send = function(url, method, params, data, cb){
  params.access_token = "tbdWMzIADmsqgBpXISxHLAYF7SU9Z8Z6bzWvAFHEusl3DCAwSG1wxnG55QK6yY8D";
  axios({
    method: method,
    url: config.host + url,
    params: params,
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    },
    timeout: 1000,
    auth: {
      username: 'janedoe',
      password: 's00pers3cret'
    }
  })
  .then(function (response) {
    cb(response.data)
  })
  .catch(function (error) {
    alert(JSON.stringify(error))
  })
}

module.exports = new newAxios()
