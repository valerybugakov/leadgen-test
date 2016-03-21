const setCookie = () => {
  var cookieName = 'COOKIE_NAME';
  var cookieValue = 'true';
  var myDate = new Date();
  myDate.setMonth(myDate.getMonth() + 12);
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate
    + ";domain=.example.com;path=/";
}

//