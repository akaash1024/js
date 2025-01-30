class Parent {
  greet() {
      console.log("Hello from the Parent class!");
  }
}

class Child extends Parent {
  greet() {
      super.greet(); // Call the parent class's method
      console.log("And hello from the Child class!");
  }
}

const child = new Child();
child.greet();
// Output:
// Hello from the Parent class!
// And hello from the Child class!
