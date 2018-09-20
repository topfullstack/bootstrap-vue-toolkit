export default {
  titlize(val){
    return String(val).split(/\W/g).map(v => {
      return String(v).substr(0, 1).toUpperCase() + String(v).substr(1)
    }).join(' ')
  },
  get(obj, path, defaultValue = null){
    let ret = obj
    for (let key of String(path).split('.')) {
      try {
        ret = ret[key]
      } catch (e) {
        return defaultValue
      }
    }
    return ret
  }
}