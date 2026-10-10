// Void function
// step 1: Declare the function
function login() {
    console.log("welcome to the system");
};
// step 2: Call the function
login();
login()


// function with parameters
function logout(user){
    console.log("goodbye " + user + " see you later");
}
logout  ("flowers");
logout("flowers")
logout("flowers")

function gradeExam(student, correctItem, points){
    let totalPoints = correctItem * points;
    console.log(`${student} grade of the exam is ${totalPoints}`);
};

gradeExam("flowe", 10, 5);

//function with return

function add(num1, num2){
    let total = num1 + num2;
    return total;
};

let x = add(10,12);
console.log("The result is " + x);



