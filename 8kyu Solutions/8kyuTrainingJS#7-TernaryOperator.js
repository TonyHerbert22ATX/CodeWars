function saleHotdogs(n) {
  return n >= 10 ? n * 90 : n < 10 && n >= 5 ? n * 95 : n * 100;
}

console.log(saleHotdogs(4));
