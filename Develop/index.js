// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs").promises;
const {
	generateMarkdown,
	renderLicenseBadge,
} = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "Enter the name of this project.",
	},
	{
		type: "input",
		name: "description",
		message: "Enter a description for the project.",
	},
	{
		type: "input",
		name: "installation",
		message: "Please provide any installation instructions.",
	},
	{
		type: "input",
		name: "usage",
		message: "Please provide usage instructions for your projects.",
	},
	{
		type: "list",
		name: "license",
		message: "What license did you use for this project?",
		choices: ["MIT", "Apache 2.0", "GPL 3.0", ""],
	},
	{
		type: "input",
		name: "contributors",
		message: "Enter any contributors.",
	},
	{
		type: "input",
		name: "tests",
		message: "Enter test instructions for your project",
	},
	{
		type: "input",
		name: "github",
		message: "Enter your GitHub username",
	},
	{
		type: "input",
		name: "email",
		message: "Enter your email address",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	const README = generateMarkdown(data);
	fs.writeFile(fileName, README, (err) =>
		err ? console.error(err) : console.log("Success!")
	);
}
// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => {
		answers.liceseBadge = renderLicenseBadge(answers.liceseBadge);
		writeToFile("README.md", answers);
	});
}

// Function call to initialize app
init();
