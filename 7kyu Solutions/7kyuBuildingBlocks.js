class Block{
  constructor(data){
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]
  }
  getWidth(){
    return this.width
  }
    getLength(){
    return this.length
  }
    getHeight(){
    return this.height
  }
    getVolume(){
    return this.width * this.height * this.length
  }
    getSurfaceArea(){
    return 2*(this.length*this.width) + 2*(this.length*this.height) + 2*(this.width*this.height)
  }
}

let block = new Block([2,4,6])
console.log(block.getWidth(), '2')
console.log(block.getLength(), '4')
console.log(block.getHeight(), '6')
console.log(block.getVolume(), '48')
console.log(block.getSurfaceArea(), '88')