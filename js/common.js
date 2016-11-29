// 随便写的代码
/* eslint-disable */
function xw(a, b) {
  var r = a + b
  return r
}

function getContextPath() {
  var strPath = window.document.location.pathname;
  return strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
}
