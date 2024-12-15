## This repository was created to fulfill the case study tasks from JetBrains team.  

## How is the repository organized:  
1. Automated test cases using JavaScript with Playwright framework.  
2. This `Readme.md` with the repository info.  
3. Files for the task 1: `TOC Test plan.md`, `TOC Checklist.md`, `TOC Bug report.md`  

### Automated test cases description  

#### Playwright configuration  
File: `playwright.congfig.js`  

#### Playwright tests (.test.js)  
The Playwright tests are located in: `tests`.

### Page Object Model

This implementation uses the Page Object Model testing pattern.

`page-name.js` - exports the Page Object class that is used to perform actions on the page being tested.

### How to use:

To clone and run this project, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash

# Clone this repository

git clone https://github.com/krisstallino/JB-interview-task.git

# Go into the project root repository

cd <directory path>

# Install Dependencies and Playwright

npm install

# Install Playwright Browsers

npx playwright install

# Open the Playwright test runner to run tests in headless mode on Chromium

npm test

```