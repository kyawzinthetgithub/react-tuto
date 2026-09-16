import Header from './components/Header';

function App() {
  const name = "John Doe";

  return (
    <>
      <Header />
      <div>
        <h1>Hello, {name.toUpperCase()}! I am {25+4} years old.</h1>
      </div>
    </>
  )
}

export default App
