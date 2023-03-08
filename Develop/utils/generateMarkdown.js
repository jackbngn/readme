// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	let licenseBadge;
	switch (license) {
		case "MIT":
			licenseBadge =
				"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

			break;
		case "Apache 2.0":
			licenseBadge =
				"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

			break;
		case "GPL 3.0":
			licenseBadge =
				"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
			break;
		default:
			licenseBadge = "";
	}
	return licenseBadge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	let licenseLink;
	switch (license) {
		case "MIT":
			licenseLink = "https://opensource.org/licenses/MIT";
			break;
		case "Apache 2.0":
			licenseLink = "https://opensource.org/licenses/Apache-2.0";
			break;
		case "GPL 3.0":
			licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
			break;
		default:
			licenseLink = "";
	}
	return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (!license) {
		return "";
	}
	const licenseBadge = renderLicenseBadge(license);
	const licenseLink = renderLicenseLink(license);
	return `## License
  
  This project is licensed under the ${license} license. Click [here](${licenseLink}) for more information.
  
  ${licenseBadge}`;
}

// Create a function to generate markdown for README
function generateMarkdown(answers) {
	const {
		title,
		description,
		installation,
		usage,
		license,
		contributors,
		test,
		github,
		email,
	} = answers;

	let licenseSection = renderLicenseSection(license);

	return `# ${title}
  ## Description

  ${description}
  
  ## Table of Content
  
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contribution](contribution)<br>
  [Test](test)<br>
  [Questions](questions)<br>
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ${licenseSection}

  
  ## Contributors
  
  ${contributors}

  ## Test
  ${test}

  ## Questions
  If you have any questions, You can find me here... <br>
 [${github}](https://github.com/${github}) <br>
  ${email}
`;
}

module.exports = { generateMarkdown, renderLicenseBadge };
