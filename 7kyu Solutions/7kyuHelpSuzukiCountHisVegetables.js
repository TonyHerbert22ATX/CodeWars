let s1 =
    "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage tofu";

let s2 = `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber 
 mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber
 onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper
 onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
 potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip 
 mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`;

function countVegetables(string) {
    let z = [];
    let arr1 = string
        .replace(/[\n+]/g, "")
        .replace(/\s+/g, " ")
        .split(" ")
        .sort()
        .filter((x) => x !== "chopsticks");
    let item = arr1[0];
    for (let i = 0, count = 0; i <= arr1.length; i++, count++) {
        if (arr1[i] !== item) {
            z.push([count, item]);
            item = arr1[i];
            count = 0;
        }
    }

    // let potato = arr1.filter((x) => x === "potato");
    // let potato2 = [potato.length, "potato"];
    // z.push(potato2);
    // let tofu = arr1.filter((x) => x === "tofu");
    // let tofu2 = [tofu.length, "tofu"];
    // z.push(tofu2);
    // let cucumber = arr1.filter((x) => x === "cucumber");
    // let cucumber2 = [cucumber.length, "cucumber"];
    // z.push(cucumber2);
    // let cabbage = arr1.filter((x) => x === "cabbage");
    // let cabbage2 = [cabbage.length, "cabbage"];
    // z.push(cabbage2);
    // let mushroom = arr1.filter((x) => x === "mushroom");
    // let mushroom2 = [mushroom.length, "mushroom"];
    // z.push(mushroom2);
    // let onion = arr1.filter((x) => x === "onion");
    // let onion2 = [onion.length, "onion"];
    // z.push(onion2);
    // let turnip = arr1.filter((x) => x === "turnip");
    // let turnip2 = [turnip.length, "turnip"];
    // z.push(turnip2);
    // let carrot = arr1.filter((x) => x === "carrot");
    // let carrot2 = [carrot.length, "carrot"];
    // z.push(carrot2);
    // let celery = arr1.filter((x) => x === "celery");
    // let celery2 = [celery.length, "celery"];
    // z.push(celery2);
    // let pepper = arr1.filter((x) => x === "pepper");
    // let pepper2 = [pepper.length, "pepper"];
    // z.push(pepper2);

    let sorted = z.sort((a, z) => {
        if (a[0] > z[0]) {
            return -1;
        } else if (a[0] < z[0]) {
            return 1;
        }
        if (a[1] > z[1]) {
            return -1;
        } else if (a[1] < z[1]) {
            return 1;
        }
        return 0;
    });
    return sorted;
}

console.log(countVegetables(s1));
// console.log(countVegetables(s2));

function countVegetables(string) {
    let z = [];
    let arr1 = string
        .replace(/[\n+]/g, "")
        .replace(/\s+/g, " ")
        .split(" ")
        .sort()
        .filter((x) => x !== "chopsticks");
    let item = arr1[0];
    for (let i = 0, count = 0; i <= arr1.length; i++, count++) {
        if (arr1[i] !== item) {
            z.push([count, item]);
            item = arr1[i];
            count = 0;
        }
    }
    let sorted = z.sort((a, z) => {
        if (a[0] > z[0]) {
            return -1;
        } else if (a[0] < z[0]) {
            return 1;
        }
        if (a[1] > z[1]) {
            return -1;
        } else if (a[1] < z[1]) {
            return 1;
        }
        return 0;
    });
    return sorted;
}
