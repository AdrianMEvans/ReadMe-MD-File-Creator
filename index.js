const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./utils/generateMarkdown");
const FILE_PATH = './newREADME.md'
// fs.writeFile set to use promises
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions to prompt user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message:  "Provide a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message:  "Describe the required steps to install your application?"
    },
    {
        type: "input",
        name: "usage",
        message:  "How do you use your application?"
    },
    {
        type: "input",
        name: "user_story",
        message:  "What is the User Criteria?"
    },
    {
        type: "input",
        name: "instructions",
        message:  "How would a user use your application?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What type of license would you like?",
        choices: [
            "Creative Commons",
            "GNU GPLv3",
            "MIT",
            "None"
        ]
    },
    {
        type: "list",
        name: "contributors",
        message: "Would you like other developers to contribute to your project?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "input",
        name: "company_name",
        message:  "What is your company name?"
    },
    {
        type: "input",
        name: "contact_name",
        message:  "Who is the contact at your company?"
    },
    {
        type: "input",
        name: "contact_number",
        message:  "What is the contact phone number?"
    },
    {
        type: "input",
        name: "contact_email",
        message:  "What is the contact email?"
    },

]
// function to start App and prompt user with questions that returns an answers object
const startApp = () => {
    return inquirer
        .prompt(questions);
}
// function to write README file
const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}
// function to initialize program, ask questions, generate responses and create md content
const init = async () => {
    try {
        const answers = await startApp();
        const fileContent = generateMd(answers);
        await writeToFile(FILE_PATH, fileContent);
        console.log("Your New Readme has been created as NewReadMe.md");

    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}
init();