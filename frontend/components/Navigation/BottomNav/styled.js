import styled from "styled-components/native"
import { FontAwesome5 } from "@expo/vector-icons"

export const BottomNavWrapper = styled.View`
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const IconsWrapper = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const IconWrapper = styled.Pressable`
    width: 80px;
    height: 100%;
    padding: 12px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${(props) => {
        return props.current ? "#ffffff30" : "transparent"
    }}; ;
`
