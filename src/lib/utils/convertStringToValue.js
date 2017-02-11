export default function (str, separator) {
  if (str.indexOf(separator) > -1) {
    const res = {};
    str.split(separator).forEach((val) => {
      const t = val.split('=');
      res[t[0]] = t[1] || undefined;
    });
    return res;
  }
  return str;
}
