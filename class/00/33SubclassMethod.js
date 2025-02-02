class Parent {
  constructor() {
    this.role = "Parent";
    this.age = 50;
  }
}

class Child extends Parent {
  constructor() {
    super(); // Call the parent class's constructor
    this.role = "Child"; // Override the `role` property
    this.name = "aksh";
  }
}

const child = new Child();
console.log(child.role); // Output: Child
console.log(child.name); // Output: Child
console.log(child.age); // Output: Child
