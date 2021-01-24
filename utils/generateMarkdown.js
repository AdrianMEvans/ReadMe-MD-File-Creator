const licenseBadgeLinks = require("./Badges");
// Generate markdown for README
function generateMarkdown(response) {
  // set url for image source for the license badge based on user response
response.licenseBadge = licenseBadgeLinks[response.license];
  // return markdown content to create file
  return `# ${response.title}
${response.licenseBadge}

## Description
${response.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [User Story](#story)
* [Instructions](#Instructions)
* [License](#license)
* [Contributing](#contributing)
* [Contact](#contact)


## Installation
${response.installation}

## Usage
${response.usage}

## User Story
${response.user_story}

## Instructions
${response.instructions}

## License
${response.license}

## Contributing
${response.contributors}

## Contact :bellhop_bell:
Developed by ${response.company_name}

Contact | Mobile | E-mail
------------ | ------------- | ------------
${response.contact_name} | ${response.contact_number} | ${response.contact_email}
`;
}

module.exports = generateMarkdown;