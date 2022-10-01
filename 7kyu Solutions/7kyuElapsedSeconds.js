function elapsedSeconds(startDate, endDate) {
    return (endDate.getTime() - startDate.getTime()) / 1000;
}

const start = new Date(2013, 1, 1, 0, 0, 1);
const end = new Date(2013, 1, 1, 0, 0, 2);
const end2 = new Date(2013, 1, 1, 0, 0, 20);
const end3 = new Date(2013, 1, 1, 0, 1, 20);

console.log(elapsedSeconds(start, end, 1));
console.log(elapsedSeconds(start, end2, 19));
console.log(elapsedSeconds(start, end3, 79));
