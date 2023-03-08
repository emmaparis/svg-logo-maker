const {prompt} = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");

class Svg{
constructor(){
    this.textElement = ""
    this.shapeElement = ""
}
setTextElement(text,color) {
    this.textElement = `<text x="200" y="150" font size="60" text anchor="middle"></text>`
}
setShapeElement(shape) {
    this.shapeElement = shape.render()
}

}
//Questions for user input 
const questions = [
    {
    type: "input",
    name: "text",
    message: "Enter 3 characters",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a text color keyword of choice",
        },
        
    {
        type: "list",
        name: "shape",
        message: ["Circle", "Square", "Triangle"],
        },
    {
            type: "input",
            name: "shape-color",
            message: "Enter a shape color keyword of choice",
            },
];

