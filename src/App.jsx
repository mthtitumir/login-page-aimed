// import logo from './assets/react.svg'
import './styles.css'
import './App.css'
// import StyledButton, {AnimatedLogo, FancyButton, SubmitButton} from './components/Button/Button'
import LoginPage from './components/LoginPage/LoginPage'
function App() {

  return (
    <>
      {/* <div className="app">
        <img src={logo} className='logo' alt="" />
        <hr />
        <AnimatedLogo src={logo} />
        <button>Button</button>
        <StyledButton variant='outline'>Outline Styled Button</StyledButton>
        <hr />
        <StyledButton type='submit'>Styled Button</StyledButton>
        <hr />
        <FancyButton as={'a'}>Fancy Button</FancyButton>
        <hr />
        <SubmitButton>Submit</SubmitButton>
      </div> */}
      <LoginPage />
    </>
  )
}

export default App
