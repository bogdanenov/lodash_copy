import * as lodash from './lodash/lodash'

const chunkArray : Array<any> = lodash.chunk([1,2,3,4],3);
const compactArray : Array<any> = lodash.compact([1,2,0, false, NaN, null, 'a', '', 3])

console.log(chunkArray);
console.log(compactArray);