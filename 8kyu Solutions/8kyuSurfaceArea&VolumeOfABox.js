function getSize(width, height, depth) {
  return [
    2 * width * depth + 2 * width * height + 2 * depth * height,
    width * height * depth,
  ];
}

console.log(getSize(4, 2, 6));
