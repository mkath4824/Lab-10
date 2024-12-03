//QUESTION 1
function greetUser(usernamename){
    document.getElementById("output").innerText = 'Hello, ${username}!';
}
greetUser('Harry')

//QUESTION 2
function changeMessage(){
    document.getElementById('message').innerText="Hello, World!";
}


//QUESTION 3
function addNumber(){
    const num1 = parseFloat (document.getElementById('num1').value);
    const num2 = parseFloat (document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById("result").innerText = `Sum; ${sum}`;
}

//QUESTION 4
function updateTitle(){
const newTitle = document.getElementById("inputField").value;
document.getElementById("title"),innerText = newTitle;
}
     
//QUESTION 5
function concatenateText(){
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;
    document.getElementById("combinedText").innerText = `${text1} ${text2}`;
}


//QUESTION 6
document.getElementById("changeBgBtn").addEventListener("click", function(){
    document.getElementById("colorBox").style.backgroundColor = "blue";

});
