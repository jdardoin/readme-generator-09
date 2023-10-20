// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}




  ## table of contents
  -[Installation](#installation)
  -[Description](#description)
  -[Instructions](#instructions)
  -[Usage_information](#usage_information)
  -[Contribution_guidelines](#contribution_guidelines)
  -[Test_instructions](#test_instructions)

  ## Installation
  ${data.installation}


  ## Description
  ${data.description}


  ##Instructions


  ## Usage_information




  ## Contribution_guidelines




  ## Test_instructions



  

`;
}

module.exports = generateMarkdown;
