# 🧪 JSONPlaceholder API Tests

Automated testing project for the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) using Postman, Newman, and GitHub Actions.

The goal is to practice API testing, write automated tests, organize collections, and integrate tests into a CI/CD pipeline.

## 📁 Project Structure

jsonplaceholder-api-tests/<br>
├── .github/workflows/ `GitHub Actions pipeline configuration`<br>
│ └── api-tests.yml<br>
├── collections/ `Postman collections`<br>
│ └── Testing_Collection.postman_collection.json<br>
├── environments/ `Postman environments`<br>
│ └── prod_env.postman_environment.json<br>
├── reports/ `Newman HTML reports with timestamped filenames`<br>
│ └── report_<timestamp>.html<br>
├── run-api-tests.js `Script to run tests with timestamped report names`<br>
├── package.json `NPM scripts and dependencies`<br>
└── README.md `This file`

## 🚀 Running Tests Locally

### Install dependencies

```npm install```

### Run tests with HTML report generation

```npm run api-test```

The report will be saved to the `reports/` folder with the filename pattern: `reports/report_YYYY-MM-DD_HH-mm-ss.html`

## 🤖 Continuous Integration: GitHub Actions

Tests run automatically on:
- Every push to the `main` branch
- Every pull request targeting the `main` branch

After pipeline completion, the HTML report is available as a pipeline artifact named `newman-report`.

## 📦 Technologies Used
- [Postman](https://www.postman.com/)
- [Newman](https://www.npmjs.com/package/newman)
- [Newman Reporter HTMLEXTRA](https://www.npmjs.com/package/newman-reporter-htmlextra)
- [GitHub Actions](https://docs.github.com/en/actions)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## 🛠 Test Coverage
- Positive, negative, and boundary tests
- JSON schema validation
- Structured Postman collection with environment support
- HTML reporting with timestamped filenames
- CI/CD integration via GitHub Actions

## 📋 How It Works
- `run-api-tests.js` script executes Newman test run with dynamic report file naming using the current timestamp.
- GitHub Actions workflow runs tests on code changes and publishes reports as artifacts.
- Reports can be opened in any modern browser for detailed test results and logs.

## 🤝 Contributions
Feel free to open issues or submit pull requests to improve tests, add more scenarios, or enhance CI workflows.

## 📜 License
MIT License © Yehor Diachenko
