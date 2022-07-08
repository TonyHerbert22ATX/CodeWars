function bonusTime(salary, bonus) {
    return (bonus)?`\u00A3${salary * 10}`:`\u00A3${salary}`
}

console.log(bonusTime(10000, true));
console.log(bonusTime(10000, false));
