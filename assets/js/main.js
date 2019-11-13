class Test {
  x = 34;
  getX = () => {
    return this.x;
  }
}

let x = new Test;

console.log(x.getX());
