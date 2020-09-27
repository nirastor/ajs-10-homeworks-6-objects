export default function orderByProps(inputobj, usersort = []) {
  const obj = { ...inputobj };
  const resultSort = [];

  function packResultByKeys(arr) {
    while (arr.length) {
      const key = arr.shift();
      if (key in obj) {
        resultSort.push({ key, value: obj[key] });
        delete obj[key];
      }
    }
  }

  packResultByKeys(usersort);
  const otherKeys = Object.keys(obj);
  otherKeys.sort();
  packResultByKeys(otherKeys);

  return resultSort;
}
