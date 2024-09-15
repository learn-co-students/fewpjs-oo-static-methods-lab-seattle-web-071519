class Formatter {
  //add static methods here
  static capitalize(string){
    return (string.slice(0,1).toUpperCase() + string.slice(1))
  }
  static sanitize(string){
    let arr = string.split('')
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-' "
    arr = arr.filter(function(char){
      return str.includes(char)
    })
    return arr.join('')
  }
  static titleize(string){
    string = this.capitalize(string)
    let arr = string.split(' ')
    let str = "the a an but of and for at by and from"
    for(let i = 0; i < arr.length; i+=1){
      if (!str.includes(arr[i])){
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
      }
    }
    return arr.join(' ')
  }
}