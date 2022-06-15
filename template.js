function findShort(s) {
    return s.split(" ").reduce((a, z) => (a.length < z.length ? a : z)).length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
