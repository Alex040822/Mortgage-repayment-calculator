import React, { useState } from "react";
import IlustrationEmpty from "./assets/images/illustration-empty.svg";

import "./App.css";
import MortgageCalculator from "./components/MortgageCalculator";

const App = () => {
  const [results, setResults] = useState(null);
  return (
    <div className="App">
      <div className="card">
        <MortgageCalculator setResults={setResults} />
        <div className="results">
          {results ? (
            <div className="result-panel" style={{ textAlign: "center" }}>
              <h2 className="result-details-title">Your Results</h2>
              <p>
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                'calculate repayments' again.
              </p>
              <div className="result-card">
                <p>Your monthly Repayments</p>
                <h3 className="result-card-figure">{results.monthlyPayment}</h3>
                <p>Total you'll repay over the term</p>
                <h4 className="result-card-total-paid">
                  {results.totalAmountPaid}
                </h4>
              </div>
            </div>
          ) : (
            <>
              <img src={IlustrationEmpty} alt="Icon Calculator" />
              <h2>Results shown here</h2>
              <p>
                Complete the form and click 'calculate repayments' to see what
                your monthly repayments would be.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
