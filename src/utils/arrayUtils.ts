export function groupBy<T>(objectArray: T[], property: keyof T) {
  return objectArray.reduce(function (acc, obj) {
    let key = String(obj[property])
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {} as { [key: string]: T[] })
}
