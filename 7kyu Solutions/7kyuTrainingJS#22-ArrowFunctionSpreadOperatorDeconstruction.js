let shuffleIt = (arr, ...swap) => {
    for (let i = 0; i < swap.length; i++) {
        let [a, b] = [swap[i][0], swap[i][1]];
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    return arr;
};
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));
