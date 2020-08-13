export const chunk = (arr : Array<any>, size : number = 1) : Array<any>  => {
  if (size < 1) {
    return [];
  }
  if(!arr) {
    return undefined
  }
  const resultArray : Array<any> = [];
  for(let i = 0; i < arr.length; i += size) {
    resultArray.push(arr.slice(i, i+size));
  }
  return resultArray;
}

export const compact = (arr: Array<any>) => {
  return arr.filter(value => !!value != false)
}