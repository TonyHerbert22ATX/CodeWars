function domainName(url){
  return url.replace('https\://', '').replace('http\://', '').replace('www.', '').replace('com','').split('.')[0]
}


console.log(domainName('http://www.cnet.com'))
console.log(domainName('https://www.cnet.com/carbonfive/raygun'))