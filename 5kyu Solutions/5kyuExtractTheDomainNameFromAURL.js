function domainName(url) {
    return url.split('http://').join('').split('https://').join('').split('www.').join('').split('.')[0]
}


console.log(domainName("http://google.com"));
console.log(domainName("http://www.google.com"));
console.log(domainName("www.zombite-bites.ru"));
console.log(domainName("www.google.co.jp"));
console.log(domainName("https://youtube.com"));