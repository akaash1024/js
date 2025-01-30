class Parent {
  greet() {
    console.log("Hello from the Parent class!");
  }
}

class Child extends Parent {
  // Overriding the `greet` method
  greet() {
    console.log("Hello from the Child class!");
  }
}

const child = new Child();
child.greet(); // Output: Hello from the Child class!
