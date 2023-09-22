import "../App.css";

function ResultComponent() {
  return (
    <div className="ResultComponent">
      <h3>Your Result</h3>
      <div className="CircularResultsBorder">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h1>Great</h1>
      <p>You scored higher than 65% of the </p>
      <p>people who have taken these tests.</p>
    </div>
  );
}

export default ResultComponent;
