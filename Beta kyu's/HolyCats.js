function holycats(input) {
    return input.filter(cats => cats != 'wicked' && cats != 'normal' )
}

let input = ["wicked", "normal", `^(~_~)^`, `"(^_^)"`, `*(^_^)*`];
console.log(holycats(input));
