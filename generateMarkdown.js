function generateMarkdown(response) {
  return `
    
    # ${response.title}
    
    # Description
    ${response.description}
    
    # Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contributors](#Contributors)
    * [Tests](#Tests)
    * [License](#License)
    * [Questions](#Questions)
    
    # Installation
    ${response.installation}\n

    # Usage
    ${response.usage}\n

    # Contributors
    ${response.contributing}\n
    
    # Tests
    ${response.tests}\n

    # License
    ${response.license}\n

    # Questions
    ${response.github}
    ${response.email}

    
    `;
}

module.exports = generateMarkdown;
