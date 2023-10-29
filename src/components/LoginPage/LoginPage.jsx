import Lottie from "lottie-react"
import loginAnimation from '../../../public/login-lottie.json'
import LoginInput from "./LoginInput"
import { LoginPageContainer } from "../StyledComponents/AllStyles"

const LoginPage = () => {
    return (
        <LoginPageContainer>
            <div className="w-full md:w-1/2">
                <Lottie animationData={loginAnimation} />
            </div>
            <div className="w-full md:w-1/2">
                <LoginInput />
            </div>
        </LoginPageContainer>
    )
}

export default LoginPage