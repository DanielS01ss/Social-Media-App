

const clearCookies = ()=>{
  document.cookie = "token=''; expires= Thu, 21 Aug 2014 20:00:00 UTC";
  document.cookie = "refreshToken=''; expires= Thu, 21 Aug 2014 20:00:00 UTC";
}

export {clearCookies}
