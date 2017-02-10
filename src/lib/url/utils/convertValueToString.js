export default function (paramValue, separator) {
  if (paramValue && paramValue.constructor === Object) {
    const tmp = [];
    Object.keys(paramValue).forEach((k) => {
      const val = paramValue[k] === undefined ? '' : paramValue[k];
      tmp.push(`${k}=${val}`);
    });
    return tmp.join(separator);
  }
  return paramValue === undefined ? '' : paramValue;
}
