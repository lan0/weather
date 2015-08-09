export default function attachParams(url, params) {
  if (url.indexOf('?') === -1 && url.indexOf('&') === -1) {
    url += '?';
  } else {
    url += '&';
  }
  let chunks = [];
  for (let param in params) {
    chunks.push(param + '=' + params[param]);
  }
  chunks = chunks.join('&');
  return url + chunks;
}