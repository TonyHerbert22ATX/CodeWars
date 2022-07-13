function nbDig(n, d) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push((i ** 2).toString());
    }
    return d === 0
        ? arr
              .map((x) => {
                  if (x.split("").includes(String(d))) {
                      return x;
                  } else {
                      return false;
                  }
              })
              .filter((x) => x != false)
              .join("")
              .split("")
              .filter((x) => +x === d).length + 1
        : arr
              .map((x) => {
                  if (x.split("").includes(String(d))) {
                      return x;
                  } else {
                      return false;
                  }
              })
              .filter((x) => x != false)
              .join("")
              .split("")
              .filter((x) => +x === d).length;
}

// console.log(nbDig(10, 1));
// console.log(nbDig(25, 1));
console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));
console.log(nbDig(7863, 0));
