import reactLogo from "./assets/react.svg";
import "./app.css";
import { Button } from "./components";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-300">Hello, world!</h1>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} alt="React logo" />
      </a>
      <Button variant="outline">Click me</Button>
    </div>
  );
};

export default App;
