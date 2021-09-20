
function clearCookies( wildcardDomain=false, primaryDomain=true, path=null ){
  document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

export {clearCookies}
