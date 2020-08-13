import * as lodash from './lodash/lodash'

describe("Lodash: chunk()",() => {
  test('Chunk should be return splited array', () => {
    expect(lodash.chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]])
    expect(lodash.chunk([1,2,3,4], 3)).toEqual([[1,2,3],[4]])
    expect(lodash.chunk([1,2,3,4], 1)).toEqual([[1],[2],[3],[4]])
    expect(lodash.chunk([1,2,3,4])).toEqual([[1],[2],[3],[4]])
  })
  
  test('Chunk should be return empty array', () => {
    expect(lodash.chunk([], 2)).toEqual([])
    expect(lodash.chunk(undefined)).toBeUndefined()
  })
})

describe("Lodash: compact()",() => {
  test('Compact should delete all falsy elements of array', () => {
    const array = [1,2,0, false, NaN, null, 'a', '', 3]
    const result = [1,2,'a',3]
    expect(lodash.compact(array)).toStrictEqual(result)
  })
  
  test('Compact should not contain falsy elements', () => {
    const array = [1,2,0, false, NaN, null, 'a', '', 3];
    const result = [1,2,'a',3];
    expect(lodash.compact(array)).not.toContain(false)
    expect(lodash.compact(array)).not.toContain('')
    expect(lodash.compact(array)).not.toContain(0)
    expect(lodash.compact(array)).not.toContain(NaN)
    expect(lodash.compact(array)).not.toContain(null)
  })
})