export default function getUrlParam(name){
  var value = decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, ""])[1]);
  return (value !== 'null') ? value : false;
}