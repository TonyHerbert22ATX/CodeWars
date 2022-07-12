function squareArea(A) {
    // Calculate the circumference of A
    const circumference = A * 4;

    // Calculate the radius of A
    const radius = circumference / (Math.PI * 2);

    // Calculate the area of the square, rounded to 2 decimal places
    const area = Number((radius ** 2).toFixed(2));

    // Return the result
    return area;
}

console.log(squareArea(2));
console.log(squareArea(0));
console.log(squareArea(14.05));
