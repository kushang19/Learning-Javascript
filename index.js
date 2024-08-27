
//  var, let and const with Hoisting

console.log("Hello, feels good to work in node enviornment");

const accountId = 9899;
let accountEmail = "chai@gmail.com"
var accountName = "chai aur code";

accountCity = "Mumbai"

// console.table([accountId, accountEmail, accountName, accountCity]);

// console.log(addOne(6));
function addOne(num){
    return num + 1;
};


// console.log(addTwo(8));
const addTwo = function(num){
    return num + 2;
};

// let date = new Date(2024,11,19);
let date = new Date("12-19-2024");

// console.log(date.toDateString());

console.log(date.getDay());

console.log(date.toLocaleString('default',{
    // weekday: "narrow",
    // weekday: "short",
    weekday: "long",
}));



let timeStamp = Date.now();

// console.log(timeStamp);

// console.log(Date.now()); //mili sec
// console.log(Math.floor(Date.now()/1000)); //sec







