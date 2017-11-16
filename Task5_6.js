var John = {
  name : "John",
  age : 28,
  experience : 1,
  language : ["Java", "JavaScript", "SQL"]
};
var Bill = {
    name : "Bill",
    age : 30,
    experience : 5,
    language : ["HTML", "CSS", "JavaScript"]
};
var Mike = {
    name : "Mike",
    age : 32,
    experience : 4,
    language : ["Python", "SQL"]
};

console.log(Mike.name);
for(var i = 0; i < Mike.language.length; i++){
    console.log(Mike.language[i]);
}



function isEmpty(param, obj) {
    var res = param in obj;
    return res;
}

console.log(isEmpty("weight", Mike));
console.log(isEmpty("name", Mike));