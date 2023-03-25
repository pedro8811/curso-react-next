type MapStringsCallback = (item: string) => string

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    newArray.push(callbackfn(item))
  }

  return newArray
}

const abc = ['a', 'b', 'c', 'd', 'e']

const abcUpperCase = mapStrings(abc, item => item.toUpperCase())

console.log(abcUpperCase)
console.log(abc)
