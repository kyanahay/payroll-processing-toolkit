// Payroll Processing Toolkit 

// Step 2: Array of 4 employee objects
const employees = [
  { name: "Alicia", hourlyRate: 25, hoursWorked: 38 },
  { name: "Brandon", hourlyRate: 18.5, hoursWorked: 45 },
  { name: "Chen", hourlyRate: 32, hoursWorked: 52 },
  { name: "Daria", hourlyRate: 21, hoursWorked: 40 },
];

// Format money to 2 dp
function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

// Step 3: calculateBasePay(rate, hours)
// Returns pay for up to 40 hours only
function calculateBasePay(rate, hours) {
  if (typeof rate !== "number" || typeof hours !== "number") return 0;

  const baseHours = Math.min(hours, 40);
  return rate * baseHours;
}

// Step 4: calculateOvertimePay(rate, hours)
// Returns 1.5x rate for hours over 40
function calculateOvertimePay(rate, hours) {
  if (typeof rate !== "number" || typeof hours !== "number") return 0;

  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}

// Step 5: calculateTaxes(grossPay)
// Deducts 15% tax and returns NET pay (after tax)
function calculateTaxes(grossPay) {
  if (typeof grossPay !== "number") return 0;

  const taxRate = 0.15;
  const netPay = grossPay * (1 - taxRate);
  return netPay;
}

// Step 6: processPayroll(employee)
// Returns an object with: name, basePay, overtimePay, grossPay, netPay
function processPayroll(employee) {
    if (!employee || typeof employee !== "object") {
    return {
      name: "Unknown",
      basePay: 0,
      overtimePay: 0,
      grossPay: 0,
      netPay: 0,
    };
  }

  const name = employee.name ?? "Unnamed";
  const rate = Number(employee.hourlyRate);
  const hours = Number(employee.hoursWorked);

  const basePay = calculateBasePay(rate, hours);
  const overtimePay = calculateOvertimePay(rate, hours);
  const grossPay = basePay + overtimePay;
  const netPay = calculateTaxes(grossPay);

  return {
  name,
  basePay: Number(basePay.toFixed(2)),
  overtimePay: Number(overtimePay.toFixed(2)),
  grossPay: Number(grossPay.toFixed(2)),
  netPay: Number(netPay.toFixed(2)),
  };
}

// Quick function tests 
console.log("=== Function Tests ===");
console.log("Base pay (25/hr, 38h):", formatMoney(calculateBasePay(25, 38))); // 25 x 38 =950.00
console.log("OT pay (18.5/hr, 45h):", formatMoney(calculateOvertimePay(18.5, 45))); // 18.5 x 1.5 x 5 = 138.75
console.log("Net pay after tax (1000):", formatMoney(calculateTaxes(1000))); // 1000 x 0.85 = 850.00

// Step 7: Loop employees and log payroll object 
console.log("\n=== Payroll Report (Table) ===");
const payrollReport = employees.map(processPayroll);
console.table(payrollReport);


