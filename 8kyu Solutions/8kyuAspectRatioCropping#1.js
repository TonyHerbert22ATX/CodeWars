function aspectRatio(x, y) {
  return [Math.ceil(y*16/9),y]
}

console.log(aspectRatio(640, 480));
console.log(aspectRatio(960, 720));
console.log(aspectRatio(1440, 1080));
console.log(aspectRatio(2603, 2749));
