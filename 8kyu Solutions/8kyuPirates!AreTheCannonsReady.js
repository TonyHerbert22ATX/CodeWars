const cannonsReady = (gunners) => {
    return Object.values(gunners).includes('nay')?'Shiver me timbers!': 'Fire!'
};

let an = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
let bn = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

console.log(cannonsReady(an));
console.log(cannonsReady(bn));
