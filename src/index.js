class A {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}


const a = new A('han')

console.log(a.getName())