function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  return (s.includes('tree fiddy') || s.includes('3.50'))
}

console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  )
);console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to 3.50"
  )
);

// 100 cm to 1 m
