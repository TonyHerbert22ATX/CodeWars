// ! THIS IS NOT A 8KYU.... THIS IS ABOUT A 6KYU
const DISTANCE = {
    m: 1,
    cm: 0.01,
    mm: 0.001,
    μm: 0.000001,
    ft: 0.3048,
};

const MASS = {
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    μg: 0.000000001,
    lb: 0.453592,
};

const G = 6.67 * 10 ** -11;

solution = (arr_val, arr_unit) => {
    return (
        (G * arr_val[0] * MASS[arr_unit[0]] * arr_val[1] * MASS[arr_unit[1]]) /
        (arr_val[2] * DISTANCE[arr_unit[2]]) ** 2
    );
};

console.log(solution([1000, 1000, 100], [("g", "kg", "m")]));
console.log(solution([1000, 1000, 100], [("kg", "kg", "m")]));
console.log(solution([1000, 1000, 100], [("kg", "kg", "cm")]));
