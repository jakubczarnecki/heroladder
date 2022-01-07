import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { Pressable } from "../../Layout"

export const NavWrapper = styled.View`
    flex: 1;
`

export const NavHeader = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        flexGrow: 1,
    },
    horizontal: true,
}))`
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.gray};
`

export const HeaderItem = styled(Pressable)`
    background-color: ${(props) =>
        props.active ? theme.colors.grayLight : theme.colors.white};
    padding: 20px;
    padding-left: 25px;
    padding-right: 25px;
    align-items: center;
    flex: 1;
`

export const NavContent = styled.View`
    flex: 1;
`
