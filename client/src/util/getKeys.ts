const getKeys = <T extends Object>(obj: T): Array<keyof T> =>
  Object.keys(obj) as Array<keyof T>;
export default getKeys;
