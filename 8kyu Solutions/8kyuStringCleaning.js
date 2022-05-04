function stringClean(s) {
  return s.replace(/[0-9]/g, '')
}


console.log(stringClean("123456789"));
console.log(stringClean("(E3at m2e2!!)"));
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"));
console.log(stringClean("! !"));