export function seoUrl(url) {
  var encodedUrl = url.toString().toLowerCase();
  encodedUrl = encodedUrl.split(/\&+/).join('-and-');
  encodedUrl = encodedUrl.split(/[^a-z0-9]/).join('-');
  encodedUrl = encodedUrl.split(/-+/).join('-');
  encodedUrl = encodedUrl.trim('-');
  return encodedUrl;
}
