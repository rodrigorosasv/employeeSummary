const Employee= require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeesList=[];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function employeeType(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "Which type of employee do you want to add?",
            name: "employeeType",
            choices: ["Manager","Engineer","Intern"]
        }
    ])
    .then(function(response){
        switch (response.employeeType) {
            case "Manager":
                console.log(`You have selected: Manager/${response.employeeType}`)
                newManager();
                break;
            case "Engineer":
                console.log(`You have selected: Engineer/${response.employeeType}`)
                newEngineer();
                break; 
            case "Intern":
                console.log(`You have selected: Intern/${response.employeeType}`)
                newIntern();
                break;     
            default:
                break;
        }
    })
};

newEmployee();
function newEmployee(){
    var moreEmployee=true;
    inquirer
    .prompt([
        {
        type: "confirm",
        message: "Do you want to add a new employee?",
        name: "addEmployee"
        }
    ]).then(function(response) {
        if(response.addEmployee){
            console.log("Add new one");
            employeeType();

        }else{
            console.log("Dont add new");
            var html=render(employeesList);
            //console.log(html);

            fs.appendFile(outputPath,html,function(err){
                if (err) {
                    return console.log(err);
                  }
                
                  console.log("New team html created!"); 
            });
        }
    });
}

function newManager(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "Writte the Managers name:",
            name: "name"
        },
        {
            type: "input",
            message: "Writte the Managers ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Writte the Managers email:",
            name: "email"
        },
        {
            type: "input",
            message: "Writte the Managers office number:",
            name: "officeNumber"
        }
    ])
    .then(function(response){
        console.log("Managers info stored");
        let manager = new Manager(response.name,response.id,response.email,response.officeNumber);
        employeesList.push(manager);
        //console.log(employeesList);
        newEmployee(); 
    })
}

function newEngineer(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "Writte the Engineers name:",
            name: "name"
        },
        {
            type: "input",
            message: "Writte the Engineers ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Writte the Engineers email:",
            name: "email"
        },
        {
            type: "input",
            message: "Writte the Engineers github account:",
            name: "github"
        }
    ])
    .then(function(response){
        console.log("Engineers info stored");
        let engineer = new Engineer(response.name,response.id,response.email,response.github);
        employeesList.push(engineer);
        //console.log(employeesList);
        newEmployee(); 
    })
}

function newIntern(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "Writte the Interns name:",
            name: "name"
        },
        {
            type: "input",
            message: "Writte the Interns ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Writte the Interns email:",
            name: "email"
        },
        {
            type: "input",
            message: "Writte the Interns school:",
            name: "school"
        }
    ])
    .then(function(response){
        console.log("Interns info stored");
        let intern = new Intern(response.name,response.id,response.email,response.school);
        employeesList.push(intern);
        //console.log(employeesList);
        newEmployee(); 
    })
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
