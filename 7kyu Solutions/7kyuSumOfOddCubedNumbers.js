function cubeOdd(arr) {
    let arr2 = arr.map((x) => x ** 3);
    return arr2.includes(NaN)
        ? undefined
        : arr2
              .filter((x) => Math.abs(x) % 2 === 1)
              .reduce((total, number) => total + number, 0);
}

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([-3, -2, 2, 3]));
console.log(cubeOdd(["a", 12, 9, "z", 42]));
