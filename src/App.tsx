import Timer from "./components/Timer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <>
      <Timer />
    </>
    </ThemeProvider>
  )
}

export default App
