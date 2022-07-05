function anyArrows(arrows) {
    // arrow it
    return arrows.some((obj) => !obj.damaged);
}

console.log(anyArrows([]));
console.log(
    anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }])
);
console.log(anyArrows([{ range: 10, damaged: true }, { damaged: true }]));
