function sortGiftCode(code) {
    return [...code].sort((a,z)=> a.localeCompare(z)).join('');
}

console.log(sortGiftCode("abcdef"));
console.log(sortGiftCode("pqksuvy"));
