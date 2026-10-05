import Statetest from "./components/Statetest";
import { ThemeProvider } from "./context/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <>
      <Statetest />
    </>
    </ThemeProvider>
  )
}

export default App
