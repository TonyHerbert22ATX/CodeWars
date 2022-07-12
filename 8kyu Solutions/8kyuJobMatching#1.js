function match(candidate, job) {
    if (!candidate.minSalary) throw Error;
    if (!job.maxSalary) throw Error;

    let total = candidate.minSalary - (candidate.minSalary / 10)

    return total<= job.maxSalary ? true : false;
}

let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 };

console.log(match(candidate1, job1));
console.log(match(candidate1, job2));

