const user = {
  name: "Akash",
  greet() {
    console.log(this); // ! {name: 'Akash', greet: ƒ}
  },
};
user.greet();
