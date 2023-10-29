import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import BlueButton, { InputDiv, LabelOne, LinkTag, LinkUnderline, LinkUnderlineBold, ParaTag, TopHeadline, FlexDiv } from "../StyledComponents/AllStyles";

const LoginInput = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }

    return (
        <InputDiv className="">
            <TopHeadline>Login</TopHeadline>
            <div className="my-5">
                <form className="flex flex-col gap-3">
                    <div>
                        <LabelOne>Login ID</LabelOne>
                        <ParaTag type="text" placeholder="Enter Login ID" />
                    </div>
                    <div>
                        <LabelOne>Password</LabelOne>
                        <FlexDiv className="flex justify-between items-center">
                            <ParaTag type={show ? "text" : "password"} placeholder="Enter Password" />
                            <p onClick={handleShow} className="-ml-14 pr-3 cursor-pointer">{show ? <AiFillEye title="Hide password" className="text-2xl"></AiFillEye> : <AiFillEyeInvisible title="Show password" className="text-2xl"></AiFillEyeInvisible>}</p>
                        </FlexDiv>
                    </div>
                    <FlexDiv className="justify-between">
                        <FlexDiv className="gap-2">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </FlexDiv>
                        <div>
                            <LinkTag>Change Password</LinkTag>
                        </div>
                    </FlexDiv>
                    <FlexDiv className="gap-2">
                        <input type="checkbox" />
                        <label>Agree to <LinkUnderline>Terms & Conditions</LinkUnderline></label>
                    </FlexDiv>
                    <div className="text-center">
                        <BlueButton>Login</BlueButton>
                        <p className="mt-5">Don&apos;t Have an account? <LinkUnderlineBold>Register Here</LinkUnderlineBold></p>
                    </div>
                </form>
            </div>
        </InputDiv>
    )
}

export default LoginInput