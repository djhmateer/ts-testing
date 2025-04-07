console.log("Hello, world!");

// eslint warning: bar is assigned a value but never used
const bar = 1;

// tsc squiggly error: cannot assign bar to 2 because it is a constant
bar = 2

const user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor",
};
//  tsc squiggly: property name is not defined on the user object
// console.log(user.name)

console.log(user.firstName)
