var replaceDots = function (str) {
    return str.split('.').join('-')
};


console.log(replaceDots('one.two.three'));