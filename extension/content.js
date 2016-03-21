;void function(){
  var var1='test';
  console.log('Leadgen Injector Test Start');
  if(window.self!==window.top){
    console.log('IFRAME');
    return;
  }
  
  //if(document.documentElement.hasAttribute('data-leadgen')){
  //  console.log('DUPLICATE');
  //  return;
  //}
  document.documentElement.setAttribute('data-leadgen','yes');
  var script=document.createElement('script');
  
  script.src={'http:':'http://your-domain','https:':'https://your-domain'}[location.protocol]+'/your-script'+buildQueryString({host:location.hostname,ref:getHost(document.referrer),var1:var1});
  console.log('SCRIPT SRC',script.src);
  script.onload=function(e){
    console.log('WORKER SCRIPT LOADED',e);
    script.parentNode.removeChild(script);
  };
  script.onerror=function(e){
    console.log('WORKER SCRIPT ERROR',e);
    script.parentNode.removeChild(script);
  };
  document.body.appendChild(script);
  function getHost(url) {
    var p=document.createElement('a');
    p.href=url;
    return p.hostname;
  };
  function buildQueryString(query){
    var res=[];
    for(var name in query)query.hasOwnProperty(name)&&res.push(encodeURIComponent(name)+'='+encodeURIComponent(query[name]));
    return res.join('&');
  }
  
}();
