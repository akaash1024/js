class Parent {
  constructor() {
      this.role = "Parent";
  }
}

class Child extends Parent {
  constructor() {
      super(); // Call the parent class's constructor
      this.role = "Child"; // Override the `role` property
  }
}

const child = new Child();
console.log(child.role); // Output: Child
