function printerError(s) {
    let l = s.length;
    let e = s.replace(/[A-M]/gi, "").length;
    return `${e}/${l}`;
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
console.log(
    printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
