var x = document.getElementById("login");
var y = document.getElementById("signUp");
var z = document.getElementById("btn");

function signUp(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

// login & signup function

var userArray = [];

if(JSON.parse(sessionStorage.getItem('passingArray')) != null) {
    for(i = 0; i < JSON.parse(sessionStorage.getItem('passingArray')).length; i++) {
        userArray.push(JSON.parse(sessionStorage.getItem('passingArray'))[i]);
    };
};

console.log(userArray);

document.getElementById('enter').onclick = function (){authenticate()};

function authenticate(){
    var userName = document.getElementById('userName').value;
    var userPassword = document.getElementById('userPassword').value;

    if(userArray.length > 0){
        for(i= 0; i < userArray.length; i++){
            if((userName == userArray[i].userName) && (userPassword == userArray[i].userPassword)){
                alert("You're in!");
                document.getElementById('userName').value = '';
                document.getElementById('userPassword').value = '';
                break;
            }
            if(i == userArray, length - 1 || userArray.length == 0){
                console.log("working");
                troubleshoot(userName, userPassword);
            }
        }
    }  else {
        alert("No match found, Please click the Create Account link to Sign up a new aacount");
        document.getElementById('userName').value = "";
        document.getElementById('userPassword').value = "";
    }
};

function troubleshoot(userName, userPassword) {
    for(j = 0; j < userArray.length; j++){
        if(userName == userArray[j].userName){
            alert("Bad password");
            document.getElementById('userPassword').value = "";
            break;
        };
        if(j == userArray.length - 1 || userArray.length == 0) {
            alert("No match found. Please click the Sign Up Account to register a new account");
            document.getElementById('userName').value = "";
            document.getElementById('userPassword').value = "";
        };
    };
}