let car_name_question="What is the name of the car?";
let car_production_year_question = "Add the year of the car production";
const date_function = new Date();
let year = date_function.getFullYear(); 
let price1 = "The price of the car is 15000";
let price2 = "The price of the car is 20000";
let price3 = "The price of the car is 25000";
let result;
let result2;
let result3;
let result4;
let result5;

// First car details

let car_name = prompt(car_name_question);
let car_production_year = prompt(car_production_year_question);

if(car_production_year < (year - 10)){
    result = price1;
    alert(result);
}
else if((car_production_year > (year-10)) && (car_production_year < (year - 5)) ){
    result = price2;
    alert(result);
}

else if((car_production_year > (year-5)) && (car_production_year <= year )){
    result = price3;
    alert(result);
}
else{
    alert("Choose the correct production year!")
}
alert("The first car name is " + car_name + " ,the production year is " + car_production_year + " and " + result );

// Second car details

let car_name2= prompt(car_name_question);
let car_production_year2 = prompt(car_production_year_question);

if(car_production_year2 < (year - 10)){
    result2 = price1;
    alert(result2);
}
else if((car_production_year2 > (year-10)) && (car_production_year2 < (year - 5)) ){
    result2 = price2;
    alert(result2);
}

else if((car_production_year2 > (year-5)) && (car_production_year2 <= year )){
    result2 = price3;
    alert(result2);
}
else{
    alert("Choose the correct production year!")
}
alert("The second car name is " + car_name2 + " ,the production year is " + car_production_year2 + " and " + result2 );

// Third car details

let car_name3 = prompt(car_name_question);
let car_production_year3 = prompt(car_production_year_question);

if(car_production_year3 < (year - 10)){
    result3 = price1;
    alert(result3);
}
else if((car_production_year3 > (year-10)) && (car_production_year3 < (year - 5)) ){
    result3 = price2;
    alert(result3);
}

else if((car_production_year3 > (year-5)) && (car_production_year3 <= year )){
    result3 = price3;
    alert(result3);
}
else{
    alert("Choose the correct production year!")
}
alert("The third car name is " + car_name3 + " ,the production year is " + car_production_year3 + " and " + result3);

// Fourth car details

let car_name4 = prompt(car_name_question);
let car_production_year4 = prompt(car_production_year_question);

if(car_production_year4 < (year - 10)){
    result4 = price1;
    alert(result4);
}
else if((car_production_year4 > (year-10)) && (car_production_year4 < (year - 5)) ){
    result4 = price2;
    alert(result4);
}

else if((car_production_year4 > (year-5)) && (car_production_year4 <= year )){
    result4 = price3;
    alert(result4);
}
else{
    alert("Choose the correct production year!")
}
alert("The fourth car name is " + car_name4 + " ,the production year is " + car_production_year4 + " and " + result4);

// Fifth car details

let car_name5 = prompt(car_name_question);
let car_production_year5 = prompt(car_production_year_question);

if(car_production_year5 < (year - 10)){
    result5 = price1;
    alert(result5);
}
else if((car_production_year5 > (year-10)) && (car_production_year5 < (year - 5)) ){
    result5 = price2;
    alert(result5);
}

else if((car_production_year5 > (year-5)) && (car_production_year5 <= year )){
    result5 = price3;
    alert(result5);
}
else{
    alert("Choose the correct production year!")
}
alert("The fifth car name is " + car_name5 + " ,the production year is " + car_production_year5 + " and " + result5);

// Console section 

console.log("The first car name is " + car_name + 
    " ,the production year is " + car_production_year + " and " + result );

console.log("The second car name is " + car_name2 + 
    " ,the production year is " + car_production_year2 + " and " + result2 );

console.log("The third car name is " + car_name3 + 
    " ,the production year is " + car_production_year3 + " and " + result3 );

console.log("The fourth car name is " + car_name4 + 
    " ,the production year is " + car_production_year4 + " and " + result4 );

console.log("The fifth car name is " + car_name5 + 
    " ,the production year is " + car_production_year5 + " and " + result5 );