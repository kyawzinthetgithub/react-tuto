import Header from './components/Header';
import Input from './components/Input';
import TestForm from './components/testForm';

function App() {
  const name = "Kyaw Zin Thet";

  return (
    <>
      <Header username={name} />

      <Input />
      <div>
        <h1>Hello, {name.toUpperCase()}! I am {25+4} years old.</h1>
      </div>

      <TestForm />
    </>
  )
}

export default App
