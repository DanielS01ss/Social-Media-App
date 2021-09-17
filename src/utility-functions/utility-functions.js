
function clearCookies( wildcardDomain=false, primaryDomain=true, path=null ){
  document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}
// const clearCookies = ()=>{
//   var allCookies = document.cookie.split(';');
//   console.log(allCookies);
//
//             // The "expire" attribute of every cookie is
//             // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
//           /*  for (var i = 0; i < allCookies.length; i++)
//                 document.cookie = allCookies[i] + "=;expires="
//                 + new Date(0).toUTCString();*/
//
// }

export {clearCookies}
