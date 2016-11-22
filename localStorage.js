import _ from 'lodash'

var localStorage = {
  get: function (key) {
    if (!_.isString(key)) {
      return 'key必须是String'
    }
    var val = window.localStorage.getItem(key)
    if (_.isObject(val)) {
      try {
        return JSON.parse(val)
      } catch (e) {
        return val
      }
    } else {
      return val
    }
  },
  set: function (key, val) {
    if (!_.isString(key)) {
      return {res: false, msg: 'key必须是String'}
    }
    if (_.isObject(val)) {
      try {
        val = JSON.parse(val)
        window.localStorage.setItem(key, val)
        return {res: true}
      } catch (e) {
        return {res: false}
      }
    } else if(_.isString(val)){
      window.localStorage.setItem(key, val)
      return {res: true}
    } else {
      return {res: false, msg: 'val类型不支持'}
    }
  }
}

module.exports = localStorage
