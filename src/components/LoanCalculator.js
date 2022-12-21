import { useState } from "react";
import "rc-slider/assets/index.css";
import {
  StyledHeader,
  StyledNotification,
  StyledSlider,
  StyledButton,
} from "./StyledComponent";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanPeriod, setLoanPeriod] = useState(10);

  const yearlyInterestRate = 0.099;
  const monthlyInterestRate = yearlyInterestRate / 12; // 0.00825
  const numberOfMonths = loanPeriod * 12;
  const monthlyCost =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

  return (
    <div>
      <StyledHeader className="header">
        <div className="title">
          <strong>LåneKalkyl</strong>
        </div>
        <StyledNotification className="notification">
          Exampel på månadskostnad
          <br /> {Math.round(monthlyCost)} SEK / mån
        </StyledNotification>
      </StyledHeader>

      <form>
        <label>Lånebelopp: </label>
        {loanAmount.toLocaleString("sv-SE")} kr
        <StyledSlider
          className="slider"
          onChange={(e) => setLoanAmount(e)}
          min={20000}
          max={200000}
          step={10000}
          value={loanAmount}
          name="amount"
        />
      </form>
      <form>
        <label>Lönetid: </label>
        {loanPeriod.toLocaleString("sv-SE")} år
        <StyledSlider
          className="slider"
          onChange={(e) => setLoanPeriod(e)}
          min={2}
          max={10}
          step={1}
          value={loanPeriod}
          name="period"
        />
      </form>

      <StyledButton
        className="btn"
        onClick={() =>
          console.log(
            `/loan-application/?amount=${loanAmount}&months=${numberOfMonths}`
          )
        }
      >
        Till ansökan
      </StyledButton>
    </div>
  );
};

export default LoanCalculator;
