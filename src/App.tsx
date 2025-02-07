import "./App.css";
import { Button, ChildrenButton } from "./components";
import { GlobalProvider } from "./context/global.context";

function App() {
  const handleClick = () => {};
  return (
    <GlobalProvider>
      <Button parentMethod={handleClick}>
        <ChildrenButton>
          <div>My label</div>
        </ChildrenButton>
      </Button>
    </GlobalProvider>
  );
}

export default App;
