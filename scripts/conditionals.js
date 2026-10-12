//conditional
let result = 80;
if(result > 60){
    console.log("you win")
}


// if-else

    let  points = 19
    if(points > 60){
        console.log("yu win");

    }else{
        console.log("you lose")
    }


    let boiling = 20

    if(boiling > 101){
        cosole.log("boiling")
    }else{
        console.log("not boiling")
    }


    let age = 30;

    if(age < 13){
        console.log("you are a child");
    }else if(age < 21){
        console.log("you are a teenager");
    }else if(age < 64){
        console.log("you are a senor")
    }

    //challenge 2: 
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

let light = "green";
if(light == "red"){
    console.log("stop")
}else if(light == "yellow"){
        console.log("slow down");
    }else if(light == "green"){
        console.log("go");
    }


    // && and || operators
// && = AND -  both conditions must be true
// || = OR - at least one condition must be true

let hour = 20;

if(hour >=12 && hour<=16){
    CONSOLE.LOG("LUNCH TIME");
}

let isWeekend = false;
let isHoliday = true;

if(isWeekend || isHoliday){
    console.log("Restuarant is closed");
}else{
    console.log("Restuarant is open");
}

// if inside a function

function checkAge(age){
    if(age >= 18){
        return "can order drinks"; 
    }else{
        return "cannot drink";
    }
}

let message1 = checkAge(50);
console.log(message1);

let message2 = checkAge(15);
console.log(message2);


