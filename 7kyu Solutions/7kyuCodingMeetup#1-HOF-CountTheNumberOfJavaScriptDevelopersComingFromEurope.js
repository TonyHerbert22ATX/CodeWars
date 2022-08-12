const list1 = [
    {
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "JavaScript",
    },
    {
        firstName: "Maia",
        lastName: "S.",
        country: "Tahiti",
        continent: "Oceania",
        age: 28,
        language: "JavaScript",
    },
    {
        firstName: "Shufen",
        lastName: "L.",
        country: "Taiwan",
        continent: "Asia",
        age: 35,
        language: "HTML",
    },
    {
        firstName: "Sumayah",
        lastName: "M.",
        country: "Tajikistan",
        continent: "Europe",
        age: 30,
        language: "CSS",
    },
];

function countDevelopers(list) {
    return list.filter(x => x.continent === 'Europe' && x.language === 'JavaScript').length
}


// ! This was my first attempt. It works but was just very long. 
// function countDevelopers(list) {
//     return list
//         .map((obj) => {
//             for (let prop in obj) {
//                 if (obj[prop] === "Europe") {
//                     return obj;
//                 }
//             }
//         })
//         .map((obj) => {
//             for (let prop in obj) {
//                 if (obj[prop] === "JavaScript") {
//                     return obj;
//                 }
//             }
//         })
//         .filter((x) => {
//             if (x !== undefined) {
//                 return x;
//             }
//         }).length;
// }

console.log(countDevelopers(list1));
