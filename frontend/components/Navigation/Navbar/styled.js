import styled from "styled-components/native"

export const NavbarWrapper = styled.View`
    padding: 13px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LogoImg = styled.Image`
    width: ${(props) => props.width}px;
    height: ${(props) => props.width / 2}px;
`

//flex-start -> same as display: block
export const IconsWrapper = styled.View`
    justify-content: center;
`
