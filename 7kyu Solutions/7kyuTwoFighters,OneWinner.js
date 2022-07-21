function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name;
    };
}
function declareWinner(fighter1, fighter2, firstAttacker) {
    if (firstAttacker === fighter1.name) {
        while (fighter1.health > 0 && fighter2.health > 0) {
            fighter2.health -= fighter1.damagePerAttack;
            fighter1.health -= fighter2.damagePerAttack;
            if (fighter1.health >= 0 || fighter2.health >= 0) {
                console.log(
                    `${fighter1.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health.`
                );
                console.log(
                    `${fighter2.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health.`
                );
            } else {
                console.log(
                    `${fighter1.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health and is dead. ${fighter1.name} wins.`
                );
                return fighter1.name;
            }
        }
    } else {
        while (fighter1.health > 0 && fighter2.health > 0) {
            fighter2.health -= fighter1.damagePerAttack;
            fighter1.health -= fighter2.damagePerAttack;
            if (fighter1.health > 0 || fighter2.health > 0) {
                console.log(
                    `${fighter2.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health.`
                );
                console.log(
                    `${fighter1.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health.`
                );
            } else {
                console.log(
                    `${fighter2.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health and is dead. ${fighter2.name} wins.`
                );
            }
        }
    }
    return fighter1.health > fighter2.health ? fighter1.name : fighter2.name;
}

console.log(
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
);
console.log(
    declareWinner(
        new Fighter("Lew", 10, 2),
        new Fighter("Harry", 5, 4),
        "Harry"
    )
);
console.log(
    declareWinner(
        new Fighter("Harald", 20, 5),
        new Fighter("Harry", 5, 4),
        "Harry"
    )
);
console.log(
    declareWinner(
        new Fighter("Jerry", 30, 3),
        new Fighter("Harald", 20, 5),
        "Jerry"
    )
);
