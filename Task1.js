var user = {
  name : "Cris",
  surname : "Simons"
};
console.log(user.name);
user.name = "Brain";
console.log(user.name);
delete user.name;
console.log("name" in user);