import React, { useState } from "react";
import CalculatorIcon from "../assets/images/icon-calculator.svg";

const MortgageCalculator = ({ setResults }) => {
  const [amount, setAmount] = useState("");

  const [years, setYears] = useState("");
  const [interest, setInterest] = useState("");
  const [type, setType] = useState("");

  const formatToPounds = (number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(number);

  const calculateMonthlyPayment = (amount, termInYears, interestRate) => {
    const monthlyInterestRate = interestRate / 100 / 12;
    return amount * monthlyInterestRate;
  };

  const calculateTotalPayment = (monthlyPayment, totalPayments) =>
    monthlyPayment * totalPayments;

  const calculateMortgage = (amount, term, interest) => {
    const monthlyInterestRate = interest / 1200;
    const exponent = Math.pow(1 + monthlyInterestRate, -term * 12);
    const denominator = 1 - exponent;
    const monthlyPayment = (amount * monthlyInterestRate) / denominator;
    const totalAmountPaid = calculateTotalPayment(monthlyPayment, term * 12);
    return {
      monthlyPayment: formatToPounds(monthlyPayment),
      totalAmountPaid: formatToPounds(totalAmountPaid),
    };
  };

  const calculateInterestOnlyPayment = (amount, termInYears, interestRate) => {
    const monthlyPayment = calculateMonthlyPayment(
      amount,
      termInYears,
      interestRate
    );
    const totalAmountPaid = calculateTotalPayment(
      monthlyPayment,
      termInYears * 12
    );
    return {
      monthlyPayment: formatToPounds(monthlyPayment),
      totalAmountPaid: formatToPounds(totalAmountPaid),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && years && interest && type) {
      const { monthlyPayment, totalAmountPaid } =
        type === "interest"
          ? calculateInterestOnlyPayment(amount, years, interest)
          : calculateMortgage(amount, years, interest);
      setResults({ monthlyPayment, totalAmountPaid });
    }
  };

  const handleClear = () => {
    setAmount("");
    setYears("");
    setInterest("");
    setType("");
    setResults(null);
  };

  return (
    <div className="mortgage-calculator">
      <div className="top-section">
        <h1>Mortgage Calculator</h1>
        <button className="clear-btn" onClick={handleClear}>
          Clear All
        </button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="amount" className="amount-label">
          Mortgage Amount
        </label>
        <div className="form-input-group">
          <span className="symbol">£</span>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="two-col">
          <div className="form-col">
            <label htmlFor="years" className="years-label">
              Loan Term (Years)
            </label>
            <span className="symbol symbol-years">Years</span>
            <input
              type="number"
              name="years"
              id="years"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              required
            />
          </div>
          <div className="form-col">
            <label htmlFor="interest" className="interest-label">
              Interest Rate
            </label>
            <span className="symbol symbol-interest">%</span>
            <input
              type="number"
              name="interest"
              id="interest"
              step="0.01"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
            />
          </div>
        </div>
        <fieldset className="mortgage-type">
          <label className="fieldset-title-label">Mortgage Type</label>
          <div className="form-group">
            <input
              type="radio"
              name="type"
              id="repayment"
              value="repayment"
              checked={type === "repayment"}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <label htmlFor="repayment" className="repayment-label">
              Repayment
            </label>
          </div>
          <div className="form-group">
            <input
              type="radio"
              name="type"
              id="interest-only"
              value="interest"
              checked={type === "interest"}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <label htmlFor="interest-only" className="interest-only-label">
              Interest Only
            </label>
          </div>
        </fieldset>
        <button className="calc-button" type="submit">
          <img src={CalculatorIcon} alt="Calculator Icon" />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
};

export default MortgageCalculator;
