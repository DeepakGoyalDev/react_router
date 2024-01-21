console.log("============ APPROACH-1 ===========");

let person = {
  firstName: "Deepak",
  lastName: "Goyal",

  getFullName: function () {
    console.log("Name: ", this.firstName + this.lastName);
  },

  greet() {
    console.log("Hello World");
  },
};

person.saySorry = function () {
  console.log("Sorry!!");
};

function sayThankYou() {
  console.log("Thank You!!");
}

person.sayThankYou = sayThankYou;


