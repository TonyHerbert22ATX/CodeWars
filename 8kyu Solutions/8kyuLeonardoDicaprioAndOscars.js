function leo(oscar) {
    return oscar === 88
        ? "Leo finally won the oscar! Leo is happy"
        : oscar === 86
        ? "Not even for Wolf of wallstreet?!"
        : oscar < 88
        ? "When will you give Leo an Oscar?"
        : "Leo got one already!";
}

console.log(leo(89));
console.log(leo(88));
console.log(leo(87));
console.log(leo(86));
