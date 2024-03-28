import react from "react";
import Button from "./Components/Button.jsx";
import Badge from "./Components/Badge.jsx";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Button size="large" color="blue" disabled={false} onClick={handleClick}>
        Click me
      </Button>

      <Badge className="badge alert" title={"Alert"} color={"red"} />
      <Badge className="badge saved" title={"Saved"} color={"green"} />
    </div>
  );
}

export default App;
