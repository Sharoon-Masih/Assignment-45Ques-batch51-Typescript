"use strict";
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
//type Carfunc =(manufacturer:string,model:string,optionalfeature?:{color:string,transmission:"manuel" | "automatic"},...otherSpecs:string[])
//let getCarInfo:Carfunc=(manufacturer,model,optionalfeature,otherSpecs)=>
function getCarInfo(manufacturer, model, optionalfeature, ...otherSpecs) {
    let CarObj = {
        manufacturer: manufacturer,
        model: model,
        optionalFeature: optionalfeature,
        otherSpecs: otherSpecs
    };
    return CarObj;
}
//
console.log(getCarInfo("toyota", "corolla", { color: "white", transmission: "automatic" })); //without rest parameter
console.log(getCarInfo("honda", "civic", { color: "black", transmission: "automatic" }, "power Steering", "power window"));
