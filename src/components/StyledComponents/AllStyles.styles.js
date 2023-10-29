import styled from "styled-components";
// main login page styles 
export const LoginPageContainer = styled.div`
    max-width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;
    box-sizing: border-box;
    @media (min-width: 640px) {
        max-width: 640px;
        flex-direction: row;
    }
    @media (min-width: 768px) {
        max-width: 768px;
    }

    @media (min-width: 1024px) {
        max-width: 1024px;
    }

    @media (min-width: 1280px) {
        max-width: 1280px;
    }
`



// login input div styles 
export const InputDiv = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;


@media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
}
    border-radius: 0.375rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
export const FlexDiv = styled.div`
    display: flex;
`
export const TopHeadline = styled.h1`
    text-align: center;
    font-size: 1.875rem;
    font-weight: 700;
`
export const LabelOne = styled.label`
    display: block; 
    margin-top: 0.5rem; 
    margin-bottom: 0.5rem;
    font-weight: 600; 
    font-size: 1.125rem;
`
export const LinkTag = styled.a`
    color: #FFA500;
`
export const ParaTag = styled.input`
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  width: 100%;
  outline: none;
  transition: box-shadow 0.3s;

&:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
}
`
export const LinkUnderline = styled(LinkTag)`
    text-decoration: underline;
`
export const LinkUnderlineBold = styled(LinkUnderline)`
    font-weight: bold;
`
export const BlueButton = styled.button`
  background-color: #24a0ed;
  color: white;
  padding: 8px 30px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0ms.5s all ease-out;
  width: 70%;
  border-radius: 5px;
`
