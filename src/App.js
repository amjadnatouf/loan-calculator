import LoanCalculator from "./components/LoanCalculator";
import { StyledContainer } from "./components/StyledComponent";
import "./App.css";

const App = () => {
  return (
    <StyledContainer className="container">
      <LoanCalculator />
    </StyledContainer>
  );
};
export default App;
