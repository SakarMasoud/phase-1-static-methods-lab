class Formatter {
  static capitalize (text){
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  static sanitize(text){
    return text.replace(/[^A-Za-z0-9-' ]/g, "")
  }
  static titleize(text){
    let result = []
    let f, l, res;
    let array = text.split(" ")
    for (let i=0; i<array.length; i++)
    {
      if (array[i] != 'the' && array[i] != 'a' && array[i] != 'an' && array[i] != 'but' && array[i] != 'of' && array[i] != 'and' && array[i] !='for' && array[i] != 'at' && array[i] != 'by' && array[i] !='from'){
        f=array[i].charAt(0).toUpperCase()
        l = array[i].slice(1)
        res= f+l
        result.push(res)
      }else{
        if (i==0){
          f=array[i].charAt(0).toUpperCase()
          l = array[i].slice(1)
          res= f+l
          result.push(res)
        }else{
          result.push(array[i])
        }
      }
    }
    return result.join(" ");
  }
}

