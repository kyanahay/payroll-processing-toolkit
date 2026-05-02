# Payroll Processing Toolkit

## Description
This project is a simple payroll processing toolkit built using JavaScript. It calculates employee earnings based on hourly rates, including base pay, overtime pay, and taxes, and generates a payroll report.

The goal of this project is to demonstrate working with functions, arrays, objects, and basic business logic.

## Features
- Calculates base pay (up to 40 hours)
- Calculates overtime pay (1.5x rate for hours over 40)
- Applies tax deductions (15%)
- Processes multiple employees
- Generates a structured payroll report
- Formats monetary values for display
- Handles invalid input safely

## Technologies Used
- JavaScript

## Data Structure
The program uses an array of employee objects with the following properties:
- `name`
- `hourlyRate`
- `hoursWorked`

## Key Functions

### `calculateBasePay(rate, hours)`
Calculates pay for up to 40 hours.

### `calculateOvertimePay(rate, hours)`
Calculates overtime pay at 1.5x rate for hours worked beyond 40.

### `calculateTaxes(grossPay)`
Applies a 15% tax and returns net pay.

### `processPayroll(employee)`
Processes a single employee and returns:
- Name  
- Base Pay  
- Overtime Pay  
- Gross Pay  
- Net Pay  

### `formatMoney(amount)`
Formats numbers into currency format with two decimal places.

## How It Works
1. Employee data is stored in an array.  
2. Each employee is processed using payroll functions.  
3. Base pay, overtime pay, gross pay, and net pay are calculated.  
4. Results are displayed in the console using a table format.  

## How to Run
1. Copy the code into a `.js` file (e.g., `payroll.js`)  
2. Run using Node.js: node payroll.js

OR run in a browser console  

## Concepts Demonstrated
- Functions and modular logic  
- Arrays and array methods (`map`)  
- Objects and data handling  
- Conditional logic  
- Number formatting  
- Basic error handling  

## Notes
- Overtime is calculated only for hours above 40  
- Tax rate is fixed at 15%  
- Output is displayed in the console using `console.table()`  
- Designed as a simple payroll simulation  

## Author
Kyana Hay
