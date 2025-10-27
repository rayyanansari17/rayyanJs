// switch case 

/*
a switch statement is used to compare one value against multiple possible cases its often cleaner than writng multiple if...else if conditions


// Syntax::

switch (expression)
{
    case value1:
        // code block if expression === value1
        break;

    case value2:
        // code block if expression === value2
        break;

    default:
        // code block if no case matches 
}

*/

let day = "thursday"


switch (day){

    case "Sunday":
        console.log("its a sunday");
        break;
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "wednesday":
        console.log("wednesday");
        break;
    case "thursday":
        console.log("thursday");
        break;
    case "friday":
        console.log("friday");
        break;
    case "saturday":
        console.log("saturday");
        break;
    default:
        console.log("please add correct day");
        break;
}


let day1 = "thursday"


if (day1 == "sunday"){
    console.log("sunday");
}else if (day1 == "monday"){
    console.log("monday");
}else if (day1 == "tuesday"){
    console.log("tuesday");
}else if (day1 == "wednesday"){
    console.log("wednesday");
}else if (day1 == "thursday"){
    console.log("thursday");
}else if (day1 == "friday"){
    console.log("friday");
}else if (day1 == "saturday"){
    console.log("saturday");
}else{
    console.log("please insert correct day");
}