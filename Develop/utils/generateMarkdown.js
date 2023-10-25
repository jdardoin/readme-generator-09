// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=='none') {
    return `![License](https://img.shields.io/badge/${license}-yellow.svg)`;
  }
  return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=='none') {
    return `[License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !=='none') {
    return `##License
    This app is licensed by ${license}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  ## table of contents
  -[Installation](#installation)
  -[Description](#description)
  -[Instructions](#instructions)
  -[Usage_information](#usage_information)
  -[Contribution_guidelines](#contribution_guidelines)
  -[Test_instructions](#test_instructions)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}


  ## Description
  ${data.description}


  ##Instructions
  ${data.instructions}


  ## Usage_information
  ${data.usage}



  ## Contribution_guidelines
  ${data.contribution}



  ## Test_instructions
  ${data.test}

  ## Contact
  If you have any questions here is my email ${data.email}
  You can checkout my work at [${data.github}](https://github.com/${data.github})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

//testt//
