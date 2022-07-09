
function isToday(date) {
    let today = new Date();
    return today.getMonth() + today.getDate() + today.getYear() ===
        date.getMonth() + date.getDate() + date.getYear()
        ? true
        : false;
}

console.log(isToday(new Date()));
