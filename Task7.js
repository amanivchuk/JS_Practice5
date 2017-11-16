var salaries = {
    John : 100,
    Bill : 300,
    Mike : 250
};
var salaries2 = {
    Cris : 150,
    Brain : 600,
    Jogn : 300,
    Steve : 400,
    Bill : 50
};

function sumSalary(obj){
    var sum = 0;
    for(var key in obj){
        sum += obj[key];
    }
    return sum;
}

console.log(sumSalary(salaries));
console.log(sumSalary(salaries2));