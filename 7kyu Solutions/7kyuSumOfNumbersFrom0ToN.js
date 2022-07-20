let SequenceSum = {
    showSequence: function (count) {
        if (count == 0) return "0=0";
        if (count < 0) return `${count}<0`;
        let str = "0";
        let total = 0;
        for (let i = 1; i <= count; i++) {
            str += `+${i}`;
            total += i;
        }
        return `${str} = ${total}`;
    },
};

console.log(SequenceSum.showSequence(-15));
console.log(SequenceSum.showSequence(0));
console.log(SequenceSum.showSequence(6));
