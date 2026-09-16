import Header from './components/Header';

function App() {
  const name = "Kyaw Zin Thet";

  return (
    <>
      <Header username={name} />
      <div>
        <h1>Hello, {name.toUpperCase()}! I am {25+4} years old.</h1>
      </div>
    </>
  )
}

export default App
