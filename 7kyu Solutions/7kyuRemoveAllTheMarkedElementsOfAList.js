Array.prototype.remove_ = function(integer_list, values_list){
    for(let i = 0; i < values_list.length; i++){
    integer_list = integer_list.filter(num=> num != values_list[i])
  }
  return integer_list
}


console.log(Array.prototype.remove_([1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3]));
console.log(Array.prototype.remove_([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2]));
console.log(Array.prototype.remove_([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3]));