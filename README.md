# 🧪 Swag Labs Selenium Test Suite

This project is a Selenium-based automation testing framework built for [Swag Labs](https://www.saucedemo.com/), a sample e-commerce application.

It covers essential UI test cases including:
- ✅ Valid and invalid login
- 🛒 Adding/removing items to/from cart
- 📦 Checkout process
- 🚪 Logout functionality
- ❌ Multiple negative test scenarios

---

## 🚀 Getting Started

Follow these steps to run the project on your local machine.

---

### 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- **Google Chrome** browser
- **npm** (comes with Node.js)

---

### 📁 Folder Structure

selenium-swag-labs-tests/
├── helpers/
│ └── driver.js # Sets up and exports the Selenium WebDriver
├── tests/
│ ├── login.test.js # Valid & invalid login tests
│ ├── cart.test.js # Add/remove product tests
│ ├── checkout.test.js # Checkout test scenarios
│ └── logout.test.js # Logout functionality test
├── .gitignore
├── package.json
└── README.md


---

### 📦 Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/your-username/selenium-swag-labs-tests.git
cd selenium-swag-labs-tests
npm install 

▶️ Running the Tests
To run all test files:

npm test

🧪 Running a Specific Test File
You can run one test at a time like this:

npx mocha tests/login.test.js 

 📝 Technologies Used
Selenium WebDriver

Mocha – JavaScript testing framework

Node.js

ChromeDriver

📌 Notes
Tests are written using synchronous syntax with async/await.

The browser used is Google Chrome via ChromeDriver.

Error handling and assertions are done using Node.js assert module.

👨‍💻 Author
Johnson Samuel
QA Engineer | Developer | Automation Enthusiast


