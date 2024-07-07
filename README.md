# String Calculator (TDD)

This project implements a String Calculator following the principles of Test-Driven Development (TDD). The calculator can add numbers provided in a string format, supports different delimiters, and handles various edge cases such as negative numbers and large numbers.

## Features

- Add numbers in a string format.
- Handles new lines as delimiters.
- Support for custom delimiters.
- Throws exceptions for negative numbers, listing all negative numbers in the exception message.

## Folder Structure

```sh
typescript-string-kata-tdd/
├── node_modules/
├── src/
│ ├── stringCalculator.ts
│ └── tests/
│    └── stringCalculator.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository

```sh
git clone https://github.com/jerrycode06/typescript-string-kata-tdd.git
cd string-calculator
```

2. Install Dependencies
```sh
npm install
```

### Running the code
To run this code and its tests, follow these steps:

1. Run the tests:
```sh
npm test
```
This command runs the test suite using Jest, verifying that all implemented features and edge cases are handled correctly.

### Example Usage
```typescript
import { StringCalculator } from './stringCalculator';

const calculator = new StringCalculator();
console.log(calculator.add('1,2')); // Outputs: 3
console.log(calculator.add('//;\n1;2')); // Outputs: 3
console.log(calculator.add('1\n2,3')); // Outputs: 6
try {
    console.log(calculator.add('1,-2,3'));
} catch (e) {
    console.error(e.message); // Outputs: Negatives not allowed: -2
}
```