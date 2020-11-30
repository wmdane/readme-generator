function generateMarkdown(response) {
  return `
  
  # ${response.title}
  ![badge](https://img.shields.io/badge/License-${response.license}-blue)

  ## Description
    ${response.description}
  
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributors](#Contributors)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)

  ## Installation
    ${response.installation}\n

  ## Usage
    ${response.usage}\n

  ## Contributors
    ${response.contributing}\n
  
  ## Tests
    ${response.tests}\n

  ## License
    This project is licensed under ${response.license} licensing rules.\n

  ## Questions
  [${response.github}](github.com/${response.github})\n
  ${response.email}

  
  `;
}

module.exports = generateMarkdown;
