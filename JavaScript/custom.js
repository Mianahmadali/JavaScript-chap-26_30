const output = (html) => {
    document.getElementById("output").innerHTML = html;
}
const input= () => {
    document.getElementById("output").value;
}
function roundANumber (){
    let number = document.getElementById("input").value;
    if (!number) {
        alert("Please enter a floating point number ");
        return;
        
    }
    let roundNumber = Math.round(number)
    let html = "<h1 class = 'text-primarytheme mb-0' >" + roundNumber + "</h1>"
    document.getElementById("output").innerHTML = html;


}
function ceilaNumber (){
    let number = document.getElementById("input").value;
    if (!number) {
        alert("Please enter a floating point number ");
        return;
        
    }
    let ceilNumber = Math.ceil(number)
    let html = "<h1 class = 'text-primarytheme mb-0' >" + ceilNumber + "</h1>"
    // document.getElementById("output").innerHTML = html;
    output(html)


}
function floorANumber (){
    let number = document.getElementById("input").value;
    if (!number) {
        alert("Please enter a floating point number ");
        return;
        
    }
    let floorNumber = Math.floor(number)
    let html = "<h1 class = 'text-primarytheme mb-0' >" + floorNumber + "</h1>"
    document.getElementById("output").innerHTML = html;


}
function generateARandomNumber(){
    let randomNumber = Math.random()
    let html = "<h1 class = 'text-primarytheme mb-0' >" + randomNumber + "</h1>"
    document.getElementById("output").innerHTML = html;


}
function throwADice(){
    let randomNumber = Math.random()
    randomNumber = (randomNumber * 6) + 1
    let dice = Math.floor(randomNumber)
    let html = "<h1 class = 'text-primarytheme mb-0' >" + dice + "</h1> <span>Generating a number between 1 and 6 </span>"
    document.getElementById("output").innerHTML = html;


}
function generateAStrongPassword(){
    let randomString = ""
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
    let number = "123456789"
    let symbols = "!@#$%^&*)(_=<,>?/;:~"
    let possibleString = upperCaseAlphabets + lowerCaseAlphabets + number + symbols
    let limit = 16;
    for (let i = 0 ; i < limit; i++ ) {
        let randomNumber = Math.random()
        randomString += possibleString.charAt(Math.floor(randomNumber * possibleString.length))
        
        
    }
    
    let html = "<h1 class = 'text-primarytheme mb-0' >" + randomString + "</h1> <span>Generating Random Password at limit </span> " +limit+ " ;"
    document.getElementById("output").innerHTML = html;
}
function convertingString() {
    let string = document.getElementById("input").value;
    if (!string) {
        alert("Please Enter a number")
        return;
        
    }
    let int = parseInt(string)
    let float = parseFloat(string)
    let number = Number(string)
    let html =  "<h1 class = 'text-primarytheme mb-0' >" + int + "</h1> " +typeof int +  "<h1 class = 'text-primarytheme mb-0' >" + float + "</h1> " + typeof float + "<h1 class = 'text-primarytheme mb-0' >" + number  + "</h1>" + typeof number + ","
    document.getElementById("output").innerHTML = html;

    
}
function controllingLength (){
    let num ="1234.98765"
    num = Number(num)
    num = num.toFixed(3)
    num = Number(num)
    let html = "<h1 class = 'text-primarytheme mb-0' >" + num+    "  </h1>"
    document.getElementById("output").innerHTML = html;
}

function calculateGst() {
    let cost = document.getElementById("input").value;

    // Check if the cost input is empty or invalid
    if (!cost || isNaN(cost)) {
        alert("Please enter a valid cost.");
        return;
    }

    cost = Number(cost); // Convert input value to a number
    let tax = cost * (17 / 100); // Calculate the tax
    let totalCost = Math.round(cost + tax); // Calculate and round the total cost

    // Display the results in the output element
    let outputHtml = `
        Your bill is <span style="color: green;" class="text-primarytheme mb-0">${cost}</span>
        <br> Tax 17% = <span style="color: red;">${tax.toFixed(2)}</span>
        <br> Total amount including tax is <span style="color: blue;">${totalCost}</span>
    `;
    document.getElementById("output").innerHTML = outputHtml;
}



































const clearInput = () => {
    document.getElementById("input").value = ""; // Clear the input field
}

const getInputValue = () => {
    return document.getElementById("input").value; // Return the current value of the input field
}
function clearOutput(){
    document.getElementById("output").innerHTML = "";
}