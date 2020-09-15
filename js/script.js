
let rainfall = prompt("How many inches of rain fell?");
let rainfallInches = "*";
console.log("Rain:" + rainfallInches.repeat(rainfall));

let originalYield=50; 
let answer = prompt ("Did you use fertilizer?");
let brand = "";
if (answer === "yes") {
   brand = prompt ("Did you use premium or regular?");
}
 
if (rainfall < 10){
    originalYield = (50 * .8);    
}

if (rainfall >= 20) {
    originalYield = (50 * .9);
}

if (answer === "no") {
    console.log ("The yield should be " + originalYield + " bushels per acre");
}   else if (brand === "premium") {
    console.log ("The yield should be " + (originalYield * 1.15) + " bushels per acre");
}   else {
    console.log ("The yield should be " + (originalYield * 1.1) + " bushels per acre");
}


