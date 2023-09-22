import "../App.css";
import ResultComponent from "./ResultComponent";
import SummaryComponent from "./SummaryComponent";

function MainComponent() {
  return (
    <div className="MainComponent">
      <ResultComponent />
      <SummaryComponent />
    </div>
  );
}

export default MainComponent;
