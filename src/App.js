import './App.css'
import StyledButton from './components/StyledButton/StyledButton'
function App () {
  return (
    <div className='App'>
      <StyledButton text='Button' primary />
      <StyledButton text='Button' secondary />
      <StyledButton text='Button' tertiary />
    </div>
  )
}

export default App
