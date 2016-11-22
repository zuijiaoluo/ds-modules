import axios from 'axios'
import _ from 'lodash'

import ls from './localStorage.js'

var newAxios = function (obj){
  this.host = obj.host
}

newAxios.prototype.get = function(url, params, cb){
  if (_.isFunction(params)) {
    cb = params
    params = {}
  }
  this.send({url: url, method: 'get', params: params}, cb)
}

newAxios.prototype.post = function(url, data, cb){
  this.send({url: url, method: 'post', data: data}, cb)
}

newAxios.prototype.put = function(url, data, cb){
  this.send({url: url, method: 'put', data: data}, cb)
}

newAxios.prototype.patch = function(url, data, cb){
  this.send({url: url, method: 'patch', data: data}, cb)
}

newAxios.prototype.delete = function(url, data, cb){
  if (_.isFunction(params)) {
    cb = params
    params = {}
  }
  this.send({url: url, method: 'delete', params: params}, cb)
}

newAxios.prototype.send = function(obj, cb){
  if (!obj.params) obj.params = {}
  obj.params.access_token = ls.get('access_token')
  axios({
    method: obj.method,
    url: this.host + obj.url,
    params: obj.params,
    data: obj.data,
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

module.exports = newAxios
